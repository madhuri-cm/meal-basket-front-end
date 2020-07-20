import axios from 'axios'

export const setExclude = (exclude) => {
    return {
        type:'SET_EXCLUDE',
        payload:exclude
    }
}
export const startGetExclude = () => {
    return(dispatch) => {
        axios.get('/exclude',{
            headers:{
                'Auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response.data)
            const exclude = response.data
            dispatch(setExclude(exclude))
        })
    }
}