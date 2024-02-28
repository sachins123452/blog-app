import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
const AuthRoute = ({component}) => {
    const navigate = useNavigate()

    useEffect(()=>{
        let login = localStorage.getItem('@login');
        if(!login){
            navigate('/login')
        }
    },[])

  return component
}

export default AuthRoute