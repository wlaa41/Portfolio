import React ,{useState} from 'react'
import './Nav.scss'
import {ReactComponent as TalkIcon} from './chat_black_24dp.svg'
import './form.scss'


const Nav = ({talkbtnCon ,title,translate })=>{


////#region  form
function formExit(e){
        const ele =document.getElementById("contactCon");
        if(ele===e.target || 'close' === e.target.name)document.getElementById("contactCon").style.display = "none";
}function openForm(e){
        document.getElementById("contactCon").style.display = "flex";      
}
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
const [msg, setMsg] = useState('')
const [statusMsg, setStatusMsg] = useState('Get in touch')
async function sendinfo(e){
        e.preventDefault();
        const body = {
                "mock_data": "true",
                "ip_address": "92.188.61.181",
                "name": name,
                "email": email,
                "phone": phone,
                "body":msg,
                "user_agent": "",
                "url": "http://example.com/"
              }
        const headers = new Headers()
        headers.append("Content-Type", "application/json")
        const options = {
                method: "POST",
                headers,
                mode: "cors",
                body: JSON.stringify(body),
              }
        let promise = fetch("https://en6gthld5q6w7jf.m.pipedream.net", options)
        promise.then( (value)=>{console.log('weeeeee did    it')
                setStatusMsg(`Thanks ${name}. Talk to you soon.`)
                document.getElementById('status').style.color='rgb(35, 139, 51)'
                document.getElementById('status').style.fontSize='1.5rem'
                setEmail('')
                setPhone('')
                setMsg('')
                setName('')
        }).catch((e)=>{
                document.getElementById('status').style.color='rgb(139,35,51)'
                setStatusMsg(`Failed. Try again or use the contact details at the bottom of the page.`)
                document.getElementById('status').style.fontSize='1.5rem'

        })
}
//#endregion form



const showform = false;
        return(
            <nav className='nav'  >
                <div id='contactCon' className='contactCon' onClick={formExit}>

                        <div id='status' className='ct_con-deco'>
                                <div className='ct_con'>
                                {statusMsg}
                                <form onSubmit={sendinfo} >
                                
                                        <input 
                                        type='name'
                                        type="text"
                                        name="firstName"
                                        placeholder='Name' 
                                        value={name} 
                                        onChange={(event)=>setName(event.target.value)} 
                                        required></input>
                                        
                                        <input 
                                        value={email} 
                                        name="email"
                                        onChange={(event)=>setEmail(event.target.value)}  
                                        type='email' placeholder='Ex: me@mydomain.com' >
                                        </input>
                                        
                                        <input value={phone} 
                                        name="phone"
                                        onChange={(event)=>setPhone(event.target.value)}   
                                        type='phone' placeholder='Ex: 07123456789'>
                                        </input>

                                        <textarea value={msg} 
                                        name="massage"
                                        onChange={(event)=>setMsg(event.target.value)}  
                                        type='text' rows="5" 
                                        placeholder='Massage' multiple={true} required>
                                        </textarea>
                                        
                                        <div className='ct_sub-btnCon'>
                                        <button onClick={formExit} name='close' type="reset" className='ct_sub_btn close'>close</button>
                                        <button  type="submit" className='ct_sub_btn'>submit</button>
                                        </div>


                                </form>
                                </div>
                        </div>


                </div>


                <div className='navGrid'> 
                        <div id='mainTitle' ref={title}  className='navGrid_titleCon '> 
                                <div  className='navGrid_titleCon_title'> 
                                when you cease to learn you cease to grow
                                </div>
                        </div>
                                <div id='talkbtnCon' ref={talkbtnCon} className=' navGrid_BtnCon'> 
                                        <button className='navGrid_BtnCon_button navGrid_BtnCon_button-1 '>Current Project</button>
                                        <button id='tlkbtn'  className='navGrid_BtnCon_button navGrid_BtnCon_button-2' onClick={openForm}
                //                         style={{
                //                                 position: 'relative',
                // transform: `translate3d(${translate[0]}px,${translate[1]}px,0)`
                //                         }}
                                        
                                        >Let's Talk
                                        <TalkIcon></TalkIcon>
                                        </button>
                                </div>
                </div>

            </nav>
        );
    

}
export default Nav;