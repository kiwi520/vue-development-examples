<template>
    <div>
        <slideshow :key="datalist.length">
            <div class="swiper-slide" v-for="data in datalist" :key="data.id">
                <a :href="data.linkUrl"><img :src="data.imgUrl" alt=""></a>
            </div>
        </slideshow>
    </div>
</template>

<script>
    import slideshow from '@/components/slideshow/slideshow';
    export default {
        components:{
            slideshow
        },
        data(){
            return {
                datalist:[]
            }
        },
        mounted(){
            setTimeout(()=>{

                this.datalist= [
                    {
                        imgUrl: require("@/assets/img/swiper-a.jpg"), // 图片路径
                        linkUrl: "#", // 跳转路径
                        id: "1"
                    },
                    {
                        imgUrl: require("@/assets/img/swiper-b.jpg"), // 图片路径
                        linkUrl: "#", // 跳转路径
                        id: "2"
                    }
                ]
            },2000)
        }
    }
</script>

<style scoped>

</style>
