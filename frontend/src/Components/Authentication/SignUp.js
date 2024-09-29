import React,{useState} from 'react'
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
const SignUp = () => {
    const[name,setName]=useState("");
     const[email,setEmail]=useState("");
      const[password,setPassword]=useState("");
      const[confirmpassword,setConfirmPassword]=useState("");
      const[pic,setPicture]=useState("");
       const [picLoading, setPicLoading] = useState(false);
       const[show,setShow]=useState(false);
       const handleClick=()=>{
        setShow(!show)
       }
       const postDetails=(pics)=>{

       }
       const submitHandler=()=>{

       }
  return (
     <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
        <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
        <FormControl id="password" isRequired>
        <FormLabel>password</FormLabel>
        <InputGroup>
         <Input type={show?"text":"password"}
          placeholder="Enter Your Name"
          onChange={(e) => setPassword(e.target.value)}
        />
         <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
       
      </FormControl>
       <FormControl id="confirm password" isRequired>
        <FormLabel>confirm password</FormLabel>
        <InputGroup>
         <Input
          placeholder="Enter Your Name"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
         <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        </FormControl>
        <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={picLoading}
      >
        Sign Up
      </Button>
      </VStack>
  )
}

export default SignUp
