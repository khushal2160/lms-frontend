import React, { useState, useEffect } from 'react'
import BorrowedList from '../components/Borrow/BorrowedList'
import apiService from '../services/api'

function BorrowList() {
    const [initData, setInitData] = useState(false)
    const [borrows, setBorrows] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if (!initData) {
            setInitData(true)
            apiService.getBorrows((data: any) => {
                console.log(data)
                setBorrows(data)
            })
        }
    }, [initData, setInitData, setBorrows])
    return (
        <>
            <BorrowedList borrows={borrows} />
        </>
    )
}

export default BorrowList