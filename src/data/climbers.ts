import { Climber } from "../types/climber";

const ClimberData: Array<Climber> = [
  {
    id: "1234",
    name: "Jake",
    rack: {
      active: {
        sets: [],
        singles: [
          "BD-C4-03",
          "BD-C4-04",
          "BD-C4-05",
          "BD-C4-075",
          "BD-C4-1",
          "BD-C4-2",
          "BD-C4-3",
          "BD-C4-4",
          "BD-C4-5",
        ],
      },
      passive: {
        sets: ["BD-SSP-113"],
        singles: [],
      },
    },
  },
];

export default ClimberData;
