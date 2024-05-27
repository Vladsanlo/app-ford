import { LitElement, css, html } from 'lit'

export class FordMustang extends LitElement {
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
    this.title = 'Ford Mustang'

    this.title1 = 'Número y configuración de cilindros:     '
    this.paragraph1 = '4 o 8 cilindros en línea o V6 o V8.    '

    this.title2 = 'Desplazamiento del motor:     '
    this.paragraph2 = 'Varía según el modelo y la generación, típicamente entre 2.3 y 5.0 litros.    '

    this.title3 = 'Potencia del motor:     '
    this.paragraph3 = 'Entre 310 y 760 hp (231-567 kW).    '

    this.title4 = 'Torque del motor:     '
    this.paragraph4 = 'Entre 350 y 625 lb-pie (475-847 Nm).    '

    this.title5 = 'Capacidad de ocupantes:  '
    this.paragraph5 = '4 personas.  '

    this.title6 = 'Tipo de tracción: '
    this.paragraph6 = 'Trasera.  '

    this.title7 = 'Tipo de transmisión:   '
    this.paragraph7 = 'Manual o automática (CVT o automática de doble embrague).    '

    this.title8 = 'Capacidad de carga: '
    this.paragraph8 = 'Aproximadamente 13 pies cúbicos en el maletero.    '

    this.title9 = 'Capacidad de remolque:  '
    this.paragraph9 = 'No diseñado para remolcar.  '

    this.title10 = 'Funcionalidades especiales:  '
    this.paragraph10 = 'Características de rendimiento deportivo, sistemas de infoentretenimiento avanzados y asistentes de conducción específicos para el rendimiento.    '

    this.imageURL = 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_8a256cee2c51489a9b2d7f7144d5645c.webp  '
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
        background:  #8c0000
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

window.customElements.define('ford-mustang', FordMustang)
