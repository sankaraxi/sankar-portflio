"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
        name: "blogs",
        href: "/blogs"
    },
    {
        name: "contact",
        href: "/contact"
    },
];

const Nav = () => {
    const pathname = usePathname(); //fetchs the current path

    return (
        <nav className="flex gap-8">
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
    )
}

export default Nav