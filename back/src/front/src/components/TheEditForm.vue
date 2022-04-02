<script setup>
import { ref } from 'vue'
import { genres, countries } from '@/store.js';

const artistCount = ref(1);
const labelCount = ref(1);
</script>

<template>
  <form method="POST" action="/add-record">
    <fieldset>
      <label for="title">Title:</label>
      <input
        required
        type="text"
        id="title"
        name="title"
        class="border-2 border-blue-500"
      />
    </fieldset>
    <fieldset id="artists" class="flex items-end gap-x-2">
      <ul class="list-reset">
        <li v-for="x in artistCount" :key="x">
          <label :for="`artist-${x}`">Artist:</label>
          <input type="text" :id="`artist-${x}`" name="artist" />
        </li>
      </ul>
      <button @click="artistCount++" type="button" title="Add artist">＋</button>
    </fieldset>
    <fieldset id="labels" class="flex items-end gap-x-2">
      <ul class="list-reset">
        <li v-for="x in labelCount" :key="x">
          <label :for="`label-${x}`">Label:</label>
          <input type="text" :id="`label-${x}`" name="label" />
        </li>
      </ul>
      <button @click="labelCount++" type="button" title="Add label">＋</button>
    </fieldset>
    <fieldset>
      <label for="year">Year:</label>
      <input type="text" id="year" name="year" />
    </fieldset>
    <fieldset id="genres">
      <legend>Genre:</legend>
      <ul class="flex flex-wrap">
        <li
          v-for="(genre, i) in genres"
          :key="i"
          class="min-w-[150px] max-w-[50vw]"
        >
          <input type="checkbox" :id="`genre-${i}`" name="genre" :value="genre" />
          <label :for="`genre-${i}`">{{ genre }}</label>
        </li>
      </ul>
    </fieldset>
    <fieldset>
      <label for="country">Country:</label>
      <select name="country" id="country">
        <option
          v-for="(c, i) in countries"
          :key="i"
          :value="`${c.country}`"
          :selected="c.country === 'United States of America'"
        >{{ c.alpha2 }}</option>
      </select>
    </fieldset>
    <fieldset>
      <label for="copies">Copies:</label>
      <input type="number" min="1" value="1" id="copies" name="copies" />
    </fieldset>
    <button type="submit">Add record</button>
  </form>
</template>
