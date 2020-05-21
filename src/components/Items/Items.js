import React from "react";
import { theme } from "../../theme/theme";
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
const Items = (props) => {
  const classes = useStyles(theme);
  return (
    <Paper>
      <img
        src={require("../../" + props.path + props.item)}
        className={classes.image}
        alt={props.item}
        height="auto"
        width="80%"
      />
    </Paper>
  );
};

export default Items;
