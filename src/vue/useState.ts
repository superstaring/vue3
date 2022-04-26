import { computed } from "vue";
import { mapGetters, mapState, useStore } from "vuex";

export default function useState(mapper: any, isGetters: boolean) {
  const storeStateFns = isGetters ? mapGetters(mapper) : mapState(mapper);

  const store = useStore();
  const storeState: any = {};
  Object.keys(storeStateFns).forEach((funKey) => {
    const fn = storeStateFns[funKey].bind({ $store: store });
    storeState[funKey] = computed(fn);
  });

  return storeState;
}
