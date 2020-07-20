import axios from 'axios'

export const setCategory = (category) => {
    return {
        type:'SET_CATEGORY',
        payload:category
    }
}

export const startGetCategory = () =>{
    return(dispatch)=>{
        axios.get('/categories',{
            headers:{
                'Auth':localStorage.getItem('authToken')
            }

        })
        .then((response)=>{
            console.log(response.data)
            const category = response.data
            dispatch(setCategory(category))
        })
    }
}