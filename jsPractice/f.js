fetch("https://reqres.in/api/users?page=1")
  .then((res) => res.json())
  .then((data) => {
    console.log(data); // see full object
  });
