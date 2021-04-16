import { IResolvers } from "graphql-tools";
import PassiveProData from "./data/passivePro";
import ActiveProData from "./data/activePro";
import ClimberData from "./data/climbers";
import PassiveProSetsData from "./data/passiveProSets";
import ActiveProSetsData from "./data/activeProSets";
import { PassivePro } from "./types/PassivePro";
import { ActivePro, ActiveProSet } from "./types/ActivePro";

const resolvers: IResolvers = {
  Query: {
    helloWorld: () => "Hello world from Apollo Server",
    allPassivePro: () => PassiveProData,
    allPassiveProSets: () => PassiveProSetsData,
    allActivePro: () => ActiveProData,
    allActiveProSets: () => ActiveProSetsData,
    allClimbers: () => ClimberData,
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
        (set: String | ActiveProSet | undefined) =>
          (set = PassiveProSetsData.find((s) => s.id === set))
      ),
    singles: (root) =>
      root.singles.map(
        (c: String | ActivePro | undefined) =>
          (c = PassiveProData.find((p) => p.id === c))
      ),
  },
};

export default resolvers;
