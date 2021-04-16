import { Color, Range, SizeRange } from "./utilityTypes";

export interface PassivePro {
  id: string;
  brand: string;
  series: string;
  displayName: string;
  color: Color;
  size: number;
  range: Range;
}

export interface PassiveProSet {
  id: string;
  brand: string;
  series: string;
  displayName: string;
  color: Color;
  sizeRange: SizeRange;
  contents: PassiveProSetContents;
}

export type PassiveProSetContents = Array<PassivePro> | Array<string>;
