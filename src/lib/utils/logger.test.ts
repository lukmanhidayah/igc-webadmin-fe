import { describe, it, expect, vi } from "vitest";
import logger from "./logger";

describe("logger", () => {
  it('should log messages when VITE_BUILD_MODE is not "prod"', () => {
    // Mock console.log
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    // Mock environment variable
    vi.stubEnv("VITE_BUILD_MODE", "dev");

    // Call logger
    logger("test message");

    // Assert console.log was called
    expect(logSpy).toHaveBeenCalledWith("test message");

    // Restore console.log
    logSpy.mockRestore();
  });

  it('should not log messages when VITE_BUILD_MODE is "prod"', () => {
    // Mock console.log
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    // Mock environment variable
    vi.stubEnv("VITE_BUILD_MODE", "prod");

    // Call logger
    logger("test message");

    // Assert console.log was not called
    expect(logSpy).not.toHaveBeenCalled();

    // Restore console.log
    logSpy.mockRestore();
  });
});
