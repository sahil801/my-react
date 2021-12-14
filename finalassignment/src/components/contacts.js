import React ,{useState,useEffect} from 'react'
import Contactform from './contactform';
import firebaseDb from "../firebase";

export default function Contacts() {
    
    var [currentId, setCurrentId] = useState('')
    var [currentId, setCurrentId] = useState('')
    var [contactObjects, setContactObjects] = useState({})
    useEffect(() => {
        firebaseDb.child('contacts').on('value', snapshot => {
            if (snapshot.val() != null)
                setContactObjects({
                    ...snapshot.val()
                })
            else
                setContactObjects({})

        })
    }, [])

    
    const addEdit =(obj)=>{
        if(currentId===''){
            firebaseDb.child('contacts').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                }
            )
        }
        else{
            firebaseDb.child(`contacts/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        }
        
    }
    
    const handleDel = () =>{
        console.log('delete')
    }
    return (
        <>
        <div className="bg-light text-center">
            <div className="container p-250">
                <h1 className="display-4">contact</h1>
            </div>
        </div>
        <div className="row mt-10">
            <div className="col md-5 w-20">
                <Contactform {...({ addEdit, currentId, contactObjects })}/>
            </div>
            <div className="col md-7">
                <div>List of contacts</div>

                <table className="table table-borderless table-stripped">
                    <thead className="thead-light">
                        <tr>
                            <th>Full Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(contactObjects).map(id => {
                                return <tr key={id}>
                                    <td className="m-2">{contactObjects[id].name}</td>
                                    <td className="m-2">{contactObjects[id].mobile}</td>
                                    <td className="m-2">{contactObjects[id].email}</td>
                                    <td>
                                        <a className="btn btn-primary m-2 mb-0" onClick={() => { setCurrentId(id) }}>
                                            Edit
                                        </a>
                                        <a className="btn btn-danger" value={id} onClick={()=>{
                                            if (window.confirm('Are you sure to delete this record?')) {
                                                debugger
                                                firebaseDb.child(`contacts/${id}`).remove(
                                                    err => {
                                                        if (err)
                                                            console.log(err)
                                                        else
                                                            setCurrentId('')
                                                    }
                                                )
                                            }
                                        }}>
                                            Delete
                                        </a>
                                    </td>    
                                </tr>
                                })
                            }
                        </tbody>
                    </table>

            </div>
        </div>
        </>
    )
}
