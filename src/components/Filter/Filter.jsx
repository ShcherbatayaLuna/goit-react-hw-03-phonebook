import PropTypes from 'prop-types';
import { Box, Label, Input } from './Filter.styled';

export default function Filter({ filter, onChange }) {
  return (
    <Box>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        id="filter"
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </Box>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
