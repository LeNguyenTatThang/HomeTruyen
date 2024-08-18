"use client"
import BoxReveal from '@/components/magicui/box-reveal'
import Script from 'next/script'

const FacebookPagePlugin = () => {
    return (
        <>
            <div className='hidden xl:block'>
                <div id="fb-root"></div>
                <Script
                    id="facebook-sdk"
                    async
                    defer
                    crossOrigin="anonymous"
                    src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v20.0&appId=1377982086202571"
                    nonce="gndLkuTe"
                ></Script>
                <div
                    className="fb-page mt-10"
                    data-href="https://www.facebook.com/hometruyen"
                    data-tabs=""
                    data-width=""
                    data-height=""
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                >
                    <blockquote cite="https://www.facebook.com/hometruyen" className="fb-xfbml-parse-ignore">
                        <a href="https://www.facebook.com/hometruyen">Home Truyện</a>
                    </blockquote>
                </div>
            </div>
        </>
    )
}

export default FacebookPagePlugin
