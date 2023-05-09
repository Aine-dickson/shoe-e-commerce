<template>
    <section class="h-full overflow-y-auto">
        <div class="h-[32%] w-full">
            <img :src="image" :alt="item.name" class="h-full w-full object-fill">
        </div>
        <article class="p-2 space-y-5">
            <div>
                <span class="font-bold text-xl">{{ item.name }}</span>
                <div>
                    <span>{{ item.type }}</span>
                    <span>{{ item.reviews }}</span>
                </div>
            </div>
            <div class="flex flex-col">
                <span class="font-bold mb-2">Description</span>
                <span class="font-light text-gray-500">{{ description }} <span class="font-bold text-white">...View more</span></span>
            </div>
            <div class="flex justify-between">
                <div>
                    <span class="font-bold mb-2 block">Size</span>
                    <div class="flex space-x-1 font-light text-gray-500">
                        <span class="flex items-center justify-center p-1 w-8 h-8 rounded-full bg-slate-800">12</span>
                        <span class="flex items-center justify-center p-1 w-8 h-8 rounded-full bg-slate-800">45</span>
                        <span class="flex items-center justify-center p-1 w-8 h-8 rounded-full bg-slate-800">43</span>
                    </div>
                </div>
                <div>
                    <span class="font-bold mb-2 block">Colors</span>
                    <div class="flex space-x-1 text-slate-900">
                        <span class="flex items-center justify-center p-1 w-8 h-8 rounded-full bg-white"></span>
                        <span class="flex items-center justify-center p-1 w-8 h-8 rounded-full bg-green-500"></span>
                        <span class="flex items-center justify-center p-1 w-8 h-8 rounded-full bg-orange-800"></span>
                    </div>
                </div>
            </div>
            <div class="flex space-x-5 items-center">
                <span class="font-bold">Quantity</span>
                <div class="p-1 space-x-2 rounded-[3rem] bg-slate-800">
                    <span @click="mod('dec')">-</span>
                    <span>{{ item.qty }}</span>
                    <span @click="mod('inc')">+</span>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
    import { useStore } from 'vuex';
    import { onMounted, computed } from 'vue';

    export default {
        setup(){
            const store = useStore()

            const item = computed(() => store.state.preview)
            const image = computed(() => {
                return `/image/${item.value.name}.png`
            })
            const add_cart = () => {
                store.commit('cartUpdate', item.value)
            }
            const mod = (action) => {
                if(action == 'inc'){
                    item.value.qty += 1
                } else {
                    if(item.value.qty < 2){
                        item.value.qty = 1
                    } else {
                        item.value.qty -= 1
                    }
                }
            }
            const description = computed(() => {
                return item.value.desc.substring(0, 109)
            })

            onMounted(() => {
                store.commit('pageUpdate', {status: false, title: '', action: 'Add to Cart'})
                console.log(image.value)
            })

            return { add_cart, mod, item, image, description }
        }
    }

</script>