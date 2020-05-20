import React from "react";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
  },
}));
const Items = (props) => {
    console.log(props.path)
  const classes = useStyles();
  return (
    <Paper>
      <img
        src={require("../../" + props.path +
          props.item)}
        className={classes.image}
        alt={props.item}
        height="auto"
        width="80%"
      />
    </Paper>
  );
};

export default Items;
