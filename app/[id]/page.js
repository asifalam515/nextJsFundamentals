import { redirect } from "next/navigation";

const Id = ({ params }) => {
  if (params.id == 4) {
    redirect("/login");
  }
  return (
    <div>
      <h1 className="text-5xl">Id</h1>
      <h2> {params.id} </h2>
    </div>
  );
};

export default Id;
