
import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
    return (
        <div className='login'>
            <div>
                <h2>Login</h2>
                <form className='login-container'>
                    <input
                        type='email'
                        placeholder='email@example.com' 
                    
                    />
                    <input
                        type='password'
                        placeholder='Enter yor password' 
                    
                    />
                    <div>
                    <button type='submit'>Login</button>

                    </div>
                </form>
                Don't have Account?
                <button>
                    <Link to= '/register'>
                        Register
                    </Link>
                </button>
            </div>
            
        </div>
    )
}
