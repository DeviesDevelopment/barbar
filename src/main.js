import { createApp } from 'vue'
import App from './App.vue'
import lazyPlugin from 'vue3-lazy'

const app = createApp(App);
app.use(lazyPlugin, {
	error: '',
	loading: '',
});
app.mount('#app')
