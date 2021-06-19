import React from "react";
import { useQuery, gql } from "@apollo/client";
import { makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// GQL Query
type Continent = {
    code: string;
    name: string;
};
const ALL_CONTINENTS = gql`
  query {
    continents {
        name
        code
    }
  }
`;

// Component
interface IProps {
    onContinentSelect: (code: string) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
    formControl: {
        minWidth: 120,
        marginTop: theme.spacing(1),
    },
}));

const ContinentSelect = ({ onContinentSelect }: IProps) => {
    const classes = useStyles();
    const { loading, error, data } = useQuery(ALL_CONTINENTS);
    const [continent, setContinent] = React.useState("none");
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setContinent(event.target.value as string);
        onContinentSelect(event.target.value as string);
    };
    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="continent-select">Continent</InputLabel>
            <Select value={continent} onChange={handleChange}>
                <MenuItem value={"none"}>None</MenuItem>
                <MenuItem value={"all"}>ALL</MenuItem>
                {data?.continents?.map((continent: Continent) => (
                    <MenuItem key={continent.code} value={continent.code}>
                        {continent.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
export default ContinentSelect;
