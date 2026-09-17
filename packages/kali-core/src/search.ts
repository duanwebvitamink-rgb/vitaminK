export function normalizeVi(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/đ/g, "d")
    .trim();
}

export function matchesQuery(haystack: string, query: string): boolean {
  const q = normalizeVi(query);
  if (!q) {
    return true;
  }
  return normalizeVi(haystack).includes(q);
}

export function searchByText<T>(
  items: T[],
  query: string,
  fields: (item: T) => string[],
): T[] {
  return items.filter((item) => fields(item).some((field) => matchesQuery(field, query)));
}
