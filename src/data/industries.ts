export interface Industry {
  slug: string;
  title: string;
  description: string;
  services: string[]; // relevant service slugs (for linking)
  caseStudySlug?: string;
}

export const industries: Industry[] = [
  {
    slug: "education",
    title: "Education",
    description: "Transform learning with technology. From student management systems to campus-wide networks, we help schools and universities deliver better education.",
    services: ["web-development", "software-development", "networking", "school-management-system"],
    caseStudySlug: "university-network-upgrade",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description: "Improve patient care with reliable IT infrastructure, hospital management software, and secure data systems compliant with healthcare regulations.",
    services: ["software-development", "database-design", "hospital-management-system"],
    caseStudySlug: "hospital-management-system",
  },
  {
    slug: "government",
    title: "Government",
    description: "Modernise public services with secure portals, document management, and robust network infrastructure trusted by ministries and agencies.",
    services: ["web-development", "cybersecurity", "cloud-computing"],
    caseStudySlug: "e-government-portal",
  },
  {
    slug: "ngo",
    title: "NGOs",
    description: "Maximise your impact with cost-effective IT solutions, donor management systems, and reliable connectivity for field offices.",
    services: ["web-development", "technical-support", "domain-registration"],
  },
  {
    slug: "finance",
    title: "Finance",
    description: "Secure, compliant technology for banks, microfinance, and insurance. Loan management, cybersecurity, and data analytics solutions.",
    services: ["software-development", "cybersecurity", "loan-management-system"],
  },
  {
    slug: "retail",
    title: "Retail",
    description: "Drive sales with point-of-sale systems, inventory management, and e-commerce websites tailored to your business.",
    services: ["web-development", "inventory-system", "point-of-sale"],
  },
  {
    slug: "mining",
    title: "Mining",
    description: "Boost operational efficiency with ERP systems, fleet management, and safety compliance software built for the mining sector.",
    services: ["software-development", "mining-erp", "networking"],
  },
  {
    slug: "churches",
    title: "Churches & Religious Organisations",
    description: "Streamline administration, live-stream services, and engage your congregation with websites and management software.",
    services: ["web-development", "graphic-design", "cctv"],
  },
  {
    slug: "construction",
    title: "Construction",
    description: "Manage projects, equipment, and workforce with custom software and secure site connectivity.",
    services: ["software-development", "networking", "cctv"],
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    description: "Leverage technology for farm management, supply chain tracking, and market access. We build solutions for agribusiness.",
    services: ["web-development", "software-development"],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description: "Optimise production lines, inventory, and quality control with tailored ERP and IoT solutions.",
    services: ["software-development", "inventory-system", "networking"],
  },
];