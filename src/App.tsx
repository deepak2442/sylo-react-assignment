import React from "react";
import { Grid } from "@mui/material";
import SearchBar from "./components/SearchBar";
import OfferSlider from "./components/Slider";
import Occasions from "./components/Occasions";
import Venues from "./components/Venues";
import SyloSelect from "./components/SyloSelect";
import Testimonials from "./components/Testimonials";
import BudgetVenues from "./components/BudgetVenues";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Grid px={2}>
      <Grid item xs={12} px={2} py={2}>
        <SearchBar />
      </Grid>
      <OfferSlider />
      <Occasions />
      <Venues />
      <SyloSelect />
      <Testimonials />
      <BudgetVenues />
      <Footer />
    </Grid>
  );
}
