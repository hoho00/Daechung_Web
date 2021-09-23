import Location from "./Location";
import Type from "./Type";
import DateSearching from "./Date";
import Grid from "@mui/material/Grid"

const SearchBar = () => {
  
  return (
    <Grid container className="searchBarRoot" spacing={2}>
      <Grid item xs={3}>
        <Location />
      </Grid>
      <Grid item xs={3}>
        <Type />
      </Grid>
      <Grid item xs={6}>
        <DateSearching />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
