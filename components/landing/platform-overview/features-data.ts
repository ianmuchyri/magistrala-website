import {
  Bell,
  Building2,
  GitBranch,
  LayoutDashboard,
  type LucideIcon,
  Network,
  ShieldCheck,
} from "lucide-react";

export type Feature =
  | { icon: LucideIcon; title: string; description: string; visual: "terminal" }
  | {
      icon: LucideIcon;
      title: string;
      description: string;
      visual: "screenshot";
      image: string;
      imageAlt: string;
    }
  | { icon: LucideIcon; title: string; description: string; visual: "rbac" };

export const features: Feature[] = [
  {
    icon: Network,
    title: "Multi-Protocol Messaging",
    description:
      "Connect devices over MQTT, CoAP, HTTP, and WebSocket with no code changes. Protocol adapters handle translation automatically.",
    visual: "terminal" as const,
  },
  {
    icon: LayoutDashboard,
    title: "Visual Dashboards",
    description:
      "Build real-time and historical dashboards with drag-and-drop widgets. Monitor alarms, track entities, and visualize data without writing code.",
    visual: "screenshot" as const,
    image: "/screenshots/dashboard-2.png",
    imageAlt: "Magistrala dashboard",
  },
  {
    icon: GitBranch,
    title: "Rules Engine",
    description:
      "Process incoming messages, generate alarms, send notifications, and route data to external systems. Define logic visually or through the API.",
    visual: "screenshot" as const,
    image: "/screenshots/rules-engine-1.png",
    imageAlt: "Rules engine",
  },
  {
    icon: Bell,
    title: "Alarm Management",
    description:
      "Generate alarms from rules, assign severity levels, track acknowledgment, and manage resolution workflows across your entire fleet.",
    visual: "screenshot" as const,
    image: "/screenshots/alarms-2.png",
    imageAlt: "Alarm management",
  },
  {
    icon: Building2,
    title: "Multitenancy",
    description:
      "Isolate teams, customers, or environments with domain-level separation. Each domain has its own users, devices, channels, and policies.",
    visual: "screenshot" as const,
    image: "/screenshots/domains-1.png",
    imageAlt: "Multitenancy domains",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access Control",
    description:
      "Fine-grained permissions at user, group, domain, device, and channel level. Backed by a distributed authorization engine compatible with SpiceDB.",
    visual: "rbac" as const,
  },
];
