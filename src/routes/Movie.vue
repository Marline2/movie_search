<template>
  <h1>
    movie
  </h1>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('movie/searchWithId',{
      id:this.$route.params.id
    })
  },
}
</script>
