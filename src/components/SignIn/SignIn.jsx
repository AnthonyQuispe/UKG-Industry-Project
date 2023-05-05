import "./SignIn.scss";

function SignIn() {
    return (
        <section className="signIn">
            <div className="signIn__header">
                <h2 className="signIn__header-content">Sign In</h2>
            </div>
            <div className="signIn__input-container">
                <div className="signIn__input-container-subheader">
                        <h5 className="signIn__input-subheader">User name</h5>
                        <input type="text" className="signIn__input" />
                    
                </div>
                <div className="signIn__input-container-subheader">
                    
                        <h5 className="signIn__input-subheader">Password</h5>
                        <input type="password" className="signIn__input" />
                    
                </div>
            </div>
            <div className="signIn__forgot-password-container">
                <h4 className="signIn__forgot-password">Forgot your Password?</h4>
            </div>
        </section>
    );
}

export default SignIn;
