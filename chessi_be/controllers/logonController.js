const { signupService, verifyEmailService, loginService, requestAccessTokenService } = require('../services/logonService');

let handleSignup = async (req, res) => {
    try {
        let { username, password, email } = req.body.data;

        let { userEmail, verificationToken } = await signupService(username, password, email);

        await sendVerificationMail(userEmail, verificationToken);

        res.status(200).json({ status: "ok", msg: "Head over to your mailbox for verification" });
    } catch(err) {
        console.log(err);
        if (err.httpStatus) {
            res.status(err.httpStatus).json({ status: "error", msg: err.msg });
        }
    }
}

let handleVerifyEmail = async (req, res) => {
    try {
        let token = req.query.token;

        await verifyEmailService(token);

        res.status(200).send("<p>Your account has been activated. Click <a href='http://localhost:3000/login' target='blank'>here</a> to login</p>"); 
    } catch(err) {
        console.log(err);
        if (err.httpStatus) {
            res.status(err.httpStatus).json({ status: "error", msg: err.msg });
        }
    }
}

let handleLogin = async (req, res) => {
    try {
        let { username, password } = req.body.data;
         
        let { accessToken, sessionToken } = await loginService(username, password);

        res.status(200).json({ status: "ok", msg: "Logged in", accessToken: accessToken, sessionToken: sessionToken });
    } catch(err) {
        console.log(err);
        if (err.httpStatus) {
            res.status(err.httpStatus).json({ status: "error", msg: err.msg });
        }
    }
}

let handleRequestAccessToken = async (req, res) => {
    try {
        let { uid } = req.token;

        let { accessToken } = await requestAccessTokenService(uid);

        res.status(200).json({ status: "ok", msg: "Logged in", accessToken: accessToken });
    } catch(err) {
        console.log(err);
        if (err.httpStatus) {
            res.status(err.httpStatus).json({ status: "error", msg: err.msg });
        }
    }
}

module.exports = { handleSignup, handleVerifyEmail, handleLogin, handleRequestAccessToken }