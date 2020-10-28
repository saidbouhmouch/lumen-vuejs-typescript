import Vue from "vue";
import Router from "vue-router";
const  componentA = () => import("./component-a/component-a.vue");
Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        { path: '/', component: componentA }        
    ]
});