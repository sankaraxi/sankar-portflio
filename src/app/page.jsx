//shadcn components
'use client'

import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
//Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

//icons
import { MdOutlineFileDownload } from "react-icons/md";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
     <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">


        {/* Text Content */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          
          <h1 className="h1">Hello, I'm <br /><span className="text-accent">Sankar Gnanasekar</span></h1>
          
          <TypeAnimation sequence={["Full Stack Developer", 1000, "Data Analyst", 1000]} wrapper="span" speed={50} className="font-bold lg:text-3xl text-white" repeat={Infinity} />
          <p className="max-w-[550px] mb-9 text-white/80 ">
            Combining my expertise in full-stack development and data analytics, 
            I build dynamic web solutions that provide actionable insights for smarter decision-making.
          </p>

          {/*Buttons and Socials */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button 
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
            >
              <span>Resume</span>
              <MdOutlineFileDownload className="text-xl"/>
            </Button>

            <div className="mb-8 xl:mb-0"> 
                <Social containerStyles='flex gap-6' iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-xl hover:bg-accent hover:text-primary hover:transition-all duration-500'/>
            </div>
          </div>
        </div>


        {/* Photo */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>

      </div>
     </div>

     <Stats />
      
    </section>
  );
}
