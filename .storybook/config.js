import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { configure } from '@storybook/vue';
import { addDecorator } from '@storybook/vue';
import i18n from '../src/i18n';

Vue.use(VueI18n);

addDecorator(() => ({
  template: '<story/>',
  i18n,
}));

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
