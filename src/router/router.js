/**
 * Created by shangri-la on 12/06/2017.
 */
import Home from '../components/home.vue'
import Nav from '../components/common/navgation.vue'
import Slide1 from '../components/slide/slide1.vue'
import Slide2 from '../components/slide/slide2.vue'
// 配置路由
export default[
    {
        path: '/',
        component: Home
    },
    {
        path:'/nav',
        component:Nav,
        children:[
            {
                path: '/nav/slide1',
                component: Slide1
            },
            {
                path: '/nav/slide2',
                component: Slide2
            },
        ]
    }
]