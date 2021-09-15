import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import Location from "./Location";
import Type from "./Type";

export default  function SearchBar () {
    return (
        <Grid container className="searchBarRoot" spacing={2}>
            <Grid item xs={3}>
                <Grid container justifyContent="left" spacing = {2}>
                    <Location/>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container justifyContent="left" spacing = {2}>
                    <Location/>
                </Grid>
            </Grid>
            <Grid item xs={15}>
                <Grid container justifyContent="left" spacing = {2}>
                    <Location/>
                </Grid>
            </Grid>
        </Grid>
    );
}