import { defineStore } from 'pinia'
import shuffleArray from '~/helpers/shuffleArray'
import { GridImage } from '~/types'

// this store uses Pinia 🍍 as state manegement library (next generation Vuex)

const GRID_IMAGE = [
  {
    id: 1,
    src: 'https://picsum.photos/id/58/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 2,
    src: 'https://picsum.photos/id/30/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 3,
    src: 'https://picsum.photos/id/111/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 4,
    src: 'https://picsum.photos/id/152/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 5,
    src: 'https://picsum.photos/id/175/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 6,
    src: 'https://picsum.photos/id/182/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 7,
    src: 'https://picsum.photos/id/211/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 8,
    src: 'https://picsum.photos/id/250/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 9,
    src: 'https://picsum.photos/id/392/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 10,
    src: 'https://picsum.photos/id/433/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 11,
    src: 'https://picsum.photos/id/58/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 12,
    src: 'https://picsum.photos/id/30/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 13,
    src: 'https://picsum.photos/id/111/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 14,
    src: 'https://picsum.photos/id/152/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 15,
    src: 'https://picsum.photos/id/175/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 16,
    src: 'https://picsum.photos/id/182/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 17,
    src: 'https://picsum.photos/id/211/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 18,
    src: 'https://picsum.photos/id/250/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 19,
    src: 'https://picsum.photos/id/392/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 20,
    src: 'https://picsum.photos/id/433/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 21,
    src: 'https://picsum.photos/id/503/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 22,
    src: 'https://picsum.photos/id/582/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 23,
    src: 'https://picsum.photos/id/639/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 24,
    src: 'https://picsum.photos/id/824/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 25,
    src: 'https://picsum.photos/id/859/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 26,
    src: 'https://picsum.photos/id/1069/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 27,
    src: 'https://picsum.photos/id/1080/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 28,
    src: 'https://picsum.photos/id/1084/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 29,
    src: 'https://picsum.photos/id/1084/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 30,
    src: 'https://picsum.photos/id/1080/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 31,
    src: 'https://picsum.photos/id/503/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 32,
    src: 'https://picsum.photos/id/582/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 33,
    src: 'https://picsum.photos/id/639/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 34,
    src: 'https://picsum.photos/id/824/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 35,
    src: 'https://picsum.photos/id/859/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 36,
    src: 'https://picsum.photos/id/1069/300/300',
    active: false,
    alt: 'image',
    disabled: false,
  },
]
const GRID_IMAGE_TEAM = [
  {
    id: 1,
    src: 'src/assets/images/sabbir_al_razi.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 2,
    src: 'src/assets/images/babu_one.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 3,
    src: 'src/assets/images/mohsin.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 4,
    src: 'src/assets/images/naim.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 5,
    src: 'src/assets/images/shohanul_azad.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 6,
    src: 'src/assets/images/jobayer.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 7,
    src: 'src/assets/images/rifat_sakib.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 8,
    src: 'src/assets/images/rishad.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 9,
    src: 'src/assets/images/riyad.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 10,
    src: 'src/assets/images/salman_jahir.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 11,
    src: 'src/assets/images/shafkat.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 12,
    src: 'src/assets/images/shakil.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 13,
    src: 'src/assets/images/shayan.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 14,
    src: 'src/assets/images/sohel_aman.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 15,
    src: 'src/assets/images/sourab.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 16,
    src: 'src/assets/images/sumon.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 17,
    src: 'src/assets/images/babu_two.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 18,
    src: 'src/assets/images/group_photo.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 19,
    src: 'src/assets/images/group_photo.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 20,
    src: 'src/assets/images/babu_two.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 21,
    src: 'src/assets/images/sabbir_al_razi.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 22,
    src: 'src/assets/images/babu_one.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 23,
    src: 'src/assets/images/mohsin.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 24,
    src: 'src/assets/images/naim.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 25,
    src: 'src/assets/images/shohanul_azad.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 26,
    src: 'src/assets/images/jobayer.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 27,
    src: 'src/assets/images/rifat_sakib.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 28,
    src: 'src/assets/images/rishad.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 29,
    src: 'src/assets/images/riyad.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 30,
    src: 'src/assets/images/salman_jahir.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 31,
    src: 'src/assets/images/shafkat.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 32,
    src: 'src/assets/images/shakil.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 33,
    src: 'src/assets/images/shayan.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 34,
    src: 'src/assets/images/sohel_aman.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 35,
    src: 'src/assets/images/sourab.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
  {
    id: 36,
    src: 'src/assets/images/sumon.jpg',
    active: false,
    alt: 'image',
    disabled: false,
  },
]
export const useGridStore = defineStore('grid', {
  state: () => ({
    gridImages: shuffleArray(GRID_IMAGE) as GridImage[],
    counterr: 0,
    prevImage: null as any,
    pointTable: [
      {
        label: 'Player A',
        score: 0,
        active: true,
        participant: true,
      },
      {
        label: 'Player B',
        score: 0,
        active: false,
        participant: true,
      },
      {
        label: 'Player C',
        score: 0,
        active: false,
        participant: false,
      },
      {
        label: 'Player D',
        score: 0,
        active: false,
        participant: false,
      },
    ],
    imageCollection: 'random',
    players: 2,
  }),

  actions: {
    async populateGridImage() {
      return (this.gridImages = shuffleArray(GRID_IMAGE))
    },

    // showAlert() {
    //   // Use sweetalert2
    //   this.$swal('Hello Vue world!!!')
    // },

    async updatePlayers() {
      if (this.players === 2) {
        this.pointTable[0].participant = true
        this.pointTable[1].participant = true
        this.pointTable[2].participant = false
        this.pointTable[3].participant = false
      } else if (this.players === 3) {
        this.pointTable[2].participant = true
        this.pointTable[3].participant = false
      } else if (this.players === 4) {
        this.pointTable[2].participant = true
        this.pointTable[3].participant = true
      }
    },

    async changeImageCollection(e: any) {
      console.log('flag', e.target.value)
      this.imageCollection = e.target.value
    },

    async setPlayerNumber(e: any) {
      this.players = e.target.value
    },

    async updateGridImage() {
      if (this.imageCollection === 'random') {
        this.gridImages = shuffleArray(GRID_IMAGE).map(image => {
          image.disabled = false
          image.active = false
          return image
        })
      } else if (this.imageCollection === 'team') {
        this.gridImages = shuffleArray(GRID_IMAGE_TEAM).map(image => {
          image.disabled = false
          image.active = false
          return image
        })
      }
    },

    async resetImage() {
      // Toggle the active state of the clicked image and deactivate others
      await this.gridImages.forEach(image => {
        image.active = false
      })
      this.prevImage = null
      // this.pointTable = 0;
    },

    async resetGame() {
      // Toggle the active state of the clicked image and deactivate others
      console.log('hi')
      this.resetImage()
      this.updateGridImage()
      this.updatePlayers()
      this.pointTable = [
        {
          label: 'Player A',
          score: 0,
          active: true,
          participant: true,
        },
        {
          label: 'Player B',
          score: 0,
          active: false,
          participant: true,
        },
      ]
      this.prevImage = null
    },

    async disableExpiredPair(prevImage: any, currentImage: any) {
      this.gridImages.map(image => {
        if (image.src === currentImage?.src && image.id !== currentImage?.id) {
          image.disabled = true
        }
      })
      this.gridImages.map(image => {
        if (image.src === prevImage?.src && image.id !== prevImage?.id) {
          image.disabled = true
        }
      })
    },

    async calculateScore(prevImage: any, currentImage: any) {
      if (
        !prevImage?.disabled &&
        prevImage?.id !== currentImage.id &&
        prevImage?.src === currentImage.src
      ) {
        setTimeout(() => {
          if (this.pointTable[0]?.active) {
            this.pointTable[0].score = this.pointTable[0].score + 1
          } else {
            this.pointTable[1].score = this.pointTable[1].score + 1
          }
          this.disableExpiredPair(prevImage, currentImage)
        }, 1000)
      } else {
        setTimeout(() => {
          if (this.pointTable[0]?.active) {
            this.pointTable[0].active = false
            this.pointTable[1].active = true
          } else {
            this.pointTable[1].active = false
            this.pointTable[0].active = true
          }
        }, 1000)
        this.prevImage = null
      }
    },

    async toggleImage(index: any) {

      if(!this.gridImages[index]?.active){
        if (this.counterr === 2) {
          this.counterr = 0
          await this.resetImage()
        }
        //   // Toggle the active state of the clicked image and deactivate others
        if (
          this.gridImages[index].active === false &&
          this.gridImages[index].disabled === false
        ) {
          this.counterr++
          this.gridImages[index].active = true
          if (this.prevImage !== null) {
            //   setTimeout(
            //     () =>
            this.calculateScore(this.prevImage, this.gridImages[index])
            //     1000
            //   )
          } else this.prevImage = this.gridImages[index]
        }
      }
    },
  },
  getters: {
    getGridImages: state => state.gridImages,
    getTasksLength: state => state.gridImages.length,
    point: state => state.pointTable,
    imageCollValue: state => state.imageCollection,
  },
})
