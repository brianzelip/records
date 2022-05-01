<script setup>
const props = defineProps({
  fieldset: Object,
  legend: Object,
  items: Array,
  input: Object,
  label: Object,
})
</script>

<template>
  <fieldset :id="fieldset.id">
    <legend>{{ legend.text }}:</legend>
    <ul class="flex flex-wrap px-2">
      <li v-for="(item, i) in items" :key="i" class="min-w-[150px] max-w-[50vw]">
        <input type="checkbox" :id="`${input.id}-${i}`" :name="input.name" :value="item" />
        <label :for="`${label.for}-${i}`" class="ml-1">{{ item }}</label>
      </li>
    </ul>
  </fieldset>
</template>
