<!-- Compositions API -->
<script setup>
import { onMounted, ref } from 'vue'

const newTask = ref('')
const message = ref('Hello Vue course')
const status = ref('pending')
const tasks = ref([])

const handleChangeUserStatus = () => {
  if (status.value === 'inactive') {
    status.value = 'pending'
  } else if (status.value === 'pending') {
    status.value = 'active'
  } else {
    status.value = 'inactive'
  }
}

const handleSubmitForm = () => {
  const newTaskValue = newTask.value.trim()
  if (newTaskValue !== '') {
    tasks.value.push(newTaskValue)
    newTask.value = ''
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}

onMounted(async () => {
  try {
    const apiResponse = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = (await apiResponse.json()) || []

    const todoResult = data.map((todo) => todo.title)
    tasks.value = todoResult
  } catch (error) {
    console.error('Something went wrong')
  }
})
</script>

<template>
  <h1>
    {{ message }}
    <p v-if="status === 'active'">User is active</p>
    <p v-else-if="status === 'pending'">User is pending</p>
    <p v-else>User is unactive</p>
    <br />
    <h3>Tasks</h3>
    <ul>
      <li v-for="(task, index) in tasks" :key="task">
        {{ task }}
        <button @click="deleteTask(index)">Delete</button>
      </li>
    </ul>
    <br />
    <form @submit.prevent="handleSubmitForm">
      <label for="new-task">Add new task</label>
      <input type="text" id="new-task" v-model="newTask" name="newTask" />
      <button type="submit">Submit</button>
    </form>

    <br />
    <!-- <button v-on:click="handleChangeUserStatus">Change User Status</button> -->
    <button @click="handleChangeUserStatus">Change User Status</button>
  </h1>
</template>
