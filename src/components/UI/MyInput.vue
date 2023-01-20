<template>
  <input
      class="input"
      :value="modelValue"
      :type="type"
      @input="update"
  >
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
    type: {
      type: [String],
      default: 'text',
    }
  },
  methods:{
    update(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 5px;
  resize: none;
}
</style>
