import React, {useEffect} from 'react';
import { useRouter } from 'next/router'
import { withApollo } from "@/utils/withApollo";
import withPrivateRoute from "@/HOC/withPrivateRoute";
import {Box} from "@/components/UI/Box/Box"
import {Header} from "@/components/UI/Text/Header"
import { useMutation } from "@apollo/react-hooks";
import {CONFIRM_MUTATION} from "@/graphql/mutations/confirm";

interface IProps{
    ctx:any
};

const Confirm:React.FC<IProps> = ({ctx}) => {

   const router = useRouter();
   const projectId:any = router?.query?.id;
   const [confirm, {loading}] = useMutation(CONFIRM_MUTATION);
   if(projectId){
   const response =  confirm({
           variables: {token: projectId}
        });
   }


    if(loading){
        return(
            <div>Loading</div>
        )
    }

    return (
        <Box mt={20} pl={30} pr={30}>
          <Header>
            Confirm user
          </Header>
        
        </Box>
      
    )
};


export default withApollo({ ssr: false })(withPrivateRoute(Confirm, false));