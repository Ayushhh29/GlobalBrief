import { Link } from "react-router-dom";
import {
    Navbar,
    Container,
    Nav,
    Button
} from "react-bootstrap";
import GoogleLoginButton from "./GoogleLoginButton";


function AppNavbar({
   

    darkMode,
    setDarkMode
}) {
      const userName =
        localStorage.getItem(
            "user_name"
        );
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>

                <Navbar.Brand>
                    <h1>🌎 GlobalBrief</h1>
                </Navbar.Brand>

                <Nav>

                    <Nav.Link
                        as={Link}
                        to="/"
                    >
                        Home
                    </Nav.Link>

                    <Nav.Link
                        as={Link}
                        to="/bookmarks"
                    >
                        Bookmarks
                    </Nav.Link>
                   {userName ? (

    <>
        <span
            className="text-white me-3"
        >
            👤 {userName}
        </span>

        <Button
            variant="danger"
            onClick={() => {

                localStorage.clear();

                window.location.reload();

            }}
        >
            Logout
        </Button>
    </>

) : (

    <GoogleLoginButton />

)}

                    <Button
                        variant={
                            darkMode
                                ? "light"
                                : "dark"
                        }
                        onClick={() =>
                            setDarkMode(!darkMode)
                        }
                    >
                        {darkMode
                            ? "☀️ Light"
                            : "🌙 Dark"}
                    </Button>

                </Nav>

            </Container>
        </Navbar>
    );
}

export default AppNavbar;