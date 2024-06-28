<script setup>
import { useTodosStore } from '@/stores/todos';
import { useUserStore } from '@/stores/user';
import { ref } from 'vue'

const todosStore = useTodosStore()
const userStore = useUserStore()

const title = ref('')

function onSubmit() {
    todosStore.createTodo(title.value, userStore.user._id)
    title.value = ''
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <div className="row mb-3">
            <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="title" v-model="title" />
            </div>
        </div>
        <button className="btn btn-primary" type="submit">tambah</button>
    </form>
</template>