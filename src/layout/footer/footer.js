import React from 'react'
import sprite from './symbol-defs.svg'
import './footer.scss'

export const Foot = () => {
    return (
        <footer className='ft'>
            <div className="ft_left" >

            <div className="ft_left-name" > Walaa Jam </div>
            <div className="ft_left-location" >London, UK IG1 </div>
            <a className="ft_left-email"  href="mailto:walaa.jamous@city.ac.uk" target="_blank"  >  walaa.jamous@city.ac.uk</a>
             </div>
            <div className="ft_mid" > 
                <a className='ft_mid-con' name='linkedin' target="_blank" href="https://www.linkedin.com/in/smartwill/">
                    <svg className="ft_mid-svg">
                    <use href={sprite+"#icon-linkedin"}>
                    </use>
                    </svg>
                </a>
                <a className='ft_mid-con' name='facebook'>
                    <svg className="ft_mid-svg">
                    <use href={sprite+"#icon-facebook2"}>
                    </use>
                    </svg>
                </a>
                <a className='ft_mid-con' href="https://github.com/wlaa41" target="_blank" name='github'>
                    <svg className="ft_mid-svg">
                    <use href={sprite+"#icon-github-square"}>
                    </use>
                    </svg>
                </a>
                <a className='ft_mid-con' href="mailto:wlaa41@gmail.com" target="_blank"  name='envelope'>
                    <svg className="ft_mid-svg">
                    <use href={sprite+"#icon-envelope"}>
                    </use>
                    </svg>
                </a>
            
            
            
            </div>
            

            
        </footer>
    )
}
export default Foot