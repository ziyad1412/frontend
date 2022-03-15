const users = [
  {
    name:"Abdurrahman",
    age:20,
    major:"Informatika"
  },
  {
    name:"Ziyad",
    age:20,
    major:"Informatika"
  },
  {
    name:"Rafi",
    age:18,
    major:"Informatika"
  },
  {
    name:"Meli",
    age:19,
    major:"Informatika"
  },
  {
    name:"Aisyah",
    age:19,
    major:"Informatika"
  },
];

const all = () => {
  for (const user in users) {
    console.log(users[user]);
  }
}

const store = (user) => {
  users.push(user);
}

const newUser = {
  name: "Udin",
  age: 20,
  major: "Informatics",
};
store(newUser);

const update = (index, user) => {
  users[index] = user;
}

const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
update(editedIndex, editedUser);

const destroy = (index) => {
  users.splice(index, 1);
}

const deletedIndex = 2;
destroy(deletedIndex);


// for (let i = 0; i < users.length; i++) {
//   const elemen = users[i];
//   for (const user in elemen) {
//   console.log(`${user} = ${elemen[user]}`);
// }
// }


