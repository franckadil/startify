import Navigation from '@/components/site/navigation'

import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="h-full">
            <div className="">
                <Navigation />
            </div>
            <div className="mb-24">{children}</div>
        </main>
    )
}

export default layout
