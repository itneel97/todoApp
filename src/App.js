import React, { Component } from 'react';
import classes from './App.module.css';
import ListItems from './list-items'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends Component {

  state = {
    items: [],
    currentItem: {
      text: '',
      key: ''
    }
}
  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate = (text, key) => {
    console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        console.log(item.key + "    " + key)
        item.text = text;
      }
    })
    this.setState({
      items: items
    })

  }

  render() {
    return (
      <div className={classes.App}>
        <header>
          <h1>To-do List</h1>
          <form className={classes.todo} onSubmit={this.addItem}>
            <input type="text" placeholder="Enter task" value={this.state.currentItem.text} onChange={this.handleInput}></input>
            <button type="submit">Add</button>
          </form>
          <p>{this.state.items.text}</p>

          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />

        </header>
      </div>
    );
  }
}


export default App;