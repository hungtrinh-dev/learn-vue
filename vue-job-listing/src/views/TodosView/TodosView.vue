<template>
  <Container
    class="h-full flex overflow-x-auto gap-8 p-8"
    group-name="cols"
    tag="div"
    orientation="horizontal"
    @drop="onColumnDrop"
  >
    <Draggable
      class="bg-gray-200 dark:bg-gray-700 rounded-lg h-full w-96 flex-shrink-0 shadow-xl"
      v-for="column in scene.children"
      :key="column.id"
    >
      <div class="h-full flex flex-col">
        <!-- header -->
        <div class="cursor-move rounded-t-lg p-4 space-x-4 bg-green-500 text-white flex space-x-2">
          <span class="text-lg">{{ column.name }}</span>
        </div>
        <!-- column -->
        <Container
          class="flex-grow overflow-y-auto overflow-x-hidden"
          group-name="col-items"
          :should-accept-drop="(e, payload) => e.groupName === 'col-items' && !payload.loading"
          :get-child-payload="getCardPayload(column.id)"
          :drop-placeholder="{
            className: `bg-primary bg-opacity-20 border-dotted border-2 border-primary rounded-lg mx-4 my-2`,
            animationDuration: '200',
            showOnTop: true
          }"
          drag-class="bg-primary dark:bg-primary border-2 border-primary-hover text-white transition duration-100 ease-in z-50 transform rotate-6 scale-110"
          drop-class="transition duration-100 ease-in z-50 transform -rotate-2 scale-90"
          @drop="(e) => onCardDrop(column.id, e)"
        >
          <!-- Items -->
          <KanbanItem v-for="item in column.children" :key="item.id" :item="item"></KanbanItem>
        </Container>
      </div>
    </Draggable>
  </Container>
</template>

<script setup>
import { ref } from 'vue'
import { Container, Draggable } from 'vue3-smooth-dnd'

import { applyDrag, generateItems, generateWords } from '@/utils/helpers'
import KanbanItem from '@/components/TodoItem.vue'

const scene = ref({
  type: 'container',
  props: {
    orientation: 'horizontal'
  },
  children: generateItems(8, (i) => ({
    id: `column${i}`,
    type: 'container',
    name: generateWords(Math.random() * 2 + 1),
    props: {
      orientation: 'vertical'
    },
    children: generateItems(+(Math.random() * 10).toFixed() + 5, (j) => ({
      type: 'draggable',
      id: `${i}${j}`,
      loading: false,
      data: generateWords(Math.random() * 12 + 2)
    }))
  }))
})

const onColumnDrop = (dropResult) => {
  const updatedScene = applyDrag(scene.value.children, dropResult)
  scene.value.children = updatedScene
}

const onCardDrop = (columnId, dropResult) => {
  if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
    const column = scene.value.children.find((p) => p.id === columnId)
    const itemIndex = scene.value.children.indexOf(column)
    const newColumn = { ...column }

    if (dropResult.removedIndex === null && dropResult.addedIndex >= 0) {
      dropResult.payload.loading = true
      setTimeout(
        () => {
          dropResult.payload.loading = false
        },
        Math.random() * 5000 + 1000
      )
    }

    newColumn.children = applyDrag(newColumn.children, dropResult)
    scene.value.children.splice(itemIndex, 1, newColumn)
  }
}

const getCardPayload = (columnId) => {
  return (index) => scene.value.children.find((p) => p.id === columnId).children[index]
}
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
