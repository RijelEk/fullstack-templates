import React, {useState} from 'react';
import { useRouter } from "next/router";
import { v4 } from "uuid";
import {Box} from "@/components/UI/Box/Box";
import {Header2} from "@/components/UI/Text/Header";
import {Label} from "@/components/UI/labels/Label";
import {Submit} from "@/components/UI/Buttons/Submit";
import Input from "@/components/UI/inputs/basicInput";
import {withApollo} from "@/utils/withApollo";
import {pathLogin} from "@/config/paths";
import withPrivateRoute from "@/HOC/withPrivateRoute";
import { useMutation } from "@apollo/react-hooks";
import {REGISTER_MUTATION } from "@/graphql/mutations/register";

interface ISTATE {
    email:string,
    password:string,
    firstName: string,
    lastName: string
};

const INITIAL_STATE:ISTATE = {
    email:"",
    password:"",
    firstName: "",
    lastName: ""
};

const Register= () => {

    const [formData, setFormData] = useState(INITIAL_STATE)
    const [register, {loading}] = useMutation(REGISTER_MUTATION);
    const router = useRouter();

    const onSubmit = async (e) =>{
        e.preventDefault();
        const response = await register({
            variables: {data: formData}
        });

        if(!loading && response?.data?.register?.user){
            router.push(pathLogin());
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
             <Label>First name</Label>
            </Box>
            <Box mt={10}>
                <Input 
                    value={formData.firstName}
                    id={v4()}
                    onChange={onChange}
                    type="firstName" 
                    name="firstName"
                    placeholder='First name'
                />
            </Box>
               <Box mt={10}>
             <Label>Last Name</Label>
            </Box>
            <Box mt={10}>
                <Input 
                    value={formData.lastName}
                    id={v4()}
                    onChange={onChange}
                    type="lastName" 
                    name="lastName"
                    placeholder='Last Name'
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
             <Submit type="submit">{loading ? "Submitting..." : "Register"}</Submit>
           </Box>
        </form>
        </Box>
      </Box>
    )
};

export default withApollo({ ssr: false })(withPrivateRoute(Register, false));