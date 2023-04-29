class Kutya {
    #index;
    constructor(szuloElem, kutyaAdat) {
    
      this.nev = kutyaAdat.nev
      szuloElem.append(`<div class='elem'><p>${this.nev}</p></div>`);
  
      this.divElem = $("article div:last-child");
  
      this.pElem = $("article div:last-child p");
  
      this.divElem.on("click", () => {
        // this.setElem("X");
        //console.log(this.#index);
        // létrehozunk egy saját eseményt: elemKattintás
        this.kattintasTrigger();
      });
    }
    getIndex() {
      return this.#index;
    }
    setElem(adat) {
      this.pElem.html(adat);
    }
    kattintasTrigger() {
      // létrehozza a saját eseményünket
      const esemeny = new CustomEvent("elemKattintas", {
        detail: this /*.#index*/,
      });
      window.dispatchEvent(esemeny);
    }
  }
  
  export default Kutya;
  