<script setup>
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>

<template>
  <fieldset class="inline-grid switch-grid-cols ml-5">
    <label class="mr-3 italic small-caps">Get cover art next?</label>
    <button
      type="button"
      :class="[
        modelValue ? 'bg-green-500 border-green-500' : 'bg-black border-white',
        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none',
      ]"
      @click="$emit('update:modelValue', !modelValue)"
      role="switch"
      aria-checked="false"
    >
      <span class="sr-only">Get cover artwork toggle</span>
      <span
        aria-hidden="true"
        :class="[
          modelValue ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
        ]"
      ></span>
    </button>
  </fieldset>
</template>
