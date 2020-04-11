<template>
  <div>
    <p>此为app提供的普通组件，需要import，普通组件为动态引入，以减少app的main.js的体积</p>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    content: String
  }
}
</script>
