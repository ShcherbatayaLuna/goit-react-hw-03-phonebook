import PropTypes from 'prop-types';
import { List, ListItem, Text, Button } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <Text>
          {name}: {number}
        </Text>
        <Button
          type="button"
          onClick={() => {
            deleteContact(id);
          }}
        >
          Delete
        </Button>
      </ListItem>
    ))}
  </List>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
