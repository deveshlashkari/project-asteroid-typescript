import React, { useEffect, useState } from "react";

import {
  Container,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableContainer,
  TableCell,
  TableRow,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router-dom";

import { NASA_API_KEY, NASA_ASTEROID_URL } from "../Constants/Constants";

export default function AsteroidDetails() {
  const [asteroidData, setAsteroidData] = useState({
    id: "",
    name: "",
    nasaJplUrl: "",
    isPotentiallyAsteroid: "",
  });

  // Extract asteroidId from URL
  const { asteroidId } = useParams();

  useEffect(() => {
    // API call to get random Asteroid

    try {
      // API call to get data for a particular asteroid using id
      getAsteroidData(asteroidId).then((_asteroidData: any) => {
        let response = _asteroidData.data;
        if (Object.keys(response).length !== 0) {
          setAsteroidData({
            id: response.id,
            name: response.name,
            nasaJplUrl: response.nasa_jpl_url,
            isPotentiallyAsteroid:
              response.is_potentially_hazardous_asteroid.toString(),
          });
        }
      });
    } catch (err) {
      console.warn(err);
    }
  }, [asteroidId]);

  const getAsteroidData = (id: any) => {
    return axios.get(`${NASA_ASTEROID_URL}${id}?api_key=${NASA_API_KEY}`);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            {/* Table to render the data */}
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>NASA JPL URL</TableCell>
                    <TableCell>Is Potentially Hazardous</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{asteroidData.name}</TableCell>
                    <TableCell>{asteroidData.nasaJplUrl}</TableCell>
                    <TableCell>{asteroidData.isPotentiallyAsteroid}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
