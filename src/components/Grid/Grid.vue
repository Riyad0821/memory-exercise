<template>
  <div class="container">
    <!-- <v-chip class="mb-2">
            {{ point }}
        </v-chip> -->
    <div class="score">
      <p
        class=" player player-a"
        :class="{ activeplayer: gridStore?.point[0]?.active }"
      >
        Player A:
        <digital-transform
          :value="gridStore?.point[0]?.score"
          interval="500"
          dislocation="false"
        />
      </p>
      <p
        class=" player player-b"
        :class="{ activeplayer: gridStore?.point[1]?.active }"
      >
        Player B:
        <digital-transform
          :value="gridStore?.point?.[1].score"
          interval="500"
          dislocation="false"
        />
      </p>
    </div>
    <div class="grid">
      <div
        v-for="( image, index ) in gridStore.getGridImages "
        :key="index"
        @click="gridStore.toggleImage(index)"
      >
        <img
          :src="image?.active && !image?.disabled ? image.src : image?.disabled ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJxl-ZgZxrnUFSlM598kGfQzBZ7SFr8iogw&usqp=CAU' : 'https://www.cheaptilesonline.com.au/wp-content/uploads/2020/05/Dotti-Light-Grey-200x200-430.jpg'"
          :alt="image.alt"
          :class="{ active: image.active }"
        >
      </div>
    </div>
    <div class="image-reset mt-3">
      <v-radio-group
        v-model="gridStore.imageCollValue"
        class="image-group"
        label="Choose Image Collection"
        @change="gridStore.changeImageCollection"
      >
        <v-radio
          label="Random"
          value="random"
        />
        <v-radio
          label="Our Team"
          value="team"
        />
      </v-radio-group>
      <!-- <v-radio-group
          v-model="gridStore.imageCollValue"
          class="image-group"
          label="Number of players"
          @change="gridStore.setPlayerNumber"
        >
          <v-radio
            label="2"
            value="2"
          />
          <v-radio
            label="3"
            value="3"
          />
          <v-radio
            label="4"
            value="4"
          />
        </v-radio-group> -->

      <v-dialog
        v-model="dialog"
        persistent
        width="auto"
        class="reset-game"
      >
        <template #activator="{ props }">
          <v-btn
            color="success"
            v-bind="props"
            class=""
          >
            Reset
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-h5">
            Are you sure?
          </v-card-title>
          <v-card-text>The game will restart</v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="green-darken-1"
              variant="text"
              @click="dialog = false"
            >
              Continue
            </v-btn>
            <v-btn
              color="green-darken-1"
              variant="text"
              @click="handleResetGame"
            >
              Confirm
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue'
import { defineComponent } from 'vue'
import { useGridStore } from '~/stores/userGridStore'
import DigitalTransform from "vue3-digital-transform";

export default defineComponent({
    name: 'Grid',
    components: {
        DigitalTransform
    },
    setup() {
        const gridStore = useGridStore()

        // onMounted(() => {
        //     gridStore.populateGridImage()
        // })

        return { gridStore }
    },
    data() {
        return {
            dialog: false,
        }
    },
    computed: {
        // Define a computed property that returns the image source based on the condition
        getImageSource(image) {
            if (image.active) {
                return 'https://picsum.photos/id/300/300'; // Set the image source when the condition is true
            } else {
                return 'image2.jpg'; // Set the image source when the condition is false
            }
        },
    },
    methods: {
        handleResetGame() {
            this.gridStore.resetGame();
            this.dialog = false;
        },
    },

})

</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* Center horizontally */
    align-items: center;
    /* Center vertically */
    // height: 100vh;
    /* Optionally, set a height to center within the viewport */
    margin-top: 100px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(6, 80px);
    /* 6 columns of 0.5 inches each */
    grid-gap: 5px;
    /* Gap between grid items */

}

.active {
    // border: 2px solid blue;
    // height: 40px;
    /* Add styling for the active image */
}

.grid img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Ensure the image covers the entire grid cell */
    border: 1px solid #ccc;
}

.reset-btn {
    margin-top: 1rem;
}

.score {
    justify-content: space-between;
    display: flex;
    margin-bottom: 1rem;
}


.image-reset {
    // justify-content: space-between;
    display: flex;
    flex-direction: column;
    margin-right: 30px;
}

.player {
    padding: 5px;
    border: rgb(201, 196, 196) 3px solid;
    border-radius: 5px;
    color: rgb(201, 196, 196);
    font-weight: bold;
}

.player-a {
    margin-right: 160px;
}

.player-b {
    margin-left: 160px;
}

.activeplayer {
    border: rgb(37, 199, 64) 3px solid !important;
    color: rgb(37, 199, 64) !important;
}

.image-group {
    // margin-right: 10rem;
}

.reset-game {
    // margin-left: 12rem;
}
</style>
