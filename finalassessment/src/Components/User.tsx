import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
  useTheme,
  styled,
  Modal,
  Paper,
  FormControlLabel,
  Switch,
} from "@mui/material";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../App";
import { AddItemsButton, SortButton, StoreDiv } from "./Styling/Styling.styles";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const src = "https://images.unsplash.com/photo-1444065381814-865dc9da92c0";

export const User = (props: Props) => {
  const [datamap, setDataMap] = useState<any>([]);
  const [cartitemdata, setCartItemData] = useState<any>([]);
  const [count, setCount] = useState<any>(0);
  const [data, setData] = useState<any>([]);
  const [image, setImage] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [openmodal, setOpenModal] = useState(false);
  const [editopen, setEditOpen] = useState(false);
  const [qty, setQty] = useState<any>(1);
  const [food, setFood] = useState<any>("");
  const [price, setPrice] = useState<any>(0);
  const [query, setQuery] = useState("");
  const [select, setSelect] = useState("");
  const [catfeild, setCatFeild] = useState("");
  const [checked, setChecked] = useState(true);
  const theme = useTheme();
  const navigate = useNavigate();
  const value: any = useContext(ProfileContext);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);
  const handleEditClose = () => setEditOpen(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    console.log(checked, "Checked");
    getalldata();
  };

  const getalldata = () => {
    const maindata = JSON.parse(localStorage.getItem("data") || "[]");
    setDataMap(maindata);
    setCount(datamap.length);
  };

  const handlefoodsubmit = () => {
    if (food.length <= 0 && price <= 0 && select.length <= 0) {
      alert("Please Enter a value");
    } else {
      data.push({
        id: data.length + 1,
        food: food,
        category: select,
        price: parseInt(price),
        qty: parseInt(qty),
      });
      localStorage.setItem("data", JSON.stringify(data));
      console.log(data, "Data");
    }
  };

  const handleAddtoCart = (item: any, index: any) => {
    cartitemdata.push(item);
    localStorage.setItem("cartitems", JSON.stringify(cartitemdata));
    const maindata = JSON.parse(localStorage.getItem("data") || "[]");
    setDataMap(maindata);
    let newData = JSON.parse(localStorage.getItem("data") || "[]");
    newData.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(newData) || "[]");
    setDataMap(newData);
  };

  const handleSortLtoH = () => {
    const LesstoHigh = JSON.parse(localStorage.getItem("data") || "[]");
    const ltoh = datamap.sort((a: any, b: any) => a.price - b.price);
    localStorage.setItem("data", JSON.stringify(ltoh));
    const lowdata = JSON.parse(localStorage.getItem("data") || "[]");
    console.log(lowdata);
    setDataMap(lowdata);
    console.log(lowdata, "Low");
    getalldata();
  };

  const handleSortHtoL = () => {
    const HightoLess = JSON.parse(localStorage.getItem("data") || "[]");
    const htol = datamap.sort((a: any, b: any) => b.price - a.price);
    localStorage.setItem("data", JSON.stringify(htol));
    const highdata = JSON.parse(localStorage.getItem("data") || "[]");
    console.log(htol);
    setDataMap(highdata);
    getalldata();
  };

  const handleEdit = (item: any) => {
    setEditOpen(true);
    setFood({
      food: item.food,
      price: item.price,
    });
  };

  const handleSelectChange = () => {};

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  }));

  const drawer = (
    <div>
      <Toolbar />
      <Typography
        style={{
          fontWeight: "600",
          fontSize: "45px",
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
        <div
          style={{
            backgroundColor: "#020202",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            margin: "auto",
            height: "45px",
            width: "130px",
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          }}
        >
          <div
            style={{
              backgroundColor: "#252323",
              height: "30px",
              width: "50px",
              marginTop: "7px",
            }}
          >
            Admin
          </div>
          <div
            style={{
              backgroundColor: "#d3d1d1",
              height: "30px",
              width: "50px",
              marginTop: "7px",
            }}
          >
            User
          </div>
        </div>
        <ListItem disablePadding style={{ display: "block" }}>
          <ListItemButton onClick={() => navigate("/")}>
            <Typography>Home</Typography>
          </ListItemButton>
          <ListItemButton>Dashboard</ListItemButton>
          <ListItemButton>Calender</ListItemButton>
          <ListItemButton>
            <Typography>Enrollment</Typography>
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/help")}>
            <Typography>Help Center</Typography>
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/plan")}>
            <Typography>Subscription Plans</Typography>
          </ListItemButton>
          <ListItemButton>
            <Typography>About Us</Typography>
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
              variant="h6"
              noWrap
              sx={{ flexGrow: 1 }}
              component="div"
              style={{ maxWidth: "90%" }}
            >
              Welcome User {value.profilename}
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: "none" }) }}
            >
              {value.profilename}'s Profile
            </IconButton>
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
          <Grid container style={{ display: "block" }}>
            <Grid item lg={12}></Grid>
            <Grid item lg={12}>
              <TextField
                style={{
                  borderRadius: "8px",
                  border: "none",
                  marginTop: "10px",
                  backgroundColor: "#474444",
                  textDecoration: "none",
                  color: "#fff",
                }}
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)}
              />
              <select
                style={{
                  width: "120px",
                  marginTop: "10px",
                  marginLeft: "10px",
                  height: "55px",
                  fontSize: "20px",
                  backgroundColor: "#ccc",
                  borderRadius: "10px",
                }}
                value={catfeild}
                onChange={(e: any) => setCatFeild(e.target.value)}
              >
                <option value="" selected>
                  Select Your Option
                </option>
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>
                <option value="egg">Egg</option>
              </select>
              <Button
                style={{
                  backgroundColor: "black",
                  height: "50px",
                  width: "120px",
                  marginLeft: "10px",
                }}
                variant="contained"
                color="success"
                onClick={() => getalldata()}
              >
                Get Data
              </Button>
              <Button
                style={{
                  backgroundColor: "black",
                  height: "50px",
                  width: "120px",
                  marginLeft: "10px",
                }}
                variant="contained"
                color="success"
                // onClick={() => getalldata()}
                onClick={() => navigate("/cart")}
              >
                Cart: {count}
              </Button>
              <FormControlLabel
                style={{ marginLeft: "10px" }}
                control={
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Non-Veg"
              />
              <div style={{ display: "flex" }}>
                <SortButton onClick={() => handleSortLtoH()}>
                  Low to High
                </SortButton>
                <SortButton onClick={() => handleSortHtoL()}>
                  High to Low
                </SortButton>
              </div>
            </Grid>
          </Grid>
          {checked ? (
            <Grid container>
              {datamap
                .filter((post: any) => {
                  if (query === "") {
                    //if query is empty
                    return post;
                  } else if (
                    post.food.toLowerCase().includes(query.toLowerCase()) &&
                    post.category === "non-veg"
                  ) {
                    //returns filtered array
                    return post;
                  }
                })
                .map((post: any, index: any) => {
                  return (
                    <Grid
                      item
                      lg={3}
                      md={6}
                      sm={3}
                      xs={12}
                      style={{
                        textAlign: "center",
                        marginBottom: "20px",
                        padding: "20px",
                      }}
                    >
                      <Paper
                        style={{
                          height: "100%",
                          width: "300px",
                          margin: "auto",
                          border: "1px solid #ccc",
                          padding: 20,
                        }}
                      >
                        {image && (
                          <img
                            style={{ height: "500px", position: "relative" }}
                            src={URL.createObjectURL(image)}
                            alt="This is a Image"
                          />
                        )}
                        <InnerImageZoom
                          // style={{ width: "100%" }}
                          src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1"
                          zoomSrc="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1"
                          // alt="This is a Image"
                        />
                        <h2>{post.food}</h2>
                        <h4>₹{post.price}</h4>
                        <h4>{post.quantity}</h4>
                        <h4>{post.category}</h4>
                        <Button
                          onClick={() => handleAddtoCart(post, index)}
                          variant="contained"
                          color="success"
                        >
                          Add to Cart
                        </Button>
                      </Paper>
                    </Grid>
                  );
                })}
            </Grid>
          ) : (
            <Grid container>
              {datamap
                .filter((post: any) => {
                  if (query === "") {
                    //if query is empty
                    return post;
                  } else if (
                    post.food.toLowerCase().includes(query.toLowerCase()) &&
                    post.category === catfeild
                  ) {
                    //returns filtered array
                    return post;
                  }
                })
                .map((post: any, index: any) => {
                  return (
                    <Grid
                      item
                      lg={3}
                      md={6}
                      sm={3}
                      xs={12}
                      style={{
                        textAlign: "center",
                        marginBottom: "20px",
                        padding: "20px",
                      }}
                    >
                      <Paper
                        style={{
                          height: "100%",
                          width: "300px",
                          margin: "auto",
                          border: "1px solid #ccc",
                          padding: 20,
                        }}
                      >
                        {image && (
                          <img
                            style={{ height: "500px", position: "relative" }}
                            src={URL.createObjectURL(image)}
                            alt="This is a Image"
                          />
                        )}
                        <InnerImageZoom
                          // style={{ width: "100%" }}
                          src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1"
                          zoomSrc="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1"
                          // alt="This is a Image"
                        />
                        <h2>{post.food}</h2>
                        <h4>₹{post.price}</h4>
                        <h4>{post.quantity}</h4>
                        <h4>{post.category}</h4>
                        <Button
                          onClick={() => handleAddtoCart(post, index)}
                          variant="contained"
                          color="success"
                        >
                          Add to Cart
                        </Button>
                      </Paper>
                    </Grid>
                  );
                })}
            </Grid>
          )}
        </Box>
      </Box>
      <Box>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <Button>-</Button>
              ) : (
                <Button variant="contained" color="error">
                  close
                </Button>
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>Inbox</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>Mail</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </>
  );
};

export default User;
