import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { GlobeDemo } from "./components/goal";
import Topic from "./components/topic";
import Description from "./components/description";
import { services } from "@/data/what-we-do";
import Tile1 from "./components/tile";
import Tile2 from "./components/tile2";
import { solutions } from "@/data/solutions";
import Featuere from "./components/feature";
import { AnimatedTooltipPreview } from "./components/avetars";
import { WorldMapDemo } from "./components/worldmap";

export default function Home() {
  return (
    <div className="w-full h-auto">
      <div className=" w-full flex flex-col items-center px-4  bg-gradient-to-r from-stone-100 via-white to-stone-100  border-b border-dashed border-stone-400 ">
        <div className="w-[93vw] md:w-[90vw]  bg-gradient-to-r from-stone-100 via-white to-stone-100 pt-32 border-x border-dashed border-stone-400 flex flex-col items-center justify-center px-4 pb-8 ">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl 2xl:max-w-[70vw] rounded-2xl bg-white  px-4 sm:px-8 lg:px-12 py-8 gap-8 border ">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex bg-indigo-50 px-4 py-2 rounded-full items-center gap-2 sm:gap-4">
                <div className="text-indigo-600 text-xs md:text-sm font-medium">
                  Cloud-native financial market infrastructure
                </div>
                <Button
                  className="bg-white text-indigo-400 rounded-full border border-indigo-300 hover:bg-stone-50 text-xs flex"
                  size="sm"
                >
                  Get Started <ChevronRight className=" h-4 w-4 " />
                </Button>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-medium leading-tight">
                Build, Launch and Grow the Next Generation of Marketplaces
              </h1>

              {/* Sub-text */}
              <div className="text-base sm:text-lg mt-4 text-gray-700">
                Our experienced team builds, deploys, and operates
                mission-critical issuance, trading, and blockchain
                infrastructure across a variety of asset classes and trading
                venues.
              </div>
              <div className="mt-8 flex items-center gap-4">
                <Button
                  className="bg-indigo-500 text-white rounded-full"
                  size={"lg"}
                >
                  What We do
                </Button>
                <Button className="rounded-full" size={"lg"} variant={"ghost"}>
                  Get in Touch <ChevronRight className=" h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Globe Demo */}
            <div className="w-full lg:w-1/2 flex justify-center  h-[20rem] md:h-auto rounded-2xl overflow-hidden">
              <GlobeDemo />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center bg-gradient-to-r from-stone-100 via-white to-stone-100 border-b border-dashed border-stone-400">
        <div className="w-[93vw] md:w-[90vw]  bg-gradient-to-r from-stone-100 via-white to-stone-100  border-x border-dashed border-stone-400 flex flex-col items-center justify-center px-4 py-8 ">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl 2xl:max-w-[70vw] rounded-2xl  px-4   py-8 lg:gap-8  ">
            <div className="w-full lg:pl-8 py-4 border-0 lg:border-l-1">
              <Topic
                mainTopic="What we will Give you"
                subTopic="We help you identify, explore and respond to new opportunities."
              />
            </div>
            <div className="w-full lg:px-8 py-4  border-0 lg:border-l-1">
              <Description
                maindescription={
                  "At µron labs, we offer cost-effective and scalable IT solutions that are tailored to your specific business needs. Our team of experts understands the importance of being agile and innovative, especially for startups, and we are committed to bringing the latest IT solutions and ideas to your business. We work closely with you to understand your unique challenges and develop innovative solutions that help you achieve your goals."
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 px-4 max-w-7xl 2xl:max-w-[70vw]">
            {services.map((service, index) => (
              <div key={index} className="group">
                {" "}
                {/* Added group wrapper for hover effects */}
                <Tile1
                  Icon={service.Icon}
                  topic={service.topic}
                  description={service.description}
                  points={service.points}
                  className="group-hover:bg-purple-50 group-hover:border-l-purple-500 transition-colors duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center bg-gradient-to-r from-stone-100 via-white to-stone-100 border-b border-dashed border-stone-400">
        <div className="w-[93vw] md:w-[90vw]  bg-gradient-to-r from-stone-100 via-white to-stone-100  border-x border-dashed border-stone-400 flex flex-col items-center justify-center px-4 py-8 ">
          <div className=" px-4 max-w-7xl 2xl:max-w-[70vw] w-full py-12 ">
            <Featuere />
          </div>
       
          <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl 2xl:max-w-[70vw] rounded-2xl  px-4   py-8 lg:gap-8  ">
            <div className="w-full lg:pl-8 py-4 border-0 lg:border-l-1">
              <Topic
                mainTopic="What we will solve"
                subTopic="Bringing Innovative IT Solutions and Ideas to Your Business."
              />
            </div>
            <div className="w-full lg:px-8 py-4  border-0 lg:border-l-1">
              <Description
                maindescription={
                  "At µron labs, we offer cost-effective and scalable IT solutions that are tailored to your specific business needs. Our team of experts understands the importance of being agile and innovative, especially for startups, and we are committed to bringing the latest IT solutions and ideas to your business. We work closely with you to understand your unique challenges and develop innovative solutions that help you achieve your goals."
                }
              />
            </div>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 px-4 max-w-7xl 2xl:max-w-[70vw]">
        {solutions.map((service, index) => (
          <Tile2
            key={index}
            Icon={service.Icon}
            title={service.title}
            description={service.description}
            variant={service.variant}
          />
        ))}
      </div>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center bg-gradient-to-r from-stone-100 via-white to-stone-100 border-b border-dashed border-stone-400">
        <div className="w-[93vw] md:w-[90vw]  bg-gradient-to-r from-stone-100 via-white to-stone-100  border-x border-dashed border-stone-400 flex flex-col items-center justify-center px-4 py-8 ">
          <WorldMapDemo/>
        </div>
      </div>
    </div>
  );
}
