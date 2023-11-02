import { defineStore } from 'pinia'
import { db } from '../firebase/index'
import { collection, addDoc, query, onSnapshot, QuerySnapshot, updateDoc, doc, orderBy } from 'firebase/firestore'

export const useStoreNotes = defineStore('storeNotes', {
	state: () => {
		return {
			notes: [],
		}
	},

	actions: {
		init() {
			this.getNotes()
		},

		getNotes() {
			const q = query(collection(db, 'notes'), orderBy('date'))
			onSnapshot(q, querySnapshot => {
				const notes = []
				querySnapshot.forEach(doc => {
					const note = {}
					note.id = doc.id
					note.done = doc.data().done
					note.message = doc.data().message
					note.title = doc.data().name
					note.phoneNumber = doc.data().phoneNumber
					notes.push(note)
				})
				this.notes = notes
			})
		},

		async addNewNote(inputsDetails) {
			const docRef = await addDoc(collection(db, 'notes'), {
				name: inputsDetails.name,
				phoneNumber: inputsDetails.phoneNumber,
				message: inputsDetails.message,
				done: false,
				date: Date.now(),
			})
		},

		async updateMessage(id, status) {
			const docRef = doc(db, 'notes', id)
			await updateDoc(docRef, {
				done: !status,
			})
		},
	},

	getters: {},
})
