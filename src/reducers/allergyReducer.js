const allergyInitialState = []

const allergyReducer = (state=allergyInitialState,action) => {
    switch(action.type) {
        case 'SET_ALLERGY':{
            return[].concat(action.payload)
        }
        default:{
            return[].concat(state)
        }
    }

}

export default allergyReducer