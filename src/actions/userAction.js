import axios from 'axios';
import Alert from 'react-bootstrap/Alert'

export const startRegisterUser = (registerData, redirect) => {
    return (dispatch) => {
        axios.post('/users-register', registerData)
            .then((response) => {
                console.log(response.data)
                if(response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                   alert('Registered Successfully')
                   redirect()
                }
            })

            .catch((err)=>{
                console.log(err)
            })
           
    }
}

export const startRegisterAdmin = (registerData,redirect) => {
    return(dispatch) => {
        axios.post('/admin-register',registerData)
        .then((response)=>{
            console.log(response.data)
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
                alert('Registered Successfully!!!')
                redirect()
            }
        })

        .catch((err)=>{
            console.log(err)
        })
    }
}

export const setUser = (user) => {
    return {
        type:'SET_USER',
        payload: user
    }
}


export const startLoginUser = (loginData,redirect) => {
    return(dispatch)=>{
        axios.post('/login',loginData)
        .then((response)=>{
            console.log(response.data)
            if(response.data.hasOwnProperty('errors')) {
                alert('response.data.errors')
            } else {
                alert('logged In Successfully!!')
                localStorage.setItem('authToken',response.data.token)

                axios.get('/account',{
                    headers:{
                        'Auth':localStorage.getItem('authToken')
                    }
                }
                )
                .then((response)=>{
                
                    const user = response.data
                    console.log(user)
                    dispatch(setUser(user))
                    redirect()

                }) 
                .catch((err)=>{
                    console.log(err)
                })

                

            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startGetUser = () => {
    return(dispatch)=>{
        axios.get('/account',{
            headers:{
                'Auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const user = response.data
            console.log(user)
            dispatch(setUser(user))

        })
        .catch((err)=>{
            console.log(err)
        })
    }
}