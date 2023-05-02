<template>
    <section class="p-2 my-2">
        <div class="flex items-center space-x-3 overflow-auto mb-4">
            <div @click="filter('all')">
                <div v-if="filtrate == 'all'" class="flex items-center p-1 rounded-full space-x-1 bg-orange-700">
                    <span class="p-1 rounded-full h-8 w-8 flex items-center justify-center bg-white text-slate-700"><i class="fas fa-list"></i></span>
                    <span>All</span>
                </div>
                <div v-else class="rounded-full h-11 w-11 flex items-center justify-center bg-slate-800">All</div>
            </div>
            <div @click="filter('nike')">
                <div v-if="filtrate == 'nike'" class="flex items-center p-1 rounded-full space-x-1 bg-orange-700">
                    <span class="p-1 rounded-full h-8 w-8 flex items-center justify-center bg-white text-slate-700"><i class="fas fa-cat"></i></span>
                    <span>ke</span>
                </div>
                <div v-else class="rounded-full h-11 w-11 flex items-center justify-center bg-slate-800"><i class="fas fa-cat"></i></div>
            </div>
            <div @click="filter('puma')">
                <div v-if="filtrate == 'puma'" class="flex items-center p-1 rounded-full space-x-1 bg-orange-700">
                    <span class="p-1 rounded-full h-8 w-8 flex items-center justify-center bg-white text-slate-700"><i class="fas fa-cat"></i></span>
                    <span>Puma</span>
                </div>
                <div v-else class="rounded-full h-11 w-11 flex items-center justify-center bg-slate-800"><i class="fas fa-cat"></i></div>
            </div>
            <div @click="filter('adidas')">
                <div v-if="filtrate == 'adidas'" class="flex items-center p-1 rounded-full space-x-1 bg-orange-700">
                    <span class="p-1 rounded-full h-8 w-8 flex items-center justify-center bg-white text-slate-700"><i class="fas fa-cat"></i></span>
                    <span>Adidas</span>
                </div>
                <div v-else class="rounded-full h-11 w-11 flex items-center justify-center bg-slate-800"><i class="fas fa-cat"></i></div>
            </div>
            <div @click="filter('ammer')">
                <div v-if="filtrate == 'ammer'" class="flex items-center p-1 rounded-full space-x-1 bg-orange-700">
                    <span class="p-1 rounded-full h-8 w-8 flex items-center justify-center bg-white text-slate-700"><i class="fas fa-cat"></i></span>
                    <span>Ammer</span>
                </div>
                <div v-else class="rounded-full h-11 w-11 flex items-center justify-center bg-slate-800"><i class="fas fa-cat"></i></div>
            </div>
        </div>
        <div class="flex overflow-auto space-x-3">
            <item v-for="(item, index) in items" :key="index" :name="item.name" :color="item.color" :id="item.id" :qty="item.qty" :price="item.price" :size="item.size" :type="item.type" :reviews="item.reviews" :desc="item.desc"/>
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
        const items = ref([
            {name: "Nike Air Max 90", price: 149.99, type: "Running Shoes", color: 'orange', size: 42, qty: 1, id: 1, reviews: 4.3, desc: "The Nike Air Max 90 features a retro style with modern comfort. The durable leather and mesh upper provides support and breathability, while the Max Air unit in the heel cushions your every step."},
            {name: "Adidas Ultraboost 21", price: 179.99, type: "Running Shoes", color: 'orange', size: 34, qty: 2, id: 2, reviews: 4.3, desc: "The Adidas Ultraboost 21 combines high performance with style. The shoe features a Primeknit upper that adapts to the shape of your foot for a personalized fit, and the Boost midsole provides responsive cushioning and energy return."},
            {name: "Converse Chuck Taylor All Star", price: 59.99, type: "Casual Shoes", color: 'orange', size: 34, qty: 7, id: 3, reviews: 4.3, desc: "The Converse Chuck Taylor All Star is a classic shoe that never goes out of style. With a canvas upper and rubber sole, this shoe is both comfortable and durable. Available in a variety of colors and patterns."},
            {name: "Dr. Martens 1460", price: 149.99, type: "Boots", color: 'orange', size: 34, qty: 1, id: 4, reviews: 4.3, desc: "The Dr. Martens 1460 is a classic boot with a timeless design. The smooth leather upper and air-cushioned sole provide comfort and durability, while the signature yellow stitching and heel loop add a touch of style."},
            {name: "Adidas Ultraboost 21", price: 179.99, type: "Running Shoes", color: 'orange', size: 34, qty: 1, id: 5, reviews: 4.3, desc: "The Adidas Ultraboost 21 are designed for long-distance running. They have a lightweight yet durable construction, a responsive Boost midsole, and a breathable upper for maximum comfort."},
            {name: "Nike Air Force 1", price: 90.00, type: "Casual Shoes", color: 'orange', size: 34, qty: 1, id: 6, reviews: 4.3, desc: "The Nike Air Force 1 is a classic sneaker that has been popular for decades. They have a sleek, timeless design that looks great with any outfit. The leather upper and padded collar provide comfort and durability."},
            {name: "Reebok Nano X", price: 130.00, type: "Training Shoes", color: 'orange', size: 34, qty: 1, id: 7, reviews: 4.3, desc: "The Reebok Nano X are designed for high-intensity workouts. They have a breathable mesh upper, a responsive foam midsole, and a sturdy outsole for maximum stability and support during weightlifting and other exercises."},
            {name: "New Balance 990v5", price: 175.00, type: "Running Shoes", color: 'orange', size: 34, qty: 8, id: 1, reviews: 4.3, desc: "The New Balance 990v5 is a high-quality running shoe that provides excellent support and cushioning. They have a durable pigskin and mesh upper, a comfortable ENCAP midsole, and a rubber outsole for traction on any surface."},
            {name: "Vans Old Skool", price: 60.00, type: "Skate Shoes", color: 'orange', size: 34, qty: 1, id: 9, reviews: 4.3, desc: "The Vans Old Skool is a classic skate shoe that has been popular for generations. They have a sturdy canvas and suede upper, a padded collar for comfort, and the signature Vans waffle outsole for grip and durability."},
            {name: "Nike Air Zoom Pegasus 38", price: 120, type: "Running Shoes", color: 'orange', size: 34, qty: 1, id: 10, reviews: 4.3, desc: "The Nike Air Zoom Pegasus 38 continues to put a spring in your step, using the same responsive foam as its predecessor. Breathable mesh in the upper combines the comfort and durability you want with a wider fit at the toes."},
            {name: "Converse Chuck Taylor All Star Low Top", price: 55, type: "Casual Shoes", color: 'orange', size: 34, qty: 1, id: 11, reviews: 4.3, desc: "The Converse Chuck Taylor All Star is the shoe that started it all for Converse. These classic low-top shoes have a timeless design that looks great with anything, from jeans to dresses."},
            {name: "Salomon X Ultra 4 Mid Gore-Tex", price: 165, type: "Hiking Shoes", color: 'orange', size: 34, qty: 1, id: 12, reviews: 4.3, desc: "The Salomon X Ultra 4 Mid Gore-Tex is a versatile hiking shoe that's perfect for any terrain. With a waterproof Gore-Tex membrane and a supportive midsole, these shoes will keep you comfortable and protected on any hike."},
            {name: "Adidas Harden Vol. 5", price: 150, type: "Basketball Shoes", color: 'orange', size: 34, qty: 1, id: 13, reviews: 4.3, desc: "The Adidas Harden Vol. 5 is a high-performance basketball shoe that's designed for quick cuts and explosive moves. With a breathable upper and a responsive midsole, these shoes will help you dominate on the court."},
            {name: "Teva Original Universal Sandals", price: 50, type: "Sandals", color: 'orange', size: 34, qty: 1, id: 14, reviews: 4.3, desc: "The Teva Original Universal Sandals are the ultimate in comfort and versatility. With a cushioned footbed and adjustable straps, these sandals will keep your feet comfortable all day long, whether you're walking on the beach or running errands around town."}
        ])

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