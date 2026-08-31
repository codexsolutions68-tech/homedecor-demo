"use client";

import { useEffect, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2, Plus, RotateCcw, ArrowLeft } from "lucide-react";
import {
  ICONS,
  AVAILABLE_IMAGES,
  type Producto,
  type IconKey,
} from "@/lib/productos";
import { getProductos, saveProductos, resetProductos } from "@/lib/catalogStore";

const iconKeys = Object.keys(ICONS) as IconKey[];

function emptyDraft(): Producto {
  return {
    id: crypto.randomUUID(),
    nombre: "",
    resumen: "",
    img: AVAILABLE_IMAGES[0],
    icon: "Sparkles",
  };
}

export default function AdminPage() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<Producto>(emptyDraft());
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  useEffect(() => {
    setProductos(getProductos());
    setLoaded(true);
  }, []);

  function openCreate() {
    setDraft(emptyDraft());
    setEditingId(null);
    setFormOpen(true);
  }

  function openEdit(p: Producto) {
    setDraft({ ...p });
    setEditingId(p.id);
    setFormOpen(true);
  }

  function closeForm() {
    setFormOpen(false);
    setEditingId(null);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!draft.nombre.trim() || !draft.resumen.trim()) return;

    const next = editingId
      ? productos.map((p) => (p.id === editingId ? draft : p))
      : [...productos, draft];

    setProductos(next);
    saveProductos(next);
    closeForm();
  }

  function handleDelete(id: string) {
    const next = productos.filter((p) => p.id !== id);
    setProductos(next);
    saveProductos(next);
    setConfirmDeleteId(null);
  }

  function handleRestore() {
    resetProductos();
    setProductos(getProductos());
    setConfirmDeleteId(null);
    closeForm();
  }

  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-line bg-white">
        <div className="mx-auto max-w-5xl px-5 md:px-8 py-5 flex items-center justify-between">
          <div>
            <p className="text-orange font-bold tracking-[0.2em] text-xs uppercase mb-1">
              Panel admin
            </p>
            <h1 className="font-display text-2xl font-semibold text-ink">
              Catálogo de productos
            </h1>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft hover:text-orange transition-colors"
          >
            <ArrowLeft size={16} />
            Ver sitio
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 md:px-8 py-4">
        <div className="rounded-xl border border-orange/30 bg-orange/5 text-ink-soft text-sm px-4 py-3">
          <strong className="text-ink">Modo demo:</strong> los cambios se
          guardan solo en este navegador (localStorage), sin backend ni
          login todavía. Para producción real esto se conecta a una base de
          datos.
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-5 md:px-8 pb-24">
        <div className="flex items-center justify-between gap-3 mb-6">
          <p className="text-stone text-sm">
            {loaded ? `${productos.length} producto(s)` : "Cargando…"}
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={handleRestore}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone hover:text-ink transition-colors"
            >
              <RotateCcw size={15} />
              Restaurar original
            </button>
            <button
              onClick={openCreate}
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-deep text-white text-sm font-bold px-4 py-2.5 rounded-full transition-colors"
            >
              <Plus size={16} />
              Nuevo producto
            </button>
          </div>
        </div>

        {formOpen && (
          <form
            onSubmit={handleSubmit}
            className="mb-8 rounded-2xl border border-line bg-white p-6 grid md:grid-cols-2 gap-5"
          >
            <h2 className="md:col-span-2 font-display text-lg font-semibold text-ink">
              {editingId ? "Editar producto" : "Nuevo producto"}
            </h2>

            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-semibold text-ink-soft">Nombre</span>
              <input
                required
                value={draft.nombre}
                onChange={(e) => setDraft({ ...draft, nombre: e.target.value })}
                placeholder="Roller Thermic"
                className="border border-line rounded-lg px-3 py-2 outline-none focus:border-orange"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-semibold text-ink-soft">Ícono</span>
              <select
                value={draft.icon}
                onChange={(e) =>
                  setDraft({ ...draft, icon: e.target.value as IconKey })
                }
                className="border border-line rounded-lg px-3 py-2 outline-none focus:border-orange bg-white"
              >
                {iconKeys.map((k) => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>
            </label>

            <label className="md:col-span-2 flex flex-col gap-1.5 text-sm">
              <span className="font-semibold text-ink-soft">
                Resumen (una frase corta)
              </span>
              <input
                required
                value={draft.resumen}
                onChange={(e) => setDraft({ ...draft, resumen: e.target.value })}
                placeholder="Aislamiento térmico para ventanas grandes."
                className="border border-line rounded-lg px-3 py-2 outline-none focus:border-orange"
              />
            </label>

            <label className="md:col-span-2 flex flex-col gap-1.5 text-sm">
              <span className="font-semibold text-ink-soft">
                Foto (de las imágenes ya disponibles)
              </span>
              <select
                value={draft.img}
                onChange={(e) => setDraft({ ...draft, img: e.target.value })}
                className="border border-line rounded-lg px-3 py-2 outline-none focus:border-orange bg-white"
              >
                {AVAILABLE_IMAGES.map((src) => (
                  <option key={src} value={src}>
                    {src}
                  </option>
                ))}
              </select>
            </label>

            <div className="md:col-span-2 flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-line shrink-0">
                <Image src={draft.img} alt="preview" fill sizes="80px" className="object-cover" />
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="bg-ink hover:bg-ink/90 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={closeForm}
                  className="text-sm font-semibold text-stone hover:text-ink px-2"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        )}

        <div className="grid gap-3">
          {productos.map((p) => {
            const Icon = ICONS[p.icon] ?? ICONS.Sparkles;
            return (
              <div
                key={p.id}
                className="flex items-center gap-4 rounded-xl border border-line bg-white p-3"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                  <Image src={p.img} alt={p.nombre} fill sizes="64px" className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <Icon size={15} className="text-orange shrink-0" />
                    <h3 className="font-semibold text-ink truncate">{p.nombre}</h3>
                  </div>
                  <p className="text-stone text-sm truncate">{p.resumen}</p>
                </div>

                {confirmDeleteId === p.id ? (
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-sm text-stone">¿Eliminar?</span>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="text-sm font-bold text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-full transition-colors"
                    >
                      Sí
                    </button>
                    <button
                      onClick={() => setConfirmDeleteId(null)}
                      className="text-sm font-semibold text-stone hover:text-ink px-2"
                    >
                      No
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => openEdit(p)}
                      aria-label={`Editar ${p.nombre}`}
                      className="p-2 rounded-full text-ink-soft hover:text-orange hover:bg-orange/10 transition-colors"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => setConfirmDeleteId(p.id)}
                      aria-label={`Eliminar ${p.nombre}`}
                      className="p-2 rounded-full text-ink-soft hover:text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                )}
              </div>
            );
          })}

          {loaded && productos.length === 0 && (
            <p className="text-stone text-sm py-10 text-center">
              No hay productos. Agrega el primero con &ldquo;Nuevo
              producto&rdquo;.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
