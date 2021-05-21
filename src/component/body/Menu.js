import React, { Component } from 'react'
import { CardColumns, Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import DishDetail from './DishDetail'
import MenuItem from './MenuItem'
import { connect } from 'react-redux'
import { addComment, fetchDishes } from '../../redux/actionCreators'
import Loading from './Loading'

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => {
      dispatch(fetchDishes())
    }
  }
}

export class Menu extends Component {
  state = {
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

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    if (this.props.dishes.isLoading) {
      return (
        <Loading />
      )
    }
    else {
      const menu = this.props.dishes.dishes.map(item => {
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
        const comments = this.props.comments.filter(comment => {
          return comment.dishId === this.state.selectedDish.id
        })
        dishDetail = <DishDetail
          dish={this.state.selectedDish}
          comment={comments}
          addComment={this.props.addComment}
        />
      }

      return (
        <div className="row mt-3">
          <div className="container">
            <CardColumns>{menu}</CardColumns>
            <Modal isOpen={this.state.modalOpen}>
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
}

  export default connect(mapStateToProps, mapDispatchToProps)(Menu)
