<script setup>
const props = defineProps({
  input: Object,
  label: Object,
})
</script>

<template>
  <fieldset>
    <input
      :required="input.required"
      type="checkbox"
      :id="input.id"
      :name="input.name"
      :checked="input.default"
    />
    <label class="ml-1" :for="label.for">{{ label.text }}</label>
  </fieldset>
</template>
