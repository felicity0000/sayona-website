import { Layers, Droplet, Warehouse, Building2, Truck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import images from '../assets/images';


export interface ServiceItem {
  title: string;
  desc: string;
  image?: string;
}

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  image?: string;
  title: string;
  intro: string;
  items: ServiceItem[];
}

export const services: ServiceData[] = [
  {
    slug: 'fiberglass-manufacturing',
    icon: Layers,
    image: images.root_top_glass_sheets_1,
    title: 'Fiberglass Manufacturing',
    intro: 'We design and manufacture high-quality fiberglass products tailored to meet the unique requirements of our clients — from architectural finishes to industrial components — combining durability, versatility, and refined craftsmanship in every piece.',
    items: [
      { title: 'Custom Fiberglass Fabrication', desc: 'Bespoke fiberglass parts and structures fabricated to your exact specifications, size, and finish.' },
      { title: 'Fibre Glass Planters & Flower Pots', desc: 'Lightweight, weatherproof planters and flower pots for gardens, patios, and commercial landscaping.', image: images.pots_1 },
      { title: 'Decorative Translucent Fibre Glass Sheets', desc: "Textured, light-diffusing sheets that bring natural illumination and style to roofs, canopies, and partitions.", image: images.root_top_glass_sheets_1 },
      { title: 'Fiberglass Courier Boxes', desc: 'Rugged, weatherproof courier and delivery boxes built for motorcycles and utility vehicles.'},
      { title: 'Kiosks', desc: 'Compact, durable fiberglass kiosks for retail, vending, and security applications.' },
      { title: 'Architectural Mouldings', desc: 'Ornamental fiberglass mouldings and trims for ceilings, columns, and facades.'},
      { title: 'Custom Industrial Components', desc: 'Precision-molded fiberglass parts and components built to client specifications for industrial use.' },
      { title: 'Christmas Lighting & Decorations', desc: 'Festive lighting installations and decorative displays for the holiday season.'},
      { title: 'CNC Wood Carving', desc: 'Precision CNC-carved woodwork for interiors, signage, and furniture.' },
      { title: 'CNC Plasma Metal Designs', desc: 'Laser-precise plasma-cut metal designs for gates, railings, and decorative features.' },
      { title: '3D Printed Products', desc: 'Custom 3D-printed prototypes, models, and decorative pieces.' },
      { title: 'Aluminium Works', desc: 'Aluminium fabrication for doors, windows, and architectural fittings.' },
      { title: 'Gypsum Works', desc: 'Gypsum ceiling and partition installations for interior finishing.' },
      { title: 'GRC / Cement Works', desc: 'GRC and cement-based architectural mouldings and facades.' },
      { title: 'Decorative Products', desc: 'Custom decorative pieces tailored for interior and exterior spaces.' },
    ],
  },
  {
    slug: 'epoxy-solutions',
    icon: Droplet,
    title: 'Epoxy Solutions',
    intro: 'We provide premium epoxy systems suitable for industrial and decorative applications — from protective flooring to designer resin finishes — serving warehouses, hospitals, manufacturing plants, commercial buildings, hotels, offices, and residential homes.',
    items: [
      { title: 'Clear Casting Epoxy Resin', desc: 'High-clarity casting resin for art, furniture, and decorative pours.' },
      { title: 'Industrial Epoxy Resin', desc: 'Heavy-duty epoxy resin engineered for demanding industrial applications.' },
      { title: 'Epoxy Hardener Systems', desc: 'Precision-formulated hardeners for reliable curing and long-term durability.' },
      { title: 'Metallic Epoxy Flooring', desc: 'Striking, seamless metallic-effect epoxy floors for showrooms and commercial spaces.' },
      { title: 'Self-Leveling Epoxy Floors', desc: 'Smooth, high-strength flooring ideal for warehouses and manufacturing plants.' },
      { title: 'Protective Industrial Coatings', desc: 'Chemical- and abrasion-resistant coatings that extend the life of industrial surfaces.' },
      { title: 'Decorative Resin Finishes', desc: 'Custom resin finishes that add texture, depth, and color to interior surfaces.' },
      { title: 'Countertop Coatings', desc: 'Durable, glossy epoxy coatings for kitchen and commercial countertops.' },
      { title: 'Table Top Epoxy Systems', desc: 'Crystal-clear epoxy systems for tabletops, bars, and furniture surfaces.' },
    ],
  },
  {
    slug: 'raw-materials-supply',
    icon: Warehouse,
    title: 'Raw Materials Supply',
    intro: 'Sayona International supplies premium-quality composite raw materials for manufacturers, contractors, fabricators, and artisans across Uganda and East Africa.',
    items: [
      { title: 'General Purpose Polyester Resin', desc: 'Versatile resin suited for a wide range of fiberglass fabrication needs.' },
      { title: 'Epoxy Resin', desc: 'High-performance resin for casting, coating, and composite lamination.' },
      { title: 'Vinyl Ester Resin', desc: 'Corrosion-resistant resin for demanding structural and chemical applications.' },
      { title: 'Gelcoat', desc: 'Protective, high-gloss finish coat for fiberglass moulded products.' },
      { title: 'Hardeners & Catalysts', desc: 'Curing agents formulated for consistent, reliable resin performance.' },
      { title: 'Fiberglass Chopped Strand Mat', desc: 'Randomly oriented glass fiber mat for reinforcing moulded laminates.' },
      { title: 'Woven Roving', desc: 'Heavy, woven glass fabric for high-strength structural laminates.' },
      { title: 'Fiberglass Cloth', desc: 'Fine woven glass cloth for smooth surface finishes and reinforcement.' },
      { title: 'Surface Tissue', desc: 'Lightweight veil that delivers a smooth, resin-rich surface finish.' },
      { title: 'Pigments', desc: 'Color concentrates for tinting resins to any custom shade.' },
      { title: 'Fillers', desc: 'Extenders and fillers that adjust resin viscosity, weight, and cost.' },
      { title: 'Release Wax', desc: 'Mould release wax ensuring clean, damage-free part removal.' },
    ],
  },
  {
    slug: 'construction-architectural',
    icon: Building2,
    image: images.decorativeCeiling1,
    title: 'Construction & Architectural Solutions',
    intro: "Our fiberglass construction systems combine durability, aesthetics, and low maintenance — delivering architectural solutions that stand up to Uganda's climate while elevating design.",
    items: [
      { title: 'Fiberglass Roofing Systems', desc: 'Complete roofing systems engineered for durability, insulation, and fast installation.'},
      { title: 'Transparent Roofing Panels', desc: 'Light-transmitting roofing panels that bring natural daylight into covered spaces.'},
      { title: 'Corrugated Fiberglass Sheets', desc: 'Standard-profile corrugated sheets combining strength with weather resistance.' },
      { title: 'Skylight Systems', desc: 'Custom fiberglass skylights that flood interiors with natural light.' },
      { title: 'Decorative Ceilings', desc: 'Ornamental ceiling features and mouldings that add character to any interior.'},
      { title: 'Custom Wall Panels', desc: 'Tailored fiberglass wall panels for texture, insulation, and design impact.' },
      { title: 'Interior Decorative Features', desc: 'Bespoke decorative elements crafted to complement interior design themes.' },
      { title: 'Modern Architectural Elements', desc: 'Contemporary fiberglass features for facades, columns, and structural accents.' },
      { title: 'Building Facades', desc: 'Durable, weather-resistant facade cladding with a refined architectural finish.' },
    ],
  },
  {
    slug: 'automotive-solutions',
    icon: Truck,
    image: images.motorcycleCourierBox1,
    title: 'Automotive Solutions',
    intro: "We manufacture lightweight, durable fiberglass components for the automotive industry — built to withstand daily use on Uganda's roads.",
    items: [
      { title: 'Motorcycle Courier Boxes', desc: 'Rugged, weatherproof delivery boxes built for boda-boda and courier fleets.', image: images.motorcycleCourierBox1 },
      { title: 'Delivery Boxes', desc: 'Durable fiberglass boxes for last-mile delivery and logistics vehicles.', image: images.motorcycleCourierBox1 },
      { title: 'Utility Storage Boxes', desc: 'Lightweight, secure storage boxes for tools, equipment, and utility vehicles.', image: images.motorcycleCourierBox2 },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
