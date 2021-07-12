const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./layouts/**/*.{js,ts,jsx,tsx}",
      "./lib/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: ["type"], // [type='checkbox']
    },
  },
  darkMode: "class",
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      26: "26px",
      28: "28px",
      30: "30px",
      32: "32px",
      34: "34px",
      36: "36px",
      38: "38px",
      40: "40px",
    },
    extend: {
      spacing: {
        "9/16": "56.25%",
        13: "3.25rem",
        15: "3.75rem",
        58: "14.5rem",
        60: "15rem",
        62: "15.5rem",
        64: "16rem",
        66: "16.5rem",
        68: "17rem",
        70: "17.5rem",
        72: "18rem",
        74: "18.5rem",
        76: "19rem",
        78: "19.5rem",
        80: "20rem",
        82: "20.5rem",
        84: "21rem",
        86: "21.5rem",
        88: "22rem",
        90: "22.5rem",
        92: "23rem",
        94: "23.5rem",
        96: "24rem",
        98: "24.5rem",
        100: "25rem",
        102: "25.5rem",
        104: "26rem",
        106: "26.5rem",
        108: "27rem",
        110: "27.5rem",
        112: "28rem",
        114: "28.5rem",
        116: "29rem",
        118: "29.5rem",
        120: "30rem",
        122: "30.5rem",
        124: "31rem",
        126: "31.5rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        172: "43rem",
        192: "48rem",
        200: "50rem",
        228: "57rem",
        256: "64rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
        "10xl": "104rem",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
      fontFamily: {
        sans: ["Open Sans", "Lato", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          ...colors.lightBlue,
          // blue colors for PricingPackage & branding throughout
          brand: "#005395", // KOS - main color - used in PricingPackageColumn
          dark: "#00467e", // dark blue used for border of PricingPackageColumn
          light: "#0a6eab", // light blue for bottom of BlueBox gradient
        },
        teal: {
          ...colors.lightBlue,
          // teal colors for PricingPackage
          brand: "#28bceb", // KOS - rarely used - used in PricingPackageColumn
          dark: "#1db3e3", // dark teal used for border of PricingPackageColumn
          light: "#27bae9", // light teal for top of BlueBox gradient
        },
        red: {
          ...colors.red,
          // red color for highlighting titles & branding throughout
          brand: "#A80532", // KOS - secondary color
        },
        code: {
          green: "#b5f4a5",
          yellow: "#ffe484",
          purple: "#d9a9ff",
          red: "#ff8383",
          blue: "#93ddfd",
          white: "#fff",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "black",
            a: {
              color: theme("colors.blue.brand"),
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            strong: {
              fontWeight: "700",
            },
            h3: {
              // used in campgrounds.md and options.md
              color: theme("colors.red.brand"),
            },
            h4: {
              // used in e911/faqs.md
              color: theme("colors.blue.brand"),
            },
            h5: {
              // used in pp.md (Privacy Policy) and tac.md
              borderWidth: "2px 0px 2px 0px",
              borderStyle: "solid",
              borderColor: theme("colors.black"),
              color: theme("colors.black"),
              textAlign: "center",
            },
            "h1,h2,h3,h4,h5,h6": {
              fontWeight: "700",
            },
            "ul li:before": {
              // use red bullets for unordered lists in Markdown
              backgroundColor: theme("colors.red.brand"),
            },
            "ol li": {
              // use lowercase letters (a. b. c.) for ordered lists in Markdown
              // e.g. on the Acceptable Use Policy page /aup
              color: theme("colors.black"),
              listStyleType: "lower-alpha",
              paddingLeft: "0",
              marginLeft: "1.75rem",
              // Note: This means that to generate regular numerals (1. 2. 3.)
              // then you should write "&enbp;&enbp;1. &enbp;&enbp;2." etc.
              // in the Markdown file to generate a psuedolist; or you could
              // write a custom <ol> with list-style-type (not recommended!)
              // --> &enbp; is a space character used for custom indenting
            },
            "ol li:before": {
              display: "none",
              // by default Tailwind typopgraphy is going to use ::before to
              // display the character instead of letting the browser handle it
            },
            "ol ol li": {
              // use lowercase roman numerals (i. ii. iii.) for nested ordered
              // lists, e.g. on the Privacy Policy page /pp
              listStyleType: "lower-roman",
            },
          },
        },
      }),
    },
  },
  // variants unnecessary thanks to new tailwindcss-jit (just-in-time) engine
  /*variants: {
    typography: ["responsive", "dark"],
    extend: {
      padding: ["first", "last"],
    },
  },*/
  /* Tailwind has a new engine called jit (just-in-time) compiler changes;
     see: https://youtu.be/3O_3X7InOw8?t=333 (Adam Wathan video) */
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}
