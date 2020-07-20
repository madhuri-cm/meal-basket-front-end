import axios from 'axios'

export const setCheckout = (checkout) => {
    return {
        type:'SET_CHECKOUT',
        payload:checkout
    }
}

export const startGetCheckout = ()=> {
    return(dispatch)=>{
        axios.get('/checkout',{
            headers:{
                'Auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const checkout = response.data
            console.log(checkout)
            dispatch(setCheckout(checkout))

        })
        .catch((err)=>{
            alert(err)
        })
    }
}

export const addCheckout = (checkout) => {
    return {
        type:'ADD_CHECKOUT',
        payload:checkout
    }
}


export const startAddCheckout = (formData) => {
    return(dispatch)=>{
        axios.post('/checkout', formData,{
            headers:{
                'Auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response.data)
            const checkout = response.data
            dispatch(addCheckout(checkout))

        })
        .catch((err)=>{
            alert(err)
        })
    }
}