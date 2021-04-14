import { Color, Range } from './utilityTypes'

export interface ActivePro {
  id: string
  brand: string
  series: string
  displayname: string
  color: Color
  size: number
  range: Range
}
