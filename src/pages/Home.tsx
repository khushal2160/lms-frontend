import React, { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import BookList from '../components/Home/BookList'
import apiService from '../services/api'

function Home() {
    const [initData, setInitData] = useState(false)
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (!initData) {
            setInitData(true)
            setIsLoading(true)
            apiService.getBooks((data: any) => {
                console.log(data)
                setBooks(data)
                setTimeout(() => setIsLoading(false), 750)
            })
        }
    }, [initData, setInitData, setBooks, setIsLoading])
    const borrowABook = (book_id: number, customer_id: number) => {
        apiService.borrowBook(book_id, 1, (data: any) => {
            if (!data.success) {
                alert('You cannot borrow this')
            } else {
                setInitData(false)
            }
        })
    }
    return (
        <>
            {
                !isLoading ? (
                    <BookList books={books} borrow={borrowABook} />
                ) : (
                    <div className='text-center mt-5'>
                        <Spinner animation="grow" variant="dark" />
                        <br />
                        Getting data...
                    </div>
                )
            }
        </>
    )
}

export default Home