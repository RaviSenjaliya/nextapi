async function getuser() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}

export default async function page({ params }) {
  let userdata = await getuser();
  let id = params.userid;
  let show = userdata[id - 1];

  return (
    <>
      <h1>{show.name}</h1>
      <h1>{show.age}</h1>
      <h1>{show.email}</h1>
    </>
  );
}
// ================================================================ 2 rite karishakay

// async function getuser(id) {
//     let data = await fetch(`http://localhost:3000/api/users/${id}`);
//     data = await data.json();
//     return data.result;
//   }

//   export default async function page({ params }) {
//     let userdata = await getuser(params.userid);
//     console.log(userdata);

//     return (
//       <>
//         <h1>😎</h1>
//         <h1>{userdata.name}</h1>
//         <h1>{userdata.age}</h1>
//         <h1>{userdata.email}</h1>
//       </>
//     );
//   }
