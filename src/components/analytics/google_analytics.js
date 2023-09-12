"use client"

const G_ID = "G-43N2P9YPN0"

import Script from "next/script"

const GoogleAnalytics = () => {
  return <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${G_ID}`}/>
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${G_ID}');
        `}
    </Script>
  </>
}

export default GoogleAnalytics
