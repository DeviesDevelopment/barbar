<template>
  <div id="records">
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
#records {
  max-width: 50%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}
</style>
