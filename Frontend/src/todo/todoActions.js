import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

const changeDescription = (event) => {
    return {
        type: 'DESCRIPTION_CHANGED',
        payload: event.target.value
    }
}

const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description; // O método getState() retorna o estado global
        axios.get(`${URL}?sort=createdAt${description ? `&description__regex=/${description}/` : ''}`)
                .then(resp => dispatch({ type: 'TODO_SEARCH', payload: resp.data }))
    }
}

// const add = (description) => {
//     const request = axios.post(URL, { description });
//     return [
//         { type: 'TODO_ADDED', payload: request },
//         search()
//     ]
// }

const add = description => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data }))
            .then(resp => dispatch(search()));
    }
}

const markAsDone = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: resp.data }))
            .then(resp => dispatch(search()));
    }
}

const markAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch({ type: 'TODO_MARKED_AS_PENDING', payload: resp.data }))
            .then(resp => dispatch(search()));
    }
}

const remove = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`, { ...todo })
            .then(resp => dispatch({ type: 'TODO_REMOVE' }))
            .then(resp => dispatch(search()));
    }
}

const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}

export { changeDescription, search, add, markAsDone, markAsPending, remove, clear }