export const Currencies = [
  { value: "INR", label: "₹ Rupee", locale: "en-IN" },
  { value: "USD", label: "$ Dollar", locale: "en-US" },
  { value: "EUR", label: "€ Euro", locale: "en-EU" },
  { value: "GBP", label: "£ Pound", locale: "en-GB" },
  { value: "JPY", label: "¥ Yen", locale: "ja-JP" },
];
export type Currency = (typeof Currencies)[0];
