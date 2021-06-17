/* eslint-disable */
import { IResolvers } from "graphql-tools";
import PassiveProData from "./data/passivePro";
import ActiveProData from "./data/activePro";
import ClimberData from "./data/climbers";
import PassiveProSetsData from "./data/passiveProSets";
import ActiveProSetsData from "./data/activeProSets";
import { PassivePro, PassiveProSet } from "./types/PassivePro";
import { ActivePro, ActiveProSet } from "./types/ActivePro";
import { DataArray } from "./utils/dataArrayFunctions";

const resolvers: IResolvers = {
  Query: {
    helloWorld: () => "Hello world from Apollo Server",
    allPassivePro: () => PassiveProData,
    allPassiveProSets: () => PassiveProSetsData,
    allActivePro: () => ActiveProData,
    allActiveProSets: () => ActiveProSetsData,
    allClimbers: () => ClimberData,
    dataArray: () =>
      DataArray([
        {
          id: "BD-SC-01",
          brand: "Black Diamond",
          series: "Stoppers",
          displayName: "Black Diamond Stopper #1",
          color: "red",
          size: 1,
          range: {
            min: 43,
            max: 91,
          },
        },
        {
          id: "BD-SC-02",
          brand: "Black Diamond",
          series: "Stoppers",
          displayName: "Black Diamond Stopper #2",
          color: "yellow",
          size: 2,
          range: {
            min: 48,
            max: 99,
          },
        },
        {
          id: "BD-SC-03",
          brand: "Black Diamond",
          series: "Stoppers",
          displayName: "Black Diamond Stopper #3",
          color: "blue",
          size: 3,
          range: {
            min: 61,
            max: 114,
          },
        },
        {
          id: "BD-SC-04",
          brand: "Black Diamond",
          series: "Stoppers",
          displayName: "Black Diamond Stopper #4",
          color: "grey",
          size: 4,
          range: {
            min: 69,
            max: 124,
          },
        },
        {
          id: "BD-SC-05",
          brand: "Black Diamond",
          series: "Stoppers",
          displayName: "Black Diamond Stopper #5",
          color: "purple",
          size: 5,
          range: {
            min: 84,
            max: 135,
          },
        },
        {
          id: "BD-SC-06",
          brand: "Black Diamond",
          series: "Stoppers",
          displayName: "Black Diamond Stopper #6",
          color: "green",
          size: 6,
          range: {
            min: 102,
            max: 155,
          },
        },
        {
          id: "BD-SC-07",
          brand: "Black Diamond",
          series: "Stoppers",
          displayName: "Black Diamond Stopper #7",
          color: "red",
          size: 7,
          range: {
            min: 117,
            max: 163,
          },
        },
        {
          id: "BD-SC-08",
          brand: "Black Diamond",
          series: "Stoppers",
          displayName: "Black Diamond Stopper #8",
          color: "yellow",
          size: 8,
          range: {
            min: 135,
            max: 183,
          },
        },
        {
          id: "BD-SC-09",
          brand: "Black Diamond",
          series: "Stoppers",
          displayName: "Black Diamond Stopper #9",
          color: "blue",
          size: 9,
          range: {
            min: 152,
            max: 208,
          },
        },
        {
          id: "BD-SC-10",
          brand: "Black Diamond",
          series: "Stoppers",
          displayName: "Black Diamond Stopper #10",
          color: "grey",
          size: 10,
          range: {
            min: 173,
            max: 234,
          },
        },
        {
          id: "BD-SC-11",
          brand: "Black Diamond",
          series: "Stoppers",
          displayName: "Black Diamond Stopper #11",
          color: "purple",
          size: 11,
          range: {
            min: 201,
            max: 267,
          },
        },
        {
          id: "BD-SC-12",
          brand: "Black Diamond",
          series: "Stoppers",
          displayName: "Black Diamond Stopper #12",
          color: "green",
          size: 12,
          range: {
            min: 229,
            max: 305,
          },
        },
        {
          id: "BD-SC-13",
          brand: "Black Diamond",
          series: "Stoppers",
          displayName: "Black Diamond Stopper #13",
          color: "red",
          size: 13,
          range: {
            min: 269,
            max: 351,
          },
        },
      ]),
  },
  PassiveProSet: {
    contents: (root) =>
      root.contents.map(
        (c: String | PassivePro | undefined) =>
          (c = PassiveProData.find((p) => p.id === c))
      ),
  },
  ActiveProSet: {
    contents: (root) =>
      root.contents.map(
        (c: String | ActivePro | undefined) =>
          (c = ActiveProData.find((p) => p.id === c))
      ),
  },
  Active: {
    sets: (root) =>
      root.sets.map(
        (set: String | ActiveProSet | undefined) =>
          (set = ActiveProSetsData.find((s) => s.id === set))
      ),
    singles: (root) =>
      root.singles.map(
        (c: String | ActivePro | undefined) =>
          (c = ActiveProData.find((p) => p.id === c))
      ),
  },
  Passive: {
    sets: (root) =>
      root.sets.map(
        (set: String | PassiveProSet | undefined) =>
          (set = PassiveProSetsData.find((s) => s.id === set))
      ),
    singles: (root) =>
      root.singles.map(
        (c: String | PassivePro | undefined) =>
          (c = PassiveProData.find((p) => p.id === c))
      ),
  },
};

export default resolvers;
