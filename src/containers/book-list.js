import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 

class BookList extends Component {
renderList(){
    return this.props.books.map((book)=>{
        return(
            <li key={book.title} className="list-group-item">{book.title}</li>
        ); 
    }); 
}

  render(){
      return(
          <ul className="list-group col-sm-4">
          {this.renderList()}
          </ul>
      )
  }
}

//define a function mapStateToProps take applications state as an argument 

function mapStateToProps(state){
    //whatever is returned will show up as props inside booklist - container 
    //an object is returned 
    //this is the connection between redux/ react
    return{
        books: state.books.books
    }; 
}

export default connect(mapStateToProps)(BookList); 

