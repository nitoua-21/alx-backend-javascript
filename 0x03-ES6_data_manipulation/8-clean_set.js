export default function cleanSet(set, startString) {
  // If startString is empty or not a string, return an empty string
  if (!set || !(set instanceof Set) || !startString || typeof startString !== 'string') {
    return '';
  }

  // Filter and map the set values
  const filteredValues = Array.from(set)
    .filter(
      (value) => typeof value === 'string' && value.startsWith(startString)
    )
    .map((value) => value.slice(startString.length));

  // Join the filtered values with a hyphen
  return filteredValues.join('-');
}
