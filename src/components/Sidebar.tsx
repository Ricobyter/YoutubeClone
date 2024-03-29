import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";

export default function Sidebar() {
    const mainLinks = [
        {
          icon: <MdHomeFilled className="text-xl" />,
          name: "Home",
        },
        {
          icon: <FaRegCompass className="text-xl" />,
          name: "Explore",
        },
        {
          icon: <MdOutlineSlowMotionVideo className="text-xl" />,
          name: "Shorts",
        },
        {
          icon: <MdSubscriptions className="text-xl" />,
          name: "Subscriptions",
        },
      ];
    
      const secondaryLinks = [
        {
          icon: <MdOutlineVideoLibrary className="text-xl" />,
          name: "Library",
        },
        {
          icon: <MdHistory className="text-xl" />,
          name: "History",
        },
        {
          icon: <MdOutlineSmartDisplay className="text-xl" />,
          name: "Your Videos",
        },
        {
          icon: <MdOutlineWatchLater className="text-xl" />,
          name: "Watch Later",
        },
        {
          icon: <MdThumbUpOffAlt className="text-xl" />,
          name: "Liked Videos",
        },
      ];
    
      const subscriptionLinks = [
        {
          icon: <TbMusic className="text-xl bg-[#ff0000] rounded-full p-1" />,
          name: "Youtube Music",
        },
        {
          icon: <MdOutlineSportsVolleyball className="text-xl bg-[#ff0000] rounded-full p-1" />,
          name: "Youtube Sport",
        },
        {
          icon: <TbDeviceGamepad2 className="text-xl bg-[#ff0000] rounded-full p-1" />,
          name: "Youtube Gaming",
        },
        {
          icon: <GiFilmStrip className="text-xl bg-[#ff0000] rounded-full p-1
          " />,
          name: "Youtube Films",
        },
      ];
    
      const helpLinks = [
        {
          icon: <MdSettings className="text-xl" />,
          name: "Settings",
        },
        {
          icon: <MdOutlinedFlag className="text-xl" />,
          name: "Report history",
        },
        {
          icon: <MdOutlineHelpOutline className="text-xl" />,
          name: "Help",
        },
        {
          icon: <MdOutlineFeedback className="text-xl" />,
          name: "Send feedback",
        },
      ];
    
      const textLinks = [
        [
          "About",
          "Press",
          "Copyright",
          "Contact us",
          "Creator",
          "Advertise",
          "Developers",
        ],
        [
          "Terms",
          "Privacy",
          "Policy & Safety",
          "How YouTube works",
          "Test new features",
        ],
      ];
  return (
    <div className="w-2/12 bg-[rgba(15,15,15,255)] pr-5 overflow-auto pb-6 sidebar">
      <ul className="flex flex-col border-b-2 border-gray-600">
        {mainLinks.map(({icon,name}) => {
            return(
                <li key={name} className={`pl-6 py-6 hover:bg-zinc-500 ${name === "Home" ? "bg-zinc-600": ""}`}>
                    <a href="#" className="flex items-center gap-5 ">
                        {icon}
                        <span className="text-sm ">{name}</span>
                    </a>
                </li>
            )
        } )}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-600">
      <p className="text-white pl-6 mt-4 font-semibold text-lg">You</p>
        {secondaryLinks.map(({icon,name}) => {
            return(
                <li key={name} className={`pl-6 py-6 hover:bg-zinc-500 }`}>
                    <a href="#" className="flex items-center gap-5 ">
                        {icon}
                        <span className="text-sm ">{name}</span>
                    </a>
                </li>
            )
        } )}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-600">
        <p className="text-white pl-6 mt-4 font-semibold text-lg">More from Youtube</p>
        {subscriptionLinks.map(({icon,name}) => {
            return(
                <li key={name} className={`pl-6 py-6 hover:bg-zinc-500 }`}>
                    <a href="#" className="flex items-center gap-5 ">
                        {icon}
                        <span className="text-sm ">{name}</span>
                    </a>
                </li>
            )
        } )}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-600">
      
        {helpLinks.map(({icon,name}) => {
            return(
                <li key={name} className={`pl-6 py-6 hover:bg-zinc-500 }`}>
                    <a href="#" className="flex items-center gap-5 ">
                        {icon}
                        <span className="text-sm ">{name}</span>
                    </a>
                </li>
            )
        } )}
      </ul>

      <ul className="flex gap-2 text-sm flex-wrap p-4 text-zinc-400">
        {textLinks[0].map((name) => {
          return <li key={name}>{name}</li>
        })}
      </ul>
      <ul className="flex gap-2 text-sm flex-wrap p-4 text-zinc-400">
        {textLinks[1].map((name) => {
          return <li key={name}>{name}</li>
        })}
      </ul>
      <span className="px-4 text-sm text-zinc-400 ">&copy; 2024 Rico</span>
      <br />
      <p className="text-sm pt-3 px-4 text-zinc-400">This app is made for practice purpose only</p>
    </div>
  )
}
