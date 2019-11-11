<template>
  <div class="bg-gray-200 h-screen pt-8">
    <profile-info/>
  </div>
</template>

<script>
import ProfileInfo from '@/views/ProfileInfo.vue'

  export default {
    name: 'profilepage',
    components: {
    'profile-info': ProfileInfo
    },
    data() {
      return {
        src: 'https://data.whicdn.com/images/199999877/original.jpg'
      }
    }
  }
</script>

<style lang="sass">
</style>
