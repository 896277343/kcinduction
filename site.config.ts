type SiteConfig = {
  site_domain: string;
  site_name: string;
  site_description: string;
  brand: {
    legalName: string;
    logoPath: string;
    logoUrl: string;
    socialLinks: string[];
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    hoursLong: string;
    hoursShort: string;
  };
  footer: {
    copyrightName: string;
    copyrightYears: string;
    summary: string;
  };
};

export const siteConfig: SiteConfig = {
  site_name: "KC Induction",
  site_description: "Self-developed fifth-generation digital induction heating power supplies from 0.1 to 1000 kHz, with engineered systems up to 2000 kW and real-time power and energy tracking.",
  site_domain: "https://kc-induction.com",
  brand: {
    legalName: "Zhengzhou Kechuang Electronics Co., Ltd.",
    logoPath: "/images/kc/logo-color-dark.webp",
    logoUrl: "/images/kc/logo-color-dark.webp",
    socialLinks: [],
  },
  contact: {
    phone: "+86 139 3710 9134",
    email: "sales@kc-induction.com",
    address: "Building 21, Liandong International Enterprise Port, Zhengzhou, Henan, China",
    hoursLong: "Monday - Friday: 9:00 AM - 6:00 PM",
    hoursShort: "Mon-Fri: 9:00-18:00",
  },
  footer: {
    copyrightName: "KC Induction",
    copyrightYears: "2026",
    summary:
      "Application-led induction heating systems for heat treatment, brazing, forging, melting and automated production lines.",
  },
};
