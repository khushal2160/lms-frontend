class APIService {
    baseURI: string = 'http://localhost:9001/api/'

    async getBooks(callback: Function) {
        try {
            const response = await fetch(`${this.baseURI}book/list`)
            const data = await response.json()
            callback(data.data)
        } catch (error) {
            return false
        }
    }

    async getBorrows(callback: Function) {
        try {
            const response = await fetch(`${this.baseURI}customer/borrows?id=1`)
            const data = await response.json()
            callback(data.data)
        } catch (error) {
            return false
        }
    }
}

const apiService = new APIService()
export default apiService