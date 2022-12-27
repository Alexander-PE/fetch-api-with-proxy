// command to run: node --experimental-fetch index.mjs 
// or: npm run main

const API_URL = "https://swapi.dev/api"   // example apis
const ANOTHER_URL = "https://pokeapi.co/api/v2"

const clientApi = url => {
    return new Proxy({},{
        get: (target, prop) => {
            return async (id) => {
                // console.log("GET", prop, id)
                const res = await fetch(`${url}/${prop}/${id}`)
                if (res.ok) return res.json()
                return Promise.reject({error: "Error fetching"})
            }
        }
    })
}

const api = clientApi(API_URL)
const luke = await api.people(1) // fetching: API_URL/people/1
console.log(luke)

const api2 = clientApi(ANOTHER_URL)
const pokemon1 = await api2.pokemon(1) // fetching: ANOTHER_URL/pokemon/1
console.log(pokemon1)



// const res = await fetch(`${API_URL}/people/1`)
// const json = await res.json()
// const {name, gender} = json

// console.log({name, gender}) 