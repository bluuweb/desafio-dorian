const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    fetchData()
});

const fetchData = async () => {
    try {
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${params}`)
        const data = await res.json()
        console.log(data)
        banderillas(data)
        // filtrarDatos(data)
        // formularioReal(data)
    } catch (error) {
        console.log(error)
    }
}

const bandera = document.getElementById('bandera')

const banderillas = (data) => {
    let elementos = ''
    for (let [index, item] of data.entries()){
        if (index < 7) {
            // console.log(item)
            elementos += /*html*/`
            <div>
                <img src="${item.flag}" alt="" width="100">
                <h3>${item.name}</h3>
                <p>population: ${item.population}</p>
                <p>region: ${item.population}</p>
                <p>capital: ${item.capital}</p>
            </div>
            `
        }
    }
    bandera.innerHTML = elementos
}