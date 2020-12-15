import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import { useRouter } from "next/router";
import {pathHome, pathLogin} from "@/config/paths";

export default function(ComposedClass, reload){
  const AuthenticationCheck = (props) => {
        const router = useRouter();
        useEffect(()=>{
          const isEmpty = Object.keys(props.user).length === 0 && props.user.constructor === Object;
          if(reload && isEmpty){
            router.push(pathLogin())
          } else if (!reload && !isEmpty) {
            router.push(pathHome())
          }
        }, [])
    
        return <ComposedClass/>
  }



  function mapStateToProps(state){
    return{
      user:state.user
    }
  }
  return connect(mapStateToProps)(AuthenticationCheck)
}