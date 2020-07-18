import Vue from "vue";
import SvgIcon from "@/components/icons/svg-icon";

const req = require.context("./svg", false, /\.svg$/);
req.keys().map(req);

// 全局注册svg-icon组件
Vue.component("svg-icon", SvgIcon);
