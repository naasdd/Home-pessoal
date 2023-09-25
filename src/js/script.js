window.addEventListener('load', () => {
    const cidade = 'Itapema'; // SUA CIDADE
    const apiKey = '0e2a68afb149be6ec6e2cc7a008e80dd'; // SUA API KEY
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`;

    let dataAtual = new Date()
    let diaSemana = dataAtual.getDay()
    let diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
    let nomeDaSemana = diasDaSemana[diaSemana]
    let diaDoMes = dataAtual.getDate();

    let semanaDiaText = document.getElementById('semanaDia')
    let mesText = document.getElementById('mes')

    const mes = dataAtual.getMonth();
    const nomesMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const nomeMes = nomesMeses[mes];


    // requisição para a API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperatura = data.main.temp;
            const temperaturaText = document.getElementById('temperaturaText');
            const climaText = document.getElementById('climaText');
            const tituloWeb = document.getElementById('tituloWeb')
            const clima = data.weather[0].description; 
            
            temperaturaText.textContent = `${temperatura.toFixed(0)}  °C`
            climaText.innerHTML = `${clima}`
            tituloWeb.innerText = `${nomeDaSemana}, ${temperatura.toFixed(0)}°C, ${clima}`
        })
        .catch(error => {
            console.error('Erro ao obter a temperatura:', error);
        });

    semanaDiaText.innerHTML = `${nomeDaSemana}, ${diaDoMes}`
    mesText.innerHTML = nomeMes
});
