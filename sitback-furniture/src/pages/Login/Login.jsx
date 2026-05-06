import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import background from "../../assets/login.jpg";
import FallbackImage from "../../components/FallbackImage/FallbackImage.jsx";
import LabelInput from "../../components/LabelInput/LabelInput.jsx";
import Input from "../../components/Input/Input.jsx";
import Loading from "../../components/Loading/Loading.jsx";
import { FORM_FIELDS } from "../../constants/form.js";
import { useAuth } from "../../hooks/useAuth.js";
import { BUTTON } from "../../constants/button.js";
const Login = () => {
    const navigate=useNavigate();
    const {loginOfUser}=useAuth();
    const [form,setForm]=useState({
        username:"",
        password:""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange=(e)=>{
        const {id,value}=e.target;
        setForm((prev)=>({...prev,[id]:value}));
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError("");
        setLoading(true);
       const success=await loginOfUser({
            username:form.username,
            password:form.password,
            
        });
        if(!success){
            setError("Invalid username or password");
            setLoading(false);
            return;
        }
        navigate("/categories/couch", { replace: true });
    }
    return (
        <>
            <section className={styles.loginWrapper}>
                <FallbackImage src={background} alt="couches" className={styles.backgroundImage} />
                <div className={styles.formWrapper}>
                    <h1 className={styles.formTitle}>SITBACK <span className={styles.formSubTitle}>FURNITURE</span></h1>
                    <form>
                        <LabelInput htmlFor={FORM_FIELDS.name.id} labelName={FORM_FIELDS.name.label}>
                            <Input type={FORM_FIELDS.name.type} id={FORM_FIELDS.name.id} value={form.username} onChange={handleChange}/>
                        </LabelInput>
                        <LabelInput htmlFor={FORM_FIELDS.password.id} labelName={FORM_FIELDS.password.label}>
                            <Input type={FORM_FIELDS.password.type} id={FORM_FIELDS.password.id} value={form.password} onChange={handleChange}/>
                        </LabelInput>
                        {error && <p className={styles.error}>{error}</p>}
                        <button type="submit" className={styles.formButton} disabled={!form.username||!form.password||loading} onClick={handleSubmit}>{loading?<Loading/>:BUTTON.login}</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login;