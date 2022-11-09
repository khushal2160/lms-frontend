import React from 'react'
import { Card, Button, Container, Col, Row } from "react-bootstrap"
import blankBook from '../../assets/open-book.png'

function BookList({ books, borrow }: any) {
    const renderBooks = () => {
        const bookCards = books.map((book: any, index: number) => {
            return (
                <Col key={index}>
                    <Card style={{ width: '18rem' }} className='book-card mx-auto'>
                        <Card.Img variant="top" className='book-img' src={blankBook} />
                        <Card.Body>
                            <Card.Title>{book.book_name}</Card.Title>
                            <Card.Text>
                                Qty: {book.book_qty}
                            </Card.Text>
                            <Button variant="primary" onClick={() => borrowBookEvent(book.id)}>Borrow</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
        if (!bookCards.length) {
            return (
                <div className='text-center'>
                    No book found
                </div>
            )
        }
        return bookCards
    }
    const borrowBookEvent = (book_id: number) => {
        borrow(book_id, 1)
    }
    return (
        <div style={{ padding: '16px 0' }}>
            <Container>
                <Row xl={4} lg={3} md={2} sm={1}>
                    {renderBooks()}
                </Row>
            </Container>
        </div>
    )
}

export default BookList