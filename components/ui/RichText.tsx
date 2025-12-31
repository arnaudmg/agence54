"use client";

import React from "react";
import {
  RichText as PayloadRichText,
  type JSXConvertersFunction,
} from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: SerializedEditorState | null | undefined;
} & React.HTMLAttributes<HTMLDivElement>;

const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  upload: ({ node }) => {
    const upload = node as any;

    if (!upload?.value?.url) {
      return null;
    }

    const { url, alt, width, height } = upload.value;
    const caption = upload.value?.caption || upload.fields?.caption;

    return (
      <figure className="my-8">
        <div className="relative overflow-hidden border border-zinc-800">
          <Image
            src={url}
            alt={alt || "Image"}
            width={width || 1200}
            height={height || 675}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
          />
        </div>
        {caption && (
          <figcaption className="text-center text-sm text-zinc-500 mt-3 italic">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  },
});

export function RichText({ className, data, ...rest }: Props) {
  if (!data) {
    return null;
  }

  return (
    <div className={`prose prose-invert prose-lg max-w-none ${className || ""}`}>
      <PayloadRichText
        {...rest}
        data={data}
        converters={jsxConverters}
      />
    </div>
  );
}
