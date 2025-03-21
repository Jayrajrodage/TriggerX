"use client"
import { onPaymentDetails } from "@/app/(main)/(pages)/billing/_actions/payment-connecetions"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useBilling } from "@/providers/billing-provider"
import { UserButton } from "@clerk/nextjs"
import { Headphones } from "lucide-react"
import { useEffect } from "react"

type Props = {}

const InfoBar = (props: Props) => {
    const { credits, tier, setCredits, setTier } = useBilling()

    const onGetPayment = async () => {
        const response = await onPaymentDetails()
        if (response) {
            setTier(response.tier!)
            setCredits(response.credits!)
        }
    }

    useEffect(() => {
        onGetPayment()
    }, [])

    return (
        <div className="flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black ">
            <span className="flex items-center gap-2 font-bold">
                <p className="text-sm font-light text-gray-300">Credits</p>
                {tier == "Unlimited" ? (
                    <span>Unlimited</span>
                ) : (
                    <span>
                        {credits}/
                        {tier == "Free" ? "10" : tier == "Pro" && "100"}
                    </span>
                )}
            </span>
            <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                        <Headphones />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Contact Support</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <UserButton />
        </div>
    )
}

export default InfoBar
