addEventListener("DOMContentLoaded", async()=>{
    let petecion = await fetch("app.php");
    let data = await petecion.text();
    let fragment = new DocumentFragment();
    fragment.appendChild(document.querySelector("h1"));
    fragment.children[0].insertAdjacentText("beforeend", data);
    document.body.appendChild(fragment);
    console.log(data);
});