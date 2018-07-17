import React from "react";
import { InputAdornment } from "material-ui/Input";
import { compose } from "recompose";
import { inject, observer } from "mobx-react";

import {
  RegularCard,
  RegularButton,
  CustomInput,
  ItemGrid,
  ContainerGrid,
  Div,
  SingleValuedDropdown
} from "components";

function Profile(props) {
  let {donorProfile}=props;
  let bloodGrps=[];
  if (donorProfile.bloodGrps.length>0) {
    bloodGrps=donorProfile.bloodGrps.map(bloodGrps=>{
      return {
        key:bloodGrps.code,
        value:bloodGrps.displayName
      }
    })
  }
  return (
    <Div>
      <ContainerGrid container>
        <ItemGrid xs={12} sm={12} md={8}>
          <RegularCard
            // cardTitle="Edit Donor Profile"
            // cardSubtitle="Complete your profile"
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
                      value={donorProfile.bloodGroup}
                      data={bloodGrps}
                      handleChange={(e)=>{donorProfile.setInput("bloodGroup",e.target.value)}}
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
                        type: "number",
                        onChange:(e)=>{donorProfile.setInput("weight",e.target.value)}
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
                        type: "number",
                        onChange:(e)=>{donorProfile.setInput("height",e.target.value)}
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
            footer={<RegularButton color="primary">Update</RegularButton>}
          />
        </ItemGrid>
      </ContainerGrid>
    </Div>
  );
}

export default compose(inject("donorProfile"),observer)(Profile);
