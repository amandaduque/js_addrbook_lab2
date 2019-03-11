// class AddressBook {
//     constructor(contact) {
//         this.contact = contact;
//     }
//     add(contact) {
//         this.contact.push(contact);

//     }
//     deleteAt(item){
//         this.contact.splice(item, 1);

//     }
//     print(){
//         console.log(AddressBook);

//     }

// }

// class Contact {
//     constructor(name, phone, email, relation) {
//         this.name = name;
//         this.phone = phone;
//         this.email = email;
//         this.relation = relation;
//     }
// }


const nameInput = document.querySelector('.name');
const phoneInput = document.querySelector('.phone');
const emailInput = document.querySelector('.email');
const relationInput = document.querySelector('.relation');
const section = document.querySelector('.contacts');
const book = [{name: 'Amanda Duque', email: "amanda.duque@me.com", phone: '7347409415', relation: "Other"}, {name: 'Ramon Duque', email: "ramonduke@gmail.com", phone: '7347409415', relation: "Family"}];

const add = (name, email, phone, relation) => {
    book.push({ name: name, email: email, phone: phone, relation: relation});
    }

const deleteItem = (index) => {
    book.splice(index, 1);
    }

const display = () => {
    let html = '';
    for (const item of book) {
    // section.innerHTML = '';
    // for (let i = 0; i < book.length; i++) {
    //     const item = book[i];
      html += `<div>
              <p>Name: ${item.name}</p>
              <p>Phone: ${item.phone}</p>
              <p>Email: ${item.email}</p>
              <p>Relation: ${item.relation}</p>
              <button class="deleteButton">Delete</button>
              </div>`;
    }
  };

  display();
 