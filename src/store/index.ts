import { createStore } from "vuex";
import { State } from "vue";

export default createStore({
  state(): State {
    return {
      UA: "mobile"
    }
  },
  //使用计算属性了
  mutations: {
    saveValue(state: State, data: { name: keyof State, value: any }) {
      if (typeof state[data.name] == typeof data.value) {
        state[data.name] = data.value
        return
      }
      console.log(`vuex错误,尝试给state.${data.name}赋值${typeof data.value == 'object' ? JSON.stringify(data.value) : data.value}失败`)
    }
  }
});
