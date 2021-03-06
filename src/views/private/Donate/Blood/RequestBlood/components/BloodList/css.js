
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
    aPositive:{
      background:"#b71c1c",
      color:"white"
    },
    bPositive:{
      background:"#b71c1c",
      color:"white"
    },
    abPositive:{
      background:"#b71c1c",
      color:"white"
    },
    oPositive:{
      background:"#b71c1c",
      color:"white"
    },
    aNegative:{
      background:"#b71c1c",
      color:"white"
    },
    bNegative:{
      background:"#b71c1c",
      color:"white"
    },
    abNegative:{
      background:"#b71c1c",
      color:"white"
    },
    oNegative:{
      background:"#b71c1c",
      color:"white"
    },
    text:{
      fontSize:"20px"
    },
    selectedBloodGroupForSearch:{
      background:"white !important",
      color:"rgb(72, 72, 72) !important"
    }
  };
};

export default styles;
