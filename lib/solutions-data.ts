import {
  Activity,
  AlertTriangle,
  BarChart3,
  Building2,
  CloudRain,
  Cpu,
  DollarSign,
  Droplets,
  Eye,
  Factory,
  FileBarChart,
  Flame,
  Gauge,
  GitMerge,
  Globe,
  Layers,
  Leaf,
  LineChart,
  type LucideIcon,
  Map as MapIcon,
  Shield,
  ShieldAlert,
  Sprout,
  Thermometer,
  Timer,
  TrendingDown,
  Truck,
  Waves,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

// ─── Pack item ─────────────────────────────────────────────────────────────

export interface PackItem {
  label: string;
  count: number;
  description: string;
}

// ─── Common sub-structures ─────────────────────────────────────────────────

export interface ChallengeItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ApplicationItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface HowItWorksStep {
  title: string;
  desc: string;
}

// ─── Main Solution type ────────────────────────────────────────────────────

export interface Solution {
  title: string;
  slug: string;
  icon: LucideIcon;
  /** Short copy used in nav dropdown and listing cards */
  summary: string;
  /** Longer copy used in the detail page hero */
  description: string;
  /** Extended detail for the hero — what the solution covers and is designed to accomplish */
  heroDetail: string;
  /** Brief on why Magistrala is the right platform for this solution */
  whyMagistrala: string;
  /** Image used in the solution listing grid cards */
  image: string;
  /** Dashboard screenshots shown in the carousel on the detail page */
  dashboardScreenshots: { src: string; alt: string }[];

  // Solution Pack ────────────────────────────────────────────────────────
  packName: string;
  packTagline: string;
  packDescription: string;
  packItems: PackItem[];

  // Challenges ───────────────────────────────────────────────────────────
  challenges: {
    title: string;
    subtitle: string;
    items: [ChallengeItem, ChallengeItem, ChallengeItem];
  };

  // How it works (system flow) ───────────────────────────────────────────
  howItWorks: {
    subtitle: string;
    steps: [HowItWorksStep, HowItWorksStep, HowItWorksStep, HowItWorksStep];
  };

  // Applications ─────────────────────────────────────────────────────────
  applications: {
    title: string;
    subtitle: string;
    items: [ApplicationItem, ApplicationItem, ApplicationItem, ApplicationItem];
  };

  benefits: string[];

  // FAQ ──────────────────────────────────────────────────────────────────
  faq: { question: string; answer: string }[];

  // SEO ──────────────────────────────────────────────────────────────────
  metaDescription: string;
  keywords: string[];
}

// ─── Data ──────────────────────────────────────────────────────────────────

export const solutions: Solution[] = [
  // ── Smart City ──────────────────────────────────────────────────────────
  {
    title: "Smart City",
    slug: "smart-city",
    icon: Building2,
    summary:
      "Digitize urban infrastructure and unify civic command centers. Monitor traffic, energy, and public utilities from a single platform.",
    description:
      "Transform disconnected urban infrastructure into a unified, data-driven command center. The Smart City Solution Pack gives municipalities real-time visibility across traffic systems, street lighting, waste management, and public energy grids — all pre-wired, pre-configured, and ready to deploy.",
    heroDetail:
      "The Smart City Solution Pack is built for municipalities and city operators who need to move beyond manual monitoring and siloed systems. It addresses the complete urban IoT lifecycle — from device onboarding and multi-protocol data ingestion to real-time alerting, automated rule execution, and executive reporting. Whether managing traffic flows, optimizing street lighting, tracking waste fill-levels, or monitoring public energy grids, the pack provides pre-configured infrastructure to bring it all under one operational view — without months of integration work.",
    whyMagistrala:
      "Magistrala's open-source core provides the multi-protocol connectivity, per-device credential management, and rule-engine foundation that large-scale urban deployments demand. Its built-in multi-tenancy lets each city department manage their own data view, while open APIs ensure you're never locked into a proprietary ecosystem.",
    image: "/solutions/smart-city.jpg",
    dashboardScreenshots: [
      {
        src: "/screenshots/smart-city.png",
        alt: "Smart City operations overview dashboard",
      },
      {
        src: "/screenshots/dashboard-1.png",
        alt: "Smart City live telemetry dashboard",
      },
      {
        src: "/screenshots/alarms-1.png",
        alt: "Smart City alarm management panel",
      },
      {
        src: "/screenshots/rules-engine-1.png",
        alt: "Smart City rules engine configuration",
      },
    ],

    packName: "Smart City Operations Pack",
    packTagline: "Full urban IoT stack — deployed in under an hour.",
    packDescription:
      "The Smart City Operations Pack bundles everything a municipality needs to go from zero to a live, operational IoT deployment. Pre-configured devices, data pipelines, alerting rules, and dashboards — no integration work required.",
    packItems: [
      {
        label: "Clients",
        count: 24,
        description: "Traffic sensors, smart meters, cameras, lighting nodes",
      },
      {
        label: "Channels",
        count: 12,
        description: "Traffic, lighting, waste, energy, safety, environment",
      },
      {
        label: "Groups",
        count: 5,
        description: "City zones: North, South, East, West, Central",
      },
      {
        label: "Rules",
        count: 18,
        description:
          "Congestion alerts, lighting schedules, overflow triggers, anomaly detection",
      },
      {
        label: "Dashboards",
        count: 6,
        description:
          "Operations overview, traffic, energy, waste, safety, executive KPIs",
      },
      {
        label: "Alarms",
        count: 15,
        description:
          "Critical infrastructure alerts with severity levels and escalation paths",
      },
      {
        label: "Report Templates",
        count: 5,
        description:
          "Daily city briefing, monthly energy consumption, SLA compliance",
      },
      {
        label: "Templates",
        count: 4,
        description: "Device onboarding, zone configuration, alert routing",
      },
    ],

    challenges: {
      title: "Cities are drowning in disconnected data",
      subtitle:
        "Urban infrastructure generates enormous amounts of data — but fragmented systems mean operators can't act on it fast enough.",
      items: [
        {
          icon: Layers,
          title: "Fragmented Infrastructure",
          desc: "Traffic, lighting, waste, and energy systems run on separate platforms with no unified visibility, creating blind spots and duplicated efforts.",
        },
        {
          icon: Timer,
          title: "Slow Incident Response",
          desc: "Without real-time alerts, incidents like traffic accidents or infrastructure failures are discovered hours or days after the fact.",
        },
        {
          icon: DollarSign,
          title: "Escalating Operating Costs",
          desc: "Manual monitoring, fixed-schedule maintenance, and energy waste drive costs up with no data-driven path to reduce them.",
        },
      ],
    },

    howItWorks: {
      subtitle:
        "From distributed sensors to a unified operations center — in one platform.",
      steps: [
        {
          title: "Connect",
          desc: "Traffic cameras, smart meters, environmental sensors, and lighting nodes connect over MQTT or HTTP using pre-configured client credentials.",
        },
        {
          title: "Stream",
          desc: "Telemetry flows into dedicated channels organized by infrastructure type — traffic, energy, waste, safety — with automatic normalization.",
        },
        {
          title: "Analyze",
          desc: "The rules engine evaluates incoming data in real time, triggering alerts for congestion, energy spikes, overflowing bins, or public safety incidents.",
        },
        {
          title: "Act",
          desc: "Operators receive alarms in the dashboard, automated notifications are dispatched, and optionally downstream actuators are triggered via outbound channels.",
        },
      ],
    },

    applications: {
      title: "Key Applications",
      subtitle: "What cities are running on this pack today",
      items: [
        {
          icon: MapIcon,
          title: "Adaptive Traffic Management",
          desc: "Real-time congestion monitoring with automated signal timing adjustments and incident alerts to reduce commute times.",
        },
        {
          icon: Zap,
          title: "Smart Street Lighting",
          desc: "Occupancy-based dimming schedules slash energy use. Faulty luminaires trigger maintenance tickets automatically.",
        },
        {
          icon: Truck,
          title: "Intelligent Waste Collection",
          desc: "Fill-level sensors route collection vehicles only to full bins, cutting collection kilometers by up to 40%.",
        },
        {
          icon: Shield,
          title: "Public Safety Monitoring",
          desc: "Environmental anomaly detection and infrastructure integrity alerts improve response times across city zones.",
        },
      ],
    },

    benefits: [
      "Reduce operational costs by up to 35% through optimized scheduling and predictive maintenance",
      "Cut incident response time from hours to minutes with real-time alerting",
      "Single pane of glass for all urban infrastructure — no more siloed dashboards",
      "Built-in multi-tenancy lets each city department manage their own view",
      "Open source core means no vendor lock-in — extend as your needs grow",
      "Enterprise-grade security with per-device credentials and role-based access control",
    ],

    faq: [
      {
        question:
          "Can Magistrala integrate with existing city management software?",
        answer:
          "Yes. Magistrala exposes REST and WebSocket APIs that integrate with GIS platforms, ERP systems, and city dashboards such as Esri ArcGIS and SAP. Webhook sinks push events directly to existing ticketing and dispatch systems without requiring replacement of front-end tools.",
      },
      {
        question: "How do you handle multi-tenancy across city departments?",
        answer:
          "Magistrala uses domain-level isolation backed by SpiceDB policies. Each department (traffic, utilities, waste) operates in its own domain with its own device groups, channels, and user roles. Cross-domain data sharing is configured explicitly through policy grants — departments see only what they are authorized to see.",
      },
      {
        question:
          "What happens if connectivity to the central platform is lost?",
        answer:
          "Edge gateway nodes buffer messages locally during connectivity gaps and replay them in order once the link is restored. Time-series data arrives with original device timestamps, so dashboards and rules engines reconstruct accurate event sequences without gaps.",
      },
      {
        question: "How quickly can the Smart City pack be deployed?",
        answer:
          "The pre-configured pack installs on Magistrala Cloud in minutes — clients, channels, rules, dashboards, and alarms are all included. Custom device types and additional integrations can be added incrementally without taking the core platform offline.",
      },
    ],

    metaDescription:
      "Deploy a full smart city IoT platform in minutes. The Magistrala Smart City Solution Pack includes pre-configured traffic, lighting, waste, and energy monitoring — ready out of the box.",
    keywords: [
      "smart city IoT",
      "urban IoT platform",
      "traffic monitoring",
      "smart street lighting",
      "city operations dashboard",
      "Magistrala smart city",
    ],
  },

  // ── Smart Water Metering ───────────────────────────────────────────────
  {
    title: "Smart Water Metering",
    slug: "smart-water",
    icon: Droplets,
    summary:
      "Eliminate non-revenue water losses and automate municipal billing with real-time network metering.",
    description:
      "Give water utilities complete network visibility — from production to end-point consumption. The Smart Water Metering Pack deploys automated meter reading, leak detection, and demand forecasting infrastructure on Magistrala with zero integration overhead.",
    heroDetail:
      "The Smart Water Metering Pack is designed for water utilities that need to modernize their AMR/AMI infrastructure without building integration layers from scratch. It covers the full metering value chain — from automated meter reading and district metering zone management to burst detection, demand forecasting, and billing-ready data exports. The pack supports both municipal distribution networks and large industrial water consumers, scaling to thousands of meters with the same deployment footprint.",
    whyMagistrala:
      "Magistrala handles the heavy lifting of device connectivity, data normalization, and time-series storage at utility scale — so your engineering team can focus on network performance and operational outcomes rather than infrastructure plumbing.",
    image: "/solutions/water-metering.jpg",
    dashboardScreenshots: [
      {
        src: "/screenshots/smart-water.png",
        alt: "Smart Water Metering network overview dashboard",
      },
      {
        src: "/screenshots/dashboard-2.png",
        alt: "Water consumption analytics dashboard",
      },
      {
        src: "/screenshots/reports-1.png",
        alt: "Water utility compliance reports",
      },
      {
        src: "/screenshots/alarms-2.png",
        alt: "Water network leak detection alarms",
      },
    ],

    packName: "Smart Water Metering Pack",
    packTagline: "AMI-ready water network monitoring — live in 30 minutes.",
    packDescription:
      "Everything a water utility needs to modernize AMR/AMI infrastructure. Pre-configured metering clients, district metering zone groups, leak detection rules, and billing-ready dashboards — deploy and start monitoring immediately.",
    packItems: [
      {
        label: "Clients",
        count: 50,
        description:
          "Smart meters, pressure sensors, flow meters, valve controllers",
      },
      {
        label: "Channels",
        count: 8,
        description: "Consumption, pressure, flow, quality, leakage, billing",
      },
      {
        label: "Groups",
        count: 4,
        description: "District Metering Zones: DMA A, B, C, Trunk main",
      },
      {
        label: "Rules",
        count: 15,
        description:
          "Leak detection thresholds, pressure anomalies, consumption spikes, no-read alerts",
      },
      {
        label: "Dashboards",
        count: 4,
        description:
          "Network overview, leakage, billing & consumption, pressure management",
      },
      {
        label: "Alarms",
        count: 12,
        description:
          "Burst pipe alerts, tamper detection, low pressure, meter communication failures",
      },
      {
        label: "Report Templates",
        count: 4,
        description:
          "Monthly billing export, NRW analysis, DMA performance, regulator compliance",
      },
      {
        label: "Templates",
        count: 3,
        description: "Meter onboarding, DMA configuration, alert escalation",
      },
    ],

    challenges: {
      title: "Non-revenue water is bleeding utilities dry",
      subtitle:
        "The global average NRW rate exceeds 30%. Real-time metering infrastructure is no longer a luxury — it's a financial necessity.",
      items: [
        {
          icon: TrendingDown,
          title: "Invisible Losses",
          desc: "Physical leaks and meter inaccuracies go undetected for weeks, with utilities only discovering losses when monthly billing data is reconciled.",
        },
        {
          icon: AlertTriangle,
          title: "Billing Disputes",
          desc: "Manual meter reading introduces errors and delays. Customers dispute bills, straining operations and regulatory relationships.",
        },
        {
          icon: Timer,
          title: "Slow Leak Response",
          desc: "Without real-time pressure and flow monitoring, burst mains and critical leaks go undetected until visual inspection or customer complaints.",
        },
      ],
    },

    howItWorks: {
      subtitle: "From edge meter to billing dashboard — fully automated.",
      steps: [
        {
          title: "Ingest",
          desc: "Smart meters and pressure loggers transmit readings over NB-IoT, LoRaWAN, or MQTT at configurable intervals into Magistrala's pre-built metering channels.",
        },
        {
          title: "Organize",
          desc: "Readings are automatically grouped by District Metering Zone (DMA), enabling per-zone balance calculations and loss attribution.",
        },
        {
          title: "Detect",
          desc: "Configurable rules continuously compare inlet flow vs. downstream consumption. Statistical anomaly detection flags potential bursts, leaks, or tamper events in real time.",
        },
        {
          title: "Report",
          desc: "Pre-built billing templates aggregate validated consumption data for export. Leak and NRW reports are auto-generated on configurable schedules.",
        },
      ],
    },

    applications: {
      title: "Key Applications",
      subtitle: "Where water utilities are using this pack",
      items: [
        {
          icon: Gauge,
          title: "AMR / AMI Billing",
          desc: "Automated meter reading with tamper detection and consumption anomaly alerts. Export billing-ready data directly from dashboards.",
        },
        {
          icon: Waves,
          title: "Leak & Burst Detection",
          desc: "Night-flow analysis and minimum-flow-rate rules pinpoint network leaks before they become costly burst mains.",
        },
        {
          icon: LineChart,
          title: "Demand Forecasting",
          desc: "Historical consumption data and seasonal patterns feed forecasting models for better reservoir management and pumping schedules.",
        },
        {
          icon: Activity,
          title: "Pressure Zone Management",
          desc: "Real-time pressure monitoring across zones ensures optimal delivery pressure, reducing pipe stress and leakage rates.",
        },
      ],
    },

    benefits: [
      "Reduce non-revenue water (NRW) by up to 25% in the first year of deployment",
      "Cut manual meter reading visits with automated remote reads across the full network",
      "Accelerate leak detection from weeks to minutes with real-time rules engine",
      "Eliminate billing disputes with validated, tamper-evident meter data",
      "Meet regulatory reporting requirements with built-in NRW and compliance templates",
      "Scale from pilot DMA to full network without re-architecting — add meters in minutes",
    ],

    faq: [
      {
        question: "What connectivity options are supported for field meters?",
        answer:
          "Magistrala natively supports MQTT, HTTP, CoAP, and WebSocket. Field meters using LoRaWAN, NB-IoT, or cellular backhaul connect via an external protocol adapter or gateway that translates their data into one of the native protocols. Devices authenticate with pre-shared keys or X.509 certificates.",
      },
      {
        question: "Can Magistrala integrate with our existing SCADA system?",
        answer:
          "Yes. Magistrala exposes a webhook-based alert sink and a REST API for time-series data retrieval. Most SCADA platforms consume webhook POST calls or poll the Magistrala API directly. For OPC-UA-based SCADA systems, an adapter exposes Magistrala channels as OPC-UA nodes.",
      },
      {
        question: "How is access to meter data controlled across teams?",
        answer:
          "Magistrala implements fine-grained RBAC via SpiceDB, scoped to domains, groups, and individual channels. A field technician can be granted read-only access to their assigned district metered area while a billing analyst has export access to consumption data but no alarm management permissions.",
      },
      {
        question:
          "What infrastructure is needed to deploy Magistrala for water metering?",
        answer:
          "A single-node Docker Compose deployment handles approximately 10,000 connected meters at 15-minute reporting intervals. For larger networks, Kubernetes deployment with horizontal scaling handles millions of messages per hour. Magistrala is also available as a managed cloud service.",
      },
    ],

    metaDescription:
      "Deploy smart water metering infrastructure in minutes. The Magistrala Smart Water Pack includes pre-configured AMI clients, leak detection rules, and billing dashboards — ready out of the box.",
    keywords: [
      "smart water metering",
      "AMI IoT platform",
      "NRW reduction",
      "leak detection IoT",
      "district metering zone",
      "Magistrala water",
    ],
  },

  // ── Smart Energy ──────────────────────────────────────────────────────
  {
    title: "Smart Energy",
    slug: "smart-energy",
    icon: Zap,
    summary:
      "Balance loads and monitor renewable generation with sub-millisecond telemetry and automated alerts.",
    description:
      "Modernize energy infrastructure management with a pre-built IoT platform covering grid monitoring, renewable generation, load balancing, and demand response. The Smart Energy Pack delivers enterprise-grade telemetry and analytics without weeks of integration work.",
    heroDetail:
      "The Smart Energy Grid Pack is engineered for energy utilities, grid operators, and industrial energy managers who need real-time visibility across generation, transmission, and consumption. It spans the full grid intelligence stack — from sub-station telemetry and renewable output monitoring to load balancing automation and demand response event management. The pack is designed to integrate with existing infrastructure while adding modern IoT-grade data processing, alerting, and analytics capabilities.",
    whyMagistrala:
      "Magistrala's high-throughput message bus and persistent time-series store handle the sub-second telemetry volumes that energy grid monitoring demands, while the rules engine enables automated load control actions without any custom middleware development.",
    image: "/solutions/smart-energy.jpg",
    dashboardScreenshots: [
      {
        src: "/screenshots/dashboard-1.png",
        alt: "Smart Energy grid operations dashboard",
      },
      {
        src: "/screenshots/dashboard-2.png",
        alt: "Energy generation and load analytics",
      },
      { src: "/screenshots/alarms-1.png", alt: "Energy grid alarm management" },
      {
        src: "/screenshots/rules-engine-1.png",
        alt: "Energy demand response rules engine",
      },
    ],

    packName: "Smart Energy Grid Pack",
    packTagline:
      "Grid intelligence from generation to meter — deployed instantly.",
    packDescription:
      "A complete smart grid monitoring stack with pre-configured clients for generation assets, distribution equipment, and end-point meters. Rules, dashboards, and alarms are pre-built for the most critical energy management scenarios.",
    packItems: [
      {
        label: "Clients",
        count: 40,
        description:
          "Smart meters, inverters, grid sensors, transformer monitors, EV chargers",
      },
      {
        label: "Channels",
        count: 10,
        description:
          "Generation, distribution, consumption, storage, quality, demand response",
      },
      {
        label: "Groups",
        count: 4,
        description:
          "Generation assets, distribution network, commercial consumers, residential",
      },
      {
        label: "Rules",
        count: 20,
        description:
          "Overload detection, voltage sag/swell alerts, renewable curtailment, demand response triggers",
      },
      {
        label: "Dashboards",
        count: 5,
        description:
          "Grid overview, renewable generation, consumption heatmap, fault analysis, executive summary",
      },
      {
        label: "Alarms",
        count: 18,
        description:
          "Grid fault alerts, over/under voltage, power quality events, equipment failure predictions",
      },
      {
        label: "Report Templates",
        count: 4,
        description:
          "Daily generation summary, monthly energy audit, demand response log, grid health report",
      },
      {
        label: "Templates",
        count: 3,
        description:
          "Asset onboarding, tariff zone configuration, demand response enrollment",
      },
    ],

    challenges: {
      title: "The grid is more complex than ever",
      subtitle:
        "Distributed renewables, EV charging, and prosumer energy flows are pushing traditional grid management to its limits.",
      items: [
        {
          icon: Activity,
          title: "Grid Instability",
          desc: "Intermittent renewable generation creates unpredictable load imbalances that traditional SCADA systems can't detect and respond to fast enough.",
        },
        {
          icon: Eye,
          title: "Limited Visibility",
          desc: "Distribution networks lack sensor density, creating blind spots where faults develop undetected until customers report outages.",
        },
        {
          icon: BarChart3,
          title: "Rising Demand Volatility",
          desc: "EV adoption and heat pump growth are creating new demand peaks that existing capacity planning models weren't designed for.",
        },
      ],
    },

    howItWorks: {
      subtitle:
        "From grid edge to operations center — real-time intelligence at every voltage level.",
      steps: [
        {
          title: "Measure",
          desc: "Smart meters, inverters, and grid sensors stream high-frequency power quality and energy flow data into Magistrala over MQTT or HTTP at configurable intervals.",
        },
        {
          title: "Normalize",
          desc: "Incoming telemetry is timestamped, normalized by channel type, and partitioned by asset group — generation, distribution, or consumption — for clean analytics.",
        },
        {
          title: "Alert",
          desc: "Pre-configured power quality rules detect voltage excursions, harmonics, overloads, and anomalous consumption patterns in real time, firing alarms before damage occurs.",
        },
        {
          title: "Respond",
          desc: "Operators receive actionable alarms via dashboard. Demand response rules can trigger downstream actuation — load shedding, storage dispatch, or curtailment signals.",
        },
      ],
    },

    applications: {
      title: "Key Applications",
      subtitle: "What energy operators are running on this pack",
      items: [
        {
          icon: Gauge,
          title: "Load Balancing & Demand Response",
          desc: "Automated demand response programs shed controllable loads during peak periods, reducing grid stress and avoiding costly peak tariff charges.",
        },
        {
          icon: Leaf,
          title: "Renewable Generation Monitoring",
          desc: "Real-time solar and wind generation tracking with curtailment alerts, yield forecasting, and performance benchmarking against irradiance data.",
        },
        {
          icon: Zap,
          title: "Grid Fault Detection",
          desc: "Voltage sag, swell, and harmonic distortion detection across distribution feeders, enabling rapid fault isolation before customer impact.",
        },
        {
          icon: BarChart3,
          title: "Energy Audit & Reporting",
          desc: "Automated daily and monthly energy balance reports for utility billing reconciliation, regulatory submission, and carbon accounting.",
        },
      ],
    },

    benefits: [
      "Detect and respond to grid faults in seconds, not minutes — reducing outage duration and SAIDI scores",
      "Increase renewable utilization with real-time generation-to-demand matching",
      "Cut energy audit costs with automated reporting replacing manual data gathering",
      "Enable demand response programs with rules-based load control — no custom integration needed",
      "Sub-second telemetry resolution captures power quality events traditional meters miss",
      "Multi-tenant architecture lets distribution companies serve multiple network operators from one platform",
    ],

    faq: [
      {
        question:
          "What grid protocols and device types does the Smart Energy pack support?",
        answer:
          "Magistrala natively supports MQTT, HTTP, CoAP, and WebSocket. Smart meters and inverters using Modbus, IEC 61850, or DNP3 connect via an external protocol adapter that translates readings into one of the native protocols. New device types can be registered and mapped without redeploying the platform.",
      },
      {
        question: "How does demand response automation work?",
        answer:
          "Demand response rules monitor real-time load and generation data against configurable thresholds. When a threshold is breached, the rules engine triggers load-shedding commands, notifies dispatch operators, and logs the event for regulatory reporting — all without manual intervention.",
      },
      {
        question:
          "Can we monitor multiple grid zones or substations from one platform?",
        answer:
          "Yes. Magistrala's multi-tenant architecture lets you organize substations, feeders, and distributed energy resources into separate domains with their own access policies. A grid operator dashboard aggregates across all zones while individual domain views remain isolated.",
      },
      {
        question:
          "How is power quality event data handled for compliance reporting?",
        answer:
          "Sub-second telemetry resolution captures voltage sags, harmonics, and frequency deviations as they occur. Automated daily and monthly compliance reports are generated from raw event data, exportable in formats accepted by most regulatory submission portals.",
      },
    ],

    metaDescription:
      "Deploy smart grid monitoring and energy management in minutes. The Magistrala Smart Energy Pack includes pre-configured inverters, meters, demand response rules, and grid dashboards.",
    keywords: [
      "smart energy IoT",
      "grid monitoring platform",
      "demand response IoT",
      "renewable energy monitoring",
      "power quality monitoring",
      "Magistrala energy",
    ],
  },

  // ── Cold Storage ──────────────────────────────────────────────────────
  {
    title: "Cold Storage",
    slug: "cold-storage",
    icon: Thermometer,
    summary:
      "Ensure zero spoilage and strict regulatory compliance with continuous temperature and humidity monitoring.",
    description:
      "Protect perishable inventory and maintain cold chain compliance with a fully pre-configured monitoring platform. The Cold Chain Compliance Pack continuously tracks temperature, humidity, and door events across every zone — from warehouse cold rooms to refrigerated transport.",
    heroDetail:
      "The Cold Chain Compliance Pack is purpose-built for food manufacturers, pharmaceutical distributors, and logistics operators who face strict regulatory requirements around temperature-controlled storage and transport. It provides continuous monitoring of temperature, humidity, and access events across every zone in the cold chain — from production cold rooms and blast freezers to refrigerated trucks and last-mile delivery units. Automated exceedance alerts and HACCP-audit-ready reports are built directly into the pack, reducing the burden of manual compliance verification.",
    whyMagistrala:
      "Magistrala's reliable message delivery, persistent event store, and fine-grained alarm management give cold chain operators the evidence trail and real-time response capability that food safety regulations and pharmaceutical compliance frameworks require.",
    image: "/solutions/cold-storage.jpg",
    dashboardScreenshots: [
      {
        src: "/screenshots/dashboard-2.png",
        alt: "Cold chain multi-zone monitoring dashboard",
      },
      {
        src: "/screenshots/alarms-1.png",
        alt: "Temperature exceedance alarm management",
      },
      {
        src: "/screenshots/reports-1.png",
        alt: "Cold chain compliance and audit reports",
      },
      {
        src: "/screenshots/rules-engine-2.png",
        alt: "Temperature threshold rules configuration",
      },
    ],

    packName: "Cold Chain Compliance Pack",
    packTagline: "Continuous cold chain monitoring — compliant from day one.",
    packDescription:
      "A complete cold chain monitoring stack with pre-configured sensor clients, HACCP-compliant alert thresholds, automated exceedance reports, and multi-zone dashboards. Deploy across warehouses, transport fleets, and retail units with identical infrastructure.",
    packItems: [
      {
        label: "Clients",
        count: 30,
        description:
          "Temperature loggers, humidity sensors, door/hatch contacts, CO₂ probes",
      },
      {
        label: "Channels",
        count: 6,
        description:
          "Temperature, humidity, door events, CO₂, asset location, power status",
      },
      {
        label: "Groups",
        count: 4,
        description: "Blast freeze, cold room, chiller, refrigerated transport",
      },
      {
        label: "Rules",
        count: 25,
        description:
          "HACCP threshold breaches, door-open duration, defrost cycle anomalies, pre-alarm warnings",
      },
      {
        label: "Dashboards",
        count: 4,
        description:
          "Site overview, zone detail, exceedance log, transport tracking",
      },
      {
        label: "Alarms",
        count: 20,
        description:
          "Temperature exceedance (warning + critical), door-open alarms, sensor communication loss",
      },
      {
        label: "Report Templates",
        count: 5,
        description:
          "Daily temperature log, HACCP exceedance report, monthly compliance summary, audit-ready PDF export",
      },
      {
        label: "Templates",
        count: 3,
        description: "Zone onboarding, HACCP plan import, escalation routing",
      },
    ],

    challenges: {
      title: "Silent failures destroy perishable inventory",
      subtitle:
        "Cold chain failures are often discovered too late — after stock is spoiled, audits are failed, or regulators are already notified.",
      items: [
        {
          icon: AlertTriangle,
          title: "Silent Exceedances",
          desc: "Manual logging and periodic checks miss temperature exceedances that occur during off-hours, defrost cycles, or door events in busy operations.",
        },
        {
          icon: ShieldAlert,
          title: "Audit & Compliance Risk",
          desc: "Paper-based logs are incomplete, tampered, or simply missing when food safety regulators or pharmaceutical QA auditors arrive on site.",
        },
        {
          icon: DollarSign,
          title: "Reactive Spoilage Response",
          desc: "Without real-time alerts, equipment failures and temperature exceedances are only discovered after stock is already lost — often representing significant financial exposure.",
        },
      ],
    },

    howItWorks: {
      subtitle:
        "Continuous monitoring from sensor to audit-ready report — automated.",
      steps: [
        {
          title: "Monitor",
          desc: "Temperature and humidity loggers transmit readings every 1–15 minutes via MQTT or LoRaWAN. Door sensors fire events on open/close. All data flows into pre-defined cold chain channels.",
        },
        {
          title: "Alert",
          desc: "HACCP threshold rules evaluate every incoming reading. Warning alarms fire before critical limits are reached, giving operators time to intervene before stock is compromised.",
        },
        {
          title: "Escalate",
          desc: "Unacknowledged alarms escalate through configurable notification chains — site manager, quality manager, on-call technician — until the exceedance is addressed and logged.",
        },
        {
          title: "Report",
          desc: "Automated daily temperature logs and exceedance reports are generated from verified sensor data. Audit-ready PDF exports can be triggered on demand or scheduled automatically.",
        },
      ],
    },

    applications: {
      title: "Key Applications",
      subtitle: "Where the Cold Chain Pack is deployed today",
      items: [
        {
          icon: Thermometer,
          title: "HACCP Compliance Monitoring",
          desc: "Continuous, automated HACCP critical control point monitoring with timestamped, tamper-evident data ready for food safety audits.",
        },
        {
          icon: Truck,
          title: "Refrigerated Transport Tracking",
          desc: "In-transit temperature and location monitoring for refrigerated vehicles. Exceedance events are logged with GPS position for chain-of-custody records.",
        },
        {
          icon: Activity,
          title: "Equipment Health Monitoring",
          desc: "Compressor performance analysis and defrost cycle monitoring flag equipment degradation before it causes a catastrophic failure.",
        },
        {
          icon: FileBarChart,
          title: "Regulatory Reporting",
          desc: "Automated generation of regulatory-format temperature reports for food safety authorities, pharmaceutical QA, and retail audit programs.",
        },
      ],
    },

    benefits: [
      "Eliminate stock losses with real-time alerts before exceedances become spoilage events",
      "Pass food safety and pharmaceutical cold chain audits with automated, audit-ready data exports",
      "Reduce manual logging labor — sensors and automated reports replace paper-based processes entirely",
      "HACCP-compliant alert thresholds are pre-configured and can be customized per zone or product type",
      "Multi-site visibility from a single dashboard — manage warehouses, transport, and retail from one platform",
      "Full alarm acknowledgment tracking with responsible-party attribution for regulatory accountability",
    ],

    faq: [
      {
        question: "Which temperature sensor types and protocols are supported?",
        answer:
          "Magistrala natively supports MQTT, HTTP, CoAP, and WebSocket. Cold chain loggers using proprietary wireless protocols (BLE, Zigbee, LoRaWAN) or wired buses (RS-485, 1-Wire) connect via an external protocol adapter or gateway. Sensors from major cold chain hardware vendors are supported this way without firmware changes.",
      },
      {
        question: "How does the system handle HACCP threshold breaches?",
        answer:
          "Pre-configured HACCP rules evaluate temperature readings in real time. When a threshold breach is detected, the platform immediately fires alerts to responsible parties via email, SMS, and webhook, logs the event with device ID and timestamp, and requires acknowledgment before clearing — maintaining a full audit trail.",
      },
      {
        question: "Can I manage cold chain monitoring across multiple sites?",
        answer:
          "Yes. Each facility, vehicle, or retail location is a separate domain with its own device groups, alert rules, and user roles. A central operations dashboard aggregates status across all sites, while site managers see only their own assets.",
      },
      {
        question: "How are compliance reports generated for audits?",
        answer:
          "Automated daily, weekly, and monthly reports are generated from raw sensor data and exported in PDF or CSV formats. Reports include exceedance summaries, acknowledgment records, and mean kinetic temperature calculations — ready for submission to food safety and pharmaceutical regulatory bodies.",
      },
    ],

    metaDescription:
      "Deploy cold chain monitoring and HACCP compliance infrastructure in minutes. The Magistrala Cold Chain Pack includes temperature sensors, compliance rules, and audit-ready reporting.",
    keywords: [
      "cold chain monitoring IoT",
      "HACCP compliance platform",
      "temperature monitoring system",
      "cold storage IoT",
      "food safety IoT",
      "Magistrala cold chain",
    ],
  },

  // ── Smart Farming ─────────────────────────────────────────────────────
  {
    title: "Smart Farming",
    slug: "smart-farming",
    icon: Sprout,
    summary:
      "Maximize agricultural yield via predictive models and real-time soil, weather, and crop analytics.",
    description:
      "Give farmers and agribusinesses the data infrastructure to make precision decisions on irrigation, fertilization, pest management, and harvest timing. The Precision Agriculture Pack connects field sensors to actionable dashboards with zero setup complexity.",
    heroDetail:
      "The Precision Agriculture Pack provides farmers and agribusinesses with the data infrastructure to make precision agronomic decisions at field scale. It connects soil moisture probes, microclimate weather stations, nutrient sensors, and irrigation controllers into a unified data platform with pre-built analytics for crop stress detection, irrigation scheduling, and yield prediction. The pack supports both open-field crops and controlled environment agriculture, scaling from single-farm deployments to large multi-site enterprise operations.",
    whyMagistrala:
      "Magistrala's open protocol support lets you connect any sensor brand or gateway technology without hardware replacement, while its edge-compatible architecture ensures farm operations continue even with the intermittent connectivity that is common in rural field environments.",
    image: "/solutions/smart-farming.jpg",
    dashboardScreenshots: [
      {
        src: "/screenshots/dashboard-1.png",
        alt: "Precision agriculture field monitoring dashboard",
      },
      {
        src: "/screenshots/rules-engine-1.png",
        alt: "Irrigation automation rules configuration",
      },
      {
        src: "/screenshots/alarms-2.png",
        alt: "Crop stress and soil condition alarms",
      },
      {
        src: "/screenshots/reports-2.png",
        alt: "Seasonal yield and resource efficiency reports",
      },
    ],

    packName: "Precision Agriculture Pack",
    packTagline:
      "Field-to-dashboard intelligence — deploy before the next season.",
    packDescription:
      "A complete precision agriculture IoT stack with pre-configured soil, weather, and microclimate sensor clients. Irrigation automation rules, crop stress dashboards, and seasonal yield reports are included — tailored to field, greenhouse, and orchard environments.",
    packItems: [
      {
        label: "Clients",
        count: 35,
        description:
          "Soil moisture probes, weather stations, leaf wetness sensors, dendrometers, flow meters",
      },
      {
        label: "Channels",
        count: 8,
        description:
          "Soil moisture, temperature, humidity, rainfall, wind, crop stress, irrigation flow, pest index",
      },
      {
        label: "Groups",
        count: 3,
        description: "Field crops, greenhouse, orchard / permanent crops",
      },
      {
        label: "Rules",
        count: 12,
        description:
          "Irrigation trigger (VWC threshold), frost warning, heat stress, disease risk index alerts",
      },
      {
        label: "Dashboards",
        count: 3,
        description:
          "Field overview, irrigation management, crop stress & alerts",
      },
      {
        label: "Alarms",
        count: 10,
        description:
          "Frost risk, drought stress, disease pressure index, sensor battery low, irrigation over-run",
      },
      {
        label: "Report Templates",
        count: 3,
        description:
          "Weekly irrigation summary, monthly crop health report, seasonal water usage audit",
      },
      {
        label: "Templates",
        count: 3,
        description:
          "Field setup, sensor placement guide, irrigation zone configuration",
      },
    ],

    challenges: {
      title: "Guesswork is costing farms yield and water",
      subtitle:
        "Irrigation timing, pest management, and harvest decisions made without sensor data consistently underperform — and over-irrigating is both expensive and damaging.",
      items: [
        {
          icon: Droplets,
          title: "Water Waste",
          desc: "Calendar-based irrigation ignores actual soil moisture and evapotranspiration conditions, routinely over-irrigating by 20–40% and leaching nutrients.",
        },
        {
          icon: AlertTriangle,
          title: "Unpredictable Yields",
          desc: "Crop stress events — frost, heat, drought, disease pressure — go undetected until visible symptoms appear, when intervention is often already too late.",
        },
        {
          icon: Eye,
          title: "Manual Scouting Overhead",
          desc: "Labour-intensive manual monitoring across large farms can't achieve the sensor resolution needed for precision decisions.",
        },
      ],
    },

    howItWorks: {
      subtitle:
        "From field sensors to automated irrigation and crop decisions.",
      steps: [
        {
          title: "Sense",
          desc: "Soil probes, weather stations, and microclimate sensors stream readings into Magistrala over LoRaWAN or MQTT at intervals configured per sensor type and crop stage.",
        },
        {
          title: "Contextualize",
          desc: "Incoming telemetry is tagged with field zone, crop type, and growth stage. Groups and channels structure the data for per-field analysis and cross-farm comparisons.",
        },
        {
          title: "Decide",
          desc: "Evapotranspiration and volumetric water content rules evaluate soil and weather data continuously. Frost risk, heat stress, and disease pressure indices fire alarms when thresholds are exceeded.",
        },
        {
          title: "Automate",
          desc: "Irrigation trigger rules dispatch control signals to valve controllers and pump systems. Alerts notify agronomists for interventions requiring human judgement.",
        },
      ],
    },

    applications: {
      title: "Key Applications",
      subtitle: "Precision agriculture use cases running on this pack",
      items: [
        {
          icon: Droplets,
          title: "Precision Irrigation",
          desc: "VWC-based irrigation scheduling replaces calendar timers with real soil data, reducing water use by 20–35% without yield impact.",
        },
        {
          icon: Activity,
          title: "Crop Stress Monitoring",
          desc: "Continuous tracking of heat stress, water deficit, and disease pressure indices allows proactive agronomic interventions before visible symptoms.",
        },
        {
          icon: CloudRain,
          title: "Frost & Weather Alerting",
          desc: "Microclimate frost risk alerts give operators a 2–4 hour warning window to activate frost protection measures for vulnerable crops.",
        },
        {
          icon: LineChart,
          title: "Seasonal Yield Analysis",
          desc: "Historical sensor data and yield correlations improve season-on-season decision quality for irrigation, nutrition, and harvest timing.",
        },
      ],
    },

    benefits: [
      "Reduce water consumption by 20–35% with soil moisture-based irrigation scheduling",
      "Detect frost, disease pressure, and heat stress events before visible crop damage occurs",
      "Eliminate manual scouting overhead with continuous automated field monitoring",
      "Improve yield predictability by correlating sensor data with historical crop performance",
      "Scale from pilot field to full farm without re-configuration — add sensors in minutes",
      "Comply with water use regulations and sustainability audits with automated water consumption reports",
    ],

    faq: [
      {
        question: "What types of agricultural sensors does the pack support?",
        answer:
          "Magistrala natively supports MQTT, HTTP, CoAP, and WebSocket. Sensors using SDI-12, RS-485, or LoRaWAN connect via an external protocol adapter or gateway that forwards readings into one of the native protocols. Weather stations, leaf wetness sensors, and dendrometers from major agri-hardware vendors are supported this way.",
      },
      {
        question: "How does automated irrigation scheduling work?",
        answer:
          "Irrigation rules evaluate real-time soil moisture readings against configurable VWC thresholds for each field zone. When moisture drops below the target level, the rules engine opens the relevant valve controller and logs the irrigation event. Rain sensor inputs override scheduled runs automatically.",
      },
      {
        question: "Can I monitor multiple farms or fields from one platform?",
        answer:
          "Yes. Each farm, field, or crop zone is an isolated domain with its own sensors, rules, and dashboards. A farm manager sees their own operations while an agronomist account can be granted cross-farm read access for advisory purposes — all enforced by fine-grained RBAC.",
      },
      {
        question:
          "How does the platform help with water regulation compliance?",
        answer:
          "Automated water usage logs record every irrigation event with volume, duration, and zone data. Monthly reports are generated from this data and can be exported for submission to water authorities. Configurable water budget rules prevent over-allocation by blocking additional irrigation runs when seasonal limits are reached.",
      },
    ],

    metaDescription:
      "Deploy precision agriculture IoT infrastructure in minutes. The Magistrala Smart Farming Pack includes soil sensors, weather stations, irrigation automation rules, and crop monitoring dashboards.",
    keywords: [
      "precision agriculture IoT",
      "smart farming platform",
      "soil moisture monitoring",
      "irrigation automation IoT",
      "crop stress monitoring",
      "Magistrala agriculture",
    ],
  },

  // ── Oil & Gas ─────────────────────────────────────────────────────────
  {
    title: "Oil & Gas",
    slug: "oil-gas",
    icon: Gauge,
    summary:
      "Monitor remote pipelines and predict pump failures before they cause costly downtime in harsh environments.",
    description:
      "Deploy enterprise-grade pipeline integrity monitoring, remote asset management, and predictive maintenance infrastructure across upstream, midstream, and downstream operations. The Pipeline & Asset Intelligence Pack is pre-built for the reliability and security demands of the oil and gas sector.",
    heroDetail:
      "The Pipeline & Asset Intelligence Pack addresses the reliability and safety demands of upstream, midstream, and downstream oil and gas operations. It provides continuous telemetry from pipeline integrity sensors, pump performance monitors, pressure transmitters, and leak detection systems across both fixed facilities and remote unmanned locations. The pack is pre-configured for the data reliability, redundancy, and security requirements of safety-critical industrial environments, and integrates with standard industrial communication protocols used across the sector.",
    whyMagistrala:
      "Magistrala's industrial protocol support — including MQTT over TLS for low-bandwidth remote links — combined with its role-based access control and data isolation guarantees, makes it a fit for the security and reliability standards that oil and gas operators must meet.",
    image: "/solutions/oil-and-gas.jpg",
    dashboardScreenshots: [
      {
        src: "/screenshots/industrial-gateway.png",
        alt: "Industrial gateway configuration for oil and gas assets",
      },
      {
        src: "/screenshots/dashboard-2.png",
        alt: "Pipeline and asset monitoring dashboard",
      },
      {
        src: "/screenshots/alarms-1.png",
        alt: "Safety-critical asset alarm management",
      },
      {
        src: "/screenshots/rules-engine-1.png",
        alt: "Leak detection and anomaly rules engine",
      },
    ],

    packName: "Pipeline & Asset Intelligence Pack",
    packTagline:
      "Remote asset intelligence for critical energy infrastructure.",
    packDescription:
      "A complete industrial IoT stack for oil and gas asset monitoring. Pre-configured SCADA-grade clients, pressure and flow monitoring channels, leak detection rules, and safety-critical alarm management are included — deployable in field, platform, or remote pipeline environments.",
    packItems: [
      {
        label: "Clients",
        count: 60,
        description:
          "Pressure transmitters, flow meters, gas detectors, vibration sensors, compressor monitors",
      },
      {
        label: "Channels",
        count: 15,
        description:
          "Pressure, flow, temperature, vibration, gas detection, corrosion, valve status, power",
      },
      {
        label: "Groups",
        count: 5,
        description:
          "Upstream wellheads, pipeline segments, compressor stations, storage, downstream processing",
      },
      {
        label: "Rules",
        count: 30,
        description:
          "Pressure drop anomaly (leak indicator), gas leak threshold, pump vibration baseline deviation, over-pressure lockout",
      },
      {
        label: "Dashboards",
        count: 6,
        description:
          "Pipeline overview, asset health, gas detection, compressor performance, maintenance backlog, executive KPIs",
      },
      {
        label: "Alarms",
        count: 25,
        description:
          "Safety-critical gas alarms, pipeline integrity alerts, equipment failure predictions, communication loss on remote assets",
      },
      {
        label: "Report Templates",
        count: 6,
        description:
          "Daily operations report, pipeline integrity summary, maintenance activity log, regulatory compliance export",
      },
      {
        label: "Templates",
        count: 4,
        description:
          "Well site onboarding, pipeline segment configuration, safety alarm routing, maintenance workflow",
      },
    ],

    challenges: {
      title: "Remote assets are invisible until they fail",
      subtitle:
        "Unplanned shutdowns in oil and gas cost industry an estimated $38B annually. Most failures are detectable weeks in advance — if the right monitoring is in place.",
      items: [
        {
          icon: AlertTriangle,
          title: "Unplanned Downtime",
          desc: "Pump failures, compressor trips, and pipeline ruptures occur without warning when asset health data isn't collected or analyzed continuously.",
        },
        {
          icon: Globe,
          title: "Remote Asset Blind Spots",
          desc: "Wellheads, pipeline segments, and compressor stations in remote or offshore locations have limited connectivity, creating gaps in operational visibility.",
        },
        {
          icon: ShieldAlert,
          title: "Safety & Compliance Risk",
          desc: "Missed gas leak detection events and delayed safety alarm responses create both operational risk and regulatory exposure for operating companies.",
        },
      ],
    },

    howItWorks: {
      subtitle:
        "From field instrument to SCADA-grade operations center — in one platform.",
      steps: [
        {
          title: "Connect",
          desc: "Pressure transmitters, flow meters, gas detectors, and vibration sensors connect over MQTT, Modbus-over-TCP, or HTTP adapters. Remote sites use cellular or satellite backhaul.",
        },
        {
          title: "Stream",
          desc: "High-frequency telemetry flows into dedicated channels by asset type. Edge buffering handles connectivity gaps in remote locations — no data is lost during outages.",
        },
        {
          title: "Detect",
          desc: "Leak indication rules flag pressure-drop anomalies across pipeline segments. Gas concentration thresholds trigger safety alarms. Vibration baselines identify impending bearing or seal failures.",
        },
        {
          title: "Respond",
          desc: "Safety-critical alarms trigger immediate notifications to control room operators and field crews. Maintenance predictions create work orders in integrated maintenance systems.",
        },
      ],
    },

    applications: {
      title: "Key Applications",
      subtitle: "Oil and gas operations running on this pack",
      items: [
        {
          icon: Activity,
          title: "Pipeline Integrity Monitoring",
          desc: "Continuous pressure and flow monitoring across pipeline segments detects slow leak signatures days before traditional inspection would identify them.",
        },
        {
          icon: Wrench,
          title: "Predictive Maintenance",
          desc: "Vibration, temperature, and motor current analysis on pumps and compressors identifies bearing wear and seal degradation weeks before failure.",
        },
        {
          icon: Flame,
          title: "Gas Leak Detection",
          desc: "Multi-point gas sensor monitoring with wind-direction-aware alarm logic provides accurate source attribution for rapid emergency response.",
        },
        {
          icon: Cpu,
          title: "Remote Asset SCADA",
          desc: "Real-time wellhead and compressor station monitoring replaces manual site visits and integrates with existing SCADA systems via standard protocols.",
        },
      ],
    },

    benefits: [
      "Detect pipeline leak indicators days or weeks before physical inspection — preventing major ruptures",
      "Reduce unplanned downtime by up to 40% with predictive maintenance on rotating equipment",
      "Eliminate safety blind spots with continuous gas detection and safety-critical alarm management",
      "Reduce helicopter and truck inspection costs with remote asset monitoring replacing manual site visits",
      "Meet regulatory reporting requirements with automated pipeline integrity and maintenance records",
      "Industrial-grade security with per-asset credentials, encrypted telemetry, and full audit trails",
    ],

    faq: [
      {
        question: "What industrial protocols does the Oil & Gas pack support?",
        answer:
          "Magistrala natively supports MQTT, HTTP, CoAP, and WebSocket. Industrial field instruments using Modbus, HART, or OPC-UA connect via an external protocol adapter that translates readings into one of the native protocols. Pressure transmitters, flow meters, gas detectors, and vibration sensors from major vendors are supported this way.",
      },
      {
        question: "How are safety-critical alarms managed and escalated?",
        answer:
          "Safety-critical rules evaluate sensor data against configurable thresholds in real time. Breaches trigger immediate multi-channel alerts — email, SMS, and SCADA webhooks — with mandatory acknowledgment workflows. Unacknowledged alarms auto-escalate to the next responsible party on a configurable schedule.",
      },
      {
        question:
          "Can the platform operate in remote or intermittent-connectivity environments?",
        answer:
          "Yes. Edge gateway nodes buffer messages locally during connectivity gaps and replay them in order when the link is restored. Time-series data arrives with original device timestamps, ensuring dashboards and analytics reflect accurate event sequences without data gaps.",
      },
      {
        question: "How does predictive maintenance work with the pack?",
        answer:
          "Vibration and temperature data from rotating equipment is evaluated against baseline profiles and configurable anomaly rules. When degradation patterns emerge — rising bearing temperature, abnormal vibration frequency — alerts fire before failure occurs, enabling planned maintenance instead of emergency shutdowns.",
      },
    ],

    metaDescription:
      "Deploy pipeline integrity monitoring and predictive maintenance IoT infrastructure in minutes. The Magistrala Oil & Gas Pack includes pre-configured sensors, leak detection rules, and safety dashboards.",
    keywords: [
      "oil gas IoT monitoring",
      "pipeline integrity platform",
      "predictive maintenance IoT",
      "gas leak detection system",
      "remote asset monitoring",
      "Magistrala oil gas",
    ],
  },

  // ── Smart Irrigation ──────────────────────────────────────────────────
  {
    title: "Smart Irrigation",
    slug: "smart-irrigation",
    icon: CloudRain,
    summary:
      "Trigger precise watering schedules automatically based on live soil moisture and weather forecast data.",
    description:
      "Replace manual and calendar-based irrigation schedules with real-time, sensor-driven automation. The Smart Irrigation Pack connects soil moisture sensors, weather stations, and valve controllers into a fully automated, decision-making irrigation platform.",
    heroDetail:
      "The Smart Irrigation Pack transforms manual and calendar-driven irrigation programs into responsive, data-driven automation. It integrates soil moisture sensors, weather station feeds, evapotranspiration models, and valve controllers into a single decision-making platform that automatically triggers, adjusts, and reports on irrigation events. The pack is designed for commercial horticulture, turf management, parks, and municipal landscape operations — providing measurable water savings, root-zone precision, and plant health insights without custom programming.",
    whyMagistrala:
      "Magistrala's rule engine enables multi-condition irrigation triggers — combining soil VWC thresholds, weather forecast data, and scheduled watering windows — while its device command capabilities provide the two-way valve control needed for fully automated field operations.",
    image: "/solutions/smart-irrigation.jpg",
    dashboardScreenshots: [
      {
        src: "/screenshots/dashboard-1.png",
        alt: "Smart irrigation zone management dashboard",
      },
      {
        src: "/screenshots/rules-engine-2.png",
        alt: "Soil moisture and ET-based irrigation rules",
      },
      {
        src: "/screenshots/reports-1.png",
        alt: "Water usage and irrigation efficiency reports",
      },
      {
        src: "/screenshots/alarms-2.png",
        alt: "Irrigation system fault and threshold alarms",
      },
    ],

    packName: "Smart Irrigation Pack",
    packTagline: "Sensor-driven irrigation — deploy and stop wasting water.",
    packDescription:
      "A complete irrigation automation platform with pre-configured soil sensors, weather integration, valve control clients, and VWC-based scheduling rules. Designed for commercial horticulture, golf courses, parks, and large-scale landscaping operations.",
    packItems: [
      {
        label: "Clients",
        count: 20,
        description:
          "Soil moisture probes, weather stations, flow meters, valve controllers, rain sensors",
      },
      {
        label: "Channels",
        count: 5,
        description:
          "Soil VWC, weather, irrigation flow, valve status, water budget",
      },
      {
        label: "Groups",
        count: 3,
        description:
          "Irrigation zones: high-demand, standard, drought-tolerant",
      },
      {
        label: "Rules",
        count: 10,
        description:
          "VWC-triggered irrigation start/stop, rain sensor override, daily water budget enforcement, frost hold",
      },
      {
        label: "Dashboards",
        count: 2,
        description: "Zone management overview, water usage & budget tracker",
      },
      {
        label: "Alarms",
        count: 8,
        description:
          "Sensor battery low, valve stuck open/closed, water budget exceeded, flow anomaly (leak indicator)",
      },
      {
        label: "Report Templates",
        count: 3,
        description:
          "Weekly water usage summary, monthly water savings vs. baseline, zone performance report",
      },
      {
        label: "Templates",
        count: 2,
        description: "Zone onboarding, irrigation schedule configuration",
      },
    ],

    challenges: {
      title: "Calendar irrigation wastes water and stresses crops",
      subtitle:
        "Fixed-schedule irrigation systems ignore actual soil conditions, weather events, and plant needs — leading to both over-watering and drought stress.",
      items: [
        {
          icon: Droplets,
          title: "Over-Irrigation",
          desc: "Fixed schedules continue watering through rain events and after rainfall, wasting significant water volumes and leaching nutrients from the root zone.",
        },
        {
          icon: AlertTriangle,
          title: "Crop & Turf Stress",
          desc: "Conversely, hot or windy periods between scheduled irrigation cycles cause avoidable drought stress that impacts quality and yield.",
        },
        {
          icon: DollarSign,
          title: "High Water & Energy Costs",
          desc: "Inefficient irrigation is directly reflected in water utility bills and pumping energy costs — both of which are amenable to significant savings with sensor feedback.",
        },
      ],
    },

    howItWorks: {
      subtitle:
        "From soil sensor to valve — fully automated, weather-aware irrigation.",
      steps: [
        {
          title: "Sense",
          desc: "Soil moisture probes at root depth and weather stations stream continuous VWC, temperature, humidity, rainfall, and wind data into Magistrala.",
        },
        {
          title: "Evaluate",
          desc: "VWC rules compare current soil moisture against crop-specific target ranges. Evapotranspiration calculations factor in weather data to determine real-time irrigation demand.",
        },
        {
          title: "Schedule",
          desc: "Irrigation trigger rules fire valve-open commands when soil VWC drops below threshold — and valve-close commands when the target is reached or rain is detected.",
        },
        {
          title: "Report",
          desc: "Water usage data is aggregated by zone and compared against baseline estimates. Automated weekly and monthly reports show savings vs. calendar-based benchmarks.",
        },
      ],
    },

    applications: {
      title: "Key Applications",
      subtitle: "Where smart irrigation is deployed with this pack",
      items: [
        {
          icon: Droplets,
          title: "Zone-Based Precision Irrigation",
          desc: "Individual irrigation zones are managed by independent VWC rules, matching water delivery to the specific needs of each soil type and plant variety.",
        },
        {
          icon: CloudRain,
          title: "Weather-Responsive Scheduling",
          desc: "Rain sensor and weather data integration provides automatic irrigation holds during and after rainfall events, preventing over-watering and nutrient runoff.",
        },
        {
          icon: Gauge,
          title: "Water Budget Management",
          desc: "Daily and monthly water budget rules enforce usage limits, ensuring compliance with water authority restrictions during drought periods.",
        },
        {
          icon: Activity,
          title: "Leak Detection",
          desc: "Flow meter anomaly rules detect continuous flow when valves should be closed — flagging broken pipes, stuck valve actuators, or vandalism events.",
        },
      ],
    },

    benefits: [
      "Reduce irrigation water use by 20–40% compared to calendar-based schedules",
      "Eliminate crop and turf stress from under-irrigation with continuous soil moisture feedback",
      "Automatic rain sensor overrides prevent wasteful irrigation during and after rainfall",
      "Comply with water authority restrictions using built-in water budget rules and usage reporting",
      "Detect irrigation leaks automatically with flow meter anomaly detection",
      "Scale from single site to multi-property portfolio without re-configuration — add zones instantly",
    ],

    faq: [
      {
        question: "What irrigation controllers and valve types are supported?",
        answer:
          "Magistrala natively supports MQTT, HTTP, CoAP, and WebSocket. Valve controllers that publish over MQTT connect directly. Controllers using Modbus or proprietary protocols connect via an external adapter. Valve open/close commands are published through Magistrala channels and execute with sub-second latency.",
      },
      {
        question:
          "How does soil moisture-based scheduling differ from timer-based systems?",
        answer:
          "Timer-based systems water on a fixed schedule regardless of actual soil conditions — leading to overwatering after rain or underwatering during heat spikes. Magistrala evaluates real-time volumetric water content and only opens valves when moisture genuinely drops below the target threshold for each zone.",
      },
      {
        question:
          "Can I manage irrigation across multiple properties or sites?",
        answer:
          "Yes. Each property or irrigation zone is an isolated domain with its own sensors, valve rules, and dashboards. A portfolio manager can view water usage and system status across all sites from a single aggregated dashboard, while site operators manage only their own zones.",
      },
      {
        question:
          "How are water authority restrictions enforced automatically?",
        answer:
          "Configurable water budget rules track cumulative usage per day, week, or month. When a site approaches its permitted allocation, the rules engine throttles irrigation runs and alerts the operator. Rain sensor overrides and ET-based adjustments can be layered on top to further reduce waste.",
      },
    ],

    metaDescription:
      "Deploy sensor-driven smart irrigation automation in minutes. The Magistrala Smart Irrigation Pack includes soil sensors, VWC-based scheduling rules, valve control, and water usage dashboards.",
    keywords: [
      "smart irrigation IoT",
      "soil moisture irrigation control",
      "precision irrigation system",
      "water saving irrigation",
      "golf irrigation IoT",
      "Magistrala irrigation",
    ],
  },

  // ── Air Quality Monitoring ─────────────────────────────────────────────
  {
    title: "Air Quality Monitoring",
    slug: "air-quality",
    icon: Wind,
    summary:
      "Track PM2.5, CO₂, and pollutants across zones to ensure regulatory compliance and protect public health.",
    description:
      "Deploy a comprehensive air quality monitoring network across indoor and outdoor environments. The Air Quality & Compliance Pack connects multi-pollutant sensors to real-time dashboards, automated regulatory reporting, and public health alert systems — pre-configured and ready in minutes.",
    heroDetail:
      "The Air Quality & Compliance Pack is designed for smart city operators, industrial environmental managers, and building facility teams who need continuous, defensible air quality data across distributed sensor networks. It monitors a full range of pollutants — PM2.5, PM10, CO₂, NO₂, O₃, and VOCs — in real time, with automatic exceedance detection and regulatory threshold alerting. The pack includes pre-built compliance reports formatted for standard environmental reporting frameworks, significantly reducing the manual effort of periodic regulatory audits.",
    whyMagistrala:
      "Magistrala's scalable message ingestion and persistent time-series storage provide the data fidelity and retention that regulatory compliance frameworks require, while the built-in rule engine automates the threshold monitoring that would otherwise demand custom application development.",
    image: "/solutions/air-quality.jpg",
    dashboardScreenshots: [
      {
        src: "/screenshots/dashboard-2.png",
        alt: "Air quality monitoring network dashboard",
      },
      {
        src: "/screenshots/alarms-2.png",
        alt: "Pollutant exceedance and health alert management",
      },
      {
        src: "/screenshots/reports-2.png",
        alt: "Regulatory air quality compliance reports",
      },
      {
        src: "/screenshots/rules-engine-1.png",
        alt: "Air quality threshold rules configuration",
      },
    ],

    packName: "Air Quality & Compliance Pack",
    packTagline:
      "Real-time air quality monitoring — compliant and deployed instantly.",
    packDescription:
      "A complete air quality IoT stack with pre-configured multi-pollutant sensor clients, regulatory threshold rules, exceedance dashboards, and automated compliance reports. Designed for smart cities, industrial facilities, and building operators managing indoor air quality.",
    packItems: [
      {
        label: "Clients",
        count: 25,
        description:
          "PM2.5/PM10 sensors, CO₂ monitors, VOC detectors, NO₂/O₃ analyzers, weather stations",
      },
      {
        label: "Channels",
        count: 6,
        description:
          "Particulate matter, CO₂, VOC, NOₓ, O₃, meteorological conditions",
      },
      {
        label: "Groups",
        count: 3,
        description:
          "Outdoor ambient, indoor/occupied spaces, industrial boundary",
      },
      {
        label: "Rules",
        count: 15,
        description:
          "WHO/EPA/EU regulatory threshold alerts, AQI category transitions, sustained exceedance detection, calibration drift alerts",
      },
      {
        label: "Dashboards",
        count: 3,
        description:
          "Public AQI heatmap, indoor air quality, regulatory compliance tracker",
      },
      {
        label: "Alarms",
        count: 12,
        description:
          "Unhealthy AQI level alerts, regulatory exceedance notifications, sensor calibration alerts, communication loss",
      },
      {
        label: "Report Templates",
        count: 4,
        description:
          "Daily AQI summary, monthly pollutant trend report, regulatory submission export, industrial boundary exceedance log",
      },
      {
        label: "Templates",
        count: 3,
        description:
          "Sensor network onboarding, regulatory limit configuration by jurisdiction, alert routing by pollutant",
      },
    ],

    challenges: {
      title: "Air quality risks are invisible until harm is done",
      subtitle:
        "Pollutant exposure impacts public health, productivity, and regulatory compliance — but without continuous monitoring, exceedances go undetected for hours or days.",
      items: [
        {
          icon: Eye,
          title: "Invisible Compliance Gaps",
          desc: "Manual sampling and infrequent measurement miss acute pollution events that breach regulatory limits, creating undetected compliance exposure for operators and municipalities.",
        },
        {
          icon: ShieldAlert,
          title: "Public Health Risk",
          desc: "Without real-time AQI monitoring, vulnerable populations — schools, hospitals, care homes — aren't notified during high-pollution events when protective action is needed.",
        },
        {
          icon: FileBarChart,
          title: "Manual Reporting Burden",
          desc: "Compiling regulatory submissions from manual sampling and disparate sensor logs is time-consuming, error-prone, and creates delays in compliance reporting.",
        },
      ],
    },

    howItWorks: {
      subtitle:
        "From sensor network to regulatory report — continuous and automated.",
      steps: [
        {
          title: "Measure",
          desc: "Multi-pollutant sensors stream PM2.5, PM10, CO₂, NO₂, O₃, and VOC readings at 1-minute intervals via MQTT into pre-built pollutant-specific channels.",
        },
        {
          title: "Contextualize",
          desc: "Readings are tagged with sensor location, zone type (indoor/outdoor/industrial), and correlated with meteorological data for dispersion context and regulatory categorization.",
        },
        {
          title: "Alert",
          desc: "WHO, EPA, and EU Air Quality Directive threshold rules fire alarms at configurable warning and limit values. AQI category transitions trigger real-time notifications to operators and public systems.",
        },
        {
          title: "Report",
          desc: "Automated daily summaries and monthly trend reports compile verified sensor data into regulatory-format exports. Industrial boundary exceedance logs are generated automatically for permit compliance.",
        },
      ],
    },

    applications: {
      title: "Key Applications",
      subtitle: "Air quality monitoring deployments using this pack",
      items: [
        {
          icon: Wind,
          title: "Urban AQI Networks",
          desc: "Dense sensor networks across city districts provide neighborhood-level air quality data for public information systems, smart city dashboards, and pollution mapping.",
        },
        {
          icon: Activity,
          title: "Indoor Air Quality Management",
          desc: "CO₂ and VOC monitoring in offices, schools, and public buildings drives HVAC automation and ventilation alerts to maintain healthy indoor environments.",
        },
        {
          icon: Factory,
          title: "Industrial Boundary Monitoring",
          desc: "Perimeter sensor networks at industrial facilities continuously monitor regulated pollutants, providing automated permit compliance evidence and exceedance alerts.",
        },
        {
          icon: GitMerge,
          title: "Regulatory Compliance Reporting",
          desc: "Automated generation of regulatory-format air quality reports for environmental agency submissions, reducing compliance administration overhead significantly.",
        },
      ],
    },

    benefits: [
      "Detect regulatory exceedances in real time — minutes after they occur, not days after manual review",
      "Protect public health with automated AQI alerts for sensitive locations like schools and hospitals",
      "Eliminate manual reporting labor with automated regulatory submission reports",
      "Deploy anywhere from urban ambient networks to industrial boundary monitoring with the same platform",
      "WHO, EPA, and EU Air Quality Directive thresholds are pre-configured and adjustable per jurisdiction",
      "Multi-tenant architecture lets environmental agencies manage multiple operator networks from one platform",
    ],

    faq: [
      {
        question:
          "What pollutants and sensor types does the Air Quality pack support?",
        answer:
          "Magistrala natively supports MQTT, HTTP, CoAP, and WebSocket. Air quality sensors reporting over MQTT connect directly. Sensors using Modbus or LoRaWAN connect via an external protocol adapter. PM2.5, PM10, NO2, O3, CO, SO2, VOC, and CO2 sensors from major vendors are supported this way, both indoors and outdoors.",
      },
      {
        question:
          "How are AQI thresholds configured for different regulatory standards?",
        answer:
          "WHO, US EPA, and EU Air Quality Directive thresholds are pre-configured as default rule templates. Each threshold set is adjustable per sensor, location, or jurisdiction. Regulatory standard updates can be applied by editing rule parameters without touching platform code.",
      },
      {
        question:
          "How does the platform handle multi-site monitoring networks?",
        answer:
          "Each monitoring station or network zone is organized as a Magistrala domain with its own sensors, rules, and access policies. Environmental agencies can manage multiple operator networks from a single platform while maintaining strict data isolation between clients.",
      },
      {
        question: "How are automated compliance reports generated?",
        answer:
          "Compliance reports are generated on a configurable daily, weekly, or monthly schedule from raw sensor data. Reports include hourly averages, exceedance counts, and station metadata in formats accepted by major regulatory submission portals. Data exports are available in CSV and JSON.",
      },
    ],

    metaDescription:
      "Deploy air quality monitoring and regulatory compliance infrastructure in minutes. The Magistrala Air Quality Pack includes multi-pollutant sensors, AQI rules, and automated compliance reporting.",
    keywords: [
      "air quality monitoring IoT",
      "AQI compliance platform",
      "PM2.5 sensor network",
      "indoor air quality monitoring",
      "environmental compliance IoT",
      "Magistrala air quality",
    ],
  },
];

// ─── Helpers ───────────────────────────────────────────────────────────────

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
