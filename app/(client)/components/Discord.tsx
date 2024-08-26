"use client"

import BoxReveal from "@/components/magicui/box-reveal"

const DiscordChatWidget = () => {
    return (
        <>
            <BoxReveal boxColor={"#f3f4f6"} duration={0.5}>
                <div className="justify-center flex mx-2 mt-8">
                    <iframe src="https://discord.com/widget?id=1231554025619460126&theme=dark"
                        width="350"
                        height="500"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
                    </iframe>
                </div>
            </BoxReveal>
        </>

    )
}

export default DiscordChatWidget
