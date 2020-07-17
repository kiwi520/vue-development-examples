<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if="errorMessage" class="reds">{{errorMessage}}</p>
<!--        {{form.rules}}-->
    </div>
</template>

<script>
    import Schema from 'async-validator'
    export default {
        name: "FormItem",
        inject:['form'],
        props: {
            label: {
                type: String,
                default: ''
            },
            prop: {
                type: String,
            },
        },
        data() {
            return {
                errorMessage:''
            }
        },
        mounted() {
            // this.$on('validate',this.validate)
            this.$on('validate',()=>{
                this.validate();
            })
        },
        methods: {
            validate() {
                //做校验
                const val =this.form.model[this.prop]
                const rules = this.form.rules[this.prop]
                const desc = {[this.prop]:rules}
                const v = {[this.prop]:val}
                const schema = new Schema(desc)
                schema.validate(v,errors => {
                    if (errors) {
                        this.errorMessage=errors[0].message
                    }else{
                        this.errorMessage=''
                    }
                })
            }
        },
    }
</script>

<style scoped>
.reds{
    color: red;
}
</style>
