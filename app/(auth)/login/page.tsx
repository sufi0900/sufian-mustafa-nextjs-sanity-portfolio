import LoginForm from "../../../components/LoginForm";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
function LoginPage() {
  return (
    <Container>
      <div style={{ minHeight: "100dvh" }}>
        <Grid
          container
          padding={2}
          className="flex"
          sx={{
            margin: "auto",
          }}
        >
          <Grid item lg={12} sm={12} container className="flex">
            <LoginForm />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default LoginPage;
