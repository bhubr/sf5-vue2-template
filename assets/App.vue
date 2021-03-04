<template>
  <div>
    <h1>
      {{ hello }}
    </h1>
    <h2>{{ results }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import apiServices from './services/apiServices'

export default {
  data () {
    return {
      results: {}
    }
  },
  computed: {
    ...mapState({
      hello: state => state.hello
    })
  },
  mounted () {
    apiServices.getApiTest()
      .then(response => {
        this.results = response.data.apiMessage
      })
      .catch(error => {
        console.log(`There was a problem fetching events: ${error.message}`)
      })
  }
}
</script>

<style scoped>

</style>
