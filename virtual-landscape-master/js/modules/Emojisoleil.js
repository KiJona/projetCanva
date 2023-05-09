import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un Emojisoleil
 * 
 */
export class Emojisoleil extends AbstractForm {
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }


  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()

    ctx.beginPath();
    ctx.arc(75, 85, 350, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.strokeStyle = '#191970';
    ctx.fillStyle = '#191970';
    ctx.moveTo(110,75);
    ctx.fill();
    ctx.stroke();
    

    ctx.beginPath();
    ctx.arc(75, 75, 260, 0, Math.PI, false);  // Bouche (sens horaire)
    ctx.moveTo(65, 65);
    ctx.strokeStyle = 'black'
    ctx.stroke();
    
    

    ctx.beginPath();
    ctx.arc(190, 65, 70, 0, Math.PI * 2, true);  // Oeil droite
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white'
    ctx.fill()
    ctx.stroke();
      
  
    
    
  
    ctx.restore()
    }

  /**
   * get array of forms
   * @return {[Emojisoleil,...]}
   */
  static buildForms() {
    // create a new rectangle object using the Immeuble class
    const myEmojisoleil = new Emojisoleil(250, 70, 100, 100, 'gold', '', 2, true)
    let max = ~~(Math.random() * 5) + 5 // max in [5..10]
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Emojisoleil(
          ~~(Math.random() * 3 * myEmojisoleil.x + 50),
          ~~(Math.random() * myEmojisoleil.y),
          ~~(Math.random() * 3 * myEmojisoleil.width + 10),
          ~~(Math.random() * myEmojisoleil.height + 10),
          myEmojisoleil.fillColor,
          myEmojisoleil.strokeColor,
          '',
          i % 2 === 0 // pesenteur une fois sur 2
        )
      )
    }
    // retourne un tableau d'objets de type Triangle
    return forms
  }

}
