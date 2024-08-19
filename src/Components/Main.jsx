import Forcast from "./Forcast";
import Overcast from "./Overcast";
import Highlights from "./Highlights";
export default function Main() {
  

  return (
    <main className="grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-dvh p-10 md:p-20">
      <div className="blur-bg lg:col-span-3 py-10 px-5">
        <Forcast/>
      </div>
      <div className="blur-bg lg:col-span-9 h-full py-10 px-5 flex flex-col gap-10">
        <Overcast  />
        <Highlights  />
      </div>
    </main>
  );
}
