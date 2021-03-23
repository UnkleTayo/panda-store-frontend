import { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import FormContainer from '../Components/FormContainer'
import {register} from '../actions/userAction'
import Message from '../Components/Message'
import Loader from '../Components/Loader'

const RegisterScreen = ({location, history, ...props}) => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [message,setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister =  useSelector(state => state.userRegister)
    const {loading, error, userInfo} = userRegister;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if (userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault() 
        if(password !== confirmPassword){
            setMessage('Passwords do not match')
        } else {

            // dispatch register
            dispatch(register(name, email, password))
        }
    }
    return (
<FormContainer>
    <h1>Sign Up</h1>
    {error && <Message variant='danger'>{error}</Message>}
    {message && <Message variant='danger'>{message}</Message>}
    {loading && <Loader/>}
    <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Enter your Name' 
            value={name}
            onChange={(e) => setName(e.target.value)}>
            </Form.Control>
        </Form.Group>
        
        <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}>
            </Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}>
            </Form.Control>
        </Form.Group>
        
        <Form.Group controlId='confirmPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Confirm Password' 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>Register</Button>
        <Row className='py-3'>
            <Col>
           Have an account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
             </Col>
        </Row>
    </Form>

</FormContainer>
    )
}

export default RegisterScreen
