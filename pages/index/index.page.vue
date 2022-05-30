<template>
  <section class="search">
    <Search @click="searchClick" test="test"/>
  </section>
  <section class="list-events">
    <List :events="listEvents"/>
  </section>
</template>

<script>
import List from './List.vue'
import Search from './Search.vue'
import { ref } from 'vue'
const components = { Search, List }
const setup = (props) => {
  console.log('props', props)
  const listEvents = ref(props.events || [])
  
  const fetchEvents = async ({ text }) => {
    try {
      listEvents.value = await fetch('http://localhost:3000/api/events').then(res => res.json())
    } catch(err) {
      console.error(err);
    }
  }

  const searchClick = ({ text }) => {
    console.log('text', text)
    fetchEvents()
  }

  return {
    searchClick,
    listEvents
  }
}
export default { components, setup, props: ['events']  }
</script>
