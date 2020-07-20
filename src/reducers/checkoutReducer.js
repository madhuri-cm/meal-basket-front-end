const checkoutInitialValue=[]

const checkoutReducer = (state=checkoutInitialValue,action) => {
    switch(action.type) {
        case 'SET_CHECKOUT':{
            return[].concat(action.payload)
        }
        case 'ADD_CHECKOUT' :{
            return state.concat(action.payload)
        }
        default:{
            return[].concat(state)
        }
    }
}

export default checkoutReducer