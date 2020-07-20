import axios from 'axios'

export const setallergy = (allergy) => {
    return {
        type:'SET_ALLERGY',
        payload:allergy
    }
}
export const startGetAllergy = () => {
    return(dispatch) => {
        axios.get('/allergies',{
            headers:{
                'Auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response.data)
            const allergy = response.data
            dispatch(setallergy(allergy))
        })
    }
}