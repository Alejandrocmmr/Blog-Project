let RandonNumber = () => {
    return Math.floor(Math.random() * 11)
  }
  let teste = 1
  while (teste == 1) {
    setTimeout(() => {
      console.log(RandonNumber())
    }, 400)
  }