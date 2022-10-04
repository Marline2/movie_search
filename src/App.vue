<template>
  <headers />
  <RouterView />
  <footers />
</template>

<script>
import Headers from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components:{
    headers:Headers,
    footers:Footer
  }
}
</script>


<style lang="scss">
@import '~/scss/main';
</style>