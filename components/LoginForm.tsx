"use client";
import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh", // Make the container at least full height of the viewport
    padding: "5px",
    borderRadius: "5px",

    "& h1": {
      marginBottom: "5px",
    },
  },
  button: {
    marginTop: "5px",
    width: "100%",
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const { control } = useForm();

  return (
    <Container className={classes.container}>
      <Typography variant="h2" className="custom-input-color">
        Please log in to continue.
      </Typography>
      <LoginButton control={control} />
    </Container>
  );
}

function LoginButton({ control }) {
  const classes = useStyles();

  return (
    <div
      style={{
        marginTop: "4rem",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Button
        // className={classes.button}
        style={{ color: "white" }}
        onClick={() => signIn("google", { callbackUrl: "/" })}
        sx={{
          "&:hover": {
            backgroundColor: "rgb(253, 6, 204)", // Add your hover background color here
          },
          display: "flex",
          alignItems: "center",
          border: "2px solid",
          padding: "16px",
          borderRadius: "9999px",
        }}
      >
        <span>
          <Image
            src="/google-logo.svg"
            width={30}
            height={30}
            alt="Google Logo"
          />
        </span>
        <Typography
          variant="h6"
          className="custom-input-color"
          sx={{ margin: "5px" }}
        >
          {" "}
          Sign In With Google
        </Typography>
      </Button>
    </div>
    // <Button
    //   className={classes.button}
    //   variant="contained"
    //   color="secondary"
    //   onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
    // >
    //   Log in with Google
    // </Button>
  );
}
