import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { getUser } from '../../components/Utils/Common';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import axios from 'axios';

export default function Requirements(props) {
  const { onSubmitClose } = props;
  const user = getUser();

  const [isLoading, setLoading] = useState(true);

  const [shell_core, set_shell_core] = useState('');
  const [cold_box, set_cold_box] = useState('');
  const [arpa_900, set_arpa_900] = useState('');
  const [arpa_450, set_arpa_450] = useState('');
  const [w_b_q_3, set_w_b_q_3] = useState('');
  const [hand_moulding, set_hand_moulding] = useState('');
  const [melting, set_melting] = useState('');
  const [fettling, set_fettling] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/req/shell_core').then((response) => { set_shell_core(response.data[0].requirement); });
    axios.get('http://localhost:3000/req/cold_box').then((response) => { set_cold_box(response.data[0].requirement); });
    axios.get('http://localhost:3000/req/arpa_900').then((response) => { set_arpa_900(response.data[0].requirement); });
    axios.get('http://localhost:3000/req/arpa_450').then((response) => { set_arpa_450(response.data[0].requirement); });
    axios.get('http://localhost:3000/req/w_b_q_3').then((response) => { set_w_b_q_3(response.data[0].requirement); });
    axios.get('http://localhost:3000/req/hand_moulding').then((response) => { set_hand_moulding(response.data[0].requirement); });
    axios.get('http://localhost:3000/req/melting').then((response) => { set_melting(response.data[0].requirement); });
    axios.get('http://localhost:3000/req/fettling').then((response) => { set_fettling(response.data[0].requirement); setLoading(false); });
  }, []);

  const changeRequirements = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/req/changeRequirements", {
      shell_core: shell_core,
      cold_box: cold_box,
      arpa_900: arpa_900,
      arpa_450: arpa_450,
      w_b_q_3: w_b_q_3,
      hand_moulding: hand_moulding,
      melting: melting,
      fettling: fettling,
      name: user[0].name
    },
      onSubmitClose())
  };

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <>
      <form onSubmit={changeRequirements}>
        <List component="nav">
          <Grid container>
            <Grid item sm={12}>
              <ListItem>
                <ListItemIcon>
                  <HomeWorkIcon />
                </ListItemIcon>
                <ListItemText>
                  <b>Shell Core: </b>
                  <TextField
                    type='number'
                    required
                    value={shell_core}
                    style={{ width: '25%' }}
                    onChange={(event) => { set_shell_core(event.target.value); }}
                  />
                </ListItemText>
              </ListItem>
            </Grid>
            <Grid item sm={12}>
              <ListItem>
                <ListItemIcon>
                  <HomeWorkIcon />
                </ListItemIcon>
                <ListItemText>
                  <b>Cold Box: </b>
                  <TextField
                    type='number'
                    required
                    value={cold_box}
                    style={{ width: '25%' }}
                    onChange={(event) => { set_cold_box(event.target.value); }}
                  />
                </ListItemText>
              </ListItem>
            </Grid>
            <Grid item sm={12}>
              <ListItem>
                <ListItemIcon>
                  <HomeWorkIcon />
                </ListItemIcon>
                <ListItemText>
                  <b>Arpa 900: </b>
                  <TextField
                    type='number'
                    required
                    value={arpa_900}
                    style={{ width: '25%' }}
                    onChange={(event) => { set_arpa_900(event.target.value); }}
                  />
                </ListItemText>
              </ListItem>
            </Grid>
            <Grid item sm={12}>
              <ListItem>
                <ListItemIcon>
                  <HomeWorkIcon />
                </ListItemIcon>
                <ListItemText>
                  <b>Arpa 450: </b>
                  <TextField
                    type='number'
                    required
                    value={arpa_450}
                    style={{ width: '25%' }}
                    onChange={(event) => { set_arpa_450(event.target.value); }}
                  />
                </ListItemText>
              </ListItem>
            </Grid>
            <Grid item sm={12}>
              <ListItem>
                <ListItemIcon>
                  <HomeWorkIcon />
                </ListItemIcon>
                <ListItemText>
                  <b>W.B.Q.3: </b>
                  <TextField
                    type='number'
                    required
                    value={w_b_q_3}
                    style={{ width: '25%' }}
                    onChange={(event) => { set_w_b_q_3(event.target.value); }}
                  />
                </ListItemText>
              </ListItem>
            </Grid>
            <Grid item sm={12}>
              <ListItem>
                <ListItemIcon>
                  <HomeWorkIcon />
                </ListItemIcon>
                <ListItemText>
                  <b>Hand Moulding: </b>
                  <TextField
                    type='number'
                    required
                    value={hand_moulding}
                    style={{ width: '25%' }}
                    onChange={(event) => { set_hand_moulding(event.target.value); }}
                  />
                </ListItemText>
              </ListItem>
            </Grid>
            <Grid item sm={12}>
              <ListItem>
                <ListItemIcon>
                  <HomeWorkIcon />
                </ListItemIcon>
                <ListItemText>
                  <b>Melting: </b>
                  <TextField
                    type='number'
                    required
                    value={melting}
                    style={{ width: '25%' }}
                    onChange={(event) => { set_melting(event.target.value); }}
                  />
                </ListItemText>
              </ListItem>
            </Grid>
            <Grid item sm={12}>
              <ListItem>
                <ListItemIcon>
                  <HomeWorkIcon />
                </ListItemIcon>
                <ListItemText>
                  <b>Fettling: </b>
                  <TextField
                    type='number'
                    required
                    value={fettling}
                    style={{ width: '25%' }}
                    onChange={(event) => { set_fettling(event.target.value); }}
                  />
                </ListItemText>
              </ListItem>
            </Grid>
          </Grid>
        </List>
        <Grid item xs={12} sm={4}>
          <Button
            type="submit"
            style={{
              fontSize: "18px",
            }}
            color="primary"
            variant="contained"
          >
            Update
          </Button>
        </Grid>
      </form>
    </>
  );
}
