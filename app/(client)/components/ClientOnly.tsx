'use client'

import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
    const [hasMounted, setHasMounted] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) {
        return null
    }

    const isAuthPage = pathname === '/dang-nhap' || pathname === '/dang-ky'

    if (isAuthPage) {
        return <>{children}</>
    }

    return <>{children}</>
}

export default ClientOnly
