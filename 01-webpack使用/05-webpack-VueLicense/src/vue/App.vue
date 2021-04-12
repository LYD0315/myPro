<template>

  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from "./Cpn";


export default {
  name: "App",
  components: {Cpn},
  data() {
    return {
      message: 'hello',
      name: 'lyd'
    }
  },
  methods: {
    btnClick() {
      console.log('点击了按钮')
    }
  },
  comments: {
    Cpn
  }
}
</script>

<style scoped>
.title {
  color: green;
}
</style>