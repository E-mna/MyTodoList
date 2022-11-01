let input = ducument.querySelector(".input");
let submit = ducument.querySelector(".add");
let taskDiv = ducument.querySelector(".tasks");
// tableau pour stocker les taches
let arrayOfTAsks = [];


// Ajouter une tache
submit.onclick = function (){
  // Je vérifie que mon input n'est pas vide
   if (input.value !== ""){
       addTaskToArray(input.value);   // Ajouter  les taches dans le tableau des taches
       input.value = "";  // vider l'input
    }
} 
 
function addTaskToArray(taskText){
// taches Data
const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
};
// push la tache dans le tableau des Taches
arrayOfTAsks.push(task);
// ajouter  une tache
addElements
}
