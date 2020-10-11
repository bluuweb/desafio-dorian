const formulario = document.querySelector('#formulario');
const inputTexto = document.querySelector('#inputTexto');

formulario.addEventListener('submit', async(e) => {
    e.preventDefault()

    if (inputTexto.value.trim() === '') {
        console.log('vacio')
        return
    }

    try {
        const data = await fetch(`https://restcountries.eu/rest/v2/name/${inputTexto.value}`)
        const res = await data.json()
        banderillas(res)
    } catch (error) {
        console.log(error)
    }
    console.log('llegaste hasta aca')

})