import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 

class BookDetail extends Component {



    render(){
        console.log("state for book_detail", this.state); 
        console.log("this is props in book_detail", this.props); 
        if(!this.props.book){
            return <div> Select a Book to Get Started! </div>
        }

        return(
            <div> 
                <h3>Details For: </h3> 
                <div> Title: {this.props.book.title} </div>
                <div> Pages: {this.props.book.pages} </div>
            </div>
        )
    }

}



function mapStateToProps(state){
    return{
        book:state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail); 