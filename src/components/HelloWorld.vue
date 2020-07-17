<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- use the modal component, pass in the prop -->
    <button @click="alert">弹出</button>
  </div>
</template>

<script>
import create from "@/utils/create";
import Notice from "@/components/notice/Notice";
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    default:''
  },
  methods: {
    alert() {
      const notice = create( Notice,{
        title: 'hhahh',
        message: 'okkk',
        duration: 1000
      })
      notice.show()
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
