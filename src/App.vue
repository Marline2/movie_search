<template>
  <h1 @click="increase">
    {{ message }}
  </h1>
  <h2>{{ count }}</h2>
  <div v-if="count>4">
    4보다 크다능
  </div>
  <HelloWorld />
  <ul>
    <Fruit
      v-for="fruit in fruits"
      :key="fruit"
      :name="fruit">
      {{ fruit }}
    </Fruit>
  </ul>
</template>

<script>
import HelloWorld from "~/components/HelloWorld.vue";
import Fruit from '~/components/Fruit';
export default {
  components: {
    HelloWorld,
    Fruit,
  },
  data() {
    return {
      message: "hello",
      count:0,
      fruits:['Apple', 'Banana', 'Cherry']
    }
  },
  methods:{
    increase(){
    this.count +=1
    }
  }
};
</script>

<style>
  h1{
    font-size:50px;
    color:yellowgreen;
  }
  img{
    width:2em;
    height: 2em;
  }
</style>