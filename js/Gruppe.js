class Gruppe{
    artikelListe = []
    index
    name
    static counter = 1
    id = Gruppe.counter = 1
    constructor(name, index) {
        this.name = name
        this.index = index
    }
}
export {Gruppe}

artikelAuflisten(gekauft)
    for (let artikel of this.artikelListe) {
        if (artikel.name == suchName) {
            return artikel
        }
    }
    if (meldungAusgeben) {
        // App.informieren(`[${this.name}] Artikel "${suchName}" nicht gefunden`, true)
    }
    return null



