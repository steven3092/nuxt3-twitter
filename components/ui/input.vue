<template>
  <div>
    <label
      for=""
      v-if="props.label"
      class="ml-px block pl-3 text-sm font-medium text-gray-700"
      >{{ props.label }}</label
    >
    <input
      v-model="modelValue"
      :type="props.type"
      class="block w-full rounded-full border-gray-300 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<script setup>
const modelValue = defineModel("modelValue", { type: String, required: true });

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
});
</script>
