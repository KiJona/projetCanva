import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un nuage
 */
export class Nuage extends AbstractForm {

  // you create new Rectangles by calling this as a function
  // these are the arguments you pass in
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesanteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur, ordreConstruction)
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()

    let ox = this.x
    let oy = this.y

    ctx.beginPath();
    ctx.arc(ox+75, oy+75, 10, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.fillStyle = '#E0FFFF';
    ctx.moveTo(ox+110,oy+25);
    ctx.fill();
    

    ctx.beginPath();
    ctx.arc(ox+130, oy+75, 10, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.fillStyle = '#E0FFFF';
    ctx.moveTo(ox+150,oy+25);
    ctx.fill();
   

    ctx.beginPath();
    ctx.arc(ox+130, oy+75, 10, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.fillStyle = '#E0FFFF';
    ctx.moveTo(ox+180,oy+25);
    ctx.fill();
    
    
    ctx.restore()

  
}
 /**
   * get array of forms
   * @return {[Nuage,...]}
   */
  static buildForms() {
    // create a new rectangle object using the Immeuble class
    const myNuage = new Nuage(350, 100, 100, 100, 'gold', '', 2, true)
    let max = ~~(Math.random() * 6)+5  // max in [5..10]
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Nuage(
          ~~(Math.random() * 3 * myNuage.x + 50),
          ~~(Math.random() * myNuage.y),
          ~~(Math.random() * 3 * myNuage.width + 10),
          ~~(Math.random() * myNuage.height + 10),
          myNuage.fillColor,
          myNuage.strokeColor,
          '',
          i % 2 === 0 // pesenteur une fois sur 2
        )
      )
    }
    // retourne un tableau d'objets de type Nuage
    return forms
  }

}

