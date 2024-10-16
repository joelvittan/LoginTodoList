import "./todolist.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Component } from "react";

class TodoCont extends Component {
  state = {
    editStatus: true,
    title: this.props.listItem.title,
    description: this.props.listItem.title,
  };

  render() {
    let clasname1;
    let clasname2;
    let { editStatus, title, description } = this.state;

    const changeTask = (event) => {
      if (event.key === "Enter" && event.value !== "") {
        title = event.target.value;
        editStatus = !editStatus;
        this.setState({ title, editStatus });
        console.log(event.value);
      }
    };

    if (editStatus) {
      clasname1 = "hide";
      clasname2 = "";
    } else {
      clasname1 = "";
      clasname2 = "hide";
    }

    const edit = () => {
      editStatus = !editStatus;
      this.setState({ editStatus });
      console.log(editStatus);
    };

    const { listItem, deleteUser } = this.props;

    const onDelete = () => {
      deleteUser(listItem.id);
      console.log("delete btn clkd");
    };

    return (
      <li className="todoCont">
        <input type="checkbox" />
        <input
          type="text"
          placeholder="update Task"
          onKeyDown={changeTask}
          className={`input-ele ${clasname1}`}
          defaultValue={description}
        />

        <div className={`todoCont__title ${clasname2}`}>{title}</div>

        <div className="options">
          <button onClick={edit}>
            <FaEdit />
          </button>

          <button onClick={onDelete}>
            <MdDelete />
          </button>
        </div>
      </li>
    );
  }
}

export default TodoCont;
