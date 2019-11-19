<template>
    <div class="md:flex">
        <div class="w-1/5 bg-green-600 md:rounded-l-lg">
        </div>
        <div class="bg-white md:w-3/5 px-12 md:px-20">
            <div class="md:flex md:flex-wrap md:justify-center md:items-center">
                <div class="md:w-1/2 flex justify-center flex-grow md:mt-6 px-4">
                    <img class="rounded-full w-40 mt-8 md:m-0" :src= user.src alt="Фото" />
                </div>
                <div class="flex flex-col flex-grow">
                    <div class="flex flex-col mt-8">
                        <div class="text-sm text-gray-500">Name</div>
                        <div class="text-lg break-all">{{ user.name }}</div>
                    </div>
                    <div class="flex flex-col mt-8">
                        <div class="text-sm text-gray-500">Suname</div>
                        <div class="text-lg break-all">{{ user.suname }}</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col mt-8">
                <div class="text-sm text-gray-500">Position</div>
                <div class="text-lg">{{ user.position }}</div>
            </div>
            <div class="flex items-center mt-8">
                <div class="flex flex-col">
                    <div class="text-sm text-gray-500">Followers</div>
                    <div class="text-lg">{{ user.followers }}</div>
                </div>
                <div class="flex flex-col">
                    <div class="text-sm text-gray-500">Following</div>
                    <div class="text-lg">{{ user.following }}</div>
                </div>
            </div>
            <div class="flex flex-col mt-8 pb-6">
                <div class="text-sm text-gray-500">About</div>
                <div class="text-lg break-words">{{ user.about }}</div>
            </div>
        </div>
        <div class="w-1/5 bg-green-600 md:rounded-r-lg">
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            user: {}
        };
    },
    created() {
            axios
                .get('/user/user.json')
                .then(response => (this.user = response.data))
                .catch(error => console.log(error));
    }
}
</script>
