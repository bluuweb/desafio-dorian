const banderas = document.querySelector('#banderas')

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    fetchData()
});

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        banderillas(data)
    } catch (error) {
        console.log(error)
    }
}

const banderillas = (data) => {

    let elementos = ''

    for (let [index, item] of data.entries()){
        if (index < 7) {
            // console.log(item)
            elementos += `
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

    banderas.innerHTML = elementos

}

