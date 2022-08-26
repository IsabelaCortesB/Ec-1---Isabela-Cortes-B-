import * as components from "./components/index.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }
// 
    render(){
        this.shadowRoot.innerHTML = `
        <my-instagram name="isacortes12"
            imagenpost="./img/post.jpg"
            imagenusuario="./img/usuario.png"
            ubicacion="Asturias, Spain"
            views="21.896 views"
            comments= "view all 235 comments"
            day= "2 DAYS AGO"
            infopublicacion= "instagram Template"
            hashtag ="#vector"
                          
        ></my-instagram>
        `
    }
}

customElements.define("app-container",AppContainer);