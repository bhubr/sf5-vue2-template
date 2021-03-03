<template>
  <div >
    <h1>
      {{hello}}
    </h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState({
        hello: state=>state.hello
      })
    },
  }
</script>

<style scoped>

</style>