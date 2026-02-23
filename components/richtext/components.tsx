import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichTextProps } from "@prismicio/react";
import { ReactNode } from "react";

type RichTextComponents = PrismicRichTextProps["components"];

export const richTextComponents: RichTextComponents = {
  heading1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold leading-tight font-pop">
      {children}
    </h1>
  ),

  heading2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold leading-tight font-pop">
      {children}
    </h2>
  ),

  heading3: ({ children }: { children: ReactNode }) => (
    <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold leading-tight font-pop">
      {children}
    </h3>
  ),
  heading4: ({ children }: { children: ReactNode }) => (
    <h4 className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold leading-tight font-pop">
      {children}
    </h4>
  ),
  heading5: ({ children }: { children: ReactNode }) => (
    <h5 className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold leading-tight font-pop">
      {children}
    </h5>
  ),
  heading6: ({ children }: { children: ReactNode }) => (
    <h6 className="text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold leading-tight font-pop">
      {children}
    </h6>
  ),
  paragraph: ({ children }: { children: ReactNode }) => (
    <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-lg leading-tight  font-pop">
      {children}
    </p>
  ),

  strong: ({ children }: { children: ReactNode }) => (
    <strong className="font-semibold ">{children}</strong>
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
    <pre className="bg-gray-500 inline text-white p-4 rounded-md  text-sm">
      <code>{children}</code>
    </pre>
  ),
  list: ({ children }) => (
    <ul className="list-disc pl-8 space-y-2 font-pop">{children}</ul>
  ),

  oList: ({ children }) => (
    <ol className="list-decimal pl-8 space-y-2 font-pop">{children}</ol>
  ),

  listItem: ({ children }) => (
    <li className="mt-5 text-black/80 font-pop">{children}</li>
  ),
  image: ({ node }) => (
    <figure className="my-6">
      <PrismicNextImage
        field={node}
        fallbackAlt=""
        className="w-full rounded-lg"
      />

      {node.alt && (
        <figcaption className="mt-1 text-sm text-black/60">
          {node.alt}
        </figcaption>
      )}
    </figure>
  ),
};
