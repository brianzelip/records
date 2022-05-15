<script setup>
import { ref } from 'vue';
import { genres, countries, sizes, years } from '@/store.js';

import FormInputText from './FormInputText.vue';
import FormInputNumber from './FormInputNumber.vue';
import FormMultiInputText from './FormMultiInputText.vue';
import FormInputCheckboxGroup from './FormInputCheckboxGroup.vue';
import FormSelect from './FormSelect.vue';
import TheInlineNoveltyCheckboxes from './TheInlineNoveltyCheckboxes.vue';
import TheArtToggle from './TheArtToggle.vue';

const artIsEnabled = ref(true);
</script>

<template>
  <form method="POST" action="/add-record">
    <FormInputText
      :label="{ for: 'title', text: 'Title' }"
      :input="{ id: 'title', name: 'title', required: true }"
    >
    </FormInputText>
    <FormMultiInputText
      :fieldset="{ id: 'artists', class: 'flex items-end gap-x-2' }"
      :label="{ for: 'artist', text: 'Artist' }"
      :input="{ id: 'artist', name: 'artist' }"
    ></FormMultiInputText>
    <FormMultiInputText
      :fieldset="{ id: 'labels', class: 'flex items-end gap-x-2' }"
      :label="{ for: 'label', text: 'Label' }"
      :input="{ id: 'label', name: 'label' }"
    ></FormMultiInputText>
    <FormInputNumber
      :label="{ for: 'year', text: 'Year' }"
      :input="{ id: 'year', name: 'year', min: years.min, max: years.max }"
    ></FormInputNumber>
    <FormInputCheckboxGroup
      :items="genres"
      :fieldset="{ id: 'genres' }"
      :legend="{ text: 'Genres' }"
      :input="{ id: 'genre', name: 'genre' }"
      :label="{ for: 'genre' }"
    ></FormInputCheckboxGroup>
    <FormSelect
      :label="{ for: 'country', text: 'Country' }"
      :select="{ id: 'country', name: 'country' }"
      :option="{ selectedMatch: 'United States of America' }"
      :enums="{
        type: 'object',
        options: countries,
        textProperty: 'alpha2',
        valueProperty: 'country',
      }"
    ></FormSelect>
    <FormSelect
      :label="{ for: 'size', text: 'Size' }"
      :select="{ id: 'size', name: 'size' }"
      :option="{ selectedMatch: '12' }"
      :enums="{ type: 'string', options: sizes }"
    ></FormSelect>
    <FormInputText
      :label="{ for: 'color', text: 'Color' }"
      :input="{ id: 'color', name: 'color', default: 'black' }"
    >
    </FormInputText>
    <TheInlineNoveltyCheckboxes></TheInlineNoveltyCheckboxes>
    <FormInputNumber
      :label="{ for: 'copies', text: 'Copies' }"
      :input="{ id: 'copies', name: 'copies', min: 1, value: 1 }"
    ></FormInputNumber>
    <button
      type="submit"
      class="mt-4 ml-2 py-3 px-4 w-28 rounded-sm border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
    >
      {{ artIsEnabled ? 'GET ART' : 'SUBMIT' }}
    </button>
    <TheArtToggle v-model="artIsEnabled"></TheArtToggle>
  </form>
</template>
