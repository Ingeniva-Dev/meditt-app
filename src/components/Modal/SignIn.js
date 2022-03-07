import React from "react";
import styles from './SignIn.module.css'
import Input from "../UI/Input";
import Button from "../UI/Button";

const SignIn = () => {
    return (
        <div className={styles.container}>
            <section>
                <div className={styles['left-side']}>
                    <span className={styles.title}>SIGN IN TO MEDITT*</span>
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
                        <Button>SIGN IN</Button>
                    </form>
                    <span className={styles['have-account']}>
                        Don’t have an account?
                        <span> Sign up</span>
                    </span>
                </div>
                <div className={styles['right-side']} >
                    <span className={styles.title}>MEDITT*</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat, sodales venenatis adipiscing.</p>
                    <div>ILLUSTRATION</div>
                </div>
            </section>
        </div>
    )
}

export default SignIn