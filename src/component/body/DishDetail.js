import React from 'react'
import { CardText, CardBody, CardTitle, Card, CardImg } from 'reactstrap'
import LoadComments from './LoadComments'
function DishDetail(props) {
  console.log(props)
  return (
    <div>
      <Card>
        <CardImg src={props.dish.image} alt={props.dish.name} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>{props.dish.name}</CardTitle>
          <CardText>
            <CardText>{props.dish.description}</CardText>
            <CardText>Price {props.dish.price} BDT</CardText>
          </CardText>
          <hr />
          <LoadComments comments={props.comment} />
        </CardBody>
      </Card>
    </div>
  )
}

export default DishDetail
