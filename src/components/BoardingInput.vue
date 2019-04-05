<template>
  <label>
    <input v-model="val"
           @keyup.enter="passback"
           v-autowidth="{ maxWidth: '80vw', minWidth: '1ch', comfortZone: 0 }"
           :autofocus="'autofocus'"
           class="input"
           id="input">
  </label>
</template>

<script>
export default {
  name: 'BoardingInput',
  data: function () { return { val: '' } },
  methods: {
    passback: function () {
      console.log(this.val)
      this.$emit('keyup', this.val)
    }
  },
  mounted () {
    document.getElementById('input').focus()
  }
}
</script>

<style scoped>
  .input {
    margin: 4rem 0;
    outline: none;
    font-size: 10vh;
    text-align: start;
    font-weight: bold;
    border: transparent;
    background-color: transparent;
    font-family: 'PT Mono', monospace;
    border-bottom: 12px solid #ffffff;
    color: #ffffff;
    /*-webkit-text-fill-color: black;*/
  }
</style>
