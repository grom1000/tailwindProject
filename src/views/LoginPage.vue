<template>
  <div class="bg-gray-200 h-screen pt-8">
    <div class="container mx-auto">
      <div class="flex items-stretch rounded-lg">
        <div class="w-2/5 bg-green-600 rounded-l-lg flex flex-col justify-center">
            <div class="text-4xl text-white text-size">Welcome!</div>
            <div class="text-base">We are glad that you have dreams, enjoy</div>
        </div>
        <div class="w-3/5 bg-white rounded-r-lg">
          <div class="text-4xl mb-4 text-green-600 mt-16">Sign in to Diprella</div>
          <div class="flex justify-center mb-8">
            <div class="rounded-full h-12 w-12 flex items-center justify-center border-solid border-2 border-gray-200"><b>f</b></div>
            <div class="rounded-full h-12 w-12 flex items-center justify-center border-solid border-2 border-gray-200 mx-2"><b>G+</b></div>
            <div class="rounded-full h-12 w-12 flex items-center justify-center border-solid border-2 border-gray-200"><b>in</b></div>
          </div>
          <div class="text-gray-500 mb-4 text-sm">or use your email:</div>
          <login-form/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/views/LoginForm.vue'

export default {
  name: 'loginpage',
  components: {
    'login-form': LoginForm
  }
}
</script>

<style scoped lang="sass">
  @media (max-width: 500px)
    .text-size
      font-size: 28px
</style>
