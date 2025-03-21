"use client"

import { useBilling } from "@/providers/billing-provider"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import CreditTracker from "./creadits-tracker"
import { SubscriptionCard } from "./subscription-card"
type Props = {}

const BillingDashboard = (props: Props) => {
    const { credits, tier } = useBilling()
    const [stripeProducts, setStripeProducts] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)

    const onStripeProducts = async () => {
        setLoading(true)
        const { data } = await axios.get("/api/payment")
        if (data) {
            setStripeProducts(data)
            setLoading(false)
        }
    }

    useEffect(() => {
        onStripeProducts()
    }, [])

    const onPayment = async (id: string) => {
        const { data } = await axios.post(
            "/api/payment",
            {
                priceId: id,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        )
        window.location.assign(data)
    }

    return (
        <>
            {loading ? (
                <div className="absolute flex h-full w-full items-center justify-center">
                    <Loader2 />
                </div>
            ) : (
                <>
                    <div className="flex gap-5 p-6">
                        <SubscriptionCard
                            onPayment={onPayment}
                            tier={tier}
                            products={stripeProducts}
                        />
                    </div>
                    <CreditTracker tier={tier} credits={parseInt(credits)} />
                </>
            )}
        </>
    )
}

export default BillingDashboard
