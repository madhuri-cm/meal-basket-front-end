import axios from 'axios'


export const setCart = (cart) => {
    return {
        type:'SET_CART',
        payload:cart
    }
}

export const startGetCart = () => {
    return(dispatch) => {
        axios.get('/cart',{
            headers:{
                'Auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const cart = response.data
            dispatch(setCart(cart))

        })
        .catch((err)=>{
            alert(err)
        })
    }
}

export const addCart = (cart) => {
    return {
        type:'ADD_CART',
        payload:cart
    }
}


export const startAddCart = (formData,redirect) => {
    return(dispatch)=> {
    axios.post('/cart',formData,{
        headers:{
            'Auth':localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
        console.log(response.data)
        const cart = response.data
        dispatch(addCart(cart))
        redirect()

    })
    .catch((err)=>{
        alert(err)
    })
    }

}

export const deleteCart = (id) => {
    return {
        type:'DELETE_CART',
        payload:id
    }
}

export const startDeleteCart = (id) => {
    return(dispatch)=>{
        axios.delete(`/cart/${id}`,{
            headers:{
                'Auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const cart = response.data
            dispatch(deleteCart(id))

        })
        .catch((err)=>{
            console.log(err)
        })
    }
}