import axios from 'axios'

export const createShortLink = async (longURL) => {
    let url = `http://api.shrtco.de/v2/shorten?url=${longURL}`
    try {
        const response = await axios.get(url)
        return response.data.result
    } catch (error) {
        console.log('error', error)
    }
}