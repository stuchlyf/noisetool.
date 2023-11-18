import { type MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "noisetool.",
    short_name: "noisetool.",
    description: 'A WebApp to generate white, pink, brown, dark-brown or black noise.',
    theme_color: "#8D47E7",
    background_color: "#3D4451",
    display: "standalone",
    orientation: "portrait",
    scope: "/",
    start_url: "/",
    icons: [
      {
        src: "static/images/icons/icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "static/images/icons/icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "static/images/icons/icon-128x128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "static/images/icons/icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "static/images/icons/icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "static/images/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "static/images/icons/icon-284x284.png",
        sizes: "284x284",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "static/images/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ],
    screenshots: [
      {
        src: 'static/images/screenshots/desktop.png',
        type: 'image/png',
        sizes: '1920x1280',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore The property form_factor is not yet supported by next.js, but needed in chrome for the richer PWA install UI.
        'form_factor': 'wide'
      },
      {
        src: 'static/images/screenshots/phone.png',
        type: 'image/png',
        sizes: '1080x1620',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore The property form_factor is not yet supported by next.js, but needed in chrome for the richer PWA install UI.
        'form_factor': 'narrow'
      }
    ]
  }
}