import { SEARCHRESULTS } from "../mockSearch";

import React from "react";
import Box from "@mui/joy/Box";
import {
  Card,
  Chip,
  Typography,
  Stack,
  FormControl,
  Autocomplete,
  AutocompleteOption,
  ListItemDecorator,
  ListItemContent,
} from "@mui/joy";

function Search() {
  return (
    <>
      <Box>
        <FormControl>
          {/* <FormLabel>Search Tenup.com</FormLabel> */}
          <Autocomplete
            freeSolo
            size="lg"
            autoFocus={true}
            open={true}
            clearOnBlur={false}
            disableCloseOnSelect={true}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <AutocompleteOption {...props}>
                <ListItemDecorator sx={{ mr: 2 }}>
                  <img
                    height="80px"
                    //loading="lazy"
                    src={option.imageLink}
                    alt={option.label}
                  />
                </ListItemDecorator>
                <ListItemContent sx={{ ml: 1 }}>{option.label}</ListItemContent>
              </AutocompleteOption>
            )}
            color="primary"
            placeholder="Search under $10 "
            options={SEARCHRESULTS}
          />
          {/* <FormHelperText>A description for the combo box.</FormHelperText> */}
        </FormControl>
      </Box>
    </>
  );
}

export default Search;
