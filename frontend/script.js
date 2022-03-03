function loadEvent() {
    
    let rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforeend", `
    
    <div id="container">
        <form action="">
        <label class="labels" for ="username">Create your username!</label>
        <br>
        <input type="text" name="username" id="username">
        <br>
        <label class="labels" for ="email">Add your e-mail address!</label>
        <br>
        <input type="text" name="email" id="email">
        <br>
        <label class="labels" for ="password">Add your password!</label>
        <br>
        <input type="text" name="password" id="password">
        <br>
        <select id="animals" name="animals">
            <option value="both">Both</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
        </select>
        <br>
        <button>Submit!</button>
    <div>
    `)

    //const username = document.querySelector('#username').value;
    //const email = document.querySelector('#email').value;
    //const password = document.querySelector('#password').value;

    //console.log(username);
    //console.log(email);
    //console.log(password);

    const inputList = document.querySelectorAll("input")

    console.log(typeof inputList);
    console.log(Array.isArray(inputList))

    Array.from(inputList).map(function(input){
        input.addEventListener("input", function(event){
            console.log(event.target.value)
        })
    })

    const form = rootElement.querySelector("form");

    form.querySelector("select").addEventListener("input", function(event) {
        console.log(event.target.value)
    })
    
    form.addEventListener("submit", function(event){
        event.preventDefault()
        console.log(event.target);
    })
    
    

    /* 
    for (const input of inputList) {
        input.addEventListener("input", function(event){
            console.log(event.target.value)
        })
    }
    */

}
window.addEventListener("load", loadEvent)
