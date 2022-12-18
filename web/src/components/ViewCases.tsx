import React from "react";
import {useIsAuthenticated} from '@azure/msal-react';

export function ViewCases() {
  const isAuthenticated = useIsAuthenticated();
  if(!isAuthenticated) {
    return (<></>);
  }
  return (
    <a>View Cases</a>
  );
}