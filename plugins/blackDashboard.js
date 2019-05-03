// import SideBar from '@/components/dashboard/SidebarPlugin'
// import Notify from '@/components/dashboard/NotificationPlugin'
import GlobalComponents from './globalComponents'
// import GlobalDirectives from './globalDirectives'
// import RTLPlugin from './RTLPlugin'

// moved to head...
// css assets
// import '@/assets/dashboard/sass/black-dashboard.scss'
// import '@/assets/dashboard/css/nucleo-icons.css'
// import "@/assets/demo/demo.css";

export default {
	install(Vue) {
		Vue.use(GlobalComponents)
		// Vue.use(GlobalDirectives)
		// Vue.use(SideBar)
		// Vue.use(Notify)
		// Vue.use(RTLPlugin)
	}
}
