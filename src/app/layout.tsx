import React, { type PropsWithChildren } from "react";
import "@/styles/globals.css";
import Image, { type StaticImageData } from "next/image";
import logo from "../../public/static/images/logo.svg";
import Link from "next/link";
import stuchlyfLogo from "../../public/static/images/stuchlyf-logo.svg";
import { type Metadata } from "next";
import { InstallButton } from "@/components/installButton/installButton";

export type RootLayoutProps = PropsWithChildren;

const APP_NAME = 'noisetool.';

export const metadata: Metadata = {
  title: APP_NAME,
  applicationName: APP_NAME,
  description: 'An App to generate white, pink or brown noise.',
  themeColor: '#8D47E7',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/static/images/icons/apple-touch-icon.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '57x57',
      url: 'static/images/icons/apple-touch-icon-57x57.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      url: 'static/images/icons/apple-touch-icon-72x72.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      url: 'static/images/icons/apple-touch-icon-76x76.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      url: 'static/images/icons/apple-touch-icon-114x114.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      url: 'static/images/icons/apple-touch-icon-120x120.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      url: 'static/images/icons/apple-touch-icon-144x144.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      url: 'static/images/icons/apple-touch-icon-152x152.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: 'static/images/icons/apple-touch-icon-180x180.png',
    },
    {
      rel: 'mask-icon',
      url: '/static/images/icons/safari-pinned-tab.svg',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.ico'
    }
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: APP_NAME,
    startupImage: [
      {
        media: 'screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: 'static/images/splash-screens/iPhone_14_Pro_Max_landscape.png'
      },
      {
        media: 'screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: 'static/images/splash-screens/iPhone_14_Pro_landscape.png'
      },
      {
        media: 'screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: 'static/images/splash-screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png'
      },
      {
        media: 'screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: 'static/images/splash-screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png'
      },
      {
        media: 'screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: 'static/images/splash-screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png'
      },
      {
        media: 'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: 'static/images/splash-screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png'
      },
      {
        media: 'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'static/images/splash-screens/iPhone_11__iPhone_XR_landscape.png'
      },
      {
        media: 'screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: 'static/images/splash-screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png'
      },
      {
        media: 'screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'static/images/splash-screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png'
      },
      {
        media: 'screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'static/images/splash-screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png'
      },
      {
        media: 'screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'static/images/splash-screens/12.9__iPad_Pro_landscape.png'
      },
      {
        media: 'screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'static/images/splash-screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png'
      },
      {
        media: 'screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'static/images/splash-screens/10.9__iPad_Air_landscape.png'
      },
      {
        media: 'screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'static/images/splash-screens/10.5__iPad_Air_landscape.png'
      },
      {
        media: 'screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'static/images/splash-screens/10.2__iPad_landscape.png'
      },
      {
        media: 'screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'static/images/splash-screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png'
      },
      {
        media: 'screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'static/images/splash-screens/8.3__iPad_Mini_landscape.png'
      },
      {
        media: 'screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: 'static/images/splash-screens/iPhone_14_Pro_Max_portrait.png'
      },
      {
        media: 'screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: 'static/images/splash-screens/iPhone_14_Pro_portrait.png'
      },
      {
        media: 'screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: 'static/images/splash-screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png'
      },
      {
        media: 'screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: 'static/images/splash-screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png'
      },
      {
        media: 'screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: 'static/images/splash-screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png'
      },
      {
        media: 'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: 'static/images/splash-screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png'
      },
      {
        media: 'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'static/images/splash-screens/iPhone_11__iPhone_XR_portrait.png'
      },
      {
        media: 'screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: 'static/images/splash-screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png'
      },
      {
        media: 'screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'static/images/splash-screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png'
      },
      {
        media: 'screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'static/images/splash-screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png'
      },
      {
        media: 'screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'static/images/splash-screens/12.9__iPad_Pro_portrait.png'
      },
      {
        media: 'screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'static/images/splash-screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png'
      },
      {
        media: 'screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'static/images/splash-screens/10.9__iPad_Air_portrait.png'
      },
      {
        media: 'screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'static/images/splash-screens/10.5__iPad_Air_portrait.png'
      },
      {
        media: 'screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'static/images/splash-screens/10.2__iPad_portrait.png'
      },
      {
        media: 'screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'static/images/splash-screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png'
      },
      {
        media: 'screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'static/images/splash-screens/8.3__iPad_Mini_portrait.png'
      },
    ]
  },
  formatDetection: {
    telephone: false
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={"en"}>
      <body className={""}>
        <div className={"h-screen bg-wave-background flex justify-center"}>
          <main className={"container max-w-xl px-8 py-8 md:px-0 md:py-16 flex flex-col items-stretch h-full justify-between"}>
            <header className={"navbar rounded-box bg-base-100 shadow-xl"}>
              <div className={"navbar-start"}>
                <button className={"btn btn-ghost btn"}>
                  <Image
                    src={logo as StaticImageData}
                    alt={"noisetool."}
                    height={32}
                  />
                </button>
              </div>
              <div className={"navbar-end"}>
                <InstallButton />
              </div>
            </header>

            {children}
          </main>
        </div>

        <footer className={"flex w-full justify-center bg-[#140526] py-8"}>
          <div>
            <div className="footer">
              <div>
                <Link href={"https://stuchlyf.dev"}>
                  <Image
                    src={stuchlyfLogo as StaticImageData}
                    alt={"stuchlyf.dev"}
                    className={"w-4/5"}
                  />
                </Link>
                <Link
                  className={"link-hover link"}
                  href={"https://stuchlyf.dev"}
                >
                  stuchlyf.
                </Link>
              </div>
              <div>
                <span className={"footer-title"}>other tools</span>
                <Link
                  className={"link-hover link"}
                  href={"https://utils.stuchlyf.dev"}
                >
                  utils
                </Link>
              </div>
              <div>
                <span className={"footer-title"}>contact</span>
                <Link
                  className={"link-hover link"}
                  href={"https://github.com/stuchlyf"}
                >
                  GitHub
                </Link>
                <Link
                  className={"link-hover link"}
                  href={"https://linkedin.com/in/stuchlyf"}
                >
                  LinkedIn
                </Link>
                <Link
                  className={"link-hover link"}
                  href={"mailto:stuchlyf@stuchlyf.dev"}
                >
                  E-Mail
                </Link>
              </div>
            </div>
          </div>
        </footer>
      {/*<ClientLogicProvider />*/}
      </body>
    </html>
  );
}
