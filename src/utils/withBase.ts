export function withBase(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;

  if (!normalizedBase) {
    return path;
  }

  return `${normalizedBase}${path}`;
}
