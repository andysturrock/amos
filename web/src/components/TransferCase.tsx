import React from "react";
import {useIsAuthenticated} from '@azure/msal-react';

export function TransferCase() {
  const isAuthenticated = useIsAuthenticated();
  if(!isAuthenticated) {
    return (<></>);
  }
  return (
    <a>Transfer Cases</a>
  );
}