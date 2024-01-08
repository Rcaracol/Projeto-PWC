document.addEventListener("DOMContentLoaded", function(){
  //Função que preencher automaticamente o solect com vários <option>
  //Função vai ser aquiiii
  fillBirthDateSelect();

});


//Evita que o formulário vá para outro lugar clicar no submit
document.addEventListener("submit", function(event){
  event.preventDefault();
  if(validateForm()){
    
  }
});

//Esta função vai preencher automaticamente o select
function fillBirthDateSelect(){
  var currentYear = new Date().getFullYear();
  var select = document.getElementById("birthYear");
  for(var year = 1900; year <= currentYear; year++) {
    var option = document.createElement("option");
    option.value = year;
    option.text = "Ano " + year;
    //Vai ao parent <select> e cria várias options umas por baixo das outras
    select.appendChild(option);
  }
}