<template>
  <div class="container">
    <input
      type="text"
      v-model="state.filterText"
      placeholder="Search events"
      c
    />
    <button type="button" @click="searchClick">Search</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup(props, context) {
    const state = reactive({ filterText: "" });
    const searchClick = () => {
      context.emit("click", { text: state.filterText });
    };

    return {
      state,
      searchClick,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  margin: 1rem;
}
</style>