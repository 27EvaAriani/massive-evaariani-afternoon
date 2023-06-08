import banner from "../assets/images/banner.png";
import bagikan from "../assets/icons/bagikan.svg";
import ".././assets/css/style.css"
export default function Banner() {
  return (
    <>
      <div className="col-span-2">
        <img width="1206" src={banner} alt="" />
        <div className="flex justify-between bg-purple-sosialify p-11">
          <h2 className="text-white text-3xl font-bold">Mahir Programming</h2>
          <button className="flex items-center bg-yellow-400 rounded-xl font-semibold py-1.5 px-4 gap-3">
            Bagikan <img src={bagikan} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
