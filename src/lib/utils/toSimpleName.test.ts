import { describe, it, expect } from 'vitest';
import toSimpleName from './toSimpleName';

describe('toSimpleName', () => {
  it('should return an empty string for empty input', () => {
    expect(toSimpleName('')).toBe('');
  });

  it('should return an empty string for undefined input', () => {
    expect(toSimpleName(undefined as unknown as string)).toBe('');
  });

  it('should return the first two letters of a single word name', () => {
    expect(toSimpleName('John')).toBe('JO');
  });

  it('should return the initials of the first two words of a multi-word name', () => {
    expect(toSimpleName('John Doe')).toBe('JD');
  });

  it('should handle names with more than two words correctly', () => {
    expect(toSimpleName('John Michael Doe')).toBe('JM');
  });

  it('should handle names with extra spaces correctly', () => {
    expect(toSimpleName('  John   Doe  ')).toBe('JD');
  });
});