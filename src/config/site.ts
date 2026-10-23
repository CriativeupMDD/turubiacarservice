// Dados comerciais centralizados da Turubia Car Service.
// Preencha WHATSAPP_NUMBER (formato: 5541999999999) e GOOGLE_REVIEW_URL quando disponíveis.

export const SITE = {
  name: "Turubia Car Service",
  url: "https://www.turubiacarservice.com.br",
  whatsappNumber: "5541984486537",
  googleReviewUrl: "https://share.google/hvvmlqgGRka2FyzIW",
  address: {
    street: "Rua Bom Jesus de Iguape, 2438",
    district: "Boqueirão",
    city: "Curitiba",
    state: "PR",
    country: "BR",
  },
  hours: [
    { days: "Segunda a sexta-feira", time: "08:00 às 18:00" },
    { days: "Sábado", time: "Fechado" },
    { days: "Domingo", time: "Fechado" },
  ],
  mapsRouteUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+Bom+Jesus+de+Iguape+2438+Boqueirao+Curitiba+PR",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Rua+Bom+Jesus+de+Iguape+2438+Boqueirao+Curitiba+PR&output=embed",
  social: [] as { label: string; url: string }[], // ex: { label: "Instagram", url: "https://instagram.com/..." }
};

export const MSG_GERAL =
  "Olá! Vim pelo site da Turubia Car Service e gostaria de solicitar um orçamento.";
export const msgServico = (s: string) =>
  `Olá! Gostaria de saber mais sobre ${s} e solicitar um orçamento.`;

/** Retorna o link do WhatsApp, ou null enquanto o número não estiver configurado. */
export function whatsappLink(message: string = MSG_GERAL): string | null {
  const n = SITE.whatsappNumber.replace(/\D/g, "");
  if (!n) return null;
  return `https://wa.me/${n}?text=${encodeURIComponent(message)}`;
}
