console.log("Inicio de programa")

setTimeout(() => {
    console.log("Primer timeout de programa")
},3000)
setTimeout(() => {
    console.log("Segundo timeout de programa")
},0)
setTimeout(() => {
    console.log("Tercer timeout de programa")
},0)


console.log("Fin de programa")