import { 
  Cloud, 
  Code, 
  Shield, 
  Settings,
  Database,
  Cpu,
  BrainCircuit,
  Binary
} from "lucide-react";

export const solutions = [
  {
    title: "Enterprise Cloud Solutions",
    description: "Scalable cloud infrastructure and services tailored for business growth",
    Icon: Cloud,
    variant: "default" as const
  },
  {
    title: "Custom Software Development",
    description: "Bespoke applications designed to solve your unique business challenges",
    Icon: Code,
    variant: "filled" as const
  },
  {
    title: "AI & Data Science Solutions",
    description: "Transform raw data into actionable insights with machine learning",
    Icon: BrainCircuit,
    variant: "default" as const
  },
  {
    title: "Cybersecurity Services",
    description: "Comprehensive protection for your digital assets and infrastructure",
    Icon: Shield,
    variant: "default" as const
  },
  {
    title: "Data Engineering",
    description: "Build robust data pipelines and warehousing solutions",
    Icon: Database,
    variant: "filled" as const
  },
  {
    title: "IT Strategy & Consulting",
    description: "Expert guidance to align technology with business objectives",
    Icon: Settings,
    variant: "default" as const
  },
 
];