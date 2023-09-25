<script setup>
import { ref, computed } from 'vue'
import Todo from "./components/Todo/Todo.vue"
import Grid from './components/Grid/Grid.vue'
import Counter from './components/Counter/Counter.vue'

const routes = {
  '/': Grid,
  '/todo': Todo,
  '/memory-exercise': Grid,
  '/counter': Counter
}


const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <a href="#/">Home</a> |
  <!-- <a href="#/todo">Todo</a> | -->
  <a href="#/memory-exercise">Memory Exercise</a> 
  <!-- <a href="#/counter">Counter</a>  -->
  <component :is="currentView" />
</template>
