import React ,{useState,useEffect} from 'react'
import Contactform from './contactform';
import firebaseDb from "../firebase";

export default function Contacts() {

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
        firebaseDb.child('contacts').push(
            obj,
            err => {
                if (err)
                    console.log(err)
            }
        )
        
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
                <Contactform addEdit={addEdit}/>
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
                                    <td>{contactObjects[id].name}</td>
                                    <td>{contactObjects[id].mobile}</td>
                                    <td>{contactObjects[id].email}</td>
                                    {/* <td>
                                        <a className="btn text-primary" onClick={() => { setCurrentId(id) }}>
                                            <i className="fas fa-pencil-alt"></i>
                                        </a>
                                        <a className="btn text-danger" onClick={() => { onDelete(id) }}>
                                            <i className="far fa-trash-alt"></i>
                                        </a>
                                    </td> */}
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