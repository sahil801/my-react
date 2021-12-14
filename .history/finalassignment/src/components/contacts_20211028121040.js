import React from 'react'
import Contactform from './contactform';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Contacts() {
    return (
        <>
        <div className="bg-light ">
            <div className="container p-250">
                <h1 className="display-4">contact</h1>
            </div>
        </div>
        <div className="row mt-10">
            <div className="col md-5">
                <Contactform/>
            </div>
            <div className="col md-7">
                <div>List of contacts</div>
            </div>
        </div>
        </>
    )
}
