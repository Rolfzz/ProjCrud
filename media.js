var txt1, txt2, txt3, n1, n2, n3, resp;

function calcularMedia(){
    ler ()
    var r = (n1+n2+n3)/3;
    resp.innerHTML = `<br> A média de ${n1} e ${n2} e ${n3} é igual a ${r.toPrecision(3)} <br>`;
}

function ler() {
    //Faço a leitura dos elementos que eu preciso da tela
    txt1 = window.document.getElementById('txtn1').value;
    txt2 = window.document.getElementById('txtn2').value;
    txt3 = window.document.getElementById('txtn3').value;
    resp = window.document.getElementById('resposta');
    
    n1= Number(txt1)
    n2= Number(txt2)
    n3= Number(txt3)
    resp.style.textAlign = "center" // Troca o alinhamento por centralizado 
}

function limpar(){
    txtn1.value=""
    txtn2.value=""
    txtn3.value=""
    txtn1.focus() //Muda o foco para esse objeto. Nesse caso, o cursor vai para ele
}