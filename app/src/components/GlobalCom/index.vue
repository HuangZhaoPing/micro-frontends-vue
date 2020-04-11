<template>
  <div>
    <p>此为app提供的全局组件，可以直接在template中引用而不需要import</p>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'GlobalCom',
  props: {
    content: String
  }
}
</script>
