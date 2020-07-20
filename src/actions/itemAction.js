import axios from 'axios'



export const setItem = (item) => {
    return {
        type:'SET_ITEM',
        payload:item
    }
}

export const startGetItem = () => {
    return(dispatch)=>{
        axios.get('/items',{
            headers:{
                'Auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response.data)
            const item = response.data
            dispatch(setItem(item))

        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const addItem = (item) => {
    return {
        type:'ADD_ITEM',
        payload:item
    }
}

export const startAddItem = (formData,redirect) => {
    return(dispatch)=>{
        axios.post('/items',formData,{
            headers:{
                'Auth':localStorage.getItem('authToken'),
                'content-type': 'multipart/form-data'
            }
        })
        .then((response)=>{
            console.log(response.data)
            const item = response.data
            dispatch(addItem(item))
            redirect()
        })
    }
}