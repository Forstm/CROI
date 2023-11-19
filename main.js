function verificar(){
    var enviar = true ;

    var nome = document.getElementById("txtNome").value;
    
    if( nome.length == 0 ){
        enviar = false;

          document.getElementById("txtNome").placeholder = "Campo preenchido incorretamente";  
          document.getElementById("txtNome").style.backgroundColor = "#f5abb0";
    }

    var sobrenome = document.getElementById("txtSobre").value;

    if( sobrenome.length == 0 ){
        enviar = false;

        document.getElementById("txtSobre").placeholder = "Campo preenchido incorretamente";
        document.getElementById("txtSobre").style.backgroundColor = "#f5abb0";  
    }

    var cpf = document.getElementById("txtCpf").value;

    if( cpf.length == 0 || cpf.length >= 11 ){
        enviar = false;

        document.getElementById("txtCpf").placeholder = "Campo preenchido incorretamente";
        document.getElementById("txtCpf").style.backgroundColor = "#f5abb0";  
    }

    var email = document.getElementById("txtEmail").value;

    if( email.indexOf("@") < 0 ){
        enviar = false;

        document.getElementById("txtEmail").placeholder = "Campo preenchido incorretamente";
        document.getElementById("txtEmail").style.backgroundColor = "#f5abb0";
    }

    var telefone = document.getElementById("txtTel").value;

    if( telefone.length == 0 || telefone.length >= 11 ){
        enviar = false;

        document.getElementById("txtTel").placeholder = "Campo preenchido incorretamente";
        document.getElementById("txtTel").style.backgroundColor = "#f5abb0";
    }

    var endereco = document.getElementById("txtTel").value;

    if( endereco.length == 0 ){
        enviar = false;

        document.getElementById("txtEnde").placeholder = "Campo preenchido incorretamente";
        document.getElementById("txtEnde").style.backgroundColor = "#f5abb0";
    }

    var cep = document.getElementById("txtCep").value;

    if( cep.length == 0 || cep.length >= 8){
        enviar = false;

        document.getElementById("txtCep").placeholder = "Campo preenchido incorretamente";
        document.getElementById("txtCep").style.backgroundColor = "#f5abb0";
    }

    var cidade = document.getElementById("txtCid").value;

    if( cidade.length == 0 ){
        enviar = false;

        document.getElementById("txtCid").placeholder = "Campo preenchido incorretamente";
        document.getElementById("txtCid").style.backgroundColor = "#f5abb0";
    }

    var estado = document.getElementById("txtCid").value;

    if( estado.length == 0 ){
        enviar = false;

        document.getElementById("txtEst").placeholder = "Campo preenchido incorretamente";
        document.getElementById("txtEst").style.backgroundColor = "#f5abb0";
    }
    
}