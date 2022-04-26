import { createStore } from "vuex";

const moduleA = {
  // namespaced: true,
  state: () => ({
    AValue: [
      { id: "1", name: "vue1", age: 10 },
      { id: "2", name: "vue2", age: 20 },
      { id: "3", name: "vue3", age: 30 },
      { id: "3", name: "react", age: 30 },
    ],
    AName: 2,
  }),
  getters: {
    AGetters(state: { AValue: any[] }) {
      return state.AValue.filter((item) => item.name !== "react");
    },
  },
  mutations: {
    AMutations(state: { AName: number }, payload: { amount: number }) {
      state.AName += payload.amount;
    },
  },
  actions: {
    AActions(context: {
      commit: (arg0: string, arg1: { amount: number }) => void;
    }) {
      context.commit("AMutations", { amount: 5 });
    },
  },
};

const moduleB = {
  namespaced: true,
  state: () => ({
    BValue: [
      { id: "1", name: "vue1", age: 10 },
      { id: "2", name: "vue2", age: 20 },
      { id: "3", name: "vue3", age: 30 },
      { id: "3", name: "react", age: 30 },
    ],
    BName: 3,
    BObject: {
      name: "88",
      age: 0,
    },
  }),
  getters: {
    BGetters(state: { BValue: any[] }) {
      return state.BValue.filter((item) => item.name !== "react");
    },
  },
  mutations: {
    AMutations(state: { BName: number }, payload: { amount: number }) {
      state.BName += payload.amount;
    },
  },
  actions: {
    AActions(context: {
      commit: (arg0: string, arg1: { amount: number }) => void;
    }) {
      context.commit("AMutations", { amount: 5 });
    },
  },
};

export default createStore({
  state: {
    commonValue: [
      { id: "1", name: "vue1", age: 10 },
      { id: "2", name: "vue2", age: 20 },
      { id: "3", name: "vue3", age: 30 },
      { id: "3", name: "react", age: 30 },
    ],
    commonName: 2,
  },
  getters: {
    getComValue(state) {
      return state.commonValue.filter((item) => item.name !== "react");
    },
  },
  mutations: {
    setMethodMuta(state, payload) {
      state.commonName += payload.amount;
    },
  },
  actions: {
    setCountAct(context) {
      context.commit("setMethodMuta", { amount: 5 });
    },
  },
  modules: {
    moduleA,
    moduleB,
  },
});
