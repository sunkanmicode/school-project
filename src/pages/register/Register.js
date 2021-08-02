import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
    return (
        <div className='register'>
            <div>
                <h2>Register</h2>
                <form className='reg-container'>
                    <input
                        type='text'
                        placeholder='User name' 
                    
                    />
                    <input
                        type='email'
                        placeholder='email@example.com' 
                    
                    />
                    <input
                        type='password'
                        placeholder='Enter yor password' 
                    
                    />
                    <div>
                    <button type='submit'>Register</button>

                    </div>
                </form>
                you have Account?
                <button>
                    <Link to='./login'>
                        Login
                    </Link> 
                </button>
            </div>
            
        </div>
    )
}
