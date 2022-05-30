<template>
  <div class="layout">
    <div class="navigation">
      <a class="navitem" href="/">Home</a>
      <a class="navitem" href="/services">Services</a>
      <a class="navitem" href="/add-event">Add event</a>
    </div>
    <div class="content"><slot /></div>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
</style>

<style scoped>
.layout {
  margin: auto;
}
.content {
  padding: 1rem;
}

.navigation {
  padding: 1rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  line-height: 1.8em;
}

.navitem {
  padding-right: 1rem;
}
</style>
