document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnCEP').addEventListener('click', function(){
       const xhttp = new XMLHttpRequest()
       const cep = document.getElementById('cep').value 
       const url = `https://viacep.com.br/ws/${cep}/json`

       xhttp.open('GET', url)
       xhttp.send()
    })
})

