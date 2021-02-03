import React from "react";
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
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
                <TextField label="Pseudo" />
                <TextField className={classes.field} label="Mot de passe" />
              </form>
            </CardContent>

            <CardActions>
              <Button variant="contained" color="primary">
                S'inscrire
              </Button>
            </CardActions>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
}
