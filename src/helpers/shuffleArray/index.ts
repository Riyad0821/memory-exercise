function shuffleArray(array: any) {
  const shuffledArray = [...array] //
  console.log('initial array', array)

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]] // Swap elements at i and j
  }
  console.log('shuffled array', shuffledArray)
  return shuffledArray
}

export default shuffleArray
