"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


//shadcn components
import { Sheet, SheetContent,SheetTrigger } from "./ui/sheet";

//react-icons
import { CiMenuFries } from "react-icons/ci";




const Links = [
    {
        name: "home",
        href: "/"
    },
    {
        name: "projects",
        href: "/projects"
    },
    {
        name: "resume",
        href: "/resume"
    },
    {
        name: "work",
        href: "/work"
    },
    {
        name: "contact",
        href: "/contact"
    },
];

const MobileNav = () => {
    const pathname = usePathname(); //fetchs the current path
    console.log(pathname);
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent "/>
            </SheetTrigger>

            <SheetContent className="flex flex-col">

            {/*Logo */}
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                    <h1>Sankar<span className="text-accent">.</span></h1>
                </Link>
            </div>

            {/*Nav Links */}
            <nav className="flex flex-col justify-center items-center gap-8">
                {
                    Links.map((link, index) => (
                        <Link key={index} 
                            href={link.href}
                            className={`${link.href === pathname ? 'text-accent border-b-2 border-accent' : 'text-white'} 
                            capitalize font-medium hover:text-accent-hover transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))
                }

            </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav