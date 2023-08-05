import http from '../utils/http'
import { defineStore } from 'pinia'

const useUserStore = defineStore('users', {
  state: () => ({
    users: []
  }),
  actions: {
    async fetchUsers() {
      try {
        const { data } = await http.get('/users')
        this.users = data
        return data
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async deleteUser(user) {
      try {
        await http.delete(`/users/${user.id}`)

        const index = this.users.findIndex((u) => u.id === user.id)
        if (index === -1) return
        this.users.splice(index, 1)
        return user
      } catch (e) {
        return Promise.reject(e)
      }
    }
  }
})

export default useUserStore
