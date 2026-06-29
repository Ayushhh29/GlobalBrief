import { GoogleLogin } from "@react-oauth/google";
import API from "../services/api";

function GoogleLoginButton() {

    const handleSuccess = async (
        credentialResponse
    ) => {

        try {

           const response = await API.post(
    "/auth/google",
    {
        token:
            credentialResponse.credential
    }
);

localStorage.setItem(
    "user_name",
    response.data.name
);

localStorage.setItem(
    "user_email",
    response.data.email
);
window.location.reload();
          

            alert("Login Successful");

        } catch (error) {

            console.log(error);

        }
    };

    return (

        <GoogleLogin
            onSuccess={handleSuccess}
            onError={() =>
                console.log(
                    "Login Failed"
                )
            }
        />

    );
}

export default GoogleLoginButton;