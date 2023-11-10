function inserir(valor){
    var x = document.getElementById('painel').innerHTML;
    document.getElementById('painel').innerHTML = x + valor
}
function limpar(){
    document.getElementById("painel").innerHTML=""
}
function voltar(){
    var x = document.getElementById('painel').innerHTML;
    document.getElementById('painel').innerHTML = x.substring(0,x.length -1)
}
function calcular (){
    var x = document.getElementById('painel').innerHTML;
    if (x){
        document.getElementById('painel').innerHTML= eval(x);
    }
    else{
        document.getElementById('painel').innerHTML= 'vazio...'
    }
   
}