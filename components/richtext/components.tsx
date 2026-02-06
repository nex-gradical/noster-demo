import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichTextProps } from "@prismicio/react";
import { ReactNode } from "react";

type RichTextComponents = PrismicRichTextProps["components"];

export const richTextComponents: RichTextComponents = {
  heading1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
      {children}
    </h1>
  ),

  heading2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight">
      {children}
    </h2>
  ),

  paragraph: ({ children }: { children: ReactNode }) => (
    <p className="text-sm md:text-base lg:text-lg leading-relaxed text-black/80">
      {children}
    </p>
  ),

  strong: ({ children }: { children: ReactNode }) => (
    <strong className="font-semibold text-black">{children}</strong>
  ),

  hyperlink: ({ node, children }: { node: any; children: ReactNode }) => (
    <PrismicNextLink
      field={node.data}
      className="underline underline-offset-4 hover:no-underline"
    >
      {children}
    </PrismicNextLink>
  ),

  preformatted: ({ children }) => (
    <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm">
      <code>{children}</code>
    </pre>
  ),
  list: ({ children }) => (
    <ul className="list-disc pl-8 space-y-2">{children}</ul>
  ),

  oList: ({ children }) => (
    <ol className="list-decimal pl-8 space-y-2">{children}</ol>
  ),

  listItem: ({ children }) => <li className="mt-5 text-black/80">{children}</li>,
  image: ({ node }) => (
    <figure className="my-6">
      <PrismicNextImage field={node} fallbackAlt="" className="w-full rounded-lg" />

      {node.alt && (
        <figcaption className="mt-1 text-sm text-black/60">
          {node.alt}
        </figcaption>
      )}
    </figure>
  ),
};
