import { Cloud, Monitor, Smartphone, Globe, Settings } from "lucide-react";

export const solutions = [
  {
    title: "Web Application Development",
    description: "Building dynamic and responsive web apps tailored to your business goals.",
    Icon: Globe,
    variant: "default" as const,
  },
  {
    title: "Desktop Application Development",
    description: "Creating powerful desktop software solutions for Windows, macOS, and Linux.",
    Icon: Monitor,
    variant: "default" as const,
  },
  {
    title: "Mobile Application Development",
    description: "Designing and developing engaging mobile apps for iOS and Android platforms.",
    Icon: Smartphone,
    variant: "default" as const,
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure and services to support your business growth.",
    Icon: Cloud,
    variant: "default" as const,
  },
  {
    title: "IT Services & Support",
    description: "Providing end-to-end IT strategy, support, and maintenance to keep your systems running smoothly.",
    Icon: Settings,
    variant: "default" as const,
  },
];
