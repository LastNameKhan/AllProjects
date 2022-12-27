import React, { useEffect, useState } from "react";
// import "./style.css";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Link,
  Typography,
  Checkbox,
  TextField,
  Grid,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Paper,
} from "@mui/material";
import {
  StoreDiv,
  StyledButtonSubmit,
  StyledCarouselImage,
} from "./Styling/Styling.styles";
import { useContext } from "react";
import { ProfileContext } from "../App";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export const Dashboard = (props: Props) => {
  const value: any = useContext(ProfileContext);
  const { window } = props;
  const navigate = useNavigate();
  const [items, setItems] = useState<any[]>([
    "https://b.zmtcdn.com/data/pictures/chains/5/90195/3f8263406e67b556327c383cf9f8c713.jpg",
    "https://media.istockphoto.com/photos/assorted-indian-recipes-food-various-picture-id922783734?b=1&k=20&m=922783734&s=612x612&w=0&h=cWtz2LzEw-I-HSTN8HzkTbG0w3uGpleEE46xIJRRfo4=",
    "https://media-cdn.tripadvisor.com/media/photo-s/18/a2/89/c3/dominooooooooooo.jpg",
    "https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__700_0_0_0_auto.jpg",
    "https://static.toiimg.com/photo/65841454.cms?width=500&resizemode=4&imgsize=540102",
  ]);
  const [curr, setCurr] = useState<number>(0);
  const [next, setNext] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [check1, setCheck1] = useState<boolean>(false);
  const [check2, setCheck2] = useState<boolean>(false);
  const [admin, setAdmin] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let index = curr,
    isNext = next,
    src = items[index];
  useEffect(() => {
    const next = (curr + 1) % items.length;
    const id = setTimeout(() => setCurr(next), 3000);
    return () => clearTimeout(id);
  }, [curr]);

  const onCheck1 = () => {
    setCheck1((prevState) => !prevState);
    setCheck2(false);
    setUser(!user);
  };

  const onCheck2 = () => {
    setCheck2((prevState) => !prevState);
    setCheck1(false);
    setAdmin(!admin);
  };

  const handleLogin = () => {
    if (username.length <= 0 && password.length <= 0) {
      alert("Please Enter the credentials");
    } else if (user) {
      value.setProfileName(username);
      navigate("/user");
    } else if (admin) {
      value.setProfileName(username);
      navigate("/admin");
    } else {
      alert("Please select a Admin/User login");
    }
  };

  var position: any;

  const justforfun = () => {
    if (username.length <= 0 && password.length <= 0) {
      position ? (position = 0) : (position = 100);
    } else {
      return;
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Typography
        style={{
          fontWeight: "600",
          fontSize: "50px",
          marginTop: "-70px",
          fontFamily: "sans-serif",
        }}
      >
        Welcome
      </Typography>
      <Divider />
      <img
        style={{ width: "100%" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png"
      />
      <List>
        <ListItem disablePadding style={{ display: "block" }}>
          <ListItemButton onClick={() => navigate("/")}>
            <img
              style={{ height: "30px" }}
              src="https://www.pngitem.com/pimgs/m/534-5345666_transparent-background-house-icon-png-png-download-transparent.png"
            />
            <Typography style={{ marginLeft: "15px" }}>Home</Typography>
          </ListItemButton>
          <ListItemButton>
            <Checkbox onClick={onCheck1} disabled={check1} color="success" />
            User Login
          </ListItemButton>
          <ListItemButton>
            <Checkbox color="success" onClick={onCheck2} disabled={check2} />
            Admin Login
          </ListItemButton>
          <ListItemButton>
            <img
              style={{ height: "30px" }}
              src="https://www.kindpng.com/picc/m/156-1568226_transparent-contact-icon-png-contact-us-icon-png.png"
            />
            <Typography style={{ marginLeft: "18px" }}>Contact Us</Typography>
          </ListItemButton>
          <ListItemButton>
            <img
              style={{ height: "30px" }}
              src="https://static.thenounproject.com/png/4149190-200.png"
            />
            <Typography style={{ marginLeft: "20px" }}>About Us</Typography>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding style={{ display: "block" }}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            href="https://www.apple.com/in/app-store/"
          >
            <StoreDiv>
              <img
                style={{ width: "22%" }}
                src="data:image/png;base64,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"
              />

              <Typography
                style={{
                  marginLeft: "5px",
                }}
              >
                Download on the
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "20px",
                  }}
                >
                  App Store
                </Typography>
              </Typography>
            </StoreDiv>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            href="https://play.google.com/store/games"
          >
            <StoreDiv>
              <img
                style={{ width: "25%" }}
                src="https://w7.pngwing.com/pngs/528/1016/png-transparent-apps-google-googleplay-play-social-media-icon-thumbnail.png"
              />
              <Typography style={{ marginLeft: "5px" }}>
                Download on the{" "}
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "20px",
                  }}
                >
                  Play Store
                </Typography>
              </Typography>
            </StoreDiv>
          </Link>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          style={{
            background: "black",
          }}
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <img
                style={{ height: "50px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6N2Kga6CZUh1JQ4HjC0xLv0Qd1aHZ5zeJrw&usqp=CAU"
              />
            </IconButton>
            <Typography
              style={{ fontWeight: "600" }}
              variant="h6"
              noWrap
              component="div"
            >
              This is the way!
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block", md: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Grid container>
            <Grid item lg={3}>
              <TextField
                onChange={(e: any) => setUsername(e.target.value)}
                fullWidth
                placeholder="Please Enter Name"
              />
              <TextField
                onChange={(e: any) => setPassword(e.target.value)}
                fullWidth
                type="password"
                placeholder="Please Enter Password"
                style={{ marginTop: "20px" }}
              />
              <StyledButtonSubmit
                onClick={handleLogin}
                onMouseOver={justforfun}
              >
                Submit
              </StyledButtonSubmit>
              <Grid container>
                <Grid
                  container
                  lg={12}
                  style={{
                    borderRadius: "5px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  }}
                >
                  <img
                    style={{ width: "10%" }}
                    src="https://cdn-icons-png.flaticon.com/512/49/49354.png"
                  />
                  <Typography
                    style={{
                      fontFamily: "sans-serif",
                      marginLeft: "10px",
                      marginTop: "5px",
                    }}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      href="https://www.facebook.com/"
                    >
                      Login With Facebook
                    </Link>
                  </Typography>
                </Grid>
                <Grid
                  container
                  lg={12}
                  style={{
                    marginTop: "10px",
                    borderRadius: "5px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  }}
                >
                  <img
                    style={{ width: "10%" }}
                    src="https://cdn-icons-png.flaticon.com/512/60/60818.png"
                  />
                  <Typography style={{ marginLeft: "10px", marginTop: "5px" }}>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      href="https://www.google.com/account/about/"
                    >
                      Login With Google
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={9} style={{ margin: "auto" }}>
              <StyledCarouselImage src={src} />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <AppBar
        style={{
          background: "black",
          height: "250px",
          position: "fixed",
        }}
        color="primary"
        sx={{ top: "auto", bottom: 0 }}
      >
        <Grid container>
          <Grid item lg={4} sm={12} style={{ marginTop: "10px" }}>
            <img
              style={{ width: "20%", marginLeft: "200px" }}
              src="https://t4.ftcdn.net/jpg/03/68/67/49/360_F_368674951_XE78skEY99QVgwETjkpFuObxY3l93BrQ.jpg"
            />
          </Grid>
          <Grid item lg={8} sm={12} style={{ marginTop: "10px" }}>
            <TableContainer style={{ width: "80%" }} component={Paper}>
              <Table
                style={{ backgroundColor: "black" }}
                sx={{ minWidth: 650 }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{ backgroundColor: "#333333" }}
                      align="center"
                    >
                      Resources
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "#333333" }}
                      align="center"
                    >
                      Pricing
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "#333333" }}
                      align="center"
                    >
                      Social
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "#333333" }}
                      align="center"
                    >
                      Resources
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      style={{ backgroundColor: "#1C1C1C" }}
                      align="center"
                    >
                      New
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "#1C1C1C" }}
                      align="center"
                    >
                      Designer
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "#1C1C1C" }}
                      align="center"
                    >
                      University
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "#1C1C1C" }}
                      align="center"
                    >
                      SEO
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ backgroundColor: "#1C1C1C" }}
                      align="center"
                    >
                      Topics
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "#1C1C1C" }}
                      align="center"
                    >
                      Enterprice
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "#1C1C1C" }}
                      align="center"
                    >
                      Forum
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "#1C1C1C" }}
                      align="center"
                    >
                      Hosting
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      style={{ backgroundColor: "#1C1C1C" }}
                      align="center"
                    >
                      Playlist
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "#1C1C1C" }}
                      align="center"
                    >
                      Ecommerce
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "#1C1C1C" }}
                      align="center"
                    >
                      Community
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "#1C1C1C" }}
                      align="center"
                    >
                      Editor
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default Dashboard;
