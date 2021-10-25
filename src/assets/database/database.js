

const getData = async () => {
        
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=600'
    const data = await fetch(url)
    const list = await data.json()
    localStorage.setItem('pokelist',JSON.stringify(list.results))
    return list.results
}
const pokeList = localStorage.getItem('pokelist') || getData()

export {pokeList}