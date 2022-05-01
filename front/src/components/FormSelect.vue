<script setup>
import { computed } from 'vue';

const { label, select, option, enums } = defineProps({
  label: Object,
  select: Object,
  option: Object,
  enums: Object
})

const enumIsString = computed(() => enums.type === 'string')

function optionText(enumItem) {
  return enumIsString.value ? enumItem : enumItem[enums.textProperty]
}

function isSelectedByDefault(enumItem) {
  return enumIsString.value
    ? enumItem.includes(option.selectedMatch)
    : enumItem[enums.valueProperty].includes(option.selectedMatch);
}
</script>

<template>
  <fieldset class="grid select-grid-cols">
    <label :for="label.for" class="mr-2">{{ label.text }}:</label>
    <select :name="select.name" :id="select.id" class="bg-black">
      <option v-for="(e, i) in enums.options" :key="i" :value="enumIsString ? e : e[enums.valueProperty]"
        :selected="isSelectedByDefault(e)" class="bg-black text-green-500">{{ optionText(e) }}</option>
    </select>
  </fieldset>
</template>
