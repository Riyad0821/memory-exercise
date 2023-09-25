<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
    count.value++
}

function decrement() {
    count.value--
}

function reset() {
    count.value = 0;
}

// lifecycle hooks
onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <div class="container">
    <v-card
      class="px-5 py-5"
      color="secondary"
    >
      <div>
        <v-chip
          size="large"
          class=""
        >
          Count is: {{ count }}
        </v-chip>
      </div>
      <div class="sign-container ">
        <v-btn
          class="mr-2"
          @click="increment"
        >
          +
        </v-btn>
        <v-btn @click="decrement">
          -
        </v-btn>
      </div>
      <v-btn
        class="mt-3 ml-6"
        @click="reset"
      >
        Reset
      </v-btn>
    </v-card>
  </div>
</template>

<style scoped>
.sign-container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    font-weight: bold;
    margin-top: 3rem;
}
.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* Center horizontally */
    align-items: center;
    /* Center vertically */
    /* Optionally, set a height to center within the viewport */
    margin-top: 100px;
}
</style>
