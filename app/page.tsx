import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="mt-96">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="mt-96">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="mt-96">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="mt-96">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </>
  );
}
