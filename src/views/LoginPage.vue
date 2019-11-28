<template>
  <div class="container mx-auto md:pt-8">
    <div class="md:flex">
        <div class="md:w-2/5 bg-blue-600 md:rounded-l-lg flex flex-col justify-center items-center">
          <div class="md:none bg-blue-600 h-10"></div>
          <div class="hidden md:block md:text-4xl text-white">Welcome</div>
          <div class="hidden md:block text-base mb-12">We are glad that you have dreams, enjoy</div>
        </div>
        <div class="md:w-3/5 bg-white md:rounded-r-lg">
          <div class="text-4xl text-blue-600 pt-8 text-center">Sign in to CrediPlus</div>
          <div class="flex justify-center mt-4 mb-8">
            <img class="w-48" :src="user.creditplus" alt="Diprella">
          </div>
          <div class="text-gray-500 mb-4 text-sm text-center">or use your email:</div>
          <login-form/>
        </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/views/LoginForm.vue'
import axios from 'axios'

export default {
  data() {
    return {
        user: {}
    }
  },
  created() {
            axios
                .get('/user/user.json')
                .then(response => (this.user = response.data))
                .catch(error => console.log(error));
  },
  name: 'login-page',
  components: {
    LoginForm
  },
  beforeRouteEnter: (to, from, next) => {
    let flag = localStorage.getItem('flag')
    if (!flag) {
      next()
    } else {
      next('/')
    }
  }
}
</script>

