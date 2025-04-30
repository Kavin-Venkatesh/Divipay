import React from "react";
import { useNavigate } from 'react-router-dom';

//styles import
import styles from '../login/login.module.css'

//assets Import 
import Logo from '../../assets/Logo.png';

const LoginPage = () =>{

    const navigate = useNavigate();

    const handleSignup = () =>{

        navigate('/dashboard');
    }

    return(
        <div class={styles.mainCotainer}>
            <div class= {styles.loginContainer}>
                <img src={Logo} class={styles.logoImage}  alt="DiviPay Logo"/>
                <h3 class={styles.loginMessage} > 
                    <span class ={styles.colorMessage}>F </span>air. 
                    <br />
                    <span class ={styles.colorMessage}>F </span>ast.
                    <br />
                    <span class ={styles.colorMessage}>D </span>ivipay.
                </h3>

                <button class={styles.signinButton} onClick={handleSignup}>
                    Sign In with Google
                </button>
                <div class={styles.footerContainer}>
                <p class={styles.footerMessage}>Terms of Policy </p>
                <p class={styles.footerMessage}>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;