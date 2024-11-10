import { describe, it, expect } from "vitest";
import tailwindMerge from "./tailwindMerge";

describe("tailwindMerge", () => {
  it("should return an empty string when no classes are provided", () => {
    expect(tailwindMerge()).toBe("");
  });

  it("should return the single class when one class is provided", () => {
    expect(tailwindMerge("bg-red-500")).toBe("bg-red-500");
  });

  it("should return the combined classes when multiple classes are provided", () => {
    expect(tailwindMerge("bg-red-500", "text-white")).toBe(
      "bg-red-500 text-white"
    );
  });

  it("should merge conflicting Tailwind classes correctly", () => {
    expect(tailwindMerge("bg-red-500", "bg-blue-500")).toBe("bg-blue-500");
  });

  it("should handle conditional classes correctly", () => {
    expect(
      // eslint-disable-next-line no-constant-binary-expression
      tailwindMerge("bg-red-500", false && "bg-blue-500", "text-white")
    ).toBe("bg-red-500 text-white");
  });
});
