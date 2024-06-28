import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api, setToken } from '@/services/api'
import { getUser, removeUser, saveUser } from '@/services/storage'

const storageUser = getUser();

export const useUserStore = defineStore('user', () => {

  const user = ref({
    _id: storageUser?._id,
    email: storageUser?.email,
    name: storageUser?.name,
    token: storageUser?.token
  })

  async function login(email, password, router) {
    try {
      const { data } = await api.post('users/signin', {
        email,
        password
      })
      user.value = data
      setToken(data.token) // header axios
      saveUser(data) // save to localStorage
      router.push('/todos')
    } catch (error) {
      console.log(error)
    }
  }

  async function logout() {
    try {
      await api.post('users/signout', {})
      user.value = {
        _id: null,
        email: null,
        name: null,
        token: null
      }
      setToken(null)
      removeUser()
    } catch (error) {
      console.log(error)
    }
  }

  return { user, login, logout }
})
