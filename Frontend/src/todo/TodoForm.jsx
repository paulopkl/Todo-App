import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDescription, search, add, clear } from './todoActions';

import Grid from '../template/Grid';
import IconButton from '../template/IconButton';

class TodoForm extends React.Component {

    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this);
    }
    
    componentWillMount() {
        this.props.search();
    }

    keyHandler(e) {

        console.log(e.key);

        const { add, search, description } = this.props;

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description);
        } else if (e.key === 'Escape') {
            this.props.clear()
        }
    }

    render() {
        const { description, search, add, clear } = this.props;
        return (
            <div role="form" className="todoForm">

                <Grid cols="12 9 10">
                    <input type="text" onChange={this.props.changeDescription} value={this.props.description} 
                        id="description" className="form-control" placeholder="Adicione uma tarefa" 
                        onKeyUp={this.keyHandler} />
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton onClick={() => add(description)} style="primary" 
                        icon="plus" />
                    <IconButton onClick={search} style="info" icon="search" />
                    <IconButton onClick={clear} style="default" icon="close" />
                </Grid>

            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description });

const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add, clear }, dispatch);

const todoform = connect(mapStateToProps, mapDispatchToProps)(TodoForm);

export default todoform;