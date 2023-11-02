import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import NotesView from '../views/NotesView.vue'
import { useStoreAuth } from '../stores/storeAuth'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/login',
			name: 'login',
			component: LoginView,
		},
		{
			path: '/messages',
			name: 'notes',
			component: NotesView,
		},
	],
})

router.beforeEach(async (to, from) => {
	const storeAuth = useStoreAuth()
	if (!storeAuth.user.id && to.name == 'notes') {
		return { name: 'home' }
	}

	if (storeAuth.user.id && to.name == 'login') {
		return false
	}
})
export default router
