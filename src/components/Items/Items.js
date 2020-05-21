import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
  },
}));
const Items = (props) => (<img
        src={require("../../" + props.path + props.item)}
        alt={props.item}
        height="auto"
        width="80%"
      />);

export default Items;
