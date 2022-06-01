document.querySelector("#questionTable").addEventListener("click", function (event) {
    event.target.classList.add("clicked")
    console.log("added class to " + this);
}) 