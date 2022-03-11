import React, {useState} from "react";
import styles from './Sign.module.css'
import Input from "../UI/Input";
import Button from "../UI/Button";

const Sign = () => {
    const [signUp, setSignUp] = useState(true);


    const signUpChangeHandler = () => {
        setSignUp(prevState => !prevState)
    }

    const signText = signUp ? <span className={styles['have-account']}>
                       Already registered?
                        <span onClick={signUpChangeHandler}> Sign in</span>
                    </span> : <span className={styles['have-account']}>
                        Don’t have an account?
                        <span onClick={signUpChangeHandler}> Sign up</span>
                    </span>;

    const welcomeText = signUp ? <>
            <span className={styles.title}>WELCOME TO MEDITT*</span>
            <span className={styles['sign-today']}>Sign up today!</span>
        </> :
        <span className={styles.title}>SIGN IN TO MEDITT*</span>


    return (
        <div className={styles.container}>
            <section>
                <div className={styles['left-side']}>
                    {welcomeText}
                    <form>
                        <Input
                            label='Email'
                            input={{

                                placeholder: 'Type email',
                                // onChange:fromValueChangeHandler,
                            }}
                        />
                        <Input
                            label='Password'
                            input={{
                                placeholder: 'Type password',
                            }}
                        />
                        {signUp && <Input
                            label='Confirm Password'
                            input={{
                                placeholder: 'Type to confirm password',
                            }}
                        />}
                        <Button>{signUp ? 'SIGN UP' : 'SIGN IN'}</Button>
                    </form>
                    {signText}
                </div>
                <div className={styles['right-side']}>
                    <span className={styles.title}>MEDITT*</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat, sodales venenatis
                        adipiscing.</p>
                    <div>ILLUSTRATION</div>
                </div>
            </section>
        </div>
    )
}

export default Sign