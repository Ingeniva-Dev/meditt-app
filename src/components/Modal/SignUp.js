import React from "react";
import styles from './SignUp.module.css';
import Header from "../Layout/Header";
import Input from "../UI/Input";
import Button from "../UI/Button";

const SignUp = (props) => {


    return (
        <div className={styles.container}>
            <Header signUpIsOpen={props.signUpIsOpen} signInChangeHandler={props.signInChangeHandler}/>
            <span className={styles['signUp-title']}>Don’t have an account? Sign up today!</span>
            <form className={styles['signUp-form']}>
                <div className={styles['inputs-container']}>
                    <Input
                    label='Email'
                    input={{
                        placeholder:'Email',
                    }}
                    />
                    <Input
                        label='Password'
                        input={{
                            placeholder:'Password',
                        }}
                    />
                </div>
                <Button>Create account</Button>
            </form>
            <span className={styles['email-check']}>Check your email to verify your account!</span>
        </div>


    );
}

export default SignUp