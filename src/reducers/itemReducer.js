const itemInitialValue = []

const itemReducer = (state=itemInitialValue,action) => {
    switch(action.type) {
        case 'SET_ITEM':{
            return[].concat(action.payload)
        }
        case 'ADD_ITEM':{
            return state.concat(action.payload)
        }
        default:{
            return[].concat(state)
        }
    }
}

export default itemReducer