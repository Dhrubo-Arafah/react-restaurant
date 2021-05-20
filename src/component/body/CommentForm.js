import React, { Component } from 'react'
import { Button, Form, Input } from 'reactstrap';

export class CommentForm extends Component {
 constructor(props) {
  super(props);
  this.state = {
   author: '',
   rating: '',
   comment: ''
  }
 }
 render() {
  return (
   <div>
    <Form>
     <Input
      type="text"
      name="author"
      value={this.state.author}
      placeholder="Your Name"
      required />
     <br />
     <Input
      type="select"
      name="rating"
      value={this.state.rating}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
     </Input>
     <br />
     <Input
      type="textarea"
      name="comment"
      value={this.state.comment}
      placeholder="Your Comment"
      required />
     <br />
     <Button type="submit">Submit Comment</Button>
    </Form>
   </div>
  )
 }
}

export default CommentForm
