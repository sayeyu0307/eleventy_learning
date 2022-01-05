// import fetch from 'node-fetch';
const fetch = require('node-fetch')

module.exports = async () => {
    try {
        const response = await fetch('http://jsonplaceholder.typicode.com/posts')
        return response.json()
    } catch (error) {
        console.log(error)
        return []
    }
}