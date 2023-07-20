import Link from "next/link";

async function getuser() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}
export default async function page() {
  let userdata = await getuser();
  return (
    <div>
      <h1>this is user page...😋</h1>

      {userdata.map((val) => {
        return (
          <>
            <Link href={`/users/${val.id}`}>{val.name}</Link>
            <br />
            <Link href={`/users/${val.id}/edituser`}>Edit</Link>
            <hr />
          </>
        );
      })}
    </div>
  );
}
