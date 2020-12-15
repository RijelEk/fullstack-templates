import React from 'react';
import {useSelector} from "react-redux";
import {Box} from "@/components/UI/Box/Box"
import {Header} from "@/components/UI/Text/Header"
import { withApollo } from "@/utils/withApollo";

interface IProps{};

const Home:React.FC<IProps> = () => {
    const user = useSelector(state => state.user);
    const username = user?.me?.username ? user.me.username : "hacker";
    const text = `Welcome, ${username}!`;

    return (
        <Box mt={20} pl={30} pr={30}>
          <Header>
            {text}
         </Header>
        </Box>
      
    )
};

export default withApollo({ ssr: false })(Home);