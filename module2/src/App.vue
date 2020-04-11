<template>
  <div>
    <h1>模块二</h1>
    <div>store：{{ $store.state.module2.data }}</div>
    <button @click="updateData">改变store</button>
  </div>
</template>

<script>
export default {
  methods: {
    updateData () {
      this.$store.commit('module2/updateData', '改变了模块二的data')
    }
  }
}
</script>
