
import React, { useState } from 'react';




const Iform = () => {
    const [name, setname] = useState({
        fname: "",
        lname: "",
        Eid: "",
        number: ""
    });
    const onSubmits = (event) => {
        event.preventDefault();
    };
    const changing = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setname((preValue) => {
            return {
                ...preValue,
                [name]: value
            }

            // if (name === "fname") {
            //     return {
            //         fname: value,
            //         lname: preValue.lname,
            //         Eid: preValue.Eid,
            //         number: preValue.number
            //     };
            // }
            // if (name === "lname") {
            //     return {
            //         lname: value,
            //         fname: preValue.fname,
            //         Eid: preValue.Eid,
            //         number: preValue.number
            //     };
            // }
            // if (name === "Eid") {
            //     return {
            //         lname: preValue.lname,
            //         fname: preValue.fname,
            //         Eid: value,
            //         number: preValue.number
            //     };
            // }
            // if (name === "number") {
            //     return {
            //         number: value,
            //         fname: preValue.fname,
            //         Eid: preValue.Eid,
            //         lname: preValue.lname
            //     };
            // }
        });

    };
    const submits = () => {
        alert(`hi ${name.fname}`)
    }
    return (
    
            <div className="contact">
            <div className = "items">
            <h2>Contact Us</h2>
                <div className="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name" onChange={changing}
                            name="fname"
                            value={name.fname} />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" onChange={changing}
                            name="lname"
                            value={name.lname} />
                    </div>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">E-mail ID</label>
                    <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" onChange={changing}
                        name="Eid"
                        value={name.Eid} />
                </div>
                <div class="mb-4">
                    <label for="formGroupExampleInput2" class="form-label">Your Message</label>
                    <textarea class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" onChange={changing}
                        name="number"
                        value={name.number} />
                </div>
                <div class="mb-3">
                    {/* <label for="formGroupExampleInput" class="form-label">E-mail ID</label> */}
                    <input type="submit" class="form-control" id="formGroupExampleInput" onClick={submits} />
                </div>
                </div>
            </div>
            
        
    );
};

export default Iform;