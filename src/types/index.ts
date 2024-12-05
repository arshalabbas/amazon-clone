export interface Grid {
  image: string;
  title: string;
}

// interface SingleBody {
//   image: string;
// }

// interface GridBody {
//   items: Grid[];
// }

export type CardElement =
  | { type: "single"; heading: string; footer: string; body: string }
  | { type: "grid"; heading: string; footer: string; body: Grid[] };

export interface WrappedCard {
  title: string;
  price: string;
  oldPrice: string;
  fraction: string;
  imgURL: string;
  percentage: string;
}

export interface MobileGridCard {
  title: string;
  body: { image: string; label: string }[];
  footer: string;
}

export interface NoLabelCard {
  title: string;
  body: string[];
  footer: string;
}
