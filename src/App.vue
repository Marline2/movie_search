<template>
  <div>
    <h1>{{ message }}</h1>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "~/components/HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      message: "hello",
    };
  },
};
</script>
