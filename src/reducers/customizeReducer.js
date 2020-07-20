const customizeInitialState = []

const customizeReducer = (state=customizeInitialState,action) => {
    switch(action.type) {
        case 'SET_CUSTOMIZE':{
            return[].concat(action.payload)
        }
        case 'ADD_CUSTOMIZE':{
            return state.concat(action.payload)
        }
        case 'REMOVE_CUSTOMIZE':{
            return state.filter(customize=>customize._id !== action.payload)
        }
        default:{
            return[].concat(state)
        }
    }
}

export default customizeReducer