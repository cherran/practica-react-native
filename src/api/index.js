import axios from 'axios'

const BASE_URL = 'https://gateway.marvel.com:443/v1/public'
const PUBLIC_KEY = 'cda57ae8ef579bf667c5df00ebf47e06'

export function configureMarvelApi() {
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Referer'] = 'http://marvelrn.com';
}

export function fetchCharacters() {
    const url = '/characters?apikey=' + PUBLIC_KEY
    return axios.get(url)
}

export function fetchCharacterById(characterId) {
    const url = `/characters?${characterId}?apikey=` + PUBLIC_KEY
    return axios.get(url)
}
