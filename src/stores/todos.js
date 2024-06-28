import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/services/api'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref([])

  const todosDone = computed(() => todos.value.filter(item => item.complete))

  async function loadTodo(executor) {
    try {
      const { data } = await api.get('todos', {
        params: {
          executor
        }
      })
      todos.value = data.todos.map(item => {
        item.sent = true
        return item
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function createTodo(title, executor) {
    const _id = Date.now().toString()
    todos.value.unshift({ _id, title, complete: false, executor })
    try {
      const { data } = await api.post('todos', {
        title,
        executor
      })
      todos.value = todos.value.map(item => {
        if (item._id === _id) {
          item._id = data._id
        }
        return item
      })
    } catch (error) {
      console.log(error)
      todos.value = todos.value.map(item => {
        if (item._id === _id) {
          item.sent = false
        }
        return item
      })
    }
  }

  async function updateTodo(_id, title, complete) {
    try {
      const { data } = await api.put(`todos/${_id}`, {
        title,
        complete
      })
      todos.value = todos.value.map(todo => {
        if (todo._id === data._id) {
          todo.title = data.title
          todo.complete = data.complete
        }
        return todo
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function removeTodo(_id) {
    try {
      const { data } = await api.delete(`todos/${_id}`)
      todos.value = todos.value.filter(todo => todo._id !== data._id)
    } catch (error) {
      console.log(error)
    }
  }

  return { todos, todosDone, loadTodo, createTodo, updateTodo, removeTodo }
})
