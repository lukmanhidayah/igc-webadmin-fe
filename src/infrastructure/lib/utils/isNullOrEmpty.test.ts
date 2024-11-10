import { describe, it, expect } from "vitest";
import isNullOrEmpty from "./isNullOrEmpty";

describe("isNullOrEmpty", () => {
  it("should return true for null", () => {
    expect(isNullOrEmpty(null)).toBe(true);
  });

  it("should return true for undefined", () => {
    expect(isNullOrEmpty(undefined)).toBe(true);
  });

  it("should return true for empty string", () => {
    expect(isNullOrEmpty("")).toBe(true);
  });

  it('should return true for string "undefined"', () => {
    expect(isNullOrEmpty("undefined")).toBe(true);
  });

  it('should return true for string "null"', () => {
    expect(isNullOrEmpty("null")).toBe(true);
  });

  it("should return true for string with only whitespace", () => {
    expect(isNullOrEmpty(" ")).toBe(true);
  });

  it("should return false for non-empty string", () => {
    expect(isNullOrEmpty("hello")).toBe(false);
  });

  it("should return false for number", () => {
    expect(isNullOrEmpty(123)).toBe(false);
  });

  it("should return false for object", () => {
    expect(isNullOrEmpty({})).toBe(false);
  });

  it("should return false for array", () => {
    expect(isNullOrEmpty([])).toBe(false);
  });
});
