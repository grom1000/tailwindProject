<template>
  <div class="container mx-auto md:pt-8">
    <div class="md:flex">
        <div class="md:w-2/5 bg-green-600 md:rounded-l-lg flex flex-col justify-center items-center">
          <div class="md:none bg-green-600 h-10"></div>
          <div class="hidden md:block md:text-4xl text-white">Welcome</div>
          <div class="hidden md:block text-base mb-12">We are glad that you have dreams, enjoy</div>
        </div>
        <div class="md:w-3/5 bg-white md:rounded-r-lg">
          <div class="text-4xl text-green-600 pt-8 text-center">Sign in to Diprella</div>
          <div class="flex justify-center mt-4 mb-8">
            <div class="rounded-full h-12 w-12 flex items-center justify-center border-solid border-2 border-gray-200"><b>f</b></div>
            <div class="rounded-full h-12 w-12 flex items-center justify-center border-solid border-2 border-gray-200 mx-2"><b>G+</b></div>
            <div class="rounded-full h-12 w-12 flex items-center justify-center border-solid border-2 border-gray-200"><b>in</b></div>
          </div>
          <div class="text-gray-500 mb-4 text-sm text-center">or use your email:</div>
          <login-form/>
        </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/views/LoginForm.vue'

export default {
  name: 'login-page',
  components: {
    LoginForm
  }
}
</script>

