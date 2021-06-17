<template>
  <Hello/>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  name: 'App',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
}
</style>
