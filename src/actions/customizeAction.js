import axios from 'axios'



export const setCustomize = (customize) => {
    return {
        type:'SET_CUSTOMIZE',
        payload:customize
    }
}
export const startGetCustomize = () => {
    return(dispatch) => {
        axios.get('/customize',{
            headers:{
                'Auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const customize = response.data
            dispatch(setCustomize(customize))


        })
        .catch((err)=>{
            alert(err)
        })
    }
}

export const addCustomize = (customize) => {
    return {
        type:'ADD_CUSTOMIZE',
        payload:customize
    }
}

export const startAddCustomize = (formData,redirect) => {
    return(dispatch) => {
        axios.post('/customize',formData,{
            headers:{
                'Auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response.data)
            const customize = response.data
            dispatch(addCustomize(customize))
            redirect()
        })
    }
}

export const removeCustomize = (id) => {
    return {
        type:'REMOVE_CUSTOMIZE',
        payload:id
    }
}

export const startRemoveCustomize = (id) => {
    return(dispatch)=> {
        axios.delete(`/customize/${id}`,{
            headers:{
                'Auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const customize = response.data
            dispatch(removeCustomize(id))
        })
    }
}