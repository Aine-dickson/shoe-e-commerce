<template>
    <section class="h-screen overflow-hidden">
        <div class="fixed top-0 bottom-0 w-screen -z-10">
            <img src="/image/splash.png" alt="splash-image" class="h-full w-full object-fill">
        </div>
        <div class="mt-24">
            <div class="h-[20rem] flex items-center justify-center">
                <img src="/image/Nike Air Max 90.png" alt="" class="h-full object-fill">
            </div>
            <div class="text-[3rem] font-bold text-white text-center">
                <div class="space-x-3">
                    <span>Get</span>
                    <span class="text-orange-500">30%</span>
                </div>
                <span>Discount</span>
            </div>
            <div class="text-center text-gray-400">
                <span>Smart Gorgeous collections make you cool</span>
            </div>
            <div class="flex justify-between items-center mt-8 p-2">
                <div class="flex space-x-2 items-center">
                    <div class="border-t-4 border-t-white w-[2rem]"></div>
                    <div class="border-t-4 border-t-white w-[2rem]"></div>
                    <div class="border-t-4 border-t-orange-500 w-[4rem]"></div>
                </div>
                <div @click="enter" class="text-white bg-orange-700 p-2 rounded-[3rem]">
                    <span>Get Started</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { useRouter } from 'vue-router';

    export default{
        setup(){
            const router = useRouter()

            const enter = () => {
                router.push('/main')
            }
            return { enter }
        }
    }
</script>