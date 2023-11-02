import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
	apiKey: 'AIzaSyC9yu2FZCeo66gfgLBm-hDH8AwJr1ARZ6g',
	authDomain: 'rekinek-9a873.firebaseapp.com',
	projectId: 'rekinek-9a873',
	storageBucket: 'rekinek-9a873.appspot.com',
	messagingSenderId: '524897210877',
	appId: '1:524897210877:web:371fa6ffac06d293f68994',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
