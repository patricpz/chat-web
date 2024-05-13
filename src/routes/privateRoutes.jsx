// PrivateRoutes.jsx
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase"; // Importe a instância de autenticação do Firebase

export default function PrivateRotas({ children }) {
    const [user] = useAuthState(auth);

    return user ? children : <Navigate to="/" />; // Se o usuário estiver autenticado, renderize os filhos, caso contrário, redirecione para a página de login
}
