import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import "./sass/style.scss";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");

  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter a value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setIsEditing(false);
      setEditID(null);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item add to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "dabger", "all clear");
    setList([]);
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    showAlert(true, "danger", "item removed");
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setName(specificItem.title);
    setIsEditing(true);
    setEditID(id);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeItem={showAlert} list={list} />}
        <h3>Grocery-bud</h3>
        <div className='grocery-control'>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='grocery'
          />
          <button className='submit-btn' type='submit'>
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            Clear All
          </button>
        </div>
      )}
    </section>
  );
};

export default App;
