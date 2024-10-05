<script setup>
import { computed, ref } from 'vue'
import { TODO_CATEGORY } from './utils/constant'

const todoTitle = ref('')
const todoCategory = ref('')

const todos = ref([
  {
    id: 1,
    title: 'Learning VueJS',
    isCompleted: false,
    category: TODO_CATEGORY.LEARNING
  },
  {
    id: 2,
    title: 'Gym',
    isCompleted: false,
    category: TODO_CATEGORY.DAILY_ROUTINE
  },
  {
    id: 3,
    title: 'Have breakfast',
    isCompleted: false,
    category: TODO_CATEGORY.DAILY_ROUTINE
  }
])

const todoCategories = computed(() => {
  return Object.values(TODO_CATEGORY).map((item) => {
    switch (item) {
      case '1':
        return {
          title: 'Daily routine',
          value: item
        }
      case '2':
        return {
          title: 'Working',
          value: item
        }
      case '3':
        return {
          title: 'Relaxing',
          value: item
        }
      case '4':
        return {
          title: 'Learning',
          value: item
        }
      default:
        return {}
    }
  })
})

const handleAddNewTodo = () => {
  const newTodo = {
    id: todos.value.length + 1,
    title: todoTitle,
    isCompleted: false,
    category: todoCategory
  }
  todos.value.push(newTodo)
}

const handleToggleCompleteTodo = (id) => {
  const updatedTodos = todos.value.map((todo) =>
    todo.id === id
      ? {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      : {
          ...todo
        }
  )
  todos.value = updatedTodos
}
</script>

<template>
  <div class="max-w-[500px] m-[0_auto]">
    <h6 class="text-center">Todo Application</h6>
    <form @submit.prevent="handleAddNewTodo">
      <div class="flex gap-3 flex-col">
        <div class="">
          <label for="todo" class="block">Title </label>
          <input
            type="text"
            id="todo"
            v-model="todoTitle"
            class="border-[1px] rounded-md focus:border-blue-300 hover:border-blue-300 outline-none p-2 text-sm mr-2 w-full"
          />
        </div>
        <div>
          <label>Category</label>
          <div class="flex flex-col gap-2">
            <div
              v-for="cateogry in todoCategories"
              :key="cateogry.value"
              class="flex items-center gap-x-1"
            >
              <input
                :value="cateogry.value"
                :id="cateogry.title"
                type="checkbox"
                v-model="todoCategory"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label :for="cateogry.title">{{ cateogry.title }}</label>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        class="outline-none border-none p-2 rounded-md bg-blue-300 text-center w-full mt-3"
      >
        Add to do
      </button>
    </form>

    <ul class="mt-5 w-full">
      <li
        class="cursor-pointer p-2 bg-blue-200 mb-1 rounded-[4px] hover:bg-blue-300 transition-all duration-150"
        v-for="todo in todos"
        @click="() => handleToggleCompleteTodo(todo.id)"
        :key="todo.id"
        :style="{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }"
      >
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
