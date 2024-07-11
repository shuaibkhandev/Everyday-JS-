const people = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", address: "123 Main St, Anytown, USA", qualification: "BSc Computer Science", age: 28 },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", address: "456 Maple Ave, Somewhere, USA", qualification: "MSc Data Science", age: 32 },
    { id: 3, name: "Michael Brown", email: "michael.brown@example.com", address: "789 Oak St, Smalltown, USA", qualification: "BA Economics", age: 24 },
    { id: 4, name: "Emily Johnson", email: "emily.johnson@example.com", address: "321 Pine St, Anytown, USA", qualification: "MBA", age: 29 },
    { id: 5, name: "Chris Lee", email: "chris.lee@example.com", address: "654 Elm St, Smalltown, USA", qualification: "PhD Physics", age: 35 },
    { id: 6, name: "Patricia Taylor", email: "patricia.taylor@example.com", address: "987 Birch St, Somewhere, USA", qualification: "BSc Chemistry", age: 27 },
    { id: 7, name: "Robert Anderson", email: "robert.anderson@example.com", address: "123 Cedar St, Anytown, USA", qualification: "MSc Computer Science", age: 30 },
    { id: 8, name: "Linda Martinez", email: "linda.martinez@example.com", address: "456 Spruce St, Somewhere, USA", qualification: "BSc Biology", age: 26 },
    { id: 9, name: "James Rodriguez", email: "james.rodriguez@example.com", address: "789 Fir St, Smalltown, USA", qualification: "MSc Mathematics", age: 33 },
    { id: 10, name: "Barbara Harris", email: "barbara.harris@example.com", address: "321 Willow St, Anytown, USA", qualification: "MBA", age: 31 },
    { id: 11, name: "William Clark", email: "william.clark@example.com", address: "654 Redwood St, Smalltown, USA", qualification: "BA History", age: 25 },
    { id: 12, name: "Elizabeth Lewis", email: "elizabeth.lewis@example.com", address: "987 Cypress St, Somewhere, USA", qualification: "BSc Physics", age: 28 },
    { id: 13, name: "David Walker", email: "david.walker@example.com", address: "123 Palm St, Anytown, USA", qualification: "MSc Chemistry", age: 34 },
    { id: 14, name: "Susan Hall", email: "susan.hall@example.com", address: "456 Magnolia St, Somewhere, USA", qualification: "BSc Computer Science", age: 27 },
    { id: 15, name: "Thomas Young", email: "thomas.young@example.com", address: "789 Aspen St, Smalltown, USA", qualification: "MBA", age: 30 },
    { id: 16, name: "Karen Hernandez", email: "karen.hernandez@example.com", address: "321 Poplar St, Anytown, USA", qualification: "BSc Mathematics", age: 26 },
    { id: 17, name: "Mark King", email: "mark.king@example.com", address: "654 Maple St, Smalltown, USA", qualification: "MSc Physics", age: 32 },
    { id: 18, name: "Nancy Wright", email: "nancy.wright@example.com", address: "987 Birch St, Somewhere, USA", qualification: "BSc Economics", age: 29 },
    { id: 19, name: "Daniel Lopez", email: "daniel.lopez@example.com", address: "123 Cedar St, Anytown, USA", qualification: "MSc Biology", age: 33 },
    { id: 20, name: "Jessica Scott", email: "jessica.scott@example1.com", address: "456 Oak St, Somewhere, USA", qualification: "BA History", age: 28 }
  ];
  
  
  const under_25 = people.filter((data)=>{
     
    return data.address.toLowerCase().includes('usa')
  })

//   console.log(under_25);

const arr = [1,2,3,[4,5,6],[7,8,9],[12,11,13]];

console.log(arr.flat());