import React from 'react';
import {Box} from "@/components/UI/Box/Box"
import Link from "@/components/UI/Text/Link";
import {pathLogin, pathRegister } from "@/config/paths";

const AuthNav = () =>(
     <Box disp="flex" h="100%" ai="center" fd="row" mr={30}>
        <Box mr={20}>
            <Link href={pathLogin()} name="Login"/>
        </Box>
            <Link href={pathRegister()} name="Register"/>
        </Box>
);

export default AuthNav;