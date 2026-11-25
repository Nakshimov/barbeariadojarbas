import { describe, expect, it } from "vitest";
import { buildWhatsAppLink } from "@/lib/whatsapp";

describe("buildWhatsAppLink", () => {
  it("não gera link com número vazio", () => {
    expect(buildWhatsAppLink("", "Oi")).toBeNull();
  });
  it("gera link wa.me com número válido", () => {
    expect(buildWhatsAppLink("+55 (31) 99999-0000", "Oi")).toBe("https://wa.me/5531999990000?text=Oi");
  });
});
