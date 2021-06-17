<template>
  <div class="record">
    <div>
      <img :src="record.thumb"/>
    </div>
    <div class="record-info">
      <h1>{{record.title}}</h1>
      <h2>{{artists}}</h2>
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
  computed: {
    artists () {
      return this.record.artists
        .map(artist => artist.name)
        .join(" / ");
    }
  }
}
</script>

<style scoped>
.record {
  display: flex;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.record-info {
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1, h2 {
  font-weight: normal;
}
h1 {
  font-size: 1.5em;
}
h2 {
  font-size: 1.2em;
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
