import React, {useState} from 'react';
import { useRouter } from "next/router";
import { v4 } from "uuid";
import {Box} from "@/components/UI/Box/Box";
import {Header2} from "@/components/UI/Text/Header";
import {Label} from "@/components/UI/labels/Label";
import {Submit} from "@/components/UI/Buttons/Submit";
import Input from "@/components/UI/inputs/basicInput";
import {withApollo} from "@/utils/withApollo";
import {pathHome} from "@/config/paths";
import {useDispatch} from "react-redux";
import {USER_ME} from "@/redux/actions/users";
import withPrivateRoute from "@/HOC/withPrivateRoute";
import { useMutation } from "@apollo/react-hooks";
import {LOGIN_MUTATION } from "@/graphql/mutations/login";

interface ISTATE {
    email:string,
    password:string
};

const INITIAL_STATE:ISTATE = {
    email:"",
    password:""
};

const Login= () => {
    
    const [formData, setFormData] = useState(INITIAL_STATE);
    const router = useRouter();
    const dispatch = useDispatch()
    const [login, {loading}] = useMutation(LOGIN_MUTATION);

    const onSubmit = async (e) =>{
        e.preventDefault();
        const response = await login({
            variables: formData
        });

        if(!loading && response.data.login.user){
            dispatch({ type: USER_ME, user: {...response.data.login} })
            router.push(pathHome());
        }
    };

    const onChange = (e) =>{
       const {name, value} = e.target;
       setFormData({...formData, [name]:value});
    }

    return (
        <Box mt={20} pl={30} pr={30}>
        <Header2>
           Login
        </Header2>
        <Box mt={30}>
        <form onSubmit={onSubmit}>
            <Box mt={10}>
             <Label>Email</Label>
            </Box>
            <Box mt={10}>
                <Input 
                    value={formData.email}
                    id={v4()}
                    onChange={onChange}
                    type="email" 
                    name="email"
                    placeholder='Email'
                />
            </Box>
            <Box mt={10}>
             <Label>Password</Label>
            </Box>
            <Box mt={10}>
                <Input 
                    value={formData.password}
                    id={v4()}
                    onChange={onChange}
                    type="password" 
                    name="password"
                    placeholder='Password'
                />
            </Box>
           <Box mt={30}>
              <Submit type="submit">{loading ? "Submitting..." : "Login"}</Submit>
           </Box>
        </form>
        </Box>
      </Box>
    )
};

export default withApollo({ ssr: false })(withPrivateRoute(Login, false));