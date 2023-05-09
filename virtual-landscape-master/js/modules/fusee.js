import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un triangle
 */
export class fusee extends AbstractForm {
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
    
    let ox = this.x
    let oy = this.y

    ctx.beginPath();
        ctx.fillStyle = "gray";
        ctx.fillRect(ox+75, oy+150, 50, 200);

        ctx.beginPath();
        ctx.moveTo(ox+75,oy+ 150);
        ctx.lineTo(ox+100, oy+100);
        ctx.lineTo(ox+125, oy+150);
        ctx.closePath();
        ctx.fillStyle = "red";
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(ox+100, oy+200, 25, 0, 2*Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(ox+100, oy+200, 20, 0, 2*Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(ox+100,oy+ 200, 15, 0, 2*Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "orange";
        ctx.arc(ox+100,oy+ 200, 10, 0, 2*Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.arc(ox+100, oy+200, 5, 0, 2*Math.PI);
        ctx.fill();




    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[fusee,...]}
   */
  static buildForms() {
    // create a new rectangle object using the Immeuble class
    const   myfusee= new  fusee(250, 70, 50, 50, 'gold', '', 2, true)
    let max = ~~(Math.random() * 5) +3 // max in [5..10]
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new fusee(
          ~~(Math.random() * 3 *   myfusee.x + 50),
          ~~(Math.random() *   myfusee.y),
          ~~(Math.random() * 3 *   myfusee.width + 10),
          ~~(Math.random() *  myfusee.height + 10),
          myfusee.fillColor,
          myfusee.strokeColor,
          '',
          i % 2 === 0 // pesenteur une fois sur 2
        )
      )
    }
    // retourne un tableau d'objets de type Triangle
    return forms
  }

}
