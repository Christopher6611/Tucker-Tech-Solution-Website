export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    slug: "e-government-portal",
    title: "E-Government Portal",
    client: "Ministry of Information",
    category: "Web Development",
    description:
      "A comprehensive online portal for citizen services, document requests, and public information.",
    challenge:
      "The ministry needed a secure, scalable platform to digitize paper-based processes and serve millions of citizens.",
    solution:
      "We designed and developed a microservices-based web portal with user authentication, payment integration, and a CMS for content updates.",
    results: [
      "50% reduction in in-person visits",
      "200,000+ registered users in first year",
      "99.9% uptime",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
    testimonial: {
      quote:
        "Tucker Tech Solution delivered a world-class portal on time and within budget. Highly professional team.",
      name: "Dr. Alimamy Kargbo",
      role: "Minister of Information",
    },
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    client: "Connaught Hospital",
    category: "Software Development",
    description:
      "End-to-end hospital administration software covering patient records, billing, pharmacy, and lab management.",
    challenge:
      "The hospital struggled with paper records, slow billing, and poor inventory tracking, affecting patient care.",
    solution:
      "We built a custom desktop and web application with role-based access, automated billing, and real-time inventory alerts.",
    results: [
      "30% faster patient processing",
      "80% reduction in billing errors",
      "Full audit trail for compliance",
    ],
    technologies: ["C#", ".NET", "SQL Server", "Angular"],
    testimonial: {
      quote:
        "The system has transformed our operations. Staff love it, and patients receive faster service.",
      name: "Dr. Isatu Sesay",
      role: "Medical Director",
    },
  },
  {
    slug: "university-network-upgrade",
    title: "University Network Upgrade",
    client: "Fourah Bay College",
    category: "Networking",
    description:
      "Campus-wide network redesign with high-speed Wi-Fi, VLAN segmentation, and secure remote access.",
    challenge:
      "Outdated network caused frequent outages and poor connectivity across the 500-acre campus.",
    solution:
      "We deployed enterprise-grade Cisco switches, Ubiquiti access points, and a centralized firewall with 24/7 monitoring.",
    results: [
      "100% campus coverage",
      "10x increase in bandwidth",
      "Zero major outages since deployment",
    ],
    technologies: ["Cisco", "Ubiquiti", "pfSense", "VPN"],
    testimonial: {
      quote:
        "Students and faculty now enjoy seamless internet. Tucker Tech did an outstanding job.",
      name: "Prof. Sorie Koroma",
      role: "Vice Chancellor",
    },
  },
];