import "@/css/tailwind.css"

import { DefaultSeo } from "next-seo"
// Could not find a declaration file for module '@mdx-js/react'.
import { ThemeProvider } from "next-themes"
import Head from "next/head"

import LayoutWrapper from "@/components/LayoutWrapper"
import MDXComponents from "@/components/MDXComponents"
import { SEO } from "@/components/SEO"
//@ts-expect-error
import { MDXProvider } from "@mdx-js/react"

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
