import React from "react";
import { Grid, InputLabel } from "material-ui";

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";

// import avatar from "assets/img/faces/marc.jpg";
import ceo from "assets/img/ceo.jpeg";
import cf from "assets/img/cf.jpg";


function ContactUs({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={6} style={{marginTop: "20px"}}>
          <ProfileCard
            avatar={ceo}
            subtitle="CEO / CO-FOUNDER"
            title="Thahareema"
            description="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
            footer={
              <Button color="primary" round>
                Follow
              </Button>
            }
          />
        </ItemGrid>

        <ItemGrid xs={12} sm={12} md={6} style={{marginTop: "20px",marginBottom: "35px"}}>
          <ProfileCard
            avatar={cf}
            subtitle="CO-FOUNDER"
            title="Murali M"
            description="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
            footer={
              <Button color="primary" round>
                Follow
              </Button>
            }
          />
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default ContactUs;
