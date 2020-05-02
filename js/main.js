function mostrar_login(){
   var entra = document.getElementById("panel_login").className="mostrar_login"
   var registra = document.getElementById("panel_registro").className="ocultar_registro"
   var registra = document.getElementById("login").className="active"
   var registra = document.getElementById("register").className=""
}
function mostrar_register(){
    var entra = document.getElementById("panel_login").className="ocultar_login"
    var registra = document.getElementById("panel_registro").className="mostrar_registro"
    var registra = document.getElementById("register").className="active"
    var registra = document.getElementById("login").className=""
}

function showPassword(){
    var pass = document.getElementById("showPass");
    var inpass = document.getElementById("input_pass");
    if(pass.className ==='fas fa-eye-slash'){
        pass.className="fas fa-eye";
        inpass.type = "password";
    }else{
        pass.className="fas fa-eye-slash";
        inpass.type = "text";
    }

}
