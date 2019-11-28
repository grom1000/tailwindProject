<template>
    <div>
        <form class="bg-white mx-4">
            <div class="flex flex-col items-center">
                <div class="mb-3">
                    <input class="bg-gray-200 h-10 pl-2" type="email" placeholder="Email" v-model="email">
                </div>
                <div class="mb-6">
                    <input class="bg-gray-200 h-10 pl-2" type="password" placeholder="Password" v-model="password">
                </div>
            </div>
            <div class="text-center">
                <button
                class="bg-blue-700 text-lg rounded-full py-1 px-4 text-white mb-16 w-32 h-12 hover:bg-blue-600 focus:outline-none"
                @click.prevent="login"
                :disabled="!email || !password"
                >sign in</button>
            </div>
        </form>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login () {
                if (this.email != '' && this.password != '') {
                    localStorage.setItem('flag', "true")
                } else {
                    localStorage.setItem('flag', 'false')
                }
                this.$router.push('/')
            }
        }
    }
</script>
