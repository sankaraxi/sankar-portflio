"use client";

import CountUp from "react-countup";

const stats = [
    {
        title: "Years of Hands-On Experience",
        count: 3,
    },
    {
        title: "Projects Completed",
        count: 15,
    },
    {
        title: "Technologies Mastered",
        count: 7,
    },
    {
        title: "Code Commits",
        count: 850,
    },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {
                    stats.map((item,index) => {
                        return (
                            <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                                
                                <CountUp end={item.count} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold"/>
                                <h2 className={`${item.title.length < 15 ? "max-w-[100px" : "max-w-150px"} leading-snug text-white/80`}>{item.title}</h2>
                            </div>
                        )
                    })
                }
            </div>

        </div>

    </section>
  )
}

export default Stats