import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const Data = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const products = await res.json();
  console.log(products);
  return (
    <div className={inter.className}>
      <h1>
        Fetching Data using json placeholder data Found: {products.length}{" "}
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title"> {product.title} </h2>
              <p> {product.body} </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
