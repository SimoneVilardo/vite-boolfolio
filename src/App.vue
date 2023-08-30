<script>
import AppHeader from './components/AppHeader.vue';

export default{
  components:{
    AppHeader
  }
}
</script>

<template>
  <div>
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @use'./styles/generals.scss' as *;
</style>
