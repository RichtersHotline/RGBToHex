let Answer = document.getElementById("Output")
let Display = document.getElementById("Seconds")
let Output = document.getElementById("Output")


function ConverterToRGB(r,g,b) {
   
 return "#" + ((1 << 24) + ((r << 16) + (g << 8) + b)).toString(16).slice(1)



}
console.log(ConverterToRGB(22, 14, 15))




