import { ref, onMounted } from 'vue'
import { collection, getDocs, doc, addDoc, deleteDoc } from 'firebase/firestore'
import { db } from './firebase'

const forms = ref([])

export function useForms() {

    const fetchForms = async () => {
        const snapshot = await getDocs(collection(db, 'skemaer'))
        forms.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    }


    const addForm = async (form) => {
        await addDoc(collection(db, 'skemaer'), form)
        await fetchForms()
    }


    const deleteForm = async (id) => {
        await deleteDoc(doc(db, 'skemaer', id))
        await fetchForms()
    }

    onMounted(fetchForms)

    return { forms, fetchForms, addForm, deleteForm }
}