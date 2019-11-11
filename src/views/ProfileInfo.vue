<template>
    <div>
        <div class="container mx-auto display-none">
        <div class="flex">
            <div class="w-1/5 bg-green-600 rounded-l-lg"></div>
            <div class="w-3/5 bg-white">
            <div class="flex justify-around items-center pt-4">
                <div class>
                <img class="rounded-full h-40 w-40" :src="src" alt="Фото" />
                </div>
                <div class="flex flex-col items-start">
                <div class="text-sm">Name</div>
                <div class="text-lg">{{ user.name }}</div>
                <div class="text-sm">Suname</div>
                <div class="text-lg">{{ user.suname }}</div>
                </div>
            </div>
            <div class="flex flex-col items-start mt-8 margin">
                <div class="text-sm">Position</div>
                <div class="text-lg">{{ user.position }}</div>
            </div>
            <div class="flex items-center mt-8 margin">
            <div class="flex flex-col items-start">
            <div class="text-sm">Followers</div>
            <div class="text-lg">{{ user.followers }}</div>
            </div>
            <div class="flex flex-col items-start margin">
            <div class="text-sm">Following</div>
            <div class="text-lg">{{ user.following }}</div>
            </div>
            </div>
            <div class="flex flex-col items-start mt-8 margin tac">
                <div class="text-sm">About</div>
                <div class="text-lg">{{ user.about }}</div>
            </div>
            </div>
            <div class="w-1/5 bg-green-600 rounded-r-lg"></div>
        </div>
        </div>
        <div class="container mx-auto display-see bg-white">
        <div class="flex justify-around items-center pt-4">
            <div class>
            <img class="rounded-full h-40 w-40" :src="src" alt="Фото" />
            </div>
            <div class="flex flex-col items-start">
            <div class="text-sm">Name</div>
            <div class="text-lg">{{ user.name }}</div>
            <div class="text-sm">Suname</div>
            <div class="text-lg">{{ user.suname }}</div>
            </div>
        </div>
        <div class="flex flex-col items-start mt-8 margin">
            <div class="text-sm">Position</div>
            <div class="text-lg">{{ user.position }}</div>
        </div>
        <div class="flex items-center mt-8 margin">
            <div class="flex flex-col items-start">
            <div class="text-sm">Followers</div>
            <div class="text-lg">{{ user.followers }}</div>
            </div>
            <div class="flex flex-col items-start margin">
            <div class="text-sm">Following</div>
            <div class="text-lg">{{ user.following }}</div>
            </div>
        </div>
        <div class="flex flex-col items-start mt-8 margin tac">
            <div class="text-sm">About</div>
            <div class="text-lg">{{ user.about }}</div>
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            src: 'https://data.whicdn.com/images/199999877/original.jpg',
            user: {}
        };
    },
    created() {
            axios
                .get('http://localhost:8080/user/user.json')
                .then(response => (this.user = response.data))
                .catch(error => console.log(error));
    }
};
</script>

<style lang="sass">
    @media (max-width: 700px)
        .display-none
            display: none
        .display-see
            display: block
        .margin
            margin: 0 2.5rem
        .tac
            text-align: left
    @media (min-width: 700px)
        .display-none
            display: block
        .display-see
            display: none
        .margin
            margin: 0 6rem
        .tac
            text-align: left
</style>