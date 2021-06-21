console.log('Hola');
import { html, render } from "../node_modules/lit-html/lit-html";
const objetoTemplateResult= html `<h1> Me gusta ${sitioWeb} </h1>`;

const sitioWeb="DesarrolloWeb.com";
const miPrimeraPlantilla = (sitioWeb)=>html `<h1> Me gusta ${sitioWeb} </h1>`;
const resultadoDePrimerTemplate = miPrimeraPlantilla('DesarrolloWeb2.com')

render(resultadoDePrimerTemplate,document.getElementById('ej1'));
render(miPrimeraPlantilla('Escuela.com'),document.getElementById('ej2'));