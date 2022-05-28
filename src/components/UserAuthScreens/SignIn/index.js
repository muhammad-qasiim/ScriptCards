import { useState } from 'react';
import Input from '../../common/Input'
import ForgetPassword from '../ForgetPassword';

const SignIn = ({ setAuthScreen }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

            <main className='auth-container max-w-md mx-auto'>
                <img className="w-183 mb-24 mx-auto" src="/assets/script-cards.svg" alt="" />

                <div className='w-full'>
                    <Input
                        placeholder='Email'
                        className='mb-16'
                    />
                    <Input
                        placeholder='Password'
                        className='mb-16'
                    />
                </div>
                <button className="bg-primary text-white w-full mb-18 px-32 py-10 rounded-5 transition-all hover:bg-green-600 relative top-0 hover:top-px" >Sign In</button>
                <p onClick={() => setIsOpen(true)} className="text-center cursor-pointer text-primary transition-all hover:text-green-600"> Forgot Password? </p>
                <div className="Divider__container my-28"><span className='text-gray-500 font-medium'>or</span></div>
                <div className='SocialButton text-gray-600 font-medium rounded-5 mb-16'><img src="/assets/google.svg" alt="" /> Log in with Google</div>
                <div className='SocialButton text-gray-600 font-medium rounded-5 mb-16'><img src="/assets/fb.svg" alt="" /> Log in with Facebook</div>
            </main>

            <p className="text-center text-primary transition-all hover:text-green-600 mt-28"> <span className='text-gray-600'>Don‘t have an account?</span> <span onClick={() => setAuthScreen('SignUp')} className='cursor-pointer'> Sign up now. </span> </p>

            <ForgetPassword isOpen={isOpen} setIsOpen={setIsOpen} />

        </>
    )
}

export default SignIn;