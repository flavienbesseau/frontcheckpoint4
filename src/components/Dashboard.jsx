import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ItemsDashboard from "./ItemsDashboard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    width: "7rem",
  },
});

export default function Dashboard() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className="dashboard">
      <div>
        <h1>Collège Marc Chagall</h1>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => history.push("/")}
        >
          Déconnexion
        </Button>
      </div>
      <div>
        <h2>Que voulez-vous faire?</h2>
        <div className="boxesDashboard">
          <ItemsDashboard name="Elèves" />
          <ItemsDashboard name="Professeurs" />
          <ItemsDashboard name="Classes" />
        </div>
      </div>
    </div>
  );
}
