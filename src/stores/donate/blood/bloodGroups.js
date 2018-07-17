
class BloodGroups {
  bloodGrps=[
    {
      displayName: "A+",
      code: "aPositive"
    },
    {
      displayName: "B+",
      code: "bPositive"
    },
    {
      displayName: "AB+",
      code: "abPositive"
    },
    {
      displayName: "O+",
      code: "oPositive"
    },
    {
      displayName: "A-",
      code: "aNegative"
    },
    {
      displayName: "B-",
      code: "bNegative"
    },
    {
      displayName: "AB-",
      code: "abNegative"
    },
    {
      displayName: "O-",
      code: "oNegative"
    }
  ];;
  getBloodGroups=()=>{
    return this.bloodGrps;
  }
}

export default BloodGroups;
