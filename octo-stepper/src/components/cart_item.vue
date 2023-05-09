<template>
    <article class="flex w-full space-x-2 p-3">
        <div class="w-[30%] bg-slate-800 rounded-xl overflow-hidden">
            <img :src="image" :alt="item.name" class="object-fill h-full w-full">
        </div>
        <div class="w-[70%]">
            <div class="flex justify-between">
                <span class="font-semibold">{{ item.name }}</span>
                <span><i class="fas fa-delete"></i></span>
            </div>
            <div class="flex text-gray-500 space-x-2 items-center">
                <div class="flex space-x-1 items-center">
                    <span class="block h-4 w-4 rounded-full" :class="item.visual"></span>
                    <span class="capitalize">{{ item.color }}</span>
                </div>
                <span>|</span>
                <span>Size: {{ item.size }}</span>
            </div>
            <div class="flex justify-between">
                <span>$ {{ item.price }}</span>
                <div class="flex justify-between items-center px-1 text-base bg-gray-600 rounded-[3rem] w-[4rem]">
                    <span @click="mod('dec')">-</span>
                    <span>{{ item.qty }}</span>
                    <span @click="mod('inc')">+</span>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
    import { ref, computed } from 'vue'

    export default {
        props: [
            'image',
            'name',
            'color',
            'size',
            'price',
            'quantity',
        ],
        setup(props){
            const item = ref({
                name: props.name,
                image: props.image,
                color: props.color,
                size: props.size,
                price: props.price,
                qty: props.quantity,
                visual: "bg-" + props.color + "-500"
            })
            const image = computed(() => {
                return `/image/${props.name}.png`
            })
            const mod = (action) => {
                if(action == 'inc'){

                    item.value.qty += 1
                } else {
                    if(item.value.qty < 2){
                        item.value.qty == 1
                    } else {
                        item.value.qty -= 1
                    }
                }
            }

            return { mod, item, image }
        }
    }

</script>