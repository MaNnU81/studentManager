class SuperDialog extends HTMLElement{

constructor() {
    super()
    this.shadow = this.attachShadow({ mode: "open" });
}

connectedCallback(){
    this.style();
    this.render();
}

style(){
    const style = document.createElement('style');
    
    style.innerText = `

    `
    this.shadow.appendChild(style);
}

render(){
    `<dialog id="dialog">
        <form id="form">
            <label for="name">Nome</label>
            <input type="text" name="name" id="name">
            <label for="yob">Anno di nascita</label>
            <input type="number" name="yob" id="yob">
        </form>
        <button id="cancel-btn">cancel</button>
        <button id="ok-btn">ok</button>
    </dialog>`
    const title  = document.createElement('h1');
    title.classList.add('main-title');
    const titleAttribute = this.getAttribute('super-title');
    const titleNode = document.createTextNode(titleAttribute);
    title.appendChild(titleNode);
    this.shadow.appendChild(title);
}

}

customElements.define('super-dialog', SuperDialog);