<template>
  <div>
    <h3>Hello I18n</h3>
    <p>SFC messsage: {{ $t('hello') }}</p>
    <p>locales message: {{ $t('message') }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloI18n',
};
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n>
