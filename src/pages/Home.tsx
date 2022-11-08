import React, { useState, useEffect } from 'react'
import BookList from '../components/Home/BookList'
import apiService from '../services/api'

function Home() {
    const [initData, setInitData] = useState(false)
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if (!initData) {
            setInitData(true)
            apiService.getBooks((data: any) => {
                console.log(data)
                setBooks(data)
            })
        }
    }, [initData, setInitData, setBooks])
    return (
        <>
            <BookList books={books} />
        </>
    )
}

export default Home