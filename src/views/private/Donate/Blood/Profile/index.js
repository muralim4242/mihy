import React from "react";
import { InputAdornment } from "material-ui/Input";

import {
  RegularCard,
  Button,
  CustomInput,
  ItemGrid,
  ContainerGrid,
  Div,
  SingleValuedDropdown
} from "components";

function Profile({ ...props }) {
  return (
    <Div>
      <ContainerGrid container>
        <ItemGrid xs={12} sm={12} md={8}>
          <RegularCard
            cardTitle="Edit Donor Profile"
            cardSubtitle="Complete your profile"
            content={
              <Div>
                <ContainerGrid container>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <SingleValuedDropdown
                      labelText="Blood Group"
                      id="adornment-donor-blood-group"
                      formControlProps={{
                        fullWidth: true,
                        required: true
                      }}
                      placeholder="Select blood group"
                      value=""
                      data={[
                        {
                          key: "A+",
                          value: "A+"
                        },
                        {
                          key: "B+",
                          value: "A+"
                        },
                        {
                          key: "C+",
                          value: "C+"
                        }
                      ]}
                    />
                  </ItemGrid>
                </ContainerGrid>
                <ContainerGrid container>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Weight"
                      id="adornment-donor-weight"
                      inputProps={{
                        placeholder: "45",
                        endAdornment: (
                          <InputAdornment position="end">Kg</InputAdornment>
                        ),
                        type: "number"
                      }}
                      formControlProps={{
                        fullWidth: true,
                        required: true
                      }}
                    />
                  </ItemGrid>
                </ContainerGrid>
                <ContainerGrid container>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Height"
                      id="adornment-donor-height"
                      inputProps={{
                        placeholder: "5.4",
                        endAdornment: (
                          <InputAdornment position="end">Ft</InputAdornment>
                        ),
                        type: "number"
                      }}
                      formControlProps={{
                        fullWidth: true,
                        required: true
                      }}
                    />
                  </ItemGrid>
                </ContainerGrid>
              </Div>
            }
            footer={<Button color="primary">Update Donor Profile</Button>}
          />
        </ItemGrid>
      </ContainerGrid>
    </Div>
  );
}

export default Profile;
