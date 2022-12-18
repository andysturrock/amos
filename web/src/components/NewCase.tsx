import React from "react";
import {useIsAuthenticated} from '@azure/msal-react';

export function NewCase() {
  const isAuthenticated = useIsAuthenticated();
  if(!isAuthenticated) {
    return (<></>);
  }
  return (
    <a>NewCase</a>
  );
}