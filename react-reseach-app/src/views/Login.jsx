import React from 'react'

export default function Login() {
    return (
        <>
            {/* <div classNameName='container'>
        <div classNameName='card bg-info bg-gradient rounded shadow p-3 mb-5 bg-body rounded mx-auto'>
            <div classNameName='card-body'>
               <div classNameName="col-md-12">
                   <div classNameName="com-md-6">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                        </div>
                    </div>
                    <div classNameName="com-md-6">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                        </div>
                    </div>
               </div>
            </div>
        </div>
        </div> */}
            <div className="sign_in_up_bg">
                <div className="container">
                    <div className="row justify-content-lg-center justify-content-md-center">
                        <div className="col-lg-12">
                            <div className="main_logo25" id="logo">
                                <a href="index.html"><img src="assets/images/logo.svg" alt=""></img></a>
                                <a href="index.html"><img className="logo-inverse" src="assets/images/ct_logo.svg" alt=""></img></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8">
                            <div className="sign_form">
                                <h2>Welcome Back</h2>
                                <p>Log In to Your Edututs+ Account!</p>
                                <button className="social_lnk_btn color_btn_fb"><i className="uil uil-facebook-f"></i>Continue with Facebook</button>
                                <button className="social_lnk_btn mt-15 color_btn_tw"><i className="uil uil-twitter"></i>Continue with Twitter</button>
                                <button className="social_lnk_btn mt-15 color_btn_go"><i className="uil uil-google"></i>Continue with Google</button>
                                <form>
                                    <div className="ui search focus mt-15">
                                        <div className="ui left icon input swdh95">
                                            <input className="prompt srch_explore" type="email" name="emailaddress" value="" id="id_email" required="" maxlength="64" placeholder="Email Address"></input>
                                            <i className="uil uil-envelope icon icon2"></i>
                                        </div>
                                    </div>
                                    <div className="ui search focus mt-15">
                                        <div className="ui left icon input swdh95">
                                            <input className="prompt srch_explore" type="password" name="password" value="" id="id_password" required="" maxlength="64" placeholder="Password"></input>
                                            <i className="uil uil-key-skeleton-alt icon icon2"></i>
                                        </div>
                                    </div>
                                    <div className="ui form mt-30 checkbox_sign">
                                        <div className="inline field">
                                            <div className="ui checkbox mncheck">
                                                <input type="checkbox" tabindex="0" className="hidden"></input>
                                                <label>Remember Me</label>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="login-btn" type="submit">Sign In</button>
                                </form>
                                <p className="sgntrm145">Or <a href="forgot_password.html">Forgot Password</a>.</p>
                                <p className="mb-0 mt-30 hvsng145">Don't have an account? <a href="sign_up.html">Sign Up</a></p>
                            </div>
                            <div className="sign_footer"><img src="assets/images/sign_logo.png" alt=""></img>© 2020 <strong>Cursus</strong>. All Rights Reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
