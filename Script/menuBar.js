function myFunction() {
    let x = document.getElementById("TopNav");
    if (x.className === "TopNav") {
        x.className += " responsive";
    } else {
        x.className = "TopNav";
    }
}