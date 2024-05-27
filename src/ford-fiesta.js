import { LitElement, css, html } from 'lit'

export class FordFiesta extends LitElement {
  static get properties() {
    return {

      title: { type: String },

      title1: { type: String },
      paragraph1: { type: String },

      title2: { type: String },
      paragraph2: { type: String },

      title3: { type: String },
      paragraph3: { type: String },

      title4: { type: String },
      paragraph4: { type: String },


      title5: { type: String },
      paragraph5: { type: String },


      title6: { type: String },
      paragraph6: { type: String },


      title7: { type: String },
      paragraph7: { type: String },


      title8: { type: String },
      paragraph8: { type: String },

      title9: { type: String },
      paragraph9: { type: String },

      title10: { type: String },
      paragraph10: { type: String },

      imageURL: { type: String },


    }
  }

  constructor() {
    super()
    this.title = 'Ford Fiesta'

    this.title1 = 'Número y configuración de cilindros:     '
    this.paragraph1 = '3 o 4 cilindros en línea.  '

    this.title2 = 'Desplazamiento del motor:     '
    this.paragraph2 = 'Varía según la generación, típicamente entre 1.0 y 1.6 litros.    '

    this.title3 = 'Potencia del motor:     '
    this.paragraph3 = ' Entre 85 y 197 hp (63-147 kW).    '

    this.title4 = 'Torque del motor:     '
    this.paragraph4 = 'Entre 83 y 202 lb-pie (113-274 Nm).    '

    this.title5 = 'Capacidad de ocupantes:  '
    this.paragraph5 = '5 personas.  '

    this.title6 = 'Tipo de tracción: '
    this.paragraph6 = 'Delantera.  '

    this.title7 = 'Tipo de transmisión:   '
    this.paragraph7 = 'Manual o automática (CVT o automática de doble embrague).    '

    this.title8 = 'Capacidad de carga: '
    this.paragraph8 = 'Aproximadamente 10-15 pies cúbicos en el maletero.    '

    this.title9 = 'Capacidad de remolque:  '
    this.paragraph9 = 'No diseñado para remolcar.  '

    this.title10 = 'Funcionalidades especiales:  '
    this.paragraph10 = 'Varían según la generación y el paquete, pueden incluir características de seguridad avanzadas, sistemas de entretenimiento y asistencia al conductor.   '

    this.imageURL = 'https://img.remediosdigitales.com/78be4f/img_1069/450_1000.jpeg  '
  }

  render() {
    return html`
     <div id="main">
      
     <h1>${this.title}</h1>

     <h1>${this.title1}</h1>
      <p>${this.paragraph1}</p>

      <h1>${this.title2}</h1>
      <p>${this.paragraph2}</p>

      <h1>${this.title3}</h1>
      <p>${this.paragraph3}</p>

      <h1>${this.title4}</h1>
      <p>${this.paragraph4}</p>

      <h1>${this.title5}</h1>
      <p>${this.paragraph5}</p>

      <h1>${this.title6}</h1>
      <p>${this.paragraph6}</p>

      <h1>${this.title7}</h1>
      <p>${this.paragraph7}</p>

      <h1>${this.title8}</h1>
      <p>${this.paragraph8}</p>

      <h1>${this.title9}</h1>
      <p>${this.paragraph9}</p>

      <h1>${this.title10}</h1>
      <p>${this.paragraph10}</p>

      <div class="transport-img-container">
        <img class="car-img" src="${this.imageURL}">
      </div>

     </div>

    `
  }

  

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      #main{
        color:#5cd6d4
      }

      #main{
        background:  #1e4516
      }

      p{
        text-align:left
      }


      .car-img{
        width: 20vw;
    }
    
    .transport-img-container{
      text-align:center;
    }


    `
  }
}

window.customElements.define('ford-fiesta', FordFiesta)
