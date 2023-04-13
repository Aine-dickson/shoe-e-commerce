<template>
    <section class="flex justify-between items-center p-2">
        <div class="flex items-center text-xl h-10 w-[80%] rounded-md border border-gray-500 bg-slate-700">
            <i class="fas fa-search ml-1"></i>
            <input @keyup="search" v-model="search_key" type="search" placeholder="Search for shoes" class="h-full max-w-full flex-grow focus:outline-none bg-transparent p-1">
        </div>
        <div class="flex justify-center items-center bg-slate-700 rounded-lg w-9 h-9">
            <i class="fas fa-shuffle"></i>
        </div>
    </section>
</template>

<script>

    import { ref } from 'vue'
    import { useStore } from 'vuex'

    export default {
        setup(){
            const store = useStore()

            const search_key = ref('')

            const search = () => {
                if(search_key.value.length){
                    store.commit('searchState', true)
                } else {
                    store.commit('searchState', false)
                }
            }

            return { search_key, search }
        }
    }

</script>