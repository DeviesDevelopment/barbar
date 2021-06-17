<template>
  <div class="record">
    <div>
      <img :src="record.thumb"/>
    </div>
    <div>
      <div>{{record.title}}</div>
      <div>{{record.artists[0].name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'record',
  props: {
    record: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.record {
  display: flex;
  justify-content: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
