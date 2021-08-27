function insert(val){
    document.getElementById('visor').innerHTML += val;
}

function limpa(){
    document.getElementById('visor').innerHTML = "";
}

function calc(){
    var result = document.getElementById('visor').innerHTML;
    if (result){
        document.getElementById('visor').innerHTML = eval(result);
    } else {
        document.getElementById('visor').innerHTML = "Erro"
    }
}