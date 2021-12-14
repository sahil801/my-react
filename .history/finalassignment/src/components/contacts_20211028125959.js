import React from 'react'
import Contactform from './contactform';

export default function Contacts() {
    const addEdit =(obj)=>{

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
            </div>
        </div>
        </>
    )
}
