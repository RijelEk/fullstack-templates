import React from 'react';
import {useSelector} from "react-redux";
import { NavBody } from "@/components/UI/Nav/Nav";
import {Box} from "@/components/UI/Box/Box"
import { pathHome} from "@/config/paths";
import Link from "@/components/UI/Text/Link";
import AuthNav from "@/components/Nav/AuthNav";
import ProfileNav from "@/components/Nav/ProfileNav";
import { useMutation } from "@apollo/react-hooks";
import {LOGOUT_MUTATION } from "@/graphql/mutations/logout";

const Nav = () =>{
    const user = useSelector(state => state.user);
    const [logout, {loading}] = useMutation(LOGOUT_MUTATION); 
    return(
        <NavBody>
             <Box disp="flex" h="100%" ai="center" fd="row" w="100%" jc="space-between">
                <Link href={pathHome()} name="Home"/>
                {user?.me ? 
                <ProfileNav logout={logout} user={user}/>
                :<AuthNav/>}

             </Box>
        </NavBody>
    )
};

export default Nav;