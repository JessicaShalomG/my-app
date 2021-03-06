import React,{Component} from "react";
import TodoItems from "./TodoItems";
import Pictures from "./Pictures";
import "./TodoList.css"


class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      pictures:[]
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e){
    if(this._inputElement.value !== ""){
    var newItem ={
      text:this._inputElement.value,
      key:Date.now()
    };

    this.setState((prevState)=>{
      return{
        items:prevState.items.concat(newItem)
      }
    });
  }
  this._inputElement.value ="";

  e.preventDefault();

  }
  deleteItem(key){
    var filterdItems = this.state.items.filter(function(item){
      return (item.key !== key)
    });
    this.setState({
      items: filterdItems
    });
  }
  render(){
    return(
      <div className ="todoListMain">
        <div className ="header">
          <form onSubmit ={this.addItem}>
            <input ref={(a) => this._inputElement = a}
                placeholder = "enter task">
            </input>
            <button type = "submit">add</button>
          </form>
        </div>
        <TodoItems entries ={this.state.items}
                   delete={this.deleteItem}/>
        <Pictures entries ={this.state.pictures}/>

      </div>
    );
  }

}

export default TodoList;
