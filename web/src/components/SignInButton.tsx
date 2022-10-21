import {useMsal} from "@azure/msal-react";
import {loginRequest} from "../authConfig";
import {Button} from "react-bootstrap";

export function SignInButton() {
  const {instance} = useMsal();

  function handleLogin() {
    try {
      instance.loginRedirect(loginRequest);
    }
    catch (e) {
      console.log(e);
    }
  }
  
  return (
    <Button onClick={() => handleLogin()}>Sign in</Button>
  );
}

