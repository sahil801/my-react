import React ,{useState,useEffect} from 'react'

export default function Contactform() {

    const initialFieldValue = {
        name : '',
        mobile : '',
        email : '',
        address : ''
    }
    const [value,setValue] = useState(initialFieldValue);
    const handleInputChange = (e) =>{
        var [name,val] = e.target;
        setValue({...value, [name]:value})
    }

    return (
        <div>
            <form>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Full Name" name="name"
                    value={value.name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Mobile" name="mobile"
                        value={value.mobile}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Email" name="email"
                        value={value.email}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            </form>
        </div>
    )
}
