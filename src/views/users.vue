<script setup>
import { onMounted } from 'vue'
import { ElNotification } from 'element-plus'
import useUserStore from '../stores/user'
import UsersDialog from '../components/users/dialog.vue'

defineOptions({
  name: 'UsersPage'
})

const store = useUserStore()

onMounted(() => {
  store.fetchUsers()
})

async function handleDelete(user) {
  try {
    await store.deleteUser(user)
    ElNotification.success("Foydalanuvchi muvaffaqiyatli o'chirildi")
  } catch (e) {
    ElNotification.error("Foydalanuvchini o'chirishda xatolik yuz berdi")
  }
}

function handleOpenDialog() {
  console.log('OPening...')
}
</script>

<template>
  <el-container>
    <el-aside>
      <UsersDialog />
    </el-aside>
    <el-main>
      <el-row align="middle" justify="space-between">
        <h3>Foydalanuvchilar</h3>
        <el-button type="primary" @click="handleOpenDialog">
          <el-icon><Plus /> </el-icon>
          Qo'shish
        </el-button>
      </el-row>
      <el-table :data="store.users">
        <el-table-column prop="id" label="ID" />
        <el-table-column prop="name" label="Nomi" />
        <el-table-column prop="username" label="Login" />
        <el-table-column prop="email" label="E-mail" />
        <el-table-column prop="address.city" label="Shahar" />
        <el-table-column prop="address.street" label="Ko'cha" />
        <el-table-column prop="actions" label="Amallar">
          <template #default="{ row: user }">
            <el-button type="warning">
              <el-icon><Edit /></el-icon>
            </el-button>
            <el-button type="danger" @click="handleDelete(user)">
              <el-icon><DeleteFilled /></el-icon>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>
