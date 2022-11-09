import React from 'react'
import { Card, Button, Container, Col, Row } from "react-bootstrap"
import blankBook from '../../assets/blank-book.png'

function BorrowedList({ borrows, returnBook }: any) {
    const renderBorrows = () => {
        const bookCards = borrows.map((book: any, index: number) => {
            return (
                <Col key={index}>
                    <Card style={{ width: '18rem' }} className='book-card mx-auto'>
                        <Card.Img variant="top" className='book-img' src={blankBook} />
                        <Card.Body>
                            <Card.Title>{book.book_name}</Card.Title>
                            <Button variant="primary" onClick={() => returnBook(book.id, 1)}>Return</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
        return bookCards
    }
    return (
        <div style={{ padding: '16px 0' }}>
            <Container>
                {
                    borrows.length ? (
                        <Row xl={4} lg={3} md={2} sm={1}>
                            {renderBorrows()}
                        </Row>
                    ) : (
                        <div className='text-center text-secondary font-bold'>
                            No book found
                        </div>
                    )
                }
            </Container>
        </div>
    )
}

export default BorrowedList