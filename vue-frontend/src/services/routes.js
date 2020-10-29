import UrlField from "@/components/UrlField/UrlField";
import UrlFieldFail from "@/components/UrlField/UrlFieldFail";
// import VueRouter from "vue-router";

export const routes = [
  { path: '/', component: UrlField },
  { path: '/fail', component: UrlFieldFail }
]
// TODO: Fix this file
// export const routerss = new VueRouter({
//   routes
// })