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
      height: "56px"
    },
    buttonSend: {
      position: "fixed",
      bottom: "229px",
      right: "0px"
    },
    buttonCancel: {
      position: "fixed",
      bottom: "181px",
      right: "0px"
    }
  };
};

export default styles;
