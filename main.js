import appPHP from './app.js';
addEventListener("DOMContentLoaded", async()=>{
    let json = await appPHP();
    let fragment = new DocumentFragment();
    fragment.appendChild(document.querySelector("p"));
    for(let [identificar,datos] of Object.entries(json)){
        let strong = document.createElement("STRONG");
        let mark = document.createElement("MARK");
        strong.insertAdjacentText("beforeend", `${identificar}: `);
        mark.insertAdjacentText("beforeend", datos);
        fragment.children[0].insertAdjacentElement("beforeend", strong);
        fragment.children[0].insertAdjacentElement("beforeend", mark);
        fragment.children[0].insertAdjacentHTML("beforeend", "<br>");
    }
    document.body.appendChild(fragment);
});