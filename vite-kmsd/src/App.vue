<script setup lang="ts">
import axios from "axios"
axios({
  url: '/api/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '111111'
  }
}).then(res => console.table(res))
</script>

<template>
  <div class="app-container">
    <h1>我是app组件</h1>
    <a-button>Header</a-button>
    <SvgIcon name="wode"></SvgIcon>
  </div>
</template>

<style scoped lang="scss">
h1 {
  font-size: 16px;
}
</style>
