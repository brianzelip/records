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
      <li
        v-for="(item, i) in items"
        :key="i"
        class="min-w-[150px] max-w-[50vw]"
      >
        <input
          type="checkbox"
          :id="`${input.id}-${i}`"
          :name="input.name"
          :value="item"
        />
        <label :for="`${label.for}-${i}`" class="ml-1">{{ item }}</label>
      </li>
    </ul>
  </fieldset>
</template>

<style scoped>
input[type="checkbox"] {
  appearance: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  background: transparent;
  width: 10px;
  height: 10px;
  border: 2px solid white;
  border-radius: 2px;
}
input[type="checkbox"]:hover {
  @apply border-green-500;
}
label:hover {
  @apply text-green-500;
}
input[type="checkbox"]:checked {
  @apply bg-green-500;
  @apply border-green-500;
}
input[type="checkbox"]:checked + label {
  @apply text-green-500;
}
input[type="checkbox"]::after {
  content: "✓";
  @apply font-semibold;
  @apply text-transparent;
  @apply bg-transparent;
}
input[type="checkbox"]:checked::after {
  content: "✓";
  @apply text-black;
}
</style>
