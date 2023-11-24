'use server';
import React from 'react';
import Image, { StaticImageData } from "next/image";
import logo from "../../../public/static/images/logo.svg";
import { env } from "@/env.mjs";
import { IoGitBranchOutline } from "react-icons/io5";
import { InstallButton } from "@/components/installButton/installButton";
import getConfig from "next/config";
import { type PublicRuntimeConfig } from "@/types/publicRuntimeConfig";

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const publicRuntimeConfig = getConfig().publicRuntimeConfig as PublicRuntimeConfig;

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
        <div className={'tooltip'} data-tip={env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}>
          <span className={'flex items-center gap-1'}>
            <IoGitBranchOutline />
            <span>{publicRuntimeConfig.version}</span>
          </span>
        </div>
        <div>
          <InstallButton />
        </div>
      </div>
    </header>
  );
}