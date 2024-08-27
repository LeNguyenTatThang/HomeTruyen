
import React from "react"
import Link from 'next/link'
interface NavItemProps {
    label: string
    icon?: React.ReactNode
    isActive: boolean
    onClick: () => void
    href: string
    children?: React.ReactNode
}

const NavItem: React.FC<NavItemProps> = ({ label, icon, isActive, onClick, href }) => {
    return (
        <Link href={href}>
            <div
                onClick={onClick}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
            >
                {icon && <div className="h-4 w-4">{icon}</div>}
                {label}
            </div>
        </Link>
    )
}

export default NavItem
