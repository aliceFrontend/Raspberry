<template>
  <div class="error">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'McvErrorMessage',
  props: {
    message: {
      type: String,
      required: false,
      default: 'Something went wrong'
    }
  }
}
</script>

