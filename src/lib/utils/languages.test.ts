import { describe, it, expect } from "vitest";
import languages from "./languages";

describe("languages", () => {
  it("should be defined", () => {
    expect(languages).toBeDefined();
  });

  it("should have the correct length", () => {
    expect(languages.length).toBe(2);
  });

  it("should contain the expected language objects", () => {
    expect(languages).toEqual([
      { value: "id", label: "🇮🇩 Bahasa Indonesia" },
      { value: "en", label: "🇬🇧 English" },
    ]);
  });

  it("each language object should have value and label properties", () => {
    languages.forEach((language) => {
      expect(language).toHaveProperty("value");
      expect(language).toHaveProperty("label");
    });
  });
});
