import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { checkSubscription } from "@/lib/subscription"
import { getApiLimitCount } from "@/lib/api-limit"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function DashboardLayout({
                                                  children,
                                              }: {
    children: React.ReactNode
}) {
    const { userId } = auth()

    if (!userId) {
        redirect("/sign-in")
    }

    const apiLimitCount = await getApiLimitCount()
    const isPro = await checkSubscription()

    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
                <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
            </div>
            <main className="md:pl-72">{children}</main>
        </div>
    )
}

