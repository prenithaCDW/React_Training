import { createContext, useState } from "react";
import { loginUser } from "../services/user";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const loginOfUser = async ({ username, password }) => {
        const loggedUser = await loginUser({ username, password });
        if (!loggedUser) {
            console.log("Invalid name or password");
            return false;
        }

        setUser(loggedUser);
        return true;
    }

    const logoutOfUser = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loginOfUser, logoutOfUser }}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContext;
export { AuthProvider };