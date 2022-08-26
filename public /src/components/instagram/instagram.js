class MyInstagram extends HTMLElement {
   
    static get observedAttributes() {
      return ['name', 'views', "comments", "day", "infopublicacion", "hashtag", "imagenpost", "imagenusuario", "ubicacion"];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      

    }
    
    connectedCallback() {
      this.render();
    }
  
   
    attributeChangedCallback(propName, oldValue, newValue) {
      this[propName] = newValue;
      this.render();
    } 
  
    render() {
      this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="./src/components/instagram/style.css">
          <section>

          <div class="contenedorGeneral">

            <div class="textoSuperior">
                <h2>${this.name}</h2>
                <p>${this.ubicacion}</p>
            </div>

            <img id="ImagenPerfil" src="${this.imagenusuario}">
            <img id="ImagenPost" src="${this.imagenpost}">

            <div class="contenedorI>
                <img  class="imagenesAbajo" src="./img/enviar.png">
                <img  class="imagenesAbajo" src="./img/like.png">
                <img  class="imagenesAbajo" src="./img/comentario.png">
                <img  class="imagenesAbajo" src="./img/enviar.png">
                   
            </div>

            <img  id="puntos" src="./img/puntos.png">
            <img  id="guardar" src="./img/guardar.png">
            <img  id="opciones" src="./img/Opciones.png">
            <h1   id="views">${this.views}</h1>
            <h1   id="TextoNombre">${this.name}</h1>
            <p   id="texto2">${this.infopublicacion}</p>
            <p   id="texto3">${this.hashtag}</p>
            <p   id="texto4">${this.comments}</p>
            <p   id="texto5">${this.day}</p>
            


          </div>

          </section>
          `;
    }
  }
  
  customElements.define('my-instagram', MyInstagram);
  export default MyInstagram;
  