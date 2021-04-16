import { Color, Range, SizeRange } from "./utilityTypes";

export interface ActivePro {
  id: string;
  brand: string;
  series: string;
  displayName: string;
  color: Color;
  size: number;
  range: Range;
}

export interface ActiveProSet {
  id: string;
  brand: string;
  series: string;
  displayName: string;
  color: Color;
  sizeRange: SizeRange;
  contents: ActiveProSetContents;
}

export type ActiveProSetContents = Array<ActivePro> | Array<string>;
