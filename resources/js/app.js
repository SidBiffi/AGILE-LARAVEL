import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from 'vue';

// Components
  import testComponent from './components/testComponent.vue';
// Chats

// Create the Vue application
const vue_app = createApp({})
  // Components
    .component('test-component', testComponent);

vue_app.mount('#vue-app');
