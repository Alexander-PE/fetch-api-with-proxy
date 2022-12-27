// command to run: node --experimental-fetch index.mjs 
// or: npm run main
const API_URL = "https://swapi.dev/api"   // example api

const res = await fetch(`${API_URL}/people/1`)
const json = await res.json()
const {name, gender} = json

console.log({name, gender}) 