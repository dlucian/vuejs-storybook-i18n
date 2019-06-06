/* eslint-disable */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import HelloI18n from '../src/components/HelloI18n';
import MyButton from './MyButton';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
})).add('i18n', () => ({
    components: { HelloI18n },
    template: '<hello-i18n></hello-i18n>',
  }));

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }));
