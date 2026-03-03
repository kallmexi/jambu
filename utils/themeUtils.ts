// utils/themeUtils.ts
export const isRamadanPeriod = (): boolean => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // Jan = 1
  const day = now.getDate();

  // Ramadan 2026: 19 Februari - 19 Maret
  if (year === 2026) {
    if (month === 2 && day >= 19) return true;
    if (month === 3 && day <= 19) return true;
  }
  return false;
};