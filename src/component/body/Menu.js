import React, { Component } from 'react'
import { CardColumns, Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import DISHES from '../../data/dishes'
import DishDetail from './DishDetail'
import MenuItem from './MenuItem'
export class Menu extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null,
    modalOpen: false,
  }
  onDishSelect = dish => {
    this.setState({
      selectedDish: dish,
      modalOpen: !this.state.modalOpen
    })
  }
  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }
  render() {
    const menu = this.state.dishes.map(item => {
      return (
        <MenuItem
          dish={item}
          key={item.id}
          onDishSelect={this.onDishSelect}
        />
      )
    })
    let dishDetail = null;
    if (this.state.selectedDish != null) {
      dishDetail = <DishDetail dish={this.state.selectedDish} />
    }
    return (
      <div className="row mt-3">
        <div className="container">
          <CardColumns>{menu}</CardColumns>
          <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
            <ModalBody>
              {dishDetail}
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggleModal}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Menu
