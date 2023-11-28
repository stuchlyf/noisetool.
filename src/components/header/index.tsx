'use server';
import React from 'react';
import Image, { type StaticImageData } from "next/image";
import logo from "../../../public/static/images/logo.svg";
import { InstallButton } from "@/components/installButton/installButton";

// eslint-disable-next-line @typescript-eslint/require-await
export default async function Header() {
  return (
    <header className={"navbar rounded-box bg-base-100 shadow-xl"}>
      <div className={"navbar-start"}>
        <button className={"btn-ghost btn"}>
          <Image
            src={logo as StaticImageData}
            alt={"noisetool."}
            height={32}
          />
        </button>
      </div>
      <div className={"navbar-end flex gap-4"}>
        <div>
          <InstallButton />
        </div>
      </div>
    </header>
  );
}