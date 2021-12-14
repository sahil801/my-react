import React , {useRef,useState} from 'react'
import {Card,Form , Button, Alert} from 'react-bootstrap';
import { useAuth } from '../context/authContext';
import { Link , useHistory} from 'react-router-dom';

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth();
    const [error,setError] = useState();
    const [loading,setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();
        if(passwordRef.current.value!==passwordConfirmRef.current.value){
            return setError('password do not match!')
        }
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value ,passwordRef.current.value )
            history.push('/')
        } catch {
            setError('Failed')
        }
        setLoading(false)
    }
    return (
        <>
            <Card style={{ margin:'10px' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form style={{ margin:'20px' }} onSubmit={handleSubmit}>
                    <Form.Group id = 'email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id = 'password'>
                        <Form.Label>password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id = 'password-confirm'>
                        <Form.Label>password Confirmation</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmRef} required />
                    </Form.Group>
                    <Button className="w-100 mt-5" disabled={loading} type="submit">Sign Up</Button>
                </Form>
                </Card.Body>
            </Card>
            <div className = "w-100 text-center mt-2">
                Already have account ? <Link to="/login">Log In</Link>
            </div>
        </>
    )
}
