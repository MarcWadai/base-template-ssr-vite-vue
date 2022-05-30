<template>
  <div
    class="container"
    v-for="(event, index) in events"
    v-bind:key="`event_${index}`"
  >
    <Card :event="event"></Card>
  </div>
</template>

<script>
import { reactive } from "vue";
import Card from "./Card.vue";

export default {
  components: {
    Card
  },
  props: {
    events: Array,
  },
  setup(props) {
    const state = reactive({ count: 0 });

    return {
      state,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  margin: 1rem;
}

.card {
  flex: 1 0 300px;
}
</style>
