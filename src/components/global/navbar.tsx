import { UserButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"
import { MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Navbar = async () => {
    const user = await currentUser()
    return (
        <header className="fixed right-0 left-0 top-0 py-4 px-6 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b border-neutral-900 justify-between transition-all duration-300">
            {/* Logo Section */}
            <aside className="flex items-center gap-2">
                <p className="text-3xl font-bold transition-transform duration-300 hover:scale-105">
                    Trigger
                </p>
                <Image
                    src="/fuzzieLogo.png"
                    width={20}
                    height={20}
                    alt="fuzzie logo"
                    className="shadow-sm transition-transform duration-300 hover:scale-110"
                />
                <p className="text-3xl font-bold transition-transform duration-300 hover:scale-105">
                    X
                </p>
            </aside>

            {/* Navigation */}
            <nav className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                <ul className="flex items-center gap-6 list-none">
                    {[
                        "Products",
                        "Pricing",
                        "Clients",
                        "Resources",
                        "Documentation",
                        "Enterprise",
                    ].map((item) => (
                        <li key={item}>
                            <Link
                                href="#"
                                className="relative text-white text-sm uppercase font-medium transition-all duration-300 before:absolute before:bottom-0 before:left-1/2 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out before:-translate-x-1/2 hover:before:w-full"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Right Section */}
            <aside className="flex items-center gap-5">
                <Link
                    href="/dashboard"
                    className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
                >
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] blur-lg" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-sm font-medium text-white backdrop-blur-3xl transition-transform duration-300 hover:scale-105">
                        {user ? "Dashboard" : "Get Started"}
                    </span>
                </Link>
                {user ? (
                    <>
                        <UserButton afterSignOutUrl="/" />
                    </>
                ) : null}
                <MenuIcon className="md:hidden text-white cursor-pointer transition-transform duration-300 hover:scale-110" />
            </aside>
        </header>
    )
}

export default Navbar
