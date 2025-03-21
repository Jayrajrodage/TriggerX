"use client"
import InfoBar from "@/components/infobar"
import Sidebar from "@/components/sidebar"
import { Menu } from "lucide-react"
import { useState } from "react"

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 md:hidden ${
                    isSidebarOpen ? "block" : "hidden"
                }`}
                onClick={() => setIsSidebarOpen(false)}
            />
            <div
                className={`fixed left-0 top-0 h-full bg-white z-50 shadow-lg transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform md:translate-x-0 md:relative md:flex`}
            >
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className=" w-full">
                <div className="flex dark:bg-black flex-row justify-between">
                    <div className="">
                        <button
                            className="p-2 m-4 rounded-md md:hidden"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                    <div>
                        <InfoBar />
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout
