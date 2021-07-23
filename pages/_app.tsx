import "@/css/tailwind.css"

import { ThemeProvider } from "next-themes"
import Head from "next/head"

import LayoutWrapper from "@/components/PageLayout/LayoutWrapper"
import MDXComponents from "@/components/PageLayout/MDXComponents"
import DefaultSeo from "@/components/Utils/DefaultSEO"
//@ts-expect-error Could not find a declaration file for module '@mdx-js/react'.
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
        <DefaultSeo />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </MDXProvider>
    </ThemeProvider>
  )
}
