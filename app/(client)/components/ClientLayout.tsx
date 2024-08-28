"use client";

import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import ClientOnly from './ClientOnly'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [bgColor, setBgColor] = React.useState('')

    React.useEffect(() => {
        const savedColor = localStorage.getItem('backgroundColor')
        if (savedColor) {
            setBgColor(savedColor)
        }
    }, [])

    return (
        <div style={{ backgroundColor: bgColor }}>
            <Nav setBgColor={setBgColor} />
            <ClientOnly>
                <main>{children}</main>
            </ClientOnly>
            <Footer />
        </div>
    )
}
