<script setup>
const props = defineProps({ label: Object, input: Object })
</script>

<template>
  <fieldset class="grid number-grid-cols">
    <label class="mr-2" :for="label.for">{{ label.text }}:</label>
    <input
      :required="input.required"
      type="number"
      :id="input.id"
      :name="input.name"
      :min="input.min"
      :max="input.max"
      :value="input.value"
    />
  </fieldset>
</template>
