<template>
  <div class="container mx-auto md:pt-8">
    <profile-info/>
  </div>
</template>

<script>
import ProfileInfo from '@/views/ProfileInfo.vue'

  export default {
    name: 'profile-page',
    components: {
      ProfileInfo
    }
  }
</script>
