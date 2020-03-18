<template>
    <div>
        <a @click.prevent="toggleTheme" class="cursor-pointer">Switch</a>
        <div class="md:flex bg-background-primary px-12 md:px-8 lg:px-16 py-6 md:py-8 text-copy-primary"
        :class='theme'>
            <div class="flex justify-center self-start px-4 md:mr-6 md:flex-shrink-0">
                <img class="rounded-full w-48 md:flex-none" :src="user.src" alt="Фото" />
            </div>
            <div class="flex-grow px-3 md:ml-6">
                <div class="md:flex md:justify-between mt-6 md:mt-4">
                    <div>
                        <div class="text-2xl break-all">{{ user.name }} {{ user.suname }}</div>
                        <div class="text-base mb-3 text-blue-600">{{ user.position }}</div>
                    </div>
                    <div class="self-start hidden md:block flex-shrink-0">
                        <img class="w-40" :src="user.creditplus" alt="Diprella">
                    </div>
                </div>
                <div class="text-base !red-text">Age: {{ user.age }}</div>
                <div class="text-base break-all">From: {{ user.from }}</div>
                <div class="text-base mb-6 break-all">Company: {{ user.company }}</div>
                <div class="border-b-2 border-grey-200"></div>
                <div class="flex flex-wrap md:flex mt-6">
                    <div class="flex-col mr-4 md:mr-4">
                        <div>Followers</div>
                        <div class="text-3xl text-blue-600">{{ user.followers }}</div>
                    </div>
                    <div class="flex-col mr-4 md:ml-4 md:mr-4">
                        <div>Following</div>
                        <div class="text-3xl text-blue-600">{{ user.following }}</div>
                    </div>
                    <div class="flex-col mr-4 md:ml-4 md:mr-4">
                        <div>Questions</div>
                        <div class="text-3xl text-blue-600">{{ user.questions }}</div>
                    </div>
                    <div class="flex-col md:ml-4">
                        <div>Answers</div>
                        <div class="text-3xl text-blue-600">{{ user.answers }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center md:text-left text-xl my-2 md:mt-8 md:mb-4 md:text-2xl">
            About
        </div>
        <div class="md:flex">
            <div class="md:w-1/3 bg-white px-6 text-center">
                <div class="pt-8 mb-4 md:pt-8 md:mb-8 text-lg">
                    Sailed
                </div>
                <div class="mb-4 text-4xl text-blue-600 lg:mb-8 md:mb-12">
                    15 <span class="text-sm text-blue-600">ships</span>
                </div>
                <div class="flex pb-4 md:mb-8">
                    <div class="flex-col w-1/2">
                        <div class="mb-1 text-base">
                            Master
                        </div>
                        <div class="text-blue-600 text-2xl">
                            3
                        </div>
                    </div>
                    <div class="flex-col w-1/2">
                        <div class="mb-1 text-base">
                            Other Ranks
                        </div>
                        <div class="text-green-600 text-2xl">
                            12
                        </div>
                    </div>
                </div>
                <div class="border-b-2 border-grey-200 md:hidden"></div>
            </div>
            <div class="md:w-1/3 bg-white px-6 md:mx-10 text-center">
                <div class="pt-8 mb-4 md:pt-8 md:mb-8 text-lg">
                    Seatime
                </div>
                <div class="mb-4 text-4xl text-blue-600 lg:mb-8 md:mb-12">
                    103 <span class="text-sm text-blue-600">month</span>
                </div>
                <div class="flex pb-4 md:mb-8">
                    <div class="flex-col w-1/2">
                        <div class="mb-1 text-base">
                            Master
                        </div>
                        <div class="text-blue-600 text-2xl">
                            43
                        </div>
                    </div>
                    <div class="flex-col w-1/2">
                        <div class="mb-1 text-base">
                            Other Ranks
                        </div>
                        <div class="text-green-600 text-2xl">
                            60
                        </div>
                    </div>
                </div>
                <div class="border-b-2 border-grey-200 md:hidden"></div>
            </div>
            <div class="md:w-1/3 bg-white lg:px-6 text-center">
                <div class="pt-8 mb-4 md:pt-8 mb-6 md:mb-8 text-lg">
                    Q & A
                </div>
                <div class="flex justify-center mb-8">
                    <div class="rounded-full w-16 h-16 flex items-center justify-center bg-green-600 mr-1 text-xl text-white">
                        300
                    </div>
                    <div class="rounded-full w-16 h-16 flex items-center justify-center bg-blue-600 ml-1 text-xl text-white">
                        200
                    </div>
                </div>
                <div class="px-10 md:px-4 pb-8 md:pb-6 lg:px-2 xl:px-12">
                    <div class="flex justify-center md:justify-start items-center mb-2">
                        <div class="flex-shrink-0 rounded-full mr-2 w-4 h-4 bg-green-600 lg:mr-4"></div>
                        <div class="text-base">
                            number of question asked
                        </div>
                    </div>
                    <div class="flex justify-center md:justify-start items-center mt-2">
                        <div class="flex-shrink-0 rounded-full mr-2 w-4 h-4 bg-blue-600 lg:mr-4"></div>
                        <div class="text-base">
                            number of question answered
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center md:text-left text-xl my-2 md:mt-8 md:mb-4 md:text-2xl">
            Interest
        </div>
        <div class="bg-white md:px-8 py-6">
            <div class="md:flex">
                <div class="md:w-1/3 bg-white">
                    <div class="mt-2 md:mt-2 px-6 md:px-0 md:mt-6">
                        <img :src="user.sheep" alt="Рубка корабля">
                    </div>
                    <div class="px-6 lg:px-10 bg-gray-100 pt-8 pb-4 shadow-lg">
                        <div class="text-xl text-blue-600 mb-4 md:h-16 md:mb-0">
                            Ship Navigation
                        </div>
                        <div class="text-lg md:h-40 lg:h-32 mb-4 md:mb-0">
                            Pellentesque ut maximus tellus, sollicitudin ornare eros. Donec et nisi nisl...
                        </div>
                        <div class="border-b-2 border-grey-200 mb-4"></div>
                        <div class="text-base text-center">
                            Followers
                        </div>
                        <div class="text-2xl text-blue-600 text-center">
                            112
                        </div>
                    </div>
                </div>
                <div class="md:w-1/3 bg-white md:mx-10">
                    <div>
                        <img class="mt-8 md:mt-2 px-6 md:px-0 md:mt-6" :src="user.boat" alt="Рубка корабля">
                    </div>
                    <div class="px-6 lg:px-10 bg-gray-100 pt-8 pb-4 shadow-lg">
                        <div class="text-xl text-blue-600 mb-4 md:h-16 md:mb-0">
                            Nullam ut sapien
                        </div>
                        <div class="text-lg md:h-40 lg:h-32 mb-4 md:mb-0">
                            In laoreet suscipit mauris, eu pulvinar nisl accumsan in.
                        </div>
                        <div class="border-b-2 border-grey-200 mb-4"></div>
                        <div class="text-base text-center">
                            Followers
                        </div>
                        <div class="text-2xl text-blue-600 text-center">
                            546
                        </div>
                    </div>
                </div>
                <div class="md:w-1/3 bg-white mb-4">
                    <div>
                        <img class="mt-8 md:mt-2 px-6 md:px-0 md:mt-6" :src="user.miniboat" alt="Рубка корабля">
                    </div>
                    <div class="px-6 lg:px-10 bg-gray-100 pt-8 pb-4 shadow-lg">
                        <div class="md:text-center lg:text-left text-xl text-blue-600 mb-4 md:h-16 md:mb-0">
                            Fusce eget mauris quam
                        </div>
                        <div class="text-lg md:h-40 lg:h-32 mb-4 md:mb-0">
                            Curabitur cursus euismod ipsum, ac semper eros viverra eget cursus euismod...
                        </div>
                        <div class="border-b-2 border-grey-200 mb-4"></div>
                        <div class="text-base text-center">
                            Followers
                        </div>
                        <div class="text-2xl text-blue-600 text-center">
                            132
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            user: {},
            theme: 'theme-light'
        }
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light'
            localStorage.setItem('theme', this.theme)
        }
    },
    created() {
            this.theme = localStorage.getItem('theme')
            axios
                .get('/user/user.json')
                .then(response => (this.user = response.data))
                .catch(error => console.log(error));
    }
}
</script>

