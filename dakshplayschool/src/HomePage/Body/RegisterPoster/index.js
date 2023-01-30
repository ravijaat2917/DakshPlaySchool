import './index.css';

function Register () {
    return(
        <>
        <div className='main-con'>
        <div className='container'>
            <div className='left-area'>
                <p id='Register-text'>
                Start your<br/> Child’s  Early <br/>Education with <br/>Daksh Play School.
                </p>
            </div>
            <div className='right-area'>
            
            <div className='formAdd'>
                <form onsubmit='sendEmail(); reset(); return flase;'>
                <p className='admissionopemText'>
                    Admission Open For AY 23-24.
                </p>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdApXHRrGvbxXv2rgG_ox3jTSAceUqwqFQ2ZT1v36Dyt5a84g/viewform?embedded=true" height='330' frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    {/* <input id='name' placeholder='Full Name*' type='text' required /><br/>
                    <input id='email' placeholder='Email*' type='email' required /><br/>
                    
                    <input id='contactNumber' placeholder='Contact Number*' type='phone' maxLength='10' minLength='10' required /><br/>
                    <select id="program" name="program*" placeholder='Select a program*'><br/>
                        <option value="PlaySchool">PlaySchool</option>
                        <option value="Nursery">Pre-Nursery</option>
                        <option value="Juniors">Nursery</option>
                        <option value="Seniors">Juniors(1-5)</option>
                    </select>
                    <br/>
                    <button onClick='sendEmail(); reset(); return flase;' type='submit'>Submit</button> */}
                </form>
            </div>
            </div>
        </div>
        </div>
        {/* <script src='https://smtpjs.com/v3/smtp.js'></script>
        <script>
            function sendEmail() {
                Email.send({
                    Host : "smtp.gmail.com",
                    Username : "ravijaat@gmail.com",
                    Password : "1232123",
                    To : 'ravijaat2917@gmail.com',
                    From : document.getElementById('email').value,
                    Subject : 'New Contact From Enquiry',
                    Body : "Name = " + document.getElementById('name').value + <br/> +
                    "Email = " + document.getElementById('email').value + <br/> +
                    "Contact Number = " + document.getElementById('contactNumber').value + <br/> +
                    "Program = " + document.getElementById('program').value 
                }).then(
                  message => alert(`Heyy!  ${document.getElementById('name')} your form send Successfully.`)
                )
            }
        </script> */}
        </>
    );
}

export default Register;