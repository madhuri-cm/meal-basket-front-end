const categoryInitialValue = []


const categoryReducer = (state=categoryInitialValue,action) => {
    switch(action.type) {
        case 'SET_CATEGORY':{
            return[].concat(action.payload)
        }
        default:{
            return[].concat(state)
        }

    }
}


export default categoryReducer