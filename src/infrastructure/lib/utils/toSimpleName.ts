/**
 * Returns the simple name initials from a given full name.
 * If the name is empty or undefined, an empty string is returned.
 * If the name consists of multiple words, the initials of the first two words are returned.
 * Otherwise, the initials of the first word are returned.
 *
 * @param name - The full name to extract the initials from.
 * @returns The initials of the name.
 */
const toSimpleName = (name: string) => {
  if (!name) return "";

  const tempName = name.trim().split(" ").filter(Boolean);
  if (tempName.length > 1) {
    return (
      tempName[0].substring(0, 1) +
      tempName[1].substring(0, 1)
    ).toUpperCase();
  }
  return tempName[0].substring(0, 2).toUpperCase();
};

export default toSimpleName;