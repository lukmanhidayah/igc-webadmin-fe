/**
 * Checks if a value is null, undefined, empty string, or consists only of whitespace characters.
 *
 * @param val - The value to check.
 * @returns `true` if the value is null, undefined, empty string, or consists only of whitespace characters, `false` otherwise.
 */
const isNullOrEmpty = (val: any) => {
  return (
    val === "" ||
    val === undefined ||
    val === "undefined" ||
    val === " " ||
    val === null ||
    val === "null"
  );
};

export default isNullOrEmpty;
