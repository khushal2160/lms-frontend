import React, { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import BorrowedList from '../components/Borrow/BorrowedList'
import apiService from '../services/api'

function BorrowList() {
    const [initData, setInitData] = useState(false)
    const [borrows, setBorrows] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (!initData) {
            setInitData(true)
            setIsLoading(true)
            apiService.getBorrows((data: any) => {
                setBorrows(data)
                setTimeout(() => setIsLoading(false), 750)
            })
        }
    }, [initData, setInitData, setBorrows, setIsLoading])
    const returnABook = (book_id: number) => {
        apiService.returnBook(book_id, 1, (data: any) => {
            if (!data.success) {
                alert('Something went wrong')
            } else {
                setInitData(false)
            }
        })
    }
    return (
        <>
            {
                !isLoading ? (
                    <BorrowedList borrows={borrows} returnBook={returnABook} />
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

export default BorrowList