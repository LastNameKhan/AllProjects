import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

interface IProps {}

interface IState {
  isLogin: boolean;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLogin: false
    }
  }

  componentWillMount() {
    const token = sessionStorage.getItem('token')
    console.log('token', token)
    if(token) {
      this.setState({isLogin: true})
    }
  }

  render() {
    return (
      <>
        <Header />
        <Routes>
          {
            this.state.isLogin ?
            <>
              <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="/page2" element={<PrivateRoute><h1>test</h1></PrivateRoute>} />
            </>
            :
            <>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          }
          
          
          {/* <Route path="/user" >
          <Route path="login" element={<h1>login</h1>} />
          <Route path="forgotPass" element={<h1>forgot</h1>} />
          <Route path="reset" element={<h1>reset</h1>} />
        </Route> */}
        </Routes>
      </>
    );
  }
}

export default App;
