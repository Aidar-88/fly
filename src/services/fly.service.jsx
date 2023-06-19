import axios from "axios"


export const FlyService = {
    async getAll() {
        const response = await axios.get('http://localhost:3000/flights')
        return response.data
    },

    async getById(id) {
        const response = await axios.getById(`http://localhost:3000/flights?id=${id}`)
        return response.data[0]
    },
}