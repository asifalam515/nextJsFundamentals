import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "900" });

const HomePage = () => {
  return (
    <div className={roboto.className}>
      <h1 className="text-3xl">Homepage using Google Font</h1>
    </div>
  );
};

export default HomePage;
