let bd = document.getElementById('bd');
let salesmam = document.getElementById('salesman');

let SalesmanForm = document.getElementById("container1");
let bdForm = document.getElementById("container2");

bd.onclick = function() {
   bdForm.style.display = "inline";
   SalesmanForm.style.display = "none";
};


salesmam.onclick = function () {
   SalesmanForm.style.display = "inline";
   bdForm.style.display = "none";
};


