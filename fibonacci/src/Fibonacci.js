import React, { } from 'react';
import './App.css';
const fibonacci = (numero) =>
    {
        let var1 = 0;
        let var2 = 1;
        let var3;
        let arr = [];

        arr.push(var1);
        arr.push(var2);

        for(var i=3; i <= numero;i++)
        { 
            var3 = var1 + var2;
            var1 = var2;
            var2 = var3;
            arr.push(var3);
        }
        return arr;
    }
function recorrido (array) {
  let cont = 0;
  for (let arr = 0; arr < array.length; arr++) {
    let doc = document.createElement("div");
    doc.className = "elemento";
    let textnode = document.createTextNode(array[arr]);
    doc.appendChild(textnode); 
    setTimeout(() => {
      document.getElementById("arreglo").appendChild(doc);
    }, cont);
    cont += 500;
  }
  //console.log(element);
  return cont;

}
function recorridoLetras (array) {
  let cont = 0;
  for (let arr = 0; arr < array.length; arr++) {
    let doc = document.createElement("span");
    doc.className = "elemento";
    let textnode = document.createTextNode(array[arr]);
    doc.appendChild(textnode); 
    setTimeout(() => {
      document.getElementById("arreglo").appendChild(doc);
    }, cont);
    cont += 200;
  }
  //console.log(element);
  return cont;

}
function letras (array) {
  var res = array.split("");
  console.log (res);
  return res;
}
const handleSubmit = (event) => {
  event.preventDefault();
  document.getElementById("arreglo").innerHTML = "";
  const arr = fibonacci(document.getElementById("name").value);
  recorrido(arr);
  console.log(arr);
  //document.getElementById("arreglo").innerHTML = arr2;
}
const handleSubmit2 = (event) => {
  event.preventDefault();
  document.getElementById("arreglo").innerHTML = "";
  const arr = letras(document.getElementById("name2").value);
  recorridoLetras(arr);
  console.log(arr);
  //document.getElementById("arreglo").innerHTML = arr2;
}
const Formulario = () => {
  return (<div className="formulario">
            <form onSubmit={handleSubmit}>
          <label>
            Name:
              <input type="text" name="name" id="name"  />
          </label>
             <input type="submit" value="Submit" />
        </form>
          </div> );
}
const Formulario2 = () => {
  return (<div className="formulario">
            <form onSubmit={handleSubmit2}>
          <label>
            Name:
              <input type="text" name="name" id="name2"  />
          </label>
             <input type="submit" value="Submit" />
        </form>
          </div> );
}
const Finobacci = () => {
  return (
    <div>
      <div id="arreglo"></div>
    </div>
  );
}
const Layout = (props) => {
  return ( <div>
          <Formulario />
          <Formulario2 />
          <Finobacci /> 
          </div>
    );
}

export default Layout;