class Artikel{
    static counter = 1
    id = Artikel.counter = 1
    index
    name
    gekauft = true
  constructor(name, index) {
        this.id = Artikel.counter++
      this.name = name
      this.index = index
  }
}
    export  {Artikel}