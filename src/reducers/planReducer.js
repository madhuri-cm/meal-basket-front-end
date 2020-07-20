const planInitialValue = []

const planReducer = (state=planInitialValue,action) => {
    switch(action.type) {
        case 'SET_PLANS': {
            return [... action.payload]
        }
        default:{
            return[...state]
        }
    }
}

export default planReducer