let estado = false;
let sesion=null;

function mostrarTodas(){
    const productes = document.getElementsByClassName("producto");
    for (var i=0;i<productes.length;i++ ){
        productes[i].style.display=""; }
}
function mostrarAromaticas(){
    //Se hace una constante en la que se guardaran todos los elementos con clase "Producto" y otro con la clase aromatica
    //Como hay varios valores se hara en un array automaticamente
    const productes = document.getElementsByClassName("producto");
    const aromatiques = document.getElementsByClassName("aromatica");
    
    //Se recorre el array de productos y ocultamos los que no nos interese mostrar cambiando el style.display a none
    for (var i=0;i<productes.length;i++ ){
        productes[i].style.display="none"; }

    //Aqui le cambiaremos el display a los que tengan clase aromatica
    for (var i=0;i<aromatiques.length;i++ ){
        aromatiques[i].style.display="";
    }   
}

function mostrarCactus(){
    const productes = document.getElementsByClassName("producto");
    const cactus = document.getElementsByClassName("cactus");
    
    for (var i=0;i<productes.length;i++ ){
        productes[i].style.display="none"; }

    for (var i=0;i<cactus.length;i++ ){
        cactus[i].style.display="";
    }  
}

function mostrarFrutales(){
    const productes = document.getElementsByClassName("producto");
    const frutales = document.getElementsByClassName("frutal");
    
    for (var i=0;i<productes.length;i++ ){
        productes[i].style.display="none"; }

    for (var i=0;i<frutales.length;i++ ){
        frutales[i].style.display="";
    }  
}

function mostrarInteriores(){
    const productes = document.getElementsByClassName("producto");
    const interior = document.getElementsByClassName("interior");
    
    for (var i=0;i<productes.length;i++ ){
        productes[i].style.display="none"; }

    for (var i=0;i<interior.length;i++ ){
        interior[i].style.display="";
    }  
}
//Apartado creacion de usuario e inicio de sesion

function Comprovar(){
    //Per evitar que es registrin usuaris sense omplir tots els camps un script comprovara que no n'hi hagi ningun camp buit
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellidos").value;
    let email = document.getElementById("email").value;
    let emailconf = document.getElementById("emailconf").value;
    let contraseña = document.getElementById("contraseña").value;
    //Aquesta variable sera 0 si tots els camps contenen valors
    let val = 0;

    console.log (val)
    //Si algun camp esta buit se li sumara un valor a la variable i es mostrara un avís de que algun dels camps es incorrecte
    if(nombre == "" || apellido == "" ||email == ""||contraseña == ""||email != emailconf ){
        val++
        document.getElementById("error").style.color="red";
        document.getElementById("error").innerHTML=("Algun dels camps no es correcte");
    }
   //Si el valor es 0 es cridara a una funcio per guardar les dades
    if(val == 0){
        console.log("Validacion hecha")
        guardarDatos()}
    }

//Esta funcion recibira los valores de el form y comprobara que el correo no este registrado ya
function guardarDatos(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellidos").value;
    let email = document.getElementById("email").value;
    let contraseña = document.getElementById("contraseña").value;
    let datos = {nombre,apellido,email,contraseña}
    console.log(datos)
    //Con el JSON.stringify pasaremos el array de los datos como un string
    var json = JSON.stringify(datos);
    
    //Este apartado comprobara que el nombre del email introducido no exista y en caso de no hacerlo se guardara en el localStorage
    if (localStorage.getItem((email)) === null){
    console.log("Guardat")
    localStorage.setItem((email),(json));
    
     }
    //Si el email introducido ya esta registrado saldra un aviso de que el correo ya existe
    else {
        document.getElementById("error").style.color="red";
        document.getElementById("error").innerHTML=("Aquest correu ja existeix");
    }
    }

    
//Esta funcion sera llamada cuando el usuario pulse el boton 
function iniciarSesion(){
    //Se coge el correo para encontrar los datos del usuario
    let email = document.getElementById("emailiniciosesion").value;
    let contra = document.getElementById("passwordiniciosesion").value;
    //En la variable datos se coge el array de localstorage con el nombre que haya en la var email
    let datos = JSON.parse(localStorage.getItem((email)))
    

    //Si el valor introducido en contraseña coincide con el valor del array se hara un objeto en el sesionstorage con los datos 
    if (contra==datos.contraseña){
        console.log("Correcto");
        sessionStorage.setItem("usuario",JSON.stringify(datos));
        sesion = JSON.parse(sessionStorage.getItem("usuario"));
        console.log(sesion);
    }
    //Si el valor es incorrecto saldra un aviso
    else {
        console.log("Incorrecto");
        document.getElementById("errorinicio").style.color="red";
        document.getElementById("errorinicio").innerHTML=("Alguna dada es incorrecta");
    }}


function comprovarSesion(){
    sesion = JSON.parse(sessionStorage.getItem("usuario"));
    console.log(sesion)
    if (sesion==null){
        console.log("No ha iniciado sesion")
        return 1;
    }
    else{
        console.log(sesion);
        return 2;
    }
}
function catalogos(){
    let sesionIniciada=comprovarSesion();
    console.log(sesionIniciada);
    if (sesionIniciada==1){
        window.open("catalogo.html","_self")}
    if (sesionIniciada==2) {
        window.open("catalogo2.html","_self");
    }
}
/*--------------------- CATALOGO-----------------------------*/ 
window.onload=comprovarSesion();