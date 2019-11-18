<template>
  <div>
    Classes
    <ul>
      <li v-for="c in theClasses()">
        {{ c.CLASS }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Classes',
  methods: {
    ...mapGetters({
      theClasses: 'classes/get'
    })
  }

}
</script>

<style scoped>

</style>
