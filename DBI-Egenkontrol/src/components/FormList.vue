<script setup>
import FormCard from '@/components/FormCard.vue'
import { useForms } from '@/useForms'
import { useRouter } from 'vue-router'

const { forms, deleteForm: removeForm } = useForms()
const router = useRouter()

const goToForm = (id) => {
  router.push(`/forms/${id}`)
}

const editForm = (form) => {
  console.log('Editing', form)
}

const deleteForm = async (id) => {
  if (confirm('Er du sikker på, at du vil slette dette skema?')) {
    await removeForm(id)
  }
}
</script>

<template>
  <div class="cards-wrapper">
    <FormCard
      v-for="form in forms"
      :key="form.id"
      :form="form"
      @open="goToForm"
      @edit="editForm"
      @delete="deleteForm"
    />
  </div>
</template>

<style scoped>
.cards-wrapper{
display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
