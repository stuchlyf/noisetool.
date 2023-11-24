'use server';
import React from 'react';
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import stuchlyfLogo from "../../../public/static/images/stuchlyf-logo.svg";

// eslint-disable-next-line @typescript-eslint/require-await
export default async function Footer() {
  return (
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
  )
}