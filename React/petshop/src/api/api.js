import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export const busca = async(url, setDado) => { 
    const reposta = await api.get(url)
    setDado(reposta.data)
}

/*
    inicializar json-server e observar db.json:
        npx json-server --watch db.json --port 5000
*/