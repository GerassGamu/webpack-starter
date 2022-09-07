//se dede agregar export a la funcionnque se va a mandar a llamar para que no genereverror

import '../css/componentes.css';
// import logo from '../assets/img/logo.png'
export const saludar = (nombre) => {

    console.log('Creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola,${nombre}`;

    document.body.append(h1);

    ///Imagen
    // console.log(logo);
    // const img = document.createElement('img');
    // img.src = logo;
    // document.body.append(img);
}