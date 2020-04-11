<template>
  <div>
    <h1>模块一</h1>

    <h2>使用vuex</h2>
    <div>store：{{ $store.state.module1.data }}</div>
    <button @click="updateData">改变store</button>

    <h2>引入app的组件</h2>
    <h4>全局组件</h4>
    <global-com content="module1引用了app的全局组件"/>

    <h4>普通组件</h4>
    <normal-com content="module1引用了app的普通组件"/>

    <h2>调用app的方法</h2>
    <button @click="executeFunc">调用app提供的方法</button>
  </div>
</template>

<script>
import { components, utils } from 'app'

export default {
  components: {
    NormalCom: components.NormalCom
  },

  methods: {
    updateData () {
      this.$store.commit('module1/updateData', '模块一xxxx')
    },

    executeFunc () {
      utils.appTest()
    }
  }
}
</script>
