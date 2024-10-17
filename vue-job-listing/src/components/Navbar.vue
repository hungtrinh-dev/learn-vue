<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import logo from '@/assets/img/logo.png'
import { routes } from '@/router'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const isActiveLink = (routePath) => {
  return route.path === routePath
}

const navbarRoutes = routes.filter((r) => r.isNavbar)
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue Jobs</span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                v-for="route in navbarRoutes"
                :key="route.name"
                :to="route.path"
                :class="[
                  isActiveLink(`${route.path}`)
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md'
                ]"
                >{{ route.name }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
