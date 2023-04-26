<template>
    <section class="p-2 my-2">
        <div class="flex space-x-3 overflow-auto mb-4">
            <div @click="filter('all')">
                <div v-if="filtrate == 'all'" class="flex items-center p-1 rounded-full space-x-1 bg-orange-700">
                    <span class="p-1 rounded-full h-8 w-8 flex items-center justify-center bg-white"><i class="fas fa-cat">NI</i></span>
                    <span>All</span>
                </div>
                <div v-else class="rounded-full h-11 w-11 flex items-center justify-center bg-slate-800">All</div>
            </div>
            <div @click="filter('nike')">
                <div v-if="filtrate == 'nike'" class="flex items-center p-1 rounded-full space-x-1 bg-orange-700">
                    <span class="p-1 rounded-full h-8 w-8 flex items-center justify-center bg-white"><i class="fas fa-cat">NI</i></span>
                    <span>Nike</span>
                </div>
                <div v-else class="rounded-full h-11 w-11 flex items-center justify-center bg-slate-800"><i class="fas fa-cat">NI</i></div>
            </div>
            <div @click="filter('puma')">
                <div v-if="filtrate == 'puma'" class="flex items-center p-1 rounded-full space-x-1 bg-orange-700">
                    <span class="p-1 rounded-full h-8 w-8 flex items-center justify-center bg-white"><i class="fas fa-cat">NI</i></span>
                    <span>Puma</span>
                </div>
                <div v-else class="rounded-full h-11 w-11 flex items-center justify-center bg-slate-800"><i class="fas fa-cat">NI</i></div>
            </div>
            <div @click="filter('adidas')">
                <div v-if="filtrate == 'adidas'" class="flex items-center p-1 rounded-full space-x-1 bg-orange-700">
                    <span class="p-1 rounded-full h-8 w-8 flex items-center justify-center bg-white"><i class="fas fa-cat">NI</i></span>
                    <span>Adidas</span>
                </div>
                <div v-else class="rounded-full h-11 w-11 flex items-center justify-center bg-slate-800"><i class="fas fa-cat">NI</i></div>
            </div>
            <div @click="filter('ammer')">
                <div v-if="filtrate == 'ammer'" class="flex items-center p-1 rounded-full space-x-1 bg-orange-700">
                    <span class="p-1 rounded-full h-8 w-8 flex items-center justify-center bg-white"><i class="fas fa-cat">NI</i></span>
                    <span>Ammer</span>
                </div>
                <div v-else class="rounded-full h-11 w-11 flex items-center justify-center bg-slate-800"><i class="fas fa-cat">NI</i></div>
            </div>
        </div>
        <div class="flex overflow-auto space-x-3">
            <item v-for="(item, index) in items" :key="index"/>
        </div>
    </section>
</template>

<script>
    import { ref, onMounted } from 'vue';

    import item from './item.vue';

    export default {
    components: {
        item
    },
    setup() {
        const filtrate = ref('')
        const items = ref([{}, {}])

        const filter = (agent) => {
            filtrate.value = agent
        }

        onMounted(() => {
            filter('all')
        })

        return { filter, filtrate, items }
    },
}

</script>