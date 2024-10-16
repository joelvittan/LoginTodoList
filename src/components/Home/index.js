import "./index.css";
import TodoCont from "../Todolist/todolist";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { Component } from "react";

const todoArr = [
  {
    id: 1,
    title: "Wakeup At 7AM",
    completed: false,
  },
  {
    id: 2,
    title: "Brush Teeth",
    completed: false,
  },
  {
    id: 3,
    title: "Breakfast",
    completed: false,
  },
  {
    id: 4,
    title: "Office",
    completed: false,
  },
];







let count = 0;
class Home extends Component {
  state = { arr2: [],cookieDelete:false}
  //deleting user
  deleteUser = uniqueNo => {
    this.setState({
      arr2: this.state.arr2.filter(user => user.id !== uniqueNo),
    })
  }
  render() {
    let { arr2,cookieDelete} = this.state;

    const handleChange = (event) => {
      if ((event.key === "Enter") && (event.target.value !== "")) {

        count = count + 1;
        arr2.push({
          id: count,
          title: event.target.value,
          editStatus: false,
        })
        this.setState({ arr2 });
        event.target.value = ""

      }

    };

    const logout=()=>{
      Cookies.remove("jwt_token")
      cookieDelete=!cookieDelete
      this.setState({cookieDelete})
      console.log(cookieDelete)
    }

    if(cookieDelete){
      return <Navigate to="/login"/>
    }


    return (
      <div className="bg">
        <nav> <button className="input-ele"
            type="button"
            placeholder="Enter Task Here"
            onClick={logout}>
            Logout
          </button></nav>
        <h1>Todo List 1</h1>
        <p>Delet Option Wont Work</p>
        {todoArr.map((eachItem) => (
          <ul className="list">
            <TodoCont key={eachItem.id} listItem={eachItem} />
          </ul>
        ))}

        {/* to do 2 */}

        <h1>Todo List 2</h1>

        <div className="inputField">
          <input
            className="input-ele"
            type="text"
            placeholder="Enter Task Here"
            onKeyDown={handleChange}
          />
         
            
          
        </div>

        {arr2.map((eachItem) => (
          <ul className="list">
            <TodoCont key={eachItem.id} listItem={eachItem} deleteUser={this.deleteUser} edititem={this.edititem} />
          </ul>
        ))}

      </div>
    );
  }
}

export default Home