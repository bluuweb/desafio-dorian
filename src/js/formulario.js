const formulario = document.querySelector('#formulario');
const inputTexto = document.querySelector('#inputTexto');


const formularioReal = (data) => {
    console.log(data)
    formulario.addEventListener('keyup', async(e) => {
        e.preventDefault()

        const textoCliente = inputTexto.value.toLowerCase()

        const formularioFiltrado = data.filter(item => {
            const textoApi = item.name.toLowerCase()
            if (textoApi.indexOf(textoCliente) !== -1) {
                return item
            }
        })
        banderillas(formularioFiltrado)

    
        // if (inputTexto.value.trim() === '') {
        //     console.log('vacio')
        //     return
        // }
    
        // try {
        //     const data = await fetch(`https://restcountries.eu/rest/v2/name/${inputTexto.value}`)
        //     const res = await data.json()
        //     banderillas(res)
        // } catch (error) {
        //     console.log(error)
        // }
        // console.log('llegaste hasta aca')
    
    })
}
