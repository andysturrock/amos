import React from "react";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import {NewCase} from "./NewCase";
import {PageLayout} from "./PageLayout";
import {TransferCase} from "./TransferCase";
import {ViewCases} from "./ViewCases";
import {useIsAuthenticated} from '@azure/msal-react';

export function AppRouter() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout/>} />
        
        {isAuthenticated ? 
          <>
            <Route path="/newcase" element={<NewCase/>} />
            <Route path="/transfercase" element={<TransferCase/>} />
            <Route path="/viewcases" element={<ViewCases/>} />
          </>
          :
          <></>
        }

      </Routes>
    </BrowserRouter>
  );
}