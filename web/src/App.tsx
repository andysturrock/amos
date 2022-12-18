import React, {useState} from 'react';
import './styles/App.css';
import {PageLayout} from './components/PageLayout';
import {AuthenticatedTemplate, UnauthenticatedTemplate, useMsal} from '@azure/msal-react';
import Button from 'react-bootstrap/Button';
import {loginRequest} from './authConfig';
import {callMsGraph} from './graph';
import {ProfileData} from './components/ProfileData';
import {AppRouter} from './components/AppRouter';


/**
 * Renders information about the signed-in user or a button to retrieve data about the user
 */
function ProfileContent() {
  const {instance, accounts} = useMsal();
  const [graphData, setGraphData] = useState(null);

  async function RequestProfileData() {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    const authenticationResult = await instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      });
    
    console.log(`accessToken = ${authenticationResult.accessToken}`);
    const response = await callMsGraph(authenticationResult.accessToken);
    console.log(`response = ${response}`);
    console.log(`response = ${JSON.stringify(response)}`);
    setGraphData(response);
  }

  return (
    <>
      <h5 className="card-title">Welcome {accounts[0].name}</h5>
      {graphData ? (
        <ProfileData graphData={graphData} />
      ) : (
        <Button variant="secondary" onClick={RequestProfileData}>
                    Request Profile Information
        </Button>
      )}
    </>
  );
}

/**
 * If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
 */
function MainContent() {
  return (
    <>
      <AppRouter/>
      <div className="App">
        <AuthenticatedTemplate>
          <ProfileContent />
        </AuthenticatedTemplate>

        <UnauthenticatedTemplate>
          <h5 className="card-title">Please sign-in to see your profile information.</h5>
        </UnauthenticatedTemplate>
      </div>
    </>
  );
}

export default function App() {
  return (
    <PageLayout>
      <MainContent />
    </PageLayout>
  );
}
