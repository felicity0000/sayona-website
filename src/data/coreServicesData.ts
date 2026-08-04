import { Layers, Droplet, Warehouse, Building2, Sofa } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import images from '../assets/images';
import epoxy3 from '../assets/epoxy/epoxy-3.jpeg';
import rawMaterialFiberglassMat from '../assets/raw-materials-supply-products/fiber-glass-mat-1.jpg';
import furnitureReceptionDesk from '../assets/furniture-products/furni-2.jpeg';

// Standalone data for the "Our Core Services" section on the home page.
// Deliberately independent of productsData.ts — this is curated marketing
// copy for the homepage, not a lookup into the full product catalogue.
export interface CoreService {
  slug: string;
  icon: LucideIcon;
  image: string;
  title: string;
  intro: string;
  items: string[];
}

export const coreServices: CoreService[] = [
  {
    slug: 'fiberglass-manufacturing',
    icon: Layers,
    image: images.root_top_glass_sheets_1,
    title: 'Fiberglass Manufacturing',
    intro: 'We design and manufacture high-quality fiberglass products tailored to meet the unique requirements of our clients — from architectural finishes to industrial components — combining durability, versatility, and refined craftsmanship in every piece.',
    items: [
      'Transparent sheets & Mabati',
      'Motorcycle Courier Boxes',
      'Fiberglass Pots',
      'Architectural Mouldings',
    ],
  },
  {
    slug: 'epoxy-products',
    icon: Droplet,
    image: epoxy3,
    title: 'Epoxy Solutions',
    intro: 'We provide premium epoxy systems suitable for industrial and decorative applications — from protective flooring to designer resin finishes — serving warehouses, hospitals, manufacturing plants, commercial buildings, hotels, offices, and residential homes.',
    items: [
      'Clear Casting Epoxy Resin',
      'Industrial Epoxy Resin',
      'Epoxy Hardener Systems',
      'Metallic Epoxy Flooring',
    ],
  },
  {
    slug: 'raw-materials-supply',
    icon: Warehouse,
    image: rawMaterialFiberglassMat,
    title: 'Raw Materials Supply',
    intro: 'Sayona International supplies premium-quality composite raw materials for manufacturers, contractors, fabricators, and artisans across Uganda and East Africa.',
    items: [
      'General Purpose Polyester Resin',
      'Epoxy Resin',
      'Vinyl Ester Resin',
      'Gelcoat',
    ],
  },
  {
    slug: 'construction-architectural',
    icon: Building2,
    image: images.decorativeCeiling1,
    title: 'Construction & Architectural Solutions',
    intro: "Our fiberglass construction systems combine durability, aesthetics, and low maintenance — delivering architectural solutions that stand up to Uganda's climate while elevating design.",
    items: [
      'Decorative Ceilings',
      'Custom Wall Panels',
      'Interior Decorative Features',
      'Modern Architectural Elements',
    ],
  },
  {
    slug: 'furniture',
    icon: Sofa,
    image: furnitureReceptionDesk,
    title: 'Furniture',
    intro: 'From reception counters and office desks to fitted wardrobes, we design and craft furniture for homes, offices, and hospitality spaces — built to order and finished to a premium standard.',
    items: [
      'Reception Counters & Office Desks',
      'Display Counters & Product Stands',
      'Wardrobes & Storage Units',
      'Custom Furniture & Upholstery',
    ],
  },
];
