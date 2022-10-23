import "./App.css";
import profileimg from "./assets/Images/profile_img.png";
import { ReactComponent as Share } from "./assets/share.svg";
import { ReactComponent as Slack } from "./assets/slack.svg";
import { ReactComponent as Github } from "./assets/github.svg";
import { ReactComponent as Zuri } from "./assets/Zuri.svg";
import { ReactComponent as I4g } from "./assets/I4G.svg";
import { ReactComponent as Camera } from "./assets/camera-01.svg";
import { ReactComponent as More } from "./assets/more.svg";

const links = [
  {
    id: "btn__zuri",
    link: `https://training.zuri.team/`,
    name: "Twitter Link",
  },
  { id: "btn__zuri", link: `https://training.zuri.team/`, name: "Zuri Team" },
  { id: "btn__zuri", link: `https://books.zuri.team/`, name: "Zuri Books" },
  {
    id: "btn__zuri",
    link: `https://training.zuri.team/`,
    name: "Python Books",
  },
  {
    id: "btn__zuri",
    link: `https://training.zuri.team/`,
    name: "Background Check for Coders",
  },
  {
    id: "btn__zuri",
    link: `https://training.zuri.team/`,
    name: "Design Books",
  },
];

function App() {
  return (
    <main className="font-inter py-8">
      <section className="flex items-center justify-center">
        <div className="justify-center flex flex-col items-center">
          <div className="items-center justify-center group relative w-[88px] h-[88px] rounded-full">
            <div className="hidden group-hover:bg-[#344054]/75 z-50 group-hover:flex absolute top-0  w-[88px] h-[88px] rounded-full focus:ring-[4px] focus:ring-gray-100 cursor-pointer">
              <Camera className="absolute bottom-2 right-8" />
            </div>
            <img
              src={profileimg}
              className="w-[88px] h-[88px] rounded-full cursor-pointer"
            />
          </div>
          <p className="font-bold text-[20px] text-[#101828] mt-[24px]">
            Annette Black
          </p>
        </div>

        <div className=" absolute lg:right-44 top-10 lg:-top-5 ml-[284px]">
          <button class="lg:hidden group relative duration-300 cursor-pointer border-2 border-dotted rounded-full p-2 hover:bg-[#F9FAFB]  w-[40px] h-[40px] -mt-[300px] justify-center">
            <More className="group-hover:stroke-gray-500 stroke-gray-400 mx-auto" />
          </button>
          <button class="hidden lg:flex mt-10 group relative duration-300 cursor-pointer border-2 border-dotted rounded-full p-2 hover:bg-[#F9FAFB]  focus:ring-[4px] focus:ring-gray-100">
            <Share className="group-hover:stroke-gray-500 stroke-gray-400" />
            <span class="absolute hidden group-hover:flex -top-1 -left-4 -translate-x-full  px-2 py-1.5 bg-gray-900 w-[85px] h-[34px] rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2  before:left-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-gray-900 before:border-r-transparent font-semibold ">
              Share Link{" "}
            </span>
          </button>
        </div>
      </section>
      <section>Links</section>
    </main>
  );
}

export default App;
