import { useNavigate } from 'react-router-dom';
import { auth, provider, db } from '../../services/firebase'; 
import { signInWithPopup } from 'firebase/auth';
import * as C from "./Style";
import GoogleIcon from '../../assets/google.svg'; 



function Login() {
    const navigate = useNavigate();

    const handleSignIn = () => {
        auth.signInWithPopup(provider)
            .then(() => {
                navigate('/chat');
            })
            .catch(alert);
    };

    return (

        <C.Container>
            <C.LoginForm>
                <C.Title>Faça login com o Google</C.Title>
                <C.Button onClick={handleSignIn}>
                        <img src={GoogleIcon} alt="Google Icon" width="24" height="24"  />
                        Faça login com o Google
                </C.Button>
            </C.LoginForm>
        </C.Container>
    );
}

export default Login;
