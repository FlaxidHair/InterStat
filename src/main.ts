import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDO7UW2pCcu3mSIj5RmguhHPv5Y336n0yw',
  authDomain: 'todo-f8f9e.firebaseapp.com',
  databaseURL: 'https://todo-f8f9e-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'todo-f8f9e',
  storageBucket: 'todo-f8f9e.appspot.com',
  messagingSenderId: '491875164818',
  appId: '1:491875164818:web:3f3f545f02c918939bfc4b'
}

initializeApp(firebaseConfig)

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
