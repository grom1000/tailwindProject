<template>
    <div>
        <form class="bg-white rounded mx-4">
            <div class="mb-3">
                <input class="bg-gray-200 h-10 w-64 w-1/2" type="email" placeholder="Email" v-model="email">
            </div>
            <div class="mb-6">
                <input class="bg-gray-200 h-10 w-64 w-1/2" type="password" placeholder="Password" v-model="password">
            </div>
            <button
            class="bg-green-600 text-lg rounded-full py-1 px-4 text-white mb-16 w-32 h-12"
            @click.prevent="login"
            :disabled="!email || !password"
            >sign in</button>
        </form>
        {{ person.email }}
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        data() {
            return {
                email: '',
                password: '',
                person: {}
            }
        },
        methods: {
            login () {
                this.person = {
                    email: this.email,
                    password: this.password
                }
                console.log(this.person)
                    localStorage.setItem('email', this.person.email)
                    localStorage.setItem('password', this.person.password)
                    this.$router.push('/profile')
            }
        }
    }
</script>