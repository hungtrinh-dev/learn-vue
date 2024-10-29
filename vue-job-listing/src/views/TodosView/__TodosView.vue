<template>
  <GeneralLayout>
    <Container class="h-full rounded-md p-2" group-name="">
      <Draggable>
        <div class="bg-gray-50"></div>
      </Draggable>
    </Container>
  </GeneralLayout>
</template>
<script setup>
import GeneralLayout from '@/layouts/GeneralLayout.vue'
import { Container, Draggable } from 'vue3-smooth-dnd'
</script>

<!-- Styles -->
<style>
/** NB: dont remove,
* When using orientation="horizontal" it auto sets "display: table"
* In this case we need flex and not display table
*/
.smooth-dnd-container.horizontal {
  display: flex !important;
}
</style>
