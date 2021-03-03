let container = document.getElementById("container");

let data = ["alan", "sarah", "tina"];


// forEach

// for(let i = 0; i < data.length; i++){
//   let name = data[i];
//   addPtag(name)
// }

function dothiswitheachelement(element){
  addPtag(element);
}

data.forEach(addPtag)


data = [
  {
    name: "alan",
    nice: "yes"
  },
  {
    name: "sarah",
    nice: "sometimes"
  },
  {
    name: "tina",
    nice: "yes"
  },
];

//map

// let namesonly = [];
//
// for(let i = 0; i < data.length; i++){
//   let person = data[i];
//   namesonly.push(person.name);
// }
// console.log(namesonly)

// function mappingFunction(element){
//   element.nice = "sometimes";
//
//   return element
// }
//
// let newarray = data.map(mappingFunction)

// console.log(newarray)


// filter
// let nicepeople = []
//
// // for(let i = 0; i < data.length; i++){
// //   let person = data[i];
// //   if(person.nice == "yes"){
// //     nicepeople.push(person)
// //   }
// // }
// //
// // console.log(nicepeople)
//
// function filterFunction(element){
//   if(element.nice == "yes"){
//     return true
//   }else{
//     return false
//   }
//
// }
//
// nicepeople = data.filter(filterFunction)
//
// console.log(nicepeople)


let nicepeople = []

// for(let i = 0; i < data.length; i++){
//   let person = data[i];
//   if(person.nice == "yes"){
//     nicepeople.push(person)
//   }
// }
//
// console.log(nicepeople)

// function filterFunction(element){
//   return element.nice == "yes"
// }

nicepeople = data.filter(d=>d.nice == "yes")


console.log(nicepeople)












function addPtag(content){
  let p = document.createElement('p');
  p.innerHTML = content;
  container.appendChild(p);
}
