<template>
    <div>
        <h3>Element表单</h3>
        <Form :model="model" :rules="rules" ref="loginForm">
            <FormItem label="用户名" prop="username">
                <Inputs v-model="model.username" autocomplete="off"></Inputs>
            </FormItem>
            <FormItem label="密码" prop="password">
                <Inputs :value="model.password" @input="model.password=$event" autocomplete="off"></Inputs>
            </FormItem>
            <FormItem>
                <button @click="submitForm('loginForm')">提交</button>
            </FormItem>
        </Form>
        {{model}}
    </div>
</template>

<script>
    import Form from "@/components/form/Form";
    import FormItem from "@/components/form/FormItem";
    import Inputs from "@/components/form/Input";
    export default {
        name: "Index",
        components: {
            Form,
            FormItem,
            Inputs
        },
        data() {
            return {
                model:{username:'',password:''},
                rules:{
                    username: [{required:true,message:'请输入用户名'}],
                    password: [{required:true,message:'请输入密码'}],
                }
            }
        },
        methods: {
            submitForm(form) {
                this.$refs[form].validate(valid => {
                    if (valid) {
                        alert('请求登陆')
                    } else {
                        alert('校验失败')
                    }

                })
            }
        },
    }
</script>

<style scoped>

</style>
