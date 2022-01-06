window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled>253){
        CambioClaseProyectos();
    }
  });
 
function CambioClaseInicio(){
    document.getElementById("inicio").classList.add("active")

    if ( document.getElementById("sobremi").classList.contains('active')){
        document.getElementById("sobremi").classList.remove('active');
    }

    if ( document.getElementById("conocimientos").classList.contains('active')){
        document.getElementById("conocimientos").classList.remove('active');
    }

    if ( document.getElementById("proyectos").classList.contains('active')){
        document.getElementById("proyectos").classList.remove('active');
    }

    if ( document.getElementById("contactos").classList.contains('active')){
        document.getElementById("contactos").classList.remove('active');
    }
}

function CambioClaseSobreMi(){
    document.getElementById("sobremi").classList.add("active")

    if ( document.getElementById("inicio").classList.contains('active')){
        document.getElementById("inicio").classList.remove('active');
    }

    if ( document.getElementById("conocimientos").classList.contains('active')){
        document.getElementById("conocimientos").classList.remove('active');
    }

    if ( document.getElementById("proyectos").classList.contains('active')){
        document.getElementById("proyectos").classList.remove('active');
    }

    if ( document.getElementById("contactos").classList.contains('active')){
        document.getElementById("contactos").classList.remove('active');
    }
}

function CambioClaseConocimientos(){
    document.getElementById("conocimientos").classList.add("active")

    if ( document.getElementById("inicio").classList.contains('active')){
        document.getElementById("inicio").classList.remove('active');
    }

    if ( document.getElementById("sobremi").classList.contains('active')){
        document.getElementById("sobremi").classList.remove('active');
    }

    if ( document.getElementById("proyectos").classList.contains('active')){
        document.getElementById("proyectos").classList.remove('active');
    }

    if ( document.getElementById("contactos").classList.contains('active')){
        document.getElementById("contactos").classList.remove('active');
    }
    
   
}

function CambioClaseProyectos(){
    document.getElementById("proyectos").classList.add("active")

     if ( document.getElementById("inicio").classList.contains('active')){
        document.getElementById("inicio").classList.remove('active');
    }

    if ( document.getElementById("sobremi").classList.contains('active')){
        document.getElementById("sobremi").classList.remove('active');
    }

    if ( document.getElementById("conocimientos").classList.contains('active')){
        document.getElementById("conocimientos").classList.remove('active');
    }

    if ( document.getElementById("contactos").classList.contains('active')){
        document.getElementById("contactos").classList.remove('active');
    }
}

function CambioClaseContactos(){
    document.getElementById("contactos").classList.add("active")

     if ( document.getElementById("inicio").classList.contains('active')){
        document.getElementById("inicio").classList.remove('active');
    }

    if ( document.getElementById("sobremi").classList.contains('active')){
        document.getElementById("sobremi").classList.remove('active');
    }

    if ( document.getElementById("conocimientos").classList.contains('active')){
        document.getElementById("conocimientos").classList.remove('active');
    }
    
    if ( document.getElementById("proyectos").classList.contains('active')){
        document.getElementById("proyectos").classList.remove('active');
    }

}