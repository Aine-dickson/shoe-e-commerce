<template>
    <article class="h-[14rem] min-w-[50%] max-w-[50%] relative rounded-lg overflow-hidden bg-slate-800 p-2">
        <div @click="preview(id)" class="h-[55%] w-full m-auto mb-3">
            <img src="/assets/image/profile.jpg" alt="" class="h-full w-full object-fill">
        </div>
        <div @click="preview(id)" class="flex flex-col">
            <span class="text-orange-800">Best Seller</span>
            <span class="font-semibold">Nike Jordan</span>
            <span>$120.99</span>
        </div>
        <div @click="add_cart" class="absolute bottom-0 right-0 p-2 flex items-center justify-center rounded-tl-lg bg-orange-600">
            <span>+</span>
        </div>
    </article>
</template>

<script>
    export default{
        setup(){

            const add_cart = () => {
            }

            const preview = (id) => {
            }

            return { add_cart, preview}
        }
    }
</script>