class Factory {
  creating(){
    console.log("creating product")
  }
}

class Nescal extends Factory {
  creating(){
    console.log("created Nescal")
  }
}

class Water {
  creating(){
    console.log("creating Water")
  }
}





module.exports = { Factory , Nescal, Water}