import { defineStore } from 'pinia'
import { auth } from '../firebase/index'
import { signInWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

export const useStoreAuth = defineStore('storeAuth', {
	state: () => {
		return {
			user: {},
		}
	},

	actions: {
		init() {
			onAuthStateChanged(auth, user => {
				if (user) {
					this.user.email = user.email
					this.user.id = user.uid
					this.router.push('/messages')
				} else {
					this.user = {}
				}
			})
		},

		login(credentials) {
			const auth = getAuth()
			signInWithEmailAndPassword(auth, credentials.email, credentials.password)
				.then(userCredential => {})
				.catch(error => {
					console.log(error.message)
					if (error.message) {
						alert('Błędny login lub hasło')
					}
				})
		},

		logoutUser() {
			signOut(auth)
				.then(() => {
					this.router.push('/')
				})
				.catch(error => {
					console.log(error.message)
				})
		},
	},

	getters: {},
})
