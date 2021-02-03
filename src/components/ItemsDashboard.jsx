import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import DashboardModal from "./DashboardModal";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: 300,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2rem",
    padding: "0 0 1rem 0",
  },
  button: {
    width: "7rem",
    marginTop: "1rem",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.name}
          </Typography>
        </CardContent>
        <DashboardModal name={props.name} action={"Ajouter"}>
          {/* <Add name={props.name} /> */}
        </DashboardModal>
        <DashboardModal name={props.name} action={"Modifier"}>
          {/* <Modify /> */}
        </DashboardModal>
        <DashboardModal name={props.name} action={"Supprimer"}>
          {/* <Delete /> */}
        </DashboardModal>
        <DashboardModal name={props.name} action={"Voir"}>
          {/* <See /> */}
        </DashboardModal>
      </Card>
    </div>
  );
}
