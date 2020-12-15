import React from 'react';
import {Loading} from "@/components/UI/Loaders/Loader";
import {useDispatch} from "react-redux";
import {USER_ME} from "@/redux/actions/users";
import { useQuery } from "@apollo/react-hooks";
import { ME_QUERY } from "@/graphql/queries/me";

interface IProps{
    children: ReactNode
}

const Auth:React.FC<IProps> =   ({children}) =>{

    const {loading, errors, data} = useQuery(ME_QUERY);
    const dispatch = useDispatch();
    
    if(loading){
        return <Loading/>
    }
  
    if(data && data.me){
     dispatch({ type: USER_ME, user: {...data.me} })
    }

    return(
        <>
            {children}
        </>
    )
};


export default Auth;