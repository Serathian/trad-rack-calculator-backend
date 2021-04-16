export type Color =
  | "red"
  | "yellow"
  | "blue"
  | "grey"
  | "purple"
  | "green"
  | "varied"
  | "other";

export interface Range {
  min: number;
  max: number;
}
export interface SizeRange {
  min: number;
  max: number;
}

export interface Cracksizes {
  finger: CrackSize;
  hand: CrackSize;
  fist: CrackSize;
  offWidth: CrackSize;
}
export type CrackSize = {
  min: number;
  max: number;
};
export interface Rack {
  active: {
    sets?: Array<string>;
    singles?: Array<string>;
  };
  passive: {
    sets?: Array<string>;
    singles?: Array<string>;
  };
}
