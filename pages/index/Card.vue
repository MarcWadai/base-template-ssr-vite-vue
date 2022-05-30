<template>
  <a :href="`/events/${event._id}`" class="card">
    <div class="card_image">
      <img src="https://picsum.photos/200" alt="event_image">
    </div>
    <div class="card_body">
      <div class="card_title">
        <div> {{ event.name }} </div>
        <p>{{ event.description }}</p>

      </div>
      <div class="card_footer">
        <div class="card_date">
            <font-awesome-icon icon="calendar" />
            <span> Start Date </span>
        </div>
        <div class="card_date">
          <font-awesome-icon icon="calendar-day" />
          <span> End Date </span>
        </div>
      </div>
    </div>

  </a>
</template>

<script>

export default {
  props: {
    event: Object,
  },
  setup(props) {
  },
};
</script>

<style scoped>
.container {
  display: flex;
  margin: 1rem;
}


.card {
  display: flex;
  border: 1px solid;
}

.card_body {
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card_title {

}

.card_footer {
  display: flex;
}

.card_date{

}
</style>
