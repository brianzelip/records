<script setup>
import FormInputCheckbox from './FormInputCheckbox.vue';

</script>

<template>
  <fieldset class="p-0">
    <FormInputCheckbox
      class="inline-block"
      :label="{ for: 'picturedisc', text: 'Picture disc' }"
      :input="{ id: 'picturedisc', name: 'picturedisc', default: false }"
    ></FormInputCheckbox>
    <FormInputCheckbox
      class="inline-block"
      :label="{ for: 'diecut', text: 'Die cut' }"
      :input="{ id: 'diecut', name: 'diecut', default: false }"
    ></FormInputCheckbox>
    <FormInputCheckbox
      class="inline-block"
      :label="{ for: 'flexidisc', text: 'Flexi disc' }"
      :input="{ id: 'flexidisc', name: 'flexidisc', default: false }"
    ></FormInputCheckbox>
  </fieldset>
</template>
