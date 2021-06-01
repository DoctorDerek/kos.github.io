import "@/css/tailwind.css"

//@ts-expect-error
import { MDXProvider } from "@mdx-js/react"
// Could not find a declaration file for module '@mdx-js/react'.

import { ThemeProvider } from "next-themes"
import { DefaultSeo } from "next-seo"
import Head from "next/head"

import { SEO } from "@/components/SEO"
import LayoutWrapper from "@/components/LayoutWrapper"
import MDXComponents from "@/components/MDXComponents"

export default function App({
  Component,
  pageProps,
}: {
  Component: React.FunctionComponent
  pageProps: any
}) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </MDXProvider>
    </ThemeProvider>
  )
}
