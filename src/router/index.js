import Vue from 'vue'
import VueRouter from 'vue-router'
/** 15. modificamos e importamos las views, podemos ponerle los nombres que queramos... */
import Dashboard from '../views/Dashboard.vue'
import Projects from '../views/Projects.vue'
import Team from '../views/Team.vue'

Vue.use(VueRouter)


/** 16. En la const routes (componente de la const router, q llamamos desde la lista del drawer
 * especificamos los path de cada componente
 */
const routes = [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/team',
        name: 'Team',
        component: Team
    }
]

/** 17. const que es exportada y q contiene los path de los componentes.
 * Seguimos modificando los compoenentes (Dashboard, Team, Projects) para definir su aspecto... --->
 */
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router