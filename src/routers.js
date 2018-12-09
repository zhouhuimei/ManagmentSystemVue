//在创建的 routers 对象中， path 配置了路由的路径，component 配置了映射的组件
import Home from './view/home.vue'
import Page404 from './components/error/page404.vue'
import Login from './view/login.vue'
import Register from './view/register.vue'
import ChangePassword from './view/changePasswort'

const routers = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path:'/changePasswort',
        component:ChangePassword
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/',              //设置根路由
        component: Login
    },
    {
        path: '*',              //设置404页面
        component: Page404
        //也可以用 redirect:'/home'
    }
]

export default routers
