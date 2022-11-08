import React from 'react'
import { Card, Button, Container, Col, Row } from "react-bootstrap"
import blankBook from '../../assets/blank-book.png'
import openBook from '../../assets/open-book.png'

function BorrowedList({ borrows }: any) {
    const renderBorrows = () => {
        const bookCards = borrows.map((book: any, index: number) => {
            return (
                <Col key={index}>
                    <Card style={{ width: '15rem' }} className='book-card'>
                        <Card.Img variant="top" src={blankBook} />
                        <Card.Body>
                            <Card.Title>{book.book_name}</Card.Title>
                            <Button variant="primary">Return</Button>
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
                    {renderBorrows()}
                </Row>
            </Container>
        </div>
    )
}

export default BorrowedList