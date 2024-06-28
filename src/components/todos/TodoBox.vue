<script setup>
import { useUserStore } from '@/stores/user';
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const userStore = useUserStore();

function logout() {
  userStore.logout()
  router.push('/')
}
</script>

<template>
  <div className="card">
    <div className="card-header text-center">
      <h1>Todo List</h1>
    </div>
    <div className="card-body">
      <TodoForm />
    </div>
    <hr />
    <TodoList />
    <div className="card-footer">
      <button className="btn btn-danger" type="button" @click="logout">Logout</button>
    </div>
  </div>
</template>