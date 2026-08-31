import { defaultProductos, type Producto } from "./productos";

const KEY = "homedecor_productos_v1";
const EVENT = "homedecor-productos-updated";

export function getProductos(): Producto[] {
  if (typeof window === "undefined") return defaultProductos;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return defaultProductos;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) return defaultProductos;
    return parsed as Producto[];
  } catch {
    return defaultProductos;
  }
}

export function saveProductos(productos: Producto[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(productos));
  window.dispatchEvent(new Event(EVENT));
}

export function resetProductos() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
  window.dispatchEvent(new Event(EVENT));
}

export function subscribeProductos(cb: () => void) {
  window.addEventListener("storage", cb);
  window.addEventListener(EVENT, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(EVENT, cb);
  };
}
