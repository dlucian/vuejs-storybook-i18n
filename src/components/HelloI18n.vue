<template>
  <div>
    <h3>Hello I18n</h3>
    <p>SFC messsage: {{ $t('message.hello') }}</p>
    <p>locales message: {{ $t('message.message') }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloI18n',
};
</script>
