import { observable, action, decorate } from "mobx";
import BloodGroups from "./bloodGroups";
let bloodGrps=new BloodGroups();

class DonorProfile {
  bloodGrps=bloodGrps.getBloodGroups();
  bloodGroup="";
  weight="";
  height="";
  setInput=(property,value)=>{
    this[property]=value
  }
}

decorate(DonorProfile, {
  bloodGroup:observable,
  weight:observable,
  height:observable,
  setInput:action
});

export default DonorProfile;
