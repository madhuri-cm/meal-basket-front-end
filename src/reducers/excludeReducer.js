const excludeInitialState = []

const excludeReducer = (state=excludeInitialState,action) => {
    switch(action.type) {
        case 'SET_EXCLUDE':{
            return[].concat(action.payload)
        }
        default:{
            return[].concat(state)
        }
    }

}

export default excludeReducer