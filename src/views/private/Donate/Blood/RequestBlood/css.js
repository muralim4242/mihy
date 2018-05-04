const styles = theme => {
  return {
    pickBtn: {
      width: "100%",
      position: "fixed",
      bottom: "0px",
      height: "56px",
      padding: "9px 16px 0 16px",
      backgroundColor: "rgb(255, 255, 255, 0.63)",
      boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.1), 0 -2px 5px 0 rgba(0, 0, 0, 0)"
    },
    paper: {
      position: "absolute",
      width: "80vw",
      // height: "30vh",
      top: "50%",
      left: "50%",
      minHeight: "150px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 2,
      transform: "translate(-50%, -50%)"
    },
    buttonSend: {
      position: "fixed",
      bottom: "125px",
      right: "0px"
    },
    buttonCancel: {
      position: "fixed",
      bottom: "181px",
      right: "0px"
    },
    circle:{
      position:"relative",
      top:"-96px"
    }
  };
};

export default styles;
