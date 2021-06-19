import React from "react";
import { useQuery, gql } from "@apollo/client";
import { makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// GQL Query
type Country = {
  code: string;
  name: string;
};
const ALL_COUNTRIES = gql`
  query {
    countries {
      code
      name
    }
  }
`;

// Component
interface IProps {
  onCountrySelect: (code: string) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    minWidth: 120,
    marginTop: theme.spacing(1),
  },
}));

const CountrySelect = ({ onCountrySelect }: IProps) => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(ALL_COUNTRIES);
  console.log(data);
  const [country, setCountry] = React.useState("none");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCountry(event.target.value as string);
    onCountrySelect(event.target.value as string);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="country-select">Country</InputLabel>
      <Select value={country} onChange={handleChange}>
        <MenuItem value={"none"}>None</MenuItem>
        {data?.countries?.map((country: Country) => (
          <MenuItem key={country.code} value={country.code}>
            {country.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default CountrySelect;
