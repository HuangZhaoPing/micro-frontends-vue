<template>
  <div>
    <router-link
      v-for="item in menus"
      :key="item.path"
      :to="item.path">
      {{ item.name }}
    </router-link>

    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        { name: '模块一', path: '/module1' },
        { name: '模块二', path: '/module2' }
      ]
    }
  }
}
</script>