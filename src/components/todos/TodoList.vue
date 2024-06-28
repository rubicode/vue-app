<script setup>

import TodoItem from './TodoItem.vue';
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user';
import { useTodosStore } from '@/stores/todos';

const todosStore = useTodosStore()
const userStore = useUserStore()

onMounted(() => {
    todosStore.loadTodo(userStore.user._id)
})


</script>

<template>
    <table className="table table-striped">
        <thead>
            <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Complete</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <TodoItem v-for="(item, index) in todosStore.todos" :key="item._id" :no="index + 1" :todo="item" />
        </tbody>
    </table>
</template>