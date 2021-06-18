import { createApp } from 'vue'
import App from './App.vue'
import lazyPlugin from 'vue3-lazy'

const app = createApp(App);
app.use(lazyPlugin, {
	error: 'record.jpg',
	loading: 'record.jpg',
});
app.mount('#app')
