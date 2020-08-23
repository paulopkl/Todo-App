import React, { Component } from 'react';
// import axios from 'axios';

import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// const URL = 'http://localhost:3003/api/todos';

class Todo extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { description: '', list: [] }

    //     this.handleSearch = this.handleSearch.bind(this);
    //     this.handleAdd = this.handleAdd.bind(this);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleRemove = this.handleRemove.bind(this);
    //     this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    //     this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    //     this.handleClear = this.handleClear.bind(this);

    //     this.refresh();
    // }
    
    // refresh(description = '') {
    //     const search = description ? `&description__regex=/${description}/` : '';
    //     axios.get(`${URL}?sort=createdAt${search}`)
    //         .then(resp => this.setState({ ...this.state, description, list: [...resp.data] }))
    // }

    // handleSearch(e) {
    //     this.refresh(this.state.description);
    // }
    
    // handleChange(e) {
    //     this.setState({ ...this.state, description: e.target.value });
    // }

    // handleAdd() {
    //     const description = this.state.description;
    //     axios.post(URL, { description })
    //         .then(data => this.refresh());
    // }

    // handleRemove(item) {
    //     axios.delete(`${URL}/${item._id}`)
    //         .then(data => this.refresh(this.state.description));
    // }

    // handleMarkAsDone(item) {
    //     axios.put(`${URL}/${item._id}`, { ...item, done: true })
    //         .then(data => this.refresh(this.state.description));
    // }

    // handleMarkAsPending(item) {
    //     axios.put(`${URL}/${item._id}`, { ...item, done: false })
    //         .then(data => this.refresh(this.state.description));
    // }
    
    // handleClear() {
    //     this.refresh();
    // }
    
    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                {/* <TodoForm description={this.state.description} handleAdd={this.handleAdd} 
                    handleChange={this.handleChange} handleSearch={this.handleSearch} 
                    handleClear={this.handleClear} /> */}
                {/* <TodoList list={this.state.list} handleRemove={this.handleRemove} 
                    handleMarkAsDone={this.handleMarkAsDone} handleMarkAsPending={this.handleMarkAsPending} /> */}
                <TodoForm />
                <TodoList />
            </div>
        );
    }
}

export default Todo;