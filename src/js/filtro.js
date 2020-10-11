const btnfiltros = document.querySelectorAll('.btnFiltro')

console.log(btnfiltros)

btnfiltros.forEach(btn => {
    btn.addEventListener('click', async() => {
        console.log(btn.dataset.region)
        try {
            const res = await fetch(`https://restcountries.eu/rest/v2/region/${btn.dataset.region}`)
            const data = await res.json()
            banderillas(data)
        } catch (error) {
            console.log(error)
        }
    })
})