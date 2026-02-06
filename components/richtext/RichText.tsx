import { PrismicRichText } from "@prismicio/react";
import { richTextComponents } from "./components";

type RichTextProps = {
  field: any;
};

export function RichText({ field }: RichTextProps) {
  if (!field) return null;

  return (
    <PrismicRichText
      field={field}
      components={richTextComponents}
    />
  );
}
