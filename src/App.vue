<template>
  <Header_ />
  <RouterView />
</template>

<script>
import Header_ from '~/components/Header'

export default {
  components:{
    Header_
  }
}
</script>


<style lang="scss">
@import '~/scss/main';
</style>