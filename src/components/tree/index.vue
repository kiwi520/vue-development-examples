<template>
    <ul>
        <item class="item" :model="treeData"></item>
    </ul>
</template>

<script>
    import Item from "@/components/tree/Item";
    export default {
        name: "Tree",
        components: {
          Item
        },
        data() {
            return {
                treeData: {
                    title:'中国',
                    children: [
                        {title: '华北',
                            children: [
                                {title: '北京',
                                    children: [
                                        {title: '朝阳'},
                                        {title: '海淀'},
                                        {title: '西城'},
                                        {title: '东城'},
                                        {title: '通州'},
                                    ]},
                                {title: '天津'},
                                {title: '河北'},
                                {title: '内蒙'},
                                {title: '山西'},
                            ]
                        },
                        {title: '华东',
                            children: [
                                {title: '上海'},
                                {title: '江苏',
                                    children: [
                                        {title: '南京'},
                                        {title: '徐州'},
                                        {title: '扬州'},
                                        {title: '淮安'},
                                        {title: '苏州'},
                                        {title: '无锡'},
                                        {title: '常州'},
                                        {title: '泰州'},
                                    ]},
                                {title: '浙江'},
                                {title: '山东',
                                    children: [
                                        {title: '济南'},
                                        {title: '青岛'},
                                        {title: '烟台'},
                                        {title: '潍坊'},
                                        {title: '济宁'},
                                        {title: '临沂'},
                                        {title: '淄博'},
                                    ]},
                                {title: '安徽'},
                            ]},
                        {title: '华中',
                            children: [
                                {title: '河南'},
                                {title: '湖北',
                                    children: [
                                        {title: '武汉'},
                                        {title: '黄冈'},
                                        {title: '荆门'},
                                        {title: '鄂州'},
                                        {title: '随州'},
                                        {title: '恩施'},
                                    ]},
                                {title: '江西'},
                                {title: '湖南'},
                            ]},
                        {title: '华南',
                            children: [
                                {title: '福建'},
                                {title: '广西'},
                                {title: '广东',
                                    children: [
                                        {title: '广州'},
                                        {title: '深圳'},
                                        {title: '东莞'},
                                        {title: '佛山'},
                                        {title: '珠海'},
                                    ]},
                                {title: '海南'},
                            ]},
                        {title: '西南',
                            children: [
                                {title: '四川',
                                    children: [
                                        {title: '成都'},
                                        {title: '汉中'},
                                        {title: '攀枝花'},
                                        {title: '广安'},
                                        {title: '剑门'},
                                    ]},
                                {title: '重庆'},
                                {title: '云南'},
                                {title: '贵州'},
                                {title: '西藏'},
                            ]},
                        {title: '西北',
                            children: [
                                {title: '陕西'},
                                {title: '宁夏'},
                                {title: '甘肃'},
                                {title: '新疆'},
                            ]},
                        {title: '东北',
                            children: [
                                {title: '辽宁'},
                                {title: '吉林'},
                                {title: '黑龙江'},
                            ]},
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
