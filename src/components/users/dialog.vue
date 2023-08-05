<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'UsersDialog'
})

const drawer = ref(true)

function handleClose() {
  drawer.value = false
}

const drawerTitle = 'Foydalanuvchi yaratish'
</script>

<template>
  <el-drawer v-model="drawer" :title="drawerTitle" :before-close="handleClose">
    <el-form label-position="top" label-width="100px">
      <el-form-item label="Login">
        <el-input />
      </el-form-item>
      <el-form-item label="E-mail">
        <el-input />
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input />
      </el-form-item>
      <el-button type="danger" @click="handleClose">
        <el-icon><Close /></el-icon>
        Bekor qilish
      </el-button>
      <el-button type="success">
        <el-icon><Select /></el-icon>
        Saqlash
      </el-button>
    </el-form>
  </el-drawer>
</template>
