<template>
  <div id="records">
    <input class="search" v-model="searchQuery" autofocus onfocus="this.select()"/>
    <div v-if="loading">Loading records...</div>
    <ul>
      <li v-for="record in filteredRecords" :key="record.id">
        <Record v-bind:record="record.basic_information"/>
      </li>
    </ul>
    <div v-if="filteredRecordsEmpty && !loading" class="empty">No records found =(</div>
  </div>
</template>

<script>
import axios from 'axios';
import Record from './Record.vue';

const fetchRecords = (user, page) => {
    const url = `https://api.discogs.com/users/${user}/collection/folders/0/releases?per_page=100&page=${page}`;
    return axios.get(url, {
      headers: {
        'Authorization': `Discogs key=${process.env.VUE_APP_DISCOGS_KEY}, secret=${process.env.VUE_APP_DISCOGS_SECRET}`
      }
    });
}

export default {
  name: 'records',
  components: {
    Record
  },
  data () {
    return {
      records: [],
      loading: true,
      searchQuery: '',
    }
  },
  created () {
    const urlParams = new URLSearchParams(window.location.search);
    const user = urlParams.get('user');
    fetchRecords(user, 1)
      .then(res => {
        this.records = res.data.releases;
        if (res.data.pagination.pages > 1) {
          const promises = [];
          for (let i = 2; i <= res.data.pagination.pages; i++) {
            promises.push(fetchRecords(user, i));
          }
          Promise.all(promises)
            .then(results => {
              results.forEach(response => {
                this.records = this.records.concat(response.data.releases);
              });
              this.loading = false;
            })
        } else {
          this.loading = false;
        }
      })
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
    },
    filteredRecordsEmpty () {
      return this.filteredRecords.length === 0;
    }
  }
}
</script>

<style scoped>
#records {
  max-width: 70ch;
  padding: 2ch;
  margin: auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

.empty {
  margin: 0 10px;
  padding: 0;
  width: 100%;
}

.search {
  box-sizing: border-box;
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
