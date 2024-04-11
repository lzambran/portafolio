let menuVisible = false;
// TODO:FUNCION QUE MUESTRA Y OCULTA EL MENU
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //TODO:OCULTA EL MENU AL SELECCIONAR UNA OPCION
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// TODO:FUNCION QUE APLICA LAS HABILIDADES AL CARGAR EL DOCUMENTO
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("angular");
        habilidades[3].classList.add("nodejs");
        habilidades[4].classList.add("php");
        habilidades[5].classList.add("python");
        habilidades[6].classList.add("sql");
        habilidades[7].classList.add("resolucionproblema");
        habilidades[8].classList.add("trabajoequipo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dominiolenguaje");
        habilidades[11].classList.add("gestion");
        habilidades[12].classList.add("conocimientobase");
        habilidades[13].classList.add("aprendizaje");
    }
}

// TODO:DETECTA EL SCROLL Y APLICA LA ANIMACION DE LA BARRA DE HABILIDADES
window.onscroll = function(){
    efectoHabilidades();
}

document.getElementById("downloadButton").addEventListener("click", function() {
    // Crear un enlace temporal
    var link = document.createElement("a");
    link.href = "../pdf/LUIS ANTONIO ZAMBRANO CV.pdf"; // Reemplaza "URL_DEL_CV" con la URL de tu CV
    link.download = "LUIS ANTONIO ZAMBRANO CV.pdf"; // Nombre del archivo a descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});