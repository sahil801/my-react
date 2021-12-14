import React ,{useState}from 'react'
import { Card ,Button,Alert} from 'react-bootstrap'
import { useAuth } from '../context/authContext'
import { Link,useHistory } from 'react-router-dom'

export default function Dashboard() {
    const [error,setError] = useState('')
    const history = useHistory()
    const {currentUser,logout} = useAuth()
    async function handleClick (){
        try{
            await logout()
            history.push('/login')
        }
        catch{
            setError('faild to log out')
        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                <h2 className="text-center mb-4">My Dashboard</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email :</strong>{currentUser.email}
                <Link to='/update-profile' className="btn btn-primary mt-3 w-100">UpdateProfile</Link>
                </Card.Body>
            </Card>
            <div className = "w-100 text-center mt-2">
                <Button varient  ="link" onClick={handleClick} >Log Out</Button>
            </div>
        </>
    )
}
