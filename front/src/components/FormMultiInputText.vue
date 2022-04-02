<script setup>
import { ref } from 'vue';

const props = defineProps({ fieldset: Object, label: Object, input: Object })

const numInputs = ref(1);
</script>

<template>
  <fieldset :id="fieldset.id" :class="fieldset.class">
    <ul class="list-reset">
      <li v-for="x in numInputs" :key="x" class="grid text-grid-cols">
        <label class="mr-2" :for="`${label.for}-${x}`">{{ label.text }}:</label>
        <input
          :required="input.required"
          type="text"
          :id="`${input.id}-${x}`"
          :name="input.name"
        />
      </li>
    </ul>
    <button
      @click="numInputs++"
      type="button"
      :title="`Add ${label.text.toLowerCase()}`"
      class="py-1 px-2 border border-gray-400 rounded-sm hover:border-white"
    >＋</button>
  </fieldset>
</template>

<style scoped>
li {
  @apply py-2;
}
li:first-of-type {
  @apply pt-0;
}
li:last-of-type {
  @apply pb-0;
}
</style>
