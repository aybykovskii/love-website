export const colors = {
  primary: "#000",
};
export const breakpoints = {
  maxWidthXs: "576px",
  maxWidthSm: "768px ",
  maxWidthMd: "992px",
  maxWidthLg: "1200px",

  minWidthSm: "577px ",
  minWidthMd: "767px",
  minWidthLg: "993px",
};
export const transition = ".3s";

export const fonts = {
  primary: '"Quicksand", sans-serif',
  secondary: '"Roboto", sans-serif',
};

export function noop() {}

export function noopPromise() {
  return new Promise(() => 0);
}
