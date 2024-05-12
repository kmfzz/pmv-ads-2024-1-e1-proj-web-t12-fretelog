const motorista = new Object();
const empresa = new Object();

motorista.cpf = "12345678910";
motorista.senha = "1234";

empresa.cnpj = "12345678000122";
empresa.senha = "4321";

function login(){
        
        var usuario = document.getElementById("usuario").value;
        var senha = document.getElementById("senha").value;
        
        if (usuario == motorista.cpf && senha == motorista.senha) {
                location.href = "HomeMotorista.html"
        }else if(usuario == empresa.cnpj && senha == empresa.senha){
                location.href = "HomeEmpresa.html"
        }else{
                alert('credenciais inválidas');
        }

}


