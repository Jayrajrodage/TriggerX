import { ContainerScroll } from "@/components/global/container-scroll-animation"
import { HowItWorks } from "@/components/global/how-it-works"
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards"
import { LampComponent } from "@/components/global/lamp"
import { LineShadowText } from "@/components/global/line-shadow-text"
import Navbar from "@/components/global/navbar"
import Pricing from "@/components/global/pricing"
import { clients } from "@/lib/constant"
import Image from "next/image"
export default function Home() {
    //WIP: remove fault IMAge for home page
    return (
        <main>
            <Navbar />
            <ContainerScroll
                titleComponent={
                    <h1 className="text-4xl font-semibold text-black dark:text-white mt-[-10rem]">
                        Automate Your Workflow With <br />
                        <span className="text-4xl md:text-[6rem] font-bold mt-1  leading-none">
                            TriggerX
                        </span>
                    </h1>
                }
            >
                <Image
                    src={`/temp-banner.png`}
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />
            </ContainerScroll>
            <div className="mt-[-15rem] flex flex-col">
                <h1 className="text-xl font-semibold text-black dark:text-white text-center">
                    Trusted by
                </h1>
                <div className="flex justify-center items-center">
                    <InfiniteMovingCards
                        className="mt-5 "
                        items={clients}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
            <div>
                <HowItWorks />
            </div>
            <div>
                <LampComponent />
                <Pricing />
            </div>
            <footer className="py-10 text-center">
                <h1 className="text-balance text-[5rem] font-semibold leading-none tracking-tighter sm:text-[8rem] md:text-[12rem] lg:text-[15rem]">
                    <LineShadowText className="italic">TriggerX</LineShadowText>
                </h1>
            </footer>
        </main>
    )
}
