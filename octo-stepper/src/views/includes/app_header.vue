<template>
    <header>
        <section v-if="page" class="flex justify-between items-center p-2">
            <div class="flex space-x-2">
                <div class="overflow-hidden rounded-full h-12 w-12">
                    <img src="/assets/images/profile.jpg" alt="profile-pic" class="w-full h-full object-fill">
                </div>
                <div class="flex flex-col">
                    <span>{{ greeting }}</span>
                    <span v-if="userName">{{ userName }}</span>
                </div>
            </div>
            <div class="space-x-2 text-xl">
                <span><i class="fas fa-bell"></i></span>
                <span><i class="fas fa-heart"></i></span>
            </div>
        </section>
        <section v-else class="flex justify-between items-center p-2">
            <span><i class="fas fa-left-chevron"></i></span>
            <span>{{ page_title }}</span>
            <span><i class="fas fa-heart"></i></span>
        </section>
    </header>
</template>

<script>

    import { ref, computed } from 'vue';
    import { useStore } from 'vuex';


    export default {
        components: {

        },
        setup(){
            const store = useStore()

            const page = computed(() => store.state.page.status)
            const page_title = computed(() => store.state.page.title)
            const userName = computed(() => {
                if(store.state.user !== null){
                    return store.state.user
                } else {
                    return false
                }
            })

            const greet = (time) => {
                if(time < 12){
                    return "Good morning"
                } else if(time < 16){
                    return "Good afternoon"
                } else if(time < 24){
                    return "Good evening"
                }
            }

            const greeting = ref('')

            setInterval(() => {
                let now = new Date()
                let time = now.getHours()
                greeting.value = greet(time)
            }, 1000)

            return { page, page_title, userName, greeting }
        }
    }

</script>