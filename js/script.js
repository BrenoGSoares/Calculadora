function insert(num){
    var number = document.getElementById('value').innerHTML;
    document.getElementById('value').innerHTML = number + num
}

function clean(){
    document.getElementById('value').innerHTML = "";
}

function del(){
    var result = document.getElementById('value').innerHTML;
    document.getElementById('value').innerHTML = result.substring(0, result.length -1)
}

function calc(){
    var result = document.getElementById('value').innerHTML;
    if(result){
        document.getElementById('value').innerHTML = eval(result)
    }
    else{
        document.getElementById('value').innerHTML = 'ERROR'
        setTimeout(function(){clean()}, 250);
    }
}
