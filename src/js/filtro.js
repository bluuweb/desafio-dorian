const filtroSelect = document.getElementById('filtroSelect');

const filtrarDatos = (data) => {
    // console.log(data)
    filtroSelect.addEventListener('change', (e) => {
        console.log(e.target.value)
        if (e.target.value === '') {
            banderillas(data)
        } else {
            const filterData = data.filter(item => item.region === e.target.value)
            banderillas(filterData)
        }
    })
}



// const btnfiltros = document.querySelectorAll('.btnFiltro')

// console.log(btnfiltros)

// btnfiltros.forEach(btn => {
//     btn.addEventListener('click', async() => {
//         console.log(btn.dataset.region)
//         try {
//             const res = await fetch(`https://restcountries.eu/rest/v2/region/${btn.dataset.region}`)
//             const data = await res.json()
//             banderillas(data)
//         } catch (error) {
//             console.log(error)
//         }
//     })
// })