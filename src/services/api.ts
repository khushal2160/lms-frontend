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
            callback(false)
        }
    }

    async borrowBook(book_id: number, customer_id: number, callback: Function) {
        try {
            const payload = {
                book_id,
                customer_id
            }
            const response = await fetch(`${this.baseURI}customer/borrow`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            const data = await response.json()
            callback(data)
        } catch (error) {
            callback(false)
        }
    }

    async returnBook(book_id: number, customer_id: number, callback: Function) {
        try {
            const payload = {
                book_id,
                customer_id
            }
            const response = await fetch(`${this.baseURI}customer/return`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            const data = await response.json()
            callback(data)
        } catch (error) {
            callback(false)
        }
    }
}

const apiService = new APIService()
export default apiService