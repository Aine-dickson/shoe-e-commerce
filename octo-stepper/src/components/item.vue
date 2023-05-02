<template>
    <article class="h-[15rem] min-w-[50%] max-w-[50%] relative rounded-lg overflow-hidden bg-slate-800 p-2">
        <div @click="preview" class="h-[55%] w-full m-auto mb-3">
            <img :src="image" :alt="item.id" class="h-full w-full object-fill">
        </div>
        <div @click="preview" class="flex flex-col">
            <span class="text-orange-800">Best Seller</span>
            <span class="font-semibold">{{ item.name }}</span>
            <span>$ {{ item.price }}</span>
        </div>
        <div @click="add_cart" class="absolute bottom-0 right-0 p-2 flex items-center justify-center rounded-tl-lg bg-orange-600">
            <span>+</span>
        </div>
    </article>
</template>

<script>
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'
    import { ref, computed } from 'vue'

    export default{
        props: ['name', 'price', 'color', 'size', 'qty', 'type', 'id', 'desc', 'reviews'],
        setup(props){
            const store = useStore()
            const router = useRouter()

            const item = ref({
                    name: props.name,
                    price: props.price, 
                    color: props.color,
                    size: props.size, 
                    qty: props.qty,
                    id: props.id,
                    reviews: props.review,
                    desc: props.desc
                })
            const image = computed(() => {
                return `image/${props.name}.jpg`
            })
            const add_cart = () => {
                store.commit('cartUpdate', item.value)
            }

            const preview = () => {
                store.commit('previewUpdate', item.value)
                router.push({name: 'preview', params: {name: item.value.name}})
            }

            return { add_cart, preview, item, image}
        }
    }
</script>