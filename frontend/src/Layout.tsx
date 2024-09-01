import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
