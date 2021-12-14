import React , {useRef,useState} from 'react'
import {Card,Form , Button, Alert} from 'react-bootstrap';
import { useAuth} from '../context/authContext';
import { Link} from 'react-router-dom';

export default function ForgotPassword() {
    const emailRef = useRef();
    const {resetPassword} = useAuth();
    const [error,setError] = useState();
    const [msg,setMsg] = useState();
    const [loading,setLoading] = useState();
    async function handleSubmit(e){
        e.preventDefault();
        try{
            setError('')
            setMsg('')
            await resetPassword(emailRef.current.value)
            setMsg('reset mail sent to your mail')
        } catch {
            setError('this email dose not exists')
        }
        setLoading(false)
    }
    return (
        <>
            <Card style={{ margin:'10px' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Forgot Password</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {msg && <Alert variant="success">{msg}</Alert>}
                <Form style={{ margin:'20px' }} onSubmit={handleSubmit}>
                    <Form.Group id = 'email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required />
                    </Form.Group>
                    <Button className="w-100 mt-5" disabled={loading} type="submit">Reset Password</Button>
                </Form>
                </Card.Body>
                <div className = "w-100 text-center mt-2 mb-3">
                 <Link to ="/login">Log in</Link>
            </div>
            </Card>

            <div className = "w-100 text-center mt-2">
                Don't have account ? <Link to ="/signup">sign Up</Link>
            </div>
        </>
    )
}
