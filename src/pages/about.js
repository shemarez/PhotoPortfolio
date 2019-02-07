import React from "react"
import Header from "../components/header"
import { Container, Row, Col, Image, Card } from 'react-bootstrap';


export default () => (
  [<Header headerText='Pedram Souri Photography'/>,
  <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="https://pmcvariety.files.wordpress.com/2018/11/rexfeatures_9972870n.jpg?w=1000" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>    
  </Col>
  </Row>
</Container>]
)