<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink
          :to="nav.herf"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'
export default{
  components:{
    Logo
  },
  data() {
    return{
      navigations:[
        {
          name:'Search',
          herf:'/'
        },
        {
          name:'Movie',
          herf:'/movie'
        },
        {
          name:'About',
          herf:'/about'
        }
      ]
    }
  },
}
</script>
