<script setup>
const props = defineProps({ label: Object, input: Object })
</script>

<template>
  <fieldset class="grid text-grid-cols">
    <label class="mr-2" :for="label.for">{{ label.text }}:</label>
    <input
      :required="input.required"
      type="text"
      :id="input.id"
      :name="input.name"
      :value="input.default"
    />
  </fieldset>
</template>

