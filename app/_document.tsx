import { Html, Head, Main, NextScript } from "next/document"
import { preloadCriticalImages } from "@/lib/image-loader"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/Stolzl-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Stolzl-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Stolzl-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Preconnect to any third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Inline script to preload critical images */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(${preloadCriticalImages.toString()})();`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
