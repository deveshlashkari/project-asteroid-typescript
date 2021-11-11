import React, { useState } from "react";

import { Grid, Container, Button, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export default function Asteriod() {
  // useNavigate hook to Navigate in click Handler
  const navigate = useNavigate();
  const [asteroidId, setAsteroidId] = useState("");

  const handleAsteroidIdChange = (event: any) => {
    setAsteroidId(event.target.value);
  };

  const handleSubmitButtonClick = () => {
    navigate(`/asteroid/${asteroidId}`);
  };
  const handleRandomButtonClick = () => {
    navigate("/asteroid/random");
  };

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "30px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Enter Asteroid ID"
              value={asteroidId}
              onChange={handleAsteroidIdChange}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled={asteroidId.length !== 0 ? false : true}
              onClick={handleSubmitButtonClick}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={handleRandomButtonClick}
            >
              Random Asteroid
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
