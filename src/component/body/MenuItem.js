import React from 'react'
import { Card, CardBody, CardImgOverlay, CardImg, CardTitle } from 'reactstrap'
const MenuItem = (props) => {
  return (
    <div className="container">
      <Card className="mb-3">
        <CardImg src={props.dish.image} alt={props.dish.name} />
        <CardBody>
          <CardTitle onClick={() => props.onDishSelect(props.dish)} style={{ cursor: "pointer" }}>{props.dish.name}</CardTitle>

        </CardBody>
      </Card>
    </div>
  )
}

export default MenuItem
