import {
  Container,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { json } from "stream/consumers";

interface IProps {}

interface IState {
  data: any[];
  isOpen: boolean;
  name: string;
  job: string;
  editId: number | null;
}

const baseUrl = "https://reqres.in/api"

export default class HttpNoerror extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      data: [],
      isOpen: false,
      name: '',
      job: '',
      editId: null,
    };
  }
  getAllUsers = async() => {
    console.log('Here')
    const res = await fetch(`${baseUrl}/users?page=2`, {
      method: "GET",
      headers: {
        'Content-type': "application/json",
      },
      
    })
    const resJson = await res.json();
    this.setState({data: resJson.data})
  }

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen, name: '', job: '', editId: null })
  }

  addUserHandler = () => {
    const httpBody = {
      name: this.state.name,
      job: this.state.job
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(httpBody),
      headers: {
        'Content-Type': "application/json" 
      }
    }
    fetch(`${baseUrl}/users`, options)
    .then(res => res.json())
    .then(resJson => {
      if(resJson) {
        alert("Your data added successfully");
        this.setState({isOpen: false})
      } else {
        alert("Something went wrong!");
      }
    })
  }

  deleteHandler = async(deleteId: number) => {
    try{
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': "application/json" 
        }
      }
      const res = await fetch('https://reqres.in/api/users/'+deleteId, options);
      console.log('res',res.status);
      if(res.status === 204) {
        alert(deleteId+" is deleted successfully!")
        this.setState({
          data: this.state.data.filter(item => item.id !== deleteId)
        })
        // this.getAllUsers();
      }
    } catch(e) {
      console.log(e)
    }
    
  }

  editHandler = (obj: any) => {
    
    this.toggleModal();
    this.setState({
      name: obj.first_name,
      job: obj.last_name,
      editId: obj.id
    })
  }

  editDataHandler = () => {
    const httpBody = {
      name: this.state.name,
      job: this.state.job
    }

    const options = {
      method: 'PUT',
      body: JSON.stringify(httpBody),
      headers: {
        'Content-Type': "application/json" 
      }
    }
    fetch(`${baseUrl}/users/${this.state.editId}`, options)
    .then(res => res.json())
    .then(resJson => {
      if(resJson) {
        alert(this.state.editId+" id is edited successfully");
        this.toggleModal();
        this.getAllUsers();
      } else {
        alert("Something went wrong!");
      }
    })
  }


  render() {
    return (
      <>
        <Container>
          <Button
            onClick={this.getAllUsers}
          >Get All Users</Button>
          <Button
            onClick={this.toggleModal}
            variant="contained"
            
          >Add New User</Button>
          <Box>
            {
              this.state.data.map(i => {
                return <Box key={i.id} style={{display: 'flex', border: '1px solid #ccc', marginTop: 20,}}>
                  <Button onClick={() => this.editHandler(i)}>Edit</Button>
                  <Typography style={{flex: 1, marginTop: 5}}>{i.first_name}</Typography>
                  <Button onClick={() => this.deleteHandler(i.id)}>Delete</Button>
                </Box>
              })
            }
          </Box>
        </Container>

        <Dialog
          open={this.state.isOpen}
          onClose={this.toggleModal}
        >
          <DialogContent>
            <TextField
              value={this.state.name}
              onChange={(e) => this.setState({name: e.target.value})}
              variant="outlined"
              style={{marginTop: 20}}
              label="name"
              fullWidth
            />
            <TextField
              value={this.state.job}
              onChange={(e) => this.setState({job: e.target.value})}
              variant="outlined"
              style={{marginTop: 20}}
              label="Job"
              fullWidth
            />
            <Button
              onClick={() => this.state.editId ? this.editDataHandler() : this.addUserHandler()}
              variant="contained"
              style={{marginTop: 20}}
            >{this.state.editId ? 'Edit User' : 'Add User'}</Button>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}
