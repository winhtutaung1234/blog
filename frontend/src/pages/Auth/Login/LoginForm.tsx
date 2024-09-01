import { Button, TextField } from "@mui/material";

function LoginForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <TextField label="Name" sx={{ mb: 2 }} fullWidth size="small" />
      <TextField
        type="email"
        label="Email"
        sx={{ mb: 2 }}
        fullWidth
        size="small"
      />
      <TextField label="Phone Number" sx={{ mb: 2 }} fullWidth size="small" />
      <TextField
        type="password"
        label="Password"
        sx={{ mb: 2 }}
        fullWidth
        size="small"
      />
      <TextField
        type="password"
        label="Confirm Password"
        sx={{ mb: 2 }}
        fullWidth
        size="small"
      />
      <Button size="small" fullWidth type="submit" variant="contained">
        Sign In
      </Button>
    </form>
  );
}

export default LoginForm;
