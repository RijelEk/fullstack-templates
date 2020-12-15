import React, {ReactNode} from 'react';
import Nav from "@/components/Nav/Nav"
import BaseMetaData from "@/meta/base";

interface IProps{
    children: ReactNode
}

const MainLayout:React.FC<IProps> = ({children}) =>{
    return(
        <>
        <BaseMetaData/>
        <Nav/>
        {children}
        </>
    )
};

export default MainLayout;