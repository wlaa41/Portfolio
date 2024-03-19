// Import statements at the top of the file
import React, { useState } from 'react';
import './Nav.scss';
import { ReactComponent as TalkIcon } from './chat_black_24dp.svg';
import './form.scss';

// Definition of the Nav component
const Nav = ({ talkbtnCon, title, translate }) => {
    // Define state hooks for form inputs and status message
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [msg, setMsg] = useState('');
    const [statusMsg, setStatusMsg] = useState('Get in touch');

    // Function to close the form
    function formExit(e) {
        const ele = document.getElementById("contactCon");
        if (ele === e.target || 'close' === e.target.name) {
            document.getElementById("contactCon").style.display = "none";
        }
    }
    // Function to open the form
    function openForm(e) {
        document.getElementById("contactCon").style.display = "flex";
    }

    // Async function to handle form submission
    async function sendinfo(e) {
        e.preventDefault();
        const body = {
            "mock_data": "true",
            "ip_address": "92.188.61.181",
            "name": name,
            "email": email,
            "phone": phone,
            "body": msg,
            "user_agent": "",
            "url": "http://example.com/"
        }
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const options = {
            method: "POST",
            headers,
            mode: "cors",
            body: JSON.stringify(body),
        }
        let promise = fetch("https://en6gthld5q6w7jf.m.pipedream.net", options);
        promise.then((value) => {
            // console.log('weeeeee did    it');
            setStatusMsg(`Thanks ${name}. Talk to you soon.`);
            document.getElementById('status').style.color = 'rgb(35, 139, 51)';
            document.getElementById('status').style.fontSize = '1.5rem';
            setEmail('');
            setPhone('');
            setMsg('');
            setName('');
        }).catch((e) => {
            document.getElementById('status').style.color = 'rgb(139,35,51)';
            setStatusMsg(`Failed. Try again or use the contact details at the bottom of the page.`);
            document.getElementById('status').style.fontSize = '1.5rem';
        });
    }
    // JSX structure for the Nav component
    return (
        <nav className='nav'>
            <div id='contactCon' className='contactCon' onClick={formExit}>
                <div id='status' className='ct_con-deco'>
                    <div className='ct_con'>
                        {statusMsg}
                        <form onSubmit={sendinfo}>
                            <input
                                type="text"
                                name="firstName"
                                placeholder='Name'
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            ></input>

                            <input
                                value={email}
                                name="email"
                                onChange={(event) => setEmail(event.target.value)}
                                type='email'
                                placeholder='Ex: me@mydomain.com'
                            ></input>

                            <input
                                value={phone}
                                name="phone"
                                onChange={(event) => setPhone(event.target.value)}
                                type='phone'
                                placeholder='Ex: 07123456789'
                            ></input>

                            <textarea
                                value={msg}
                                name="massage"
                                onChange={(event) => setMsg(event.target.value)}
                                rows="5"
                                placeholder='Message'
                                required
                            ></textarea>

                            <div className='ct_sub-btnCon'>
                                <button onClick={formExit} name='close' type="reset" className='ct_sub_btn close'>Close</button>
                                <button type="submit" className='ct_sub_btn'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='navGrid'>
                <div id='mainTitle' ref={title} className='navGrid_titleCon'>
                    <h1 className='navGrid_titleCon_title' aria-label="Main Title: Walaa's Web, AI's Zest, Robotics Nest, Progress Quest">Walaa's Web, AI's Zest, Robotics Nest, Progress Quest</h1>
                </div>
                <div id='talkbtnCon' ref={talkbtnCon} className='navGrid_BtnCon'>
                    <button className='navGrid_BtnCon_button navGrid_BtnCon_button-1'
                        onClick={() => window.open('https://github.com/wlaa41/Portfolio/', '_blank')}
                        target="_blank" href="https://www.linkedin.com/in/smartwill/">Current Project</button>
                    <button id='tlkbtn' className='navGrid_BtnCon_button navGrid_BtnCon_button-2' onClick={openForm}
                    >Let's Talk
                        <TalkIcon />
                    </button>
                </div>
            </div>
        </nav>
    );
}

// Export statement at the bottom of the file
export default Nav;
