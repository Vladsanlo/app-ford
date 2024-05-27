import { LitElement, css, html } from 'lit'

export class FordExplorer extends LitElement {
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
    this.title = 'Ford Explorer'

    this.title1 = 'Número y configuración de cilindros:     '
    this.paragraph1 = 'Principalmente V6.    '

    this.title2 = 'Desplazamiento del motor:     '
    this.paragraph2 = 'Varía según el motor específico, pero generalmente entre 2.3L y 3.0L.    '

    this.title3 = 'Potencia del motor:     '
    this.paragraph3 = 'Puede variar entre 300-400 caballos de fuerza (224-298 kW), dependiendo del motor específico.    '

    this.title4 = 'Torque del motor:     '
    this.paragraph4 = 'Depende del motor específico, pero puede variar entre 310-415 libras-pie (420-563 Nm).    '

    this.title5 = 'Capacidad de ocupantes:  '
    this.paragraph5 = ' Normalmente de 6 a 7 pasajeros, dependiendo de la configuración de los asientos.  '

    this.title6 = 'Tipo de tracción: '
    this.paragraph6 = ' Delantera o AWD (tracción en todas las ruedas) dependiendo de la configuración.   '

    this.title7 = 'Tipo de transmisión:   '
    this.paragraph7 = 'Automática de 10 velocidades.   '

    this.title8 = 'Capacidad de carga: '
    this.paragraph8 = 'Alrededor de 18-87 pies cúbicos (con los asientos traseros abatidos).    '

    this.title9 = 'Capacidad de remolque:  '
    this.paragraph9 = 'Hasta 5,600 libras (2,540 kg)  '

    this.title10 = 'Funcionalidades especiales:  '
    this.paragraph10 = 'Tecnología de seguridad avanzada, sistemas de entretenimiento para pasajeros, configuraciones de asientos flexibles, etc.    '

    this.imageURL = 'https://hips.hearstapps.com/hmg-prod/images/ford-explorer-timberline-1620215560.jpg?crop=0.856xw:1.00xh;0.0430xw,0&resize=2048:*  '
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
        color:#000000
      }

      #main{
        background:  #6f772a
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

window.customElements.define('ford-explorer', FordExplorer)
