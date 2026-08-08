export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string; // HTML or markdown (we'll use simple paragraphs)
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cybersecurity-threats-2026",
    title: "5 Cybersecurity Threats Every Business Should Know in 2026",
    date: "2026-01-12",
    category: "Cybersecurity",
    excerpt: "Stay ahead of attackers with these essential security practices.",
    content: `
      <p>Cybersecurity continues to evolve rapidly. In 2026, businesses face new threats that require proactive strategies. Here are the top 5 threats to watch:</p>
      <h3>1. AI-Powered Phishing</h3>
      <p>Attackers now use generative AI to craft highly convincing, personalised phishing emails that bypass traditional filters.</p>
      <h3>2. Ransomware 3.0</h3>
      <p>Double and triple extortion tactics are on the rise – not only encrypting data but also threatening to leak sensitive information.</p>
      <h3>3. Supply Chain Attacks</h3>
      <p>Vulnerabilities in third-party software or hardware can compromise entire networks. Rigorous vendor assessments are critical.</p>
      <h3>4. IoT Botnets</h3>
      <p>Unsecured smart devices are increasingly hijacked to launch DDoS attacks. Network segmentation and regular patching help mitigate this.</p>
      <h3>5. Cloud Misconfigurations</h3>
      <p>As cloud adoption grows, so do breaches caused by misconfigured storage buckets and access policies. Regular audits are essential.</p>
      <p>Protecting your organisation requires a layered security strategy. Tucker Tech Solution can help you assess your risks and implement robust defences.</p>
    `,
  },
  {
    slug: "cloud-migration-smes",
    title: "Why Cloud Migration is No Longer Optional for SMEs",
    date: "2026-01-03",
    category: "Cloud Computing",
    excerpt: "Learn how moving to the cloud can reduce costs and boost productivity.",
    content: `
      <p>Small and medium enterprises (SMEs) often hesitate to migrate to the cloud due to perceived complexity or cost. However, staying on-premises can hold your business back.</p>
      <h3>Cost Efficiency</h3>
      <p>Cloud services operate on a pay-as-you-go model, eliminating the need for expensive hardware upgrades and maintenance.</p>
      <h3>Scalability</h3>
      <p>Cloud resources can scale up or down instantly based on demand – perfect for seasonal businesses or rapid growth.</p>
      <h3>Remote Work Enablement</h3>
      <p>Your team can securely access applications and data from anywhere, which is now a standard expectation for modern workforces.</p>
      <h3>Disaster Recovery</h3>
      <p>Cloud providers offer built-in redundancy and backup solutions, ensuring business continuity even after a disaster.</p>
      <p>Tucker Tech Solution offers seamless cloud migration services. Contact us for a free assessment.</p>
    `,
  },
  {
    slug: "custom-software-benefits",
    title: "How Custom Software Can Streamline Your Operations",
    date: "2025-12-28",
    category: "Software Development",
    excerpt: "Off-the-shelf solutions often fall short. Discover the power of custom development.",
    content: `
      <p>Many businesses rely on spreadsheets or generic software that doesn't fit their unique processes. Custom software offers a tailored solution.</p>
      <h3>Workflow Automation</h3>
      <p>Automate repetitive tasks such as invoicing, reporting, and data entry, freeing your staff for higher-value work.</p>
      <h3>Integration with Existing Systems</h3>
      <p>Custom solutions can seamlessly integrate with your current CRM, accounting, or inventory platforms.</p>
      <h3>Competitive Advantage</h3>
      <p>When your software aligns perfectly with your business model, you can deliver faster, better service than competitors.</p>
      <p>At Tucker Tech Solution, we've built dozens of custom applications that transformed operations. Let's discuss your needs.</p>
    `,
  },
  {
    slug: "digital-transformation-trends",
    title: "Digital Transformation Trends Reshaping Industries in 2026",
    date: "2026-02-15",
    category: "Digital Transformation",
    excerpt: "Explore the key technology trends driving business innovation.",
    content: `
      <p>Digital transformation is no longer a buzzword – it's a necessity. In 2026, several trends are accelerating change across sectors.</p>
      <h3>1. Artificial Intelligence Everywhere</h3>
      <p>AI is now embedded in everything from customer service chatbots to predictive maintenance.</p>
      <h3>2. Low-Code/No-Code Platforms</h3>
      <p>These tools empower non-developers to build applications, speeding up innovation within organisations.</p>
      <h3>3. Edge Computing</h3>
      <p>Processing data closer to the source reduces latency and bandwidth usage, critical for IoT and real-time analytics.</p>
      <p>We help organisations navigate these trends and implement the right technologies for their goals.</p>
    `,
  },
];