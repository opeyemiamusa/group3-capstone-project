// Form section
import { useState } from 'react'
import './FormSection.css'

function FormSection(){
        const [fullname, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);


async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", fullname);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNo);
    formData.append("message", message);

    const response = await fetch("https://whitebricks.com/tsacademy.php", {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        setSubmitted(true);

        setName("");
        setEmail("");
        setPhoneNo("");
        setMessage("");
    }
}

    return(
        <section id='FormSection' className="FormSection">
            <div className="form-details">
                <div className="form-text">
                    <h3>Have Questions About Planetary Science?</h3>
                    <p>Interested in learning more about space, astronomy, or how planetary data is collected and analyzed? Reach out and we’ll get back to you.</p>
                </div>

                <form onSubmit={handleSubmit} action="POST">

                    <div className="form-flex">

                        <div className="form-group">
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" id="fullname" name="fullname" value={fullname} onChange={(e) => setName(e.target.value)} placeholder='Full Name' required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='example@example.com' required/>
                        </div>
                    </div>

                    <div className="form-flex">    
                        <div className="form-group">
                            <label htmlFor="phoneNo">Phone Number</label>
                            <input type="tel" id="phoneNo" name="phoneNo" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} placeholder='Please enter a valid number' required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea  maxLength={100} name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message" required/>
                            <div className="counterDisplay">100 Characters</div>
                        </div>
                    </div>

                    <div className="btn">
                        <button className='submit-btn' type='submit'>Submit
                        <img className='icon' src="/Angle icon.png" alt="angle icon" />
                        
                        </button>
                    </div>
                </form>

               {submitted && (
    <p className="success-message"> Message submitted successfully <i class="fa-solid fa-check"></i></p>
)}

            </div>
        </section>
    )
}

export default FormSection