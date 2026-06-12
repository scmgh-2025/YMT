declare const __BASE_URL__: string;

export const getAssetUrl = (path: string): string => {
  const base = (import.meta as unknown as { env: Record<string, string> }).env?.BASE_URL || (typeof (window as any).__BASE_URL__ !== 'undefined' ? (window as any).__BASE_URL__ : '/');
  const cleanPath = path.replace(/^\/+/, '');
  return base + cleanPath;
};
