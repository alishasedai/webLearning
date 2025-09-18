
use("sigmaDatabases");
 
db.getCollection("courses").insertMany([
  {
    name: "Java",
    price: 10000,
    Instructor: "Alisha",
  },
  {
    name: "Python",
    price: 12000,
    Instructor: "Ramesh",
  },
  {
    name: "JavaScript",
    price: 9000,
    Instructor: "Sita",
  },
  {
    name: "C++",
    price: 11000,
    Instructor: "Anil",
  },
  {
    name: "HTML & CSS",
    price: 8000,
    Instructor: "Maya",
  },
]);

console.log("done inserting data")
