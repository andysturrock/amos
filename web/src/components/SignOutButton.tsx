import {useMsal} from "@azure/msal-react";
import {Button} from "react-bootstrap";

export function SignOutButton() {
  const {instance} = useMsal();

  function handleLogout() {
    try {
      instance.logoutRedirect({postLogoutRedirectUri: "/",});
    }
    catch (e) {
      console.log(e);
    }
  }
      
  return (
    <Button onClick={() => handleLogout()}>Sign out</Button>
  );
}