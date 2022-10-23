import "./App.css";
import profileimg from "./assets/Images/profile_img.png";
import { ReactComponent as Share } from "./assets/share.svg";
import { ReactComponent as Slack } from "./assets/slack.svg";
import { ReactComponent as Github } from "./assets/github.svg";
import { ReactComponent as Zuri } from "./assets/Zuri.svg";
import { ReactComponent as I4g } from "./assets/I4G.svg";
import { ReactComponent as Camera } from "./assets/camera-01.svg";
import { ReactComponent as More } from "./assets/more.svg";
import { ReactComponent as Cursor } from "./assets/cursor.svg";

const links = [
  {
    id: "btn__zuri",
    link: `https://training.zuri.team/`,
    name: "Twitter Link",
  },
  { id: "books", link: `https://training.zuri.team/`, name: "Zuri Team" },
  { id: "btn__zuri", link: `https://books.zuri.team/`, name: "Zuri Books" },
  {
    id: "btn__python",
    link: `https://books.zuri.team/python-for-beginners?ref_id=Akbar`,
    name: "Python Books",
  },
  {
    id: "pitch",
    link: `https://background.zuri.team/`,
    name: "Background Check for Coders",
  },
  {
    id: "btn__design",
    link: `https://books.zuri.team/design-rules`,
    name: "Design Books",
  },
];

function App() {
  return (
    <div className="font-inter p-8">
      <main className="max-w-[343px] lg:max-w-[1216px] mx-auto">
        <section className="flex items-center justify-center">
          <div className="justify-center flex flex-col items-center">
            <div className="items-center justify-center group relative w-[88px] h-[88px] rounded-full">
              <div className="hidden group-hover:bg-[#344054]/75 z-50 group-hover:flex absolute top-0  w-[88px] h-[88px] rounded-full focus:ring-[4px] focus:ring-gray-100 cursor-pointer">
                <Camera className="absolute bottom-2 right-8" />
              </div>
              <img
                id="profile__img"
                src={profileimg}
                className="w-[88px] h-[88px] rounded-full cursor-pointer"
              />
            </div>
            <p
              id="twitter"
              className="font-bold text-[20px] text-[#101828] mt-[24px]"
            >
              akbar_ob
            </p>
            <p
              id="slack"
              className="hidden font-bold text-[20px] text-[#101828] mt-[24px]"
            >
              Akbar
            </p>
          </div>

          <div className=" absolute lg:right-44 top-10 lg:-top-5 ml-[284px]">
            <button class="lg:hidden group relative duration-300 cursor-pointer border-2 border-dotted rounded-full p-2 hover:bg-[#F9FAFB]  w-[40px] h-[40px] -mt-[300px] justify-center">
              <More className="group-hover:stroke-gray-500 stroke-gray-400 mx-auto" />
            </button>
            <button class="hidden lg:flex mt-10 group relative duration-300 cursor-pointer border-2 border-dotted rounded-full p-2 hover:bg-[#F9FAFB]  focus:ring-[4px] focus:ring-gray-100">
              <Share className="group-hover:stroke-gray-500 stroke-gray-400" />
              <Cursor className="group-hover:flex hidden absolute mt-3 ml-3" />
              <span class="absolute hidden group-hover:flex -top-1 -left-4 -translate-x-full  px-3 py-2 bg-gray-900 w-[85px] h-[34px] rounded-lg text-center text-white text-xs before:content-[''] before:absolute before:top-1/2  before:left-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-gray-900 before:border-r-transparent font-semibold ">
                Share Link
              </span>
            </button>
          </div>
        </section>
        <section className="">
          {links?.map((item) => (
            <a href={item.link} className="">
              <button
                className="flex-1 flex w-[343px]
        h-[68px] lg:w-[1152px] lg:h-[76px] rounded-[8px]  bg-gray-200 my-[12px] mx-auto text-center items-center justify-center hover:bg-gray-300 cursor-pointer"
              >
                <p className="text-gray-900 text-lg font-semibold">
                  {item.name}
                </p>
              </button>{" "}
            </a>
          ))}
        </section>
      </main>

      <div className="flex justify-center mt-[24px] h-[72px]  items-center">
        <Slack />
        <Github className="ml-[26.5px]" />
      </div>
      <footer className="w-full py-[48px] justify-center hidden lg:block">
        <div className="w-[1216px] pt-[32px] flex flex-row justify-between items-center mx-auto border-t-2 border-t-gray-200">
          <Zuri />
          <p className="text-center">HNG Internship 9 Frontend Task</p>

          <I4g className="" />
        </div>
      </footer>
    </div>
  );
}

export default App;
