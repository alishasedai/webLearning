use("CrudDb");

// console.log(db);
// db.createCollection("Courses")

// db.Courses.insertOne({
//     name : "Alisha sedai web learning",
//     price : 10000,
//     assignments : 12,
//     projects : 4
// });

// db.Courses.insertMany([
//   {
//     name: "Alisha Sedai Web Learning",
//     price: 10000,
//     assignments: 12,
//     projects: 4,
//   },
//   {
//     name: "Python Bootcamp",
//     price: 12000,
//     assignments: 15,
//     projects: 5,
//   },
//   {
//     name: "JavaScript Essentials",
//     price: 9000,
//     assignments: 10,
//     projects: 3,
//   },
//   {
//     name: "Fullstack Web Development",
//     price: 15000,
//     assignments: 18,
//     projects: 6,
//   },
//   {
//     name: "React & NodeJS",
//     price: 14000,
//     assignments: 16,
//     projects: 5,
//   },
//   {
//     name: "HTML & CSS Basics",
//     price: 8000,
//     assignments: 8,
//     projects: 2,
//   },
//   {
//     name: "Angular Advanced",
//     price: 13000,
//     assignments: 14,
//     projects: 4,
//   },
// ]);
db.Courses.updateMany({price : 10000},{
    $set : {price : 100}
})