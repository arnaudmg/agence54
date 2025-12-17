import React from "react";
import { RichText as RichTextConverter } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

type Props = {
  data: SerializedEditorState;
} & React.HTMLAttributes<HTMLDivElement>;

export function RichText({ className, data, ...rest }: Props) {
  if (!data) {
    return null;
  }

  return (
    <RichTextConverter
      {...rest}
      className={`prose prose-invert max-w-none ${className}`}
      data={data}
    />
  );
}
