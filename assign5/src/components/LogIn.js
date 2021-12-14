import React , {useRef,useState} from 'react'
import {Card,Form , Button, Alert} from 'react-bootstrap';
import { useAuth } from '../context/authContext';
import { Link, useHistory} from 'react-router-dom';

export default function LogIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [error,setError] = useState();
    const [loading,setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value ,passwordRef.current.value )
            history.push('/')
        } catch {
            setError('Failed to signIn')
        }
        setLoading(false)
    }
    return (
        <>
            <Card style={{ margin:'10px' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">LogIn</h2>
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
                    <Button className="w-100 mt-5" disabled={loading} type="submit">LogIn</Button>
                </Form>
                </Card.Body>
            </Card>
            <div className = "w-100 text-center mt-2">
               <Link to="/forgot-password">forgot password ?</Link>
            </div>
            <div className = "w-100 text-center mt-2">
                Don't have account ? <Link to ="/signup">sign Up</Link>
            </div>
        </>
    )
}
