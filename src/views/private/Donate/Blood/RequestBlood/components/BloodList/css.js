import deepOrange from "material-ui/colors/deepOrange";
import deepPurple from "material-ui/colors/deepPurple";

const styles = theme => {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)"
    },
    aPositve:{
      background:"#26a69a",
      color:"white"
    },
    bPositive:{
      background:"#66bb6a",
      color:"white"
    },
    abPositive:{
      background:"linear-gradient(to right,#26a69a 50%, #66bb6a 50%)",
      color:"white"
    },
    oPositive:{
      background:"#9ccc65",
      color:"white"
    },
    aNegative:{
      background:"#cddc39",
      color:"white"
    },
    bNegative:{
      background:"#8bc34a",
      color:"white"
    },
    abNegative:{
      background:"linear-gradient(to right,#cddc39 50%, #8bc34a 50%)",
      color:"white"
    },
    oNegative:{
      background:"#90a4ae",
      color:"white"
    }
  };
};

export default styles;
