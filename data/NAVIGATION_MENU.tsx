const NAVIGATION_MENU: NAVIGATION_MENU_TYPE[] = [
  ["Home", "/"],
  [
    "Services",
    [
      [
        "Residential",
        // old slug: /res/[slug]
        // new slug: /home-internet-in-kingston-ontario/[slug]
        [
          [
            "Home Internet",
            "/home-internet-in-kingston-ontario/residential-services",
          ],
          [
            "High Speed Cable",
            "/home-internet-in-kingston-ontario/high-speed-cable",
          ],
          [
            "Wireless Broadband",
            "/home-internet-in-kingston-ontario/wireless-broadband",
          ],
          [
            "High Speed DSL",
            "/home-internet-in-kingston-ontario/high-speed-dsl",
          ],
          ["VoIP", "/home-internet-in-kingston-ontario/voip"],
          ["Mail", "/home-internet-in-kingston-ontario/mail"],
          ["Dial Up", "/home-internet-in-kingston-ontario/dial-up"],
        ],
      ],
      [
        "Business",
        // old slug: /bus/[slug]
        // new slug: /business-internet-in-kingston-ontario/[slug]
        [
          [
            "Business Internet",
            "/business-internet-in-kingston-ontario/business-services",
          ],
          [
            "High Speed Cable",
            "/business-internet-in-kingston-ontario/high-speed-cable",
          ],
          [
            "Wireless Broadband",
            "/business-internet-in-kingston-ontario/wireless-broadband",
          ],
          [
            "High Speed DSL",
            "/business-internet-in-kingston-ontario/high-speed-dsl",
          ],
          ["VoIP", "/business-internet-in-kingston-ontario/voip"],
          ["Mail", "/business-internet-in-kingston-ontario/mail"],
          [
            "Co Locate Server",
            "/business-internet-in-kingston-ontario/colocate-server",
          ],
          ["Dial Up", "/business-internet-in-kingston-ontario/dial-up"],
        ],
      ],
      ["Campgrounds", "/campgrounds/"],
      ["Availability Tool", "/availability/"],
      ["Payment Options", "/payment/options/"],
    ],
  ],
  [
    "Hosting",
    [
      ["Packages & Pricing", "/hosting/packages/"],
      ["Registering a Domain", "/domain/registration/"],
    ],
  ],
  [
    "About Us",
    [
      ["Our Company", "/about/"],
      ["News & Events", "/news/events/"],
      ["Coverage Area", "/coverage/"],
    ],
  ],
  ["Order Now", "/order/"],
  ["Contact Us", "/contact"],
  [
    "My Account",
    [
      ["My Email", "https://webmail.kos.net/src/login.php"],
      ["My Internet Usage", "https://usage.kos.net/"],
      ["My VoIP Portal", "https://vvs.directnet.ca/?"],
      [
        "Web Hosting Support",
        "https://support.kos.net/helpdesk/index.php?action=submit",
      ],
      [
        "Open a Support Ticket",
        "https://support.kos.net/helpdesk/index.php?action=submit",
      ],
      ["Quick Support / FAQs", "/support/faqs/"],
    ],
  ],
]

export default NAVIGATION_MENU
