import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
  },
  titleConnexion: {
    textAlign: "center",
  },
  // paper: {
  //   backgroundColor: theme.palette.background.paper,
  //   border: "2px solid #000",
  //   boxShadow: theme.shadows[5],
  //   padding: theme.spacing(2, 4, 3),
  // },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    marginTop: "1rem",
  },
}));

export default function LoginModal() {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);

  const handleChangePseudo = (event) => {
    setPseudo(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickRegister = () => {
    pseudo && password
      ? axios
          .post("http://localhost:5000/api/authentification/register", {
            pseudo: pseudo,
            password: password,
          })
          .then((response) => console.log(response))
          .then((response) => setLogged(true))
          .then(() => alert("Compte enregistré"))
          .then(() => history.push("/dashboard"))
      : alert("Les 2 champs sont nécessaires");
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        S'enregistrer
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.titleConnexion}
                gutterBottom
                variant="h4"
              >
                Vos identifiants
              </Typography>
              <form className={classes.form} noValidate autoComplete="off">
                <TextField label="Pseudo" onChange={handleChangePseudo} />
                <TextField
                  className={classes.field}
                  label="Mot de passe"
                  onChange={handleChangePassword}
                />
              </form>
            </CardContent>

            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={onClickRegister}
              >
                S'inscrire
              </Button>
            </CardActions>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
}
