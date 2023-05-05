import "./SignIn.scss";

function SignIn() {
    return (
        <section>
            <div>
                <h2>Sign In</h2>
            </div>
            <label htmlFor="">
                <input type="text" placeholder="USERNAME"/>
            </label>
            <label htmlFor="">
                <input type="password" placeholder="PASSWORD"/>
            </label>
        </section>
    );
}

export default SignIn;
