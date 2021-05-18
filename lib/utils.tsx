export const kebabCase = (str: string) => {
  const result =
    str &&
    str.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
    )

  return result && result.map((x: string) => x.toLowerCase()).join("-")
}
