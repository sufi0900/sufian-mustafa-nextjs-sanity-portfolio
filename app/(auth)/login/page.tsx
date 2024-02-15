import LoginForm from "../../../components/LoginForm";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
function LoginPage() {
  return (
    <Container>
      <Typography variant="h2" className="custom-input-color">
        Please log in to continue.
      </Typography>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container padding={2}>
          <Grid item lg={12} sm={12} container className="flex">
            <LoginForm />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default LoginPage;
