/** Retorna o link wa.me se o número for válido (10 a 15 dígitos, com DDI), senão null. */
export function buildWhatsAppLink(phone: string, message: string): string | null {
  const digits = (phone || "").replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
