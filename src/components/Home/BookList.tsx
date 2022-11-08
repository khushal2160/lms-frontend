import React from 'react'
import { Card, Button, Container, Col, Row } from "react-bootstrap"
import blankBook from '../../assets/blank-book.png'
import openBook from '../../assets/open-book.png'

function BookList({ books }: any) {
    const renderBooks = () => {
        const bookCards = books.map((book: any, index: number) => {
            return (
                <Col key={index}>
                    <Card style={{ width: '15rem' }} className='book-card'>
                        <Card.Img variant="top" src={blankBook} />
                        <Card.Body>
                            <Card.Title>{book.book_name}</Card.Title>
                            <Card.Text>
                                Qty: {book.book_qty}
                            </Card.Text>
                            <Button variant="primary">Borrow</Button>
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
                <Row>
                    {renderBooks()}
                </Row>
            </Container>
        </div>
    )
}

export default BookList