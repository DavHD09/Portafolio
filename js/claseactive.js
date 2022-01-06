function CambioClaseInicio(){
    document.getElementById("inicio").classList.add("active")
    if ( document.getElementById("proyectos").classList.contains('active')){
        document.getElementById("proyectos").classList.remove('active');
   }
   
}

function CambioClaseProyectos(){
    document.getElementById("proyectos").classList.add("active")
    if ( document.getElementById("inicio").classList.contains('active')){
         document.getElementById("inicio").classList.remove('active');
    }
}