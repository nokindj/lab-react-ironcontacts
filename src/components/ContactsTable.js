import React from 'react';
import contacts from '../contacts.json';

class ContactsTable extends React.Component {
  state = {
    myContacts: contacts.splice(0, 5),
  };

  addContactHandler = () => {
    const contactsCopy = [...this.state.myContacts];
    let random = contacts[Math.floor(Math.random() * contacts.length - 1)];
    let newArray = contactsCopy.concat(random);

    this.setState({
      myContacts: newArray,
    });
  };

  sortContactsByNameHandler = () => {
    const sortedContacts = this.state.myContacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      myContacts: sortedContacts,
    });
  };

  sortContactsByPopularityHandler = () => {
    const sortedContactsByPopularity = this.state.myContacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({
      myContacts: sortedContactsByPopularity,
    });
  };

  deleteContactsHandler = (id) => {
    let contactsCopy2 = [...this.state.myContacts];

    const contactToRemoveIndex = contactsCopy2.findIndex((item) => {
      return item.id === id;
    });
    contactsCopy2.splice(contactToRemoveIndex, 1);

    this.setState({
      myContacts: contactsCopy2,
    });
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addContactHandler}>Add Random Contact</button>
        <button onClick={this.sortContactsByNameHandler}>Sort by name</button>
        <button onClick={this.sortContactsByPopularityHandler}>
          Sort by popularity
        </button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.myContacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} width="100px" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => this.deleteContactsHandler(contact.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactsTable;
