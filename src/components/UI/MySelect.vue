<template>
  <select class="select" @change="onChangeOption">
    <option disabled value="">Select from list</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{option.name}}
    </option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    onChangeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
.select {
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 5px;
  resize: none;
}
</style>