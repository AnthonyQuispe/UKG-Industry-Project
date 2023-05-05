import "./SignIn.scss";

function SignIn() {
    return (
        <section className="signIn">
            <div className="signIn__header">
                <h2>Sign In</h2>
            </div>
            <div className="signIn__input-container">
                <div>
                    <label htmlFor="">
                        <input type="text" placeholder="USERNAME" />
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        <input type="password" placeholder="PASSWORD" />
                    </label>
                </div>
            </div>
        </section>
    );
}

export default SignIn;
