export const site = {
  name: "Home Decor",
  tagline: "Decoración que va con tu estilo",
  phoneDisplay: "961 713 940",
  phoneWhatsApp: "51961713940",
  email: "ventas@homedecor.pe",
  address: "Psj. 7 Urb. José Carlos Mariategui Mz. C Lte. 11, Los Olivos, Lima",
  facebook: "https://www.facebook.com/HomeDecorLima/",
  instagram: "https://www.instagram.com/homedecor.peru/",
  url: "https://homedecor.pe",
};

export function waLink(message: string) {
  return `https://wa.me/${site.phoneWhatsApp}?text=${encodeURIComponent(message)}`;
}
