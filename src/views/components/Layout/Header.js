import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Divider,
  Box 
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "20px"
  },
  logo: {
    marginRight: theme.spacing(4),
    pointerEvents: "none"
  },
  title: {
    flexGrow: 1,
    display: "flex",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.logo}
          ><Typography variant="h5" color="secondary" display="inline">GTM</Typography>
          </div>
          <Typography variant="h6" className={classes.title}>
           <Link color="inherit" component={RouterLink} to="/">Home</Link>
            <Box ml="20px" mr="20px"><Divider color="inherit" orientation="vertical"/></Box>
           <Link color="inherit" component={RouterLink} to="/shortlist">Shortlist</Link>
           <Box ml="20px" mr="20px"><Divider color="inherit" orientation="vertical"/></Box>
           <Link color="inherit" component={RouterLink} to="/about">About</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
