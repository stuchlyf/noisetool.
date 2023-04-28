import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const blobVariants = cva(
  ["rounded-full shadow-blob aspect-square w-full transition-opacity"],
  {
    variants: {
      color: {
        brown: "bg-brown-gradient",
        green: "bg-green-gradient",
        pink: "bg-pink-gradient",
        white: "bg-white-gradient",
        'dark-brown': "bg-dark-brown-gradient",
      },
      active: {
        false: "opacity-50",
      },
    },
  }
);

export type BlobProps = VariantProps<typeof blobVariants>;

export default function Blob(props: BlobProps) {
  const className = twMerge(blobVariants(props));

  return <div className={className}></div>;
}
