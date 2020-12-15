import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Box} from "@/components/UI/Box/Box"
import {Header} from "@/components/UI/Text/Header"
import { withApollo } from "@/utils/withApollo";
import withPrivateRoute from "@/HOC/withPrivateRoute";
// import { useMutation } from "@apollo/react-hooks";
import { UPLOAD_IMAGE_MUTATION } from "@/graphql/mutations/uploadImage";
import { useMutation, gql } from "@apollo/client";

interface IProps{};

const Profile:React.FC<IProps> = () => {

  const user = useSelector(state => state.user);
  const [file, setFileToUpload] = useState(null);
  const [mutate, {loading}] = useMutation(UPLOAD_IMAGE_MUTATION);


  const onChange = ({
    target: {
      validity,
      files: [file]
    }
  }: any) => validity.valid && mutate({ variables: {  file } });

  const onSubmit = async (e) =>{
    e.preventDefault();
    console.log(file)
    const response = await mutate({
          variables: { file}
    });


  }

    return (
        <Box mt={20} pl={30} pr={30}>
          <Header>
            Edit Profile
          </Header>
          <input onChange={onChange} type="file" placeholder="photo" />
          <button onClick={(e)=>onSubmit(e)}>Submit</button>
        </Box>
      
    )
};

export default withApollo({ ssr: false })(withPrivateRoute(Profile, true));