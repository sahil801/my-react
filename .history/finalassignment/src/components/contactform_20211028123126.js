import React ,{useState,useEffect} from 'react'

export default function Contactform() {

    const initialFieldValue = {
        name : '',
        mobile : '',
        email : '',
        address : ''
    }
    const [value,setValue] = useState(initialFieldValue);

    return (
        <div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Full Name" name="name"
                    value={value.name}
                />
            </div>
        </div>
    )
}
