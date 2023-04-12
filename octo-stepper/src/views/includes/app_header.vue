<template>
    <header>
        <section v-if="!page" class="flex justify-between items-center p-2">
            <div class="flex space-x-2">
                <div class="overflow-hidden rounded-full h-12 w-12">
                    <img src="/assets/images/profile.jpg" alt="profile-pic" class="w-full h-full object-fill">
                </div>
                <div class="flex flex-col">
                    <span>Greeting</span>
                    <span>Name</span>
                </div>
            </div>
            <div>
                <span><i class="fas fa-bell">BE</i></span>
                <span><i class="fas fa-heart">HE</i></span>
            </div>
        </section>
        <section v-else class="flex justify-between items-center p-2">
            <span><i class="fas fa-left-chevron">LE</i></span>
            <span>Page Title</span>
            <span><i class="fas fa-heart">HE</i></span>
        </section>
    </header>
</template>

<script>

    import { ref } from 'vue';

    export default {
        components: {

        },
        setup(){
            const page = ref(false)

            return { page }
        }
    }

</script>