import * as vRouter from "vue-router";

import MainPage from "./views/MainPage";
import CalcsPage from './views/CalcsPage';

import calcs from './calcs.js'

var rutas = [
  {
    path: "/",
    name: "Inicio",
    component: MainPage,
  },
  {
    path: "/calculadoras",
    name: "Calculadoras",
    component: CalcsPage,
  },
  {
    path:'/:pathMatch(.*)*',
    redirect: () => ({
      path: "/",
      name: "Inicio",
      component: MainPage,
    })
  },

]



rutas = rutas.concat(calcs)



const router = vRouter.createRouter({
  history: vRouter.createWebHistory("/"),
  routes: rutas,

});

router.beforeEach(() => {
  window.scrollTo(0, 0)
}) 





export default router;