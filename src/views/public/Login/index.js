import React from "react";
import { WhitePaper,ContainerGrid } from "components";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Typography } from "material-ui";
import {
  auth,
  googleAuthProviderId,
  phoneAuthProviderID,
  facebookAuthProviderId,
  twitterAuthProviderId,
  githubAuthProviderId
} from "firebase-util";

import { ItemGrid } from "components";

// console.log(auth);
// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/dashboard",
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
    <WhitePaper>
      <Typography variant="headline" component="h3" align="center">
        MIHY
      </Typography>
      <Typography variant="subheading" align="center">
        Get free pass
      </Typography>
      <ContainerGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </ItemGrid>
      </ContainerGrid>
    </WhitePaper>
  );
}

export default Login;
