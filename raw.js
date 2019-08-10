function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, { visibilityFilter: action.filter });
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [...state.todos, { text: action.text, completed: false }],
            });
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (index == action.index) {
                        return Object.assign({}, todo, { completed: !todo.completed });
                    }
                    return todo;
                }),
            });
        default:
            return state;
    }
}


function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                text: action.text,
                completed: false
            }]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state

    }
}


function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: todos(state.todos, action)
            })
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: todos(state.todos, action)
            })
        default:
            return state
    }
}

import React from 'react'
import { View, Text } from 'react-native'

const Hello = (onClick, completed, text) => {
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default Hello

return (
    <a href="" onClick={e => {
        e.preventDefault()
        onClick()
    }}>{children}</a>
)