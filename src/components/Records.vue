<template>
  <div id="records">
    <input class="search" v-model="searchQuery" autofocus onfocus="this.select()"/>
    <ul>
      <li v-for="record in filteredRecords" :key="record.id">
        <Record v-bind:record="record.basic_information"/>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import Record from './Record.vue';
export default {
  name: 'records',
  components: {
    Record
  },
  data () {
    return {
      records: [],
      searchQuery: '',
    }
  },
  created () {
    const urlParams = new URLSearchParams(window.location.search);
    const user = urlParams.get('user');
    const url = `https://api.discogs.com/users/${user}/collection/folders/0/releases`;
    axios.get(url, {
      headers: {
        'Authorization': `Discogs key=${process.env.VUE_APP_DISCOGS_KEY}, secret=${process.env.VUE_APP_DISCOGS_SECRET}`
      }
    }).then(res => {
        this.records = res.data.releases;
        console.log(res);
      });
  },
  computed: {
    filteredRecords () {
      if (!this.searchQuery) {
        return this.records;
      }
      return this.records
        .filter(record => {
          const titleMatches = record.basic_information.title.toLowerCase()
            .includes(this.searchQuery.toLowerCase());
          const artistMatches = record.basic_information.artists[0].name.toLowerCase()
            .includes(this.searchQuery.toLowerCase());
          return titleMatches || artistMatches;
        })
    }
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

.search {
  padding: 12px 20px;
  font-size: 1.4rem;
  border-width: calc(5px);
  border-style: solid;
  border-radius: calc(6px);
  text-align: center;
  outline: transparent;
  width: 100%;
}
</style>
