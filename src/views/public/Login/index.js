import React from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Grid} from "material-ui";
import {auth,googleAuthProviderId,phoneAuthProviderID,facebookAuthProviderId,twitterAuthProviderId,githubAuthProviderId} from "firebase-util";

import {
  RegularCard,
  ItemGrid
} from "components";


// console.log(auth);
// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/dashboard',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    phoneAuthProviderID,
    googleAuthProviderId,
    facebookAuthProviderId,
    twitterAuthProviderId,
    githubAuthProviderId
  ]
};


function Login({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            cardTitle="MIHY"
            cardSubtitle="Get free pass"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={12}>
                      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
                  </ItemGrid>
                </Grid>
              </div>
            }
          />
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default Login;
