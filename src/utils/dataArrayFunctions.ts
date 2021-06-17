/* eslint-disable */

import { ActivePro } from "../types/ActivePro";

type data = { size: number; count: number };

export const DataArray = (data: Array<ActivePro>) => {
  let dataArray: Array<data> = [{ size: 0, count: 0 }];

  data.forEach((peiceOfPro) => {
    for (let i = peiceOfPro.range.min; i < peiceOfPro.range.max; i++) {
      const indexOfSize: number = dataArray.findIndex(
        (data: data) => data.size === i
      );
      if (indexOfSize === -1) {
        const newData = { size: i, count: 1 };
        dataArray = dataArray.concat(newData);
      } else {
        dataArray[indexOfSize].count++;
      }
    }
  });
  return dataArray;
};
