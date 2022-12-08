import { Button ,Input,Textarea,Grid,GridItem} from "@chakra-ui/react";

let Chakra = () =>{
    return(
        <div>
            <Button colorScheme='blue'>
                click Me
            </Button>
            <Input style={{width:100}} placeholder='large size' size='lg' />
            <Textarea placeholder='Here is a sample placeholder' /> 
            

        </div>
    )
}

export default Chakra;