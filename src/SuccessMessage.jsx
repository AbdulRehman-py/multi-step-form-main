import './success.css'
import succesIcon from '../assets/images/icon-thank-you.svg';


const SuccessMessage = () => {

    return (
        <div className="success-message">
           <img className='img-s' src={succesIcon} alt="thank you icon" />
           <h1 className='thank'>Thank you</h1>
           <p className='succes-p'>Thanks for confirming your subscription!
             we hope to you have fun using our platform. if you ever need support, Pleas feel free to
             email us at support@clarkgaming.com</p>
        </div>
    
    );
}

export default SuccessMessage;  



