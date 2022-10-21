import {graphConfig} from "./authConfig";

/**
 * Attaches a given access token to a MS Graph API call. Returns information about the user
 * @param accessToken 
 */
export async function callMsGraph(accessToken: any) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers
  };

  try {
    const response = await fetch(graphConfig.graphMeEndpoint, options);
    if(!response) {
      throw "Null response";
    }
    return response.json();
  }
  catch (e) {
    console.error(e);
    return {};
  }
}
