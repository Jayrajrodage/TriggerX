import Image from "next/image"
import { Timeline } from "./timeline"

export function HowItWorks() {
    const data = [
        {
            title: "1.Select Your Apps",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        TriggerX can connect with hundreds of popular apps,
                        WordPress plugins, and services. Simply let TriggerX
                        know which apps you use in your day-to-day work and
                        choose the ones you want to connect.
                    </p>
                    <div className="w-full">
                        <Image
                            src="/step-first.png"
                            alt="startup template"
                            width={1500}
                            height={1500}
                            className="rounded-lg object-contain h-auto max-h-60 md:max-h-80 lg:max-h-[500px] w-full shadow-[0_0_24px_rgba(34,42,53,0.08)]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2.Choose a Trigger",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        A trigger is an event that is the starting point of
                        automation. When a specific event occurs in one of the
                        connected apps, you might want to initiate a series of
                        tasks in other apps. For example, a new order in your
                        e-Commerce platform could initiate a series of tasks in
                        other apps. This event is called a trigger
                    </p>
                    <div className="w-full">
                        <Image
                            src="/step-2.png"
                            alt="startup template"
                            width={1500}
                            height={1500}
                            className="rounded-lg object-contain h-auto max-h-60 md:max-h-80 lg:max-h-[500px] w-full shadow-[0_0_24px_rgba(34,42,53,0.08)]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "3.Add actions",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Actions are the tasks that you want to perform with your
                        connected apps. For example, when receiving a new order
                        in your e-Commerce platform, the following actions could
                        be sending an email to the customer, uploading an
                        invoice in the accounting software, and notifying your
                        team on Slack. You can automate all of these steps
                        easily with TriggerX.
                    </p>
                    <div className="w-full">
                        <Image
                            src="/step-3.png"
                            alt="startup template"
                            width={1500}
                            height={1500}
                            className="rounded-lg object-contain h-auto max-h-60 md:max-h-80 lg:max-h-[500px] w-full shadow-[0_0_24px_rgba(34,42,53,0.08)]"
                        />
                    </div>
                </div>
            ),
        },
    ]
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    )
}
