<template>
  <div class="record">
    <div>
      <a :href="link" target="_blank"><img v-lazy="record.thumb" /></a>
    </div>
    <div class="record-info">
      <h1>{{record.title}}</h1>
      <h2>{{artists}}</h2>
      <p>{{formats}} ({{labels}}{{formattedYear}})</p>
    </div>
  </div>
</template>

<script>
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

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
        .filter(onlyUnique)
        .join(" / ");
    },
    formats () {
      return this.record.formats
        .map(format => {
          if (format.name === 'Vinyl') {
            return `${format.name} - ${format.descriptions[0]}`;
          }
          return format.name
        })
        .filter(onlyUnique)
        .join(" / ");
    },
    labels () {
      return this.record.labels
        .map(label => label.name)
        .filter(onlyUnique)
        .join(" / ");
    },
    formattedYear() {
      if (this.record.year === 0) {
        return '';
      }
      return `, ${this.record.year}`;
    },
    link () {
      return `https://www.discogs.com/release/${this.record.id}`;
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
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
  justify-content: start;
}

h1, h2 {
  font-weight: normal;
}
h1 {
  font-size: 1.5em;
  margin: 0px 12px 8px 12px;
}
h2 {
  font-size: 1.2em;
  margin: 0px 12px 8px 12px;
}
p {
  margin: 0px 12px 8px 12px;
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
