import React from 'react';
import {Box} from "@/components/UI/Box/Box"
import Link from "@/components/UI/Text/Link";
import {pathProfile} from "@/config/paths";
import {Avatar} from "@/components/UI/Avatar/Avatar";

interface IUser{
    id:number,
    name: string,
    email: string
}
const ProfileNav = ({user, logout}) =>(
     <Box disp="flex" h="100%" ai="center" fd="row" mr={30}>
      <Box  mr={10}>
        <Avatar/>
      </Box>
       <Box  mr={10}>
         <Link href={pathProfile()} name={user?.me?.name}/>
       </Box>
       <button onClick={()=>logout()}>Logout</button>
     </Box>
);

export default ProfileNav;