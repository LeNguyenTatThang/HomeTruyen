"use client";

import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import ClientOnly from './ClientOnly'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [bgColor, setBgColor] = React.useState('')

    const [fontFamily, setFontFamily] = React.useState<string>('Open Sans')
    const [fontSize, setFontSize] = React.useState<string>('22')
    const [lineHeight, setLineHeight] = React.useState<string>('120%')
    React.useEffect(() => {
        const savedColor = localStorage.getItem('backgroundColor')
        const savedFontFamily = localStorage.getItem('fontFamily')
        const savedFontSize = localStorage.getItem('fontSize')
        const savedLineHeight = localStorage.getItem('lineHeight')
        if (savedColor) {
            setBgColor(savedColor)
        }
        if (savedFontFamily) {
            setFontFamily(savedFontFamily)
        }
        if (savedFontSize) {
            setFontSize(savedFontSize)
        }
        if (savedLineHeight) {
            setLineHeight(savedLineHeight)
        }
    }, [])

    return (
        <div >
            <Nav
                setBgColor={setBgColor}
                setFontFamily={setFontFamily}
                setFontSize={setFontSize}
                setLineHeight={setLineHeight} />
            <ClientOnly>
                <main style={{
                    backgroundColor: bgColor,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    lineHeight: lineHeight
                }}>{children}</main>
            </ClientOnly>
            <Footer />
        </div>
    )
}
