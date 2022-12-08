import { Link, Stack, Button, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Card, CardHeader, Heading, CardBody, Text, InputGroup, InputRightElement, CardFooter, FormControl, FormLabel, Input, Container, Checkbox } from "@chakra-ui/react";
import './register.css'
import logo from '../../assets/starbucks-coffee-logo-0639383401-seeklogo.com.png';
import { MdLocationOn } from "react-icons/md";
import { useState } from 'react';

function Register() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <>


            <Container className="adudu">
                <Heading>Sign in or create an account</Heading>
                <div className="nganu">
                <Card className="form" align='center'>
                    <CardHeader>

                    </CardHeader>
                    <CardBody>

                        <FormControl w={400} isRequired="* indicates required field">
                            <FormLabel>Username or Email address</FormLabel>
                            <Input placeholder='First name' />
                            <br />
                            <InputGroup mt='30px' size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Checkbox colorScheme='green' mt='30px' defaultChecked>Keep me signed in.<Link fontWeight='bold' color='green.500'>
                            Details
                        </Link></Checkbox>
                        <br />
                        <Link fontWeight='bold' color='green.500'>
                            Forgot your username?
                        </Link>
                        <br />
                        <Link fontWeight='bold' color='green.500' >
                            Forgot your password?
                        </Link>
                    </CardBody>
                    <CardFooter className="footercard">
                        <Button borderRadius={100} colorScheme='green'>Sign In</Button>
                    </CardFooter>

                </Card>
            </div>

        </Container>

        </>
    )

}

export default Register