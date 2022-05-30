<template>
  <div>
    <a href="/">
      <font-awesome-icon icon="arrow-left" size="lg"/>
    </a>
    <h1>{{event.name}}</h1>
    <p>A colored page.</p>


  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(props) {
    const event = ref(props.event || {})

    return  {
      event
    }
  },
}
</script>
<style scoped>
h1,
p {
  color: green;
}
</style>
