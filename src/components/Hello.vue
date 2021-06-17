<template>
  <div id="hello">
    <ul>
      <li v-for="record in records" :key="record.id">
        <Record v-bind:record="record.basic_information"/>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import Record from './Record.vue';
export default {
  name: 'hello',
  components: {
    Record
  },
  data () {
    return {
      records: [] 
    }
  },
  created () {
    const url = 'https://api.discogs.com/users/Dunklas/collection/folders/0/releases';
    axios.get(url, {
      headers: {
        'Authorization': `Discogs key=${process.env.VUE_APP_DISCOGS_KEY}, secret=${process.env.VUE_APP_DISCOGS_SECRET}`
      }
    }).then(res => {
        this.records = res.data.releases;
        console.log(res);
      });
  }
}
</script>

<style scoped>
#hello {
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
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
