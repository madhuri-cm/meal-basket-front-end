import axios from 'axios'

export const setPlans = (plans) => {
    return {
        type:'SET_PLANS',
        payload: plans
    }
}

export const startGetPlans = () => {
    return(dispatch) => {
        axios.get('/plans')
        .then((response)=>{
            console.log(response.data)
            const plans = response.data
            dispatch(setPlans(plans))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}