import { Layers, Droplet, Warehouse, Building2, Motorbike, Home as HomeIcon, Amphora } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import images from '../assets/images';

import fibreBox01 from '../assets/fibre-boxes/fibre-box-01.png';
import fibreBox02 from '../assets/fibre-boxes/fibre-box-02.png';
import fibreBox03 from '../assets/fibre-boxes/fibre-box-03.png';
import fibreBox04 from '../assets/fibre-boxes/fibre-box-04.png';
import fibreBox15 from '../assets/fibre-boxes/fibre-box-15.png';

import roofing1 from '../assets/roofings/roofings-1.jpg';
import roofing2 from '../assets/roofings/roofings-2.jpg';
import roofing3 from '../assets/roofings/roofings-3.jpg';
import roofing4 from '../assets/roofings/roofings-4.jpg';
import roofing5 from '../assets/roofings/roofings-5.jpg';

import pots1 from '../assets/pots/pots-1.jpg';
import pots2 from '../assets/pots/pots-2.jpg';
import pots3 from '../assets/pots/pots-3.jpg';
import pots4 from '../assets/pots/pots-4.jpg';
import pots5 from '../assets/pots/pots-5.jpg';

export interface ServiceItem {
  title: string;
  desc: string;
  image?: string;
  images?: string[];
}

// A single text+image block within a showcase page (secondary section, banner).
export interface ShowcaseBlock {
  tagline: string;
  heading: string;
  highlight?: string; // substring of `heading` to render in yellow
  description: string;
  image: string;
}

// Bespoke "text left, images right, no cards" product page — used instead of
// the generic card grid when present on a ServiceData entry.
export interface ServiceShowcase {
  hero: {
    tagline: string;
    heading: string;
    highlight?: string;
    description: string;
    features: string[];
    mainImage: string;
    sideImages: string[];
    fit: 'contain' | 'cover'; // 'contain': transparent PNG cutouts (floating, drop-shadow). 'cover': real photos (rounded, cropped).
  };
  secondary?: ShowcaseBlock & { fit: 'contain' | 'cover' };
  banner?: ShowcaseBlock;
}

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  image?: string;
  title: string;
  intro: string;
  catalogue?: string;
  items: ServiceItem[];
  showcase?: ServiceShowcase;
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
      { title: 'Decorative Translucent Fibre Glass Sheets', desc: "Textured, light-diffusing sheets that bring natural illumination and style to roofs, canopies, and partitions.", image: images.root_top_glass_sheets_1 },
      { title: 'Kiosks', desc: 'Compact, durable fiberglass kiosks for retail, vending, and security applications.' },
      { title: 'Architectural Mouldings', desc: 'Ornamental fiberglass mouldings and trims for ceilings, columns, and facades.'},
      { title: 'Custom Industrial Components', desc: 'Precision-molded fiberglass parts and components built to client specifications for industrial use.' },
      { title: 'Christmas Lighting & Decorations', desc: 'Festive lighting installations and decorative displays for the holiday season.', image: images.lighting_decorations_1},
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
      { title: 'Decorative Ceilings', desc: 'Ornamental ceiling features and mouldings that add character to any interior.', image: images.decorativeCeiling1 },
      { title: 'Custom Wall Panels', desc: 'Tailored fiberglass wall panels for texture, insulation, and design impact.' },
      { title: 'Interior Decorative Features', desc: 'Bespoke decorative elements crafted to complement interior design themes.' },
      { title: 'Modern Architectural Elements', desc: 'Contemporary fiberglass features for facades, columns, and structural accents.' },
      { title: 'Building Facades', desc: 'Durable, weather-resistant facade cladding with a refined architectural finish.' },
    ],
  },
];

// Featured product lines, shown in the navbar/footer "Products" dropdown.
// Add more entries here to extend the dropdown.
export const products: ServiceData[] = [
  {
    slug: 'motorbike-delivery-boxes',
    icon: Motorbike,
    image: fibreBox15,
    title: 'Motorbike / Delivery Boxes',
    intro: "Weatherproof, lockable fiberglass delivery boxes built for boda-bodas, courier fleets, and utility vehicles — lightweight and secure, with custom branding available for your business.",
    catalogue: '/catalogues/motorbike-delivery-boxes.pdf',
    items: [
      { title: 'Motorcycle Courier Boxes', desc: 'Weatherproof fiberglass delivery boxes with secure locking lids and space for custom branding — built for boda-boda and courier fleets.', image: images.motorcycleCourierBox1 },
      { title: 'Delivery Boxes', desc: 'Durable, lockable fiberglass boxes for last-mile delivery, with your logo and contact details printed on request.', image: images.motorcycleCourierBox1 },
      { title: 'Utility Storage Boxes', desc: 'Lightweight, secure storage boxes for tools, equipment, and utility vehicles.', image: images.motorcycleCourierBox2 },
    ],
    showcase: {
      hero: {
        tagline: 'Built to Last',
        heading: 'Delivery Boxes, Engineered for the Road',
        highlight: 'Engineered',
        description: "Every box is hand-fabricated in fiberglass to survive daily use on Uganda's roads — rain or shine — while giving your fleet a sharp, branded look riders and customers recognize instantly.",
        features: [
          'Rugged, weatherproof fiberglass shell',
          'Secure locking lid for safe transit',
          'Lightweight build for easy mounting',
          'Custom branding & logo printing available',
        ],
        mainImage: fibreBox02,
        sideImages: [fibreBox01, fibreBox03],
        fit: 'contain',
      },
      secondary: {
        tagline: 'Your Brand, Your Box',
        heading: 'Custom Branding on Every Box',
        description: 'We print your logo, colors, and contact details directly onto the fiberglass shell — turning every delivery into a moving advert for your business. Whichever brand colors you run, we match them.',
        image: fibreBox04,
        fit: 'contain',
      },
      banner: {
        tagline: 'In-House Manufacturing',
        heading: 'Made in Uganda, Built for Every Fleet',
        description: 'From single units to fleet-wide orders, every box is fabricated, painted, and branded in our own workshop — ready for pickup or delivery.',
        image: fibreBox15,
      },
    },
  },
  {
    slug: 'roofing',
    icon: HomeIcon,
    image: roofing1,
    title: 'Roofing',
    intro: "Complete fiberglass roofing systems engineered for durability, insulation, and natural light — built to withstand Uganda's climate.",
    catalogue: '/catalogues/roofing.pdf',
    items: [
      { title: 'Fiberglass Roofing Systems', desc: 'Complete roofing systems engineered for durability, insulation, and fast installation.', image: images.roofing_sheets_1 },
      { title: 'Transparent Roofing Panels', desc: 'Light-transmitting roofing panels that bring natural daylight into covered spaces.', images: [images.transparent_roofing_panels_1, images.transparent_roofing_panels_2, images.transparent_roofing_panels_3] },
      { title: 'Corrugated Fiberglass Sheets', desc: 'Standard-profile corrugated sheets combining strength with weather resistance.' },
      { title: 'Skylight Systems', desc: 'Custom fiberglass skylights that flood interiors with natural light.' },
    ],
    showcase: {
      hero: {
        tagline: 'Built for the Elements',
        heading: 'Fiberglass Roofing, Built to Perform',
        highlight: 'Perform',
        description: 'From arched canopy walkways to corrugated warehouse sheets, our fiberglass roofing combines strength, insulation, and natural light transmission — designed and installed by our own technical team.',
        features: [
          'UV-stable, weatherproof fiberglass sheets',
          'Available in clear, tinted, and solid colors',
          'Insulated against heat and noise',
          'Custom arches, skylights, and canopy shapes',
        ],
        mainImage: roofing1,
        sideImages: [roofing2, roofing4],
        fit: 'cover',
      },
      secondary: {
        tagline: 'Natural Light',
        heading: 'Transparent Panels for Daylight Interiors',
        description: 'Our transparent roofing panels flood interiors with natural daylight while keeping the same structural strength as solid sheets — ideal for walkways, carports, and covered patios.',
        image: roofing3,
        fit: 'cover',
      },
      banner: {
        tagline: 'Freshly Fabricated',
        heading: 'Manufactured On-Site, Ready to Install',
        description: 'Every sheet is cast, cured, and finished in our own workshop before it reaches your site — consistent quality, batch after batch.',
        image: roofing5,
      },
    },
  },
  {
    slug: 'pots',
    icon: Amphora,
    image: pots1,
    title: 'Pots',
    intro: 'Fiberglass pots in a wide range of shapes, sizes, and colors — lightweight, weatherproof, and finished to match any space, indoors or out.',
    catalogue: '/catalogues/pots.pdf',
    items: [
      { title: 'Round Pots', desc: 'Classic rounded pots in a range of sizes, glazed in bold, weatherproof colors.', image: pots3 },
      { title: 'Geometric Pots', desc: 'Modern faceted pot designs for contemporary interiors and spaces.', image: pots5 },
      { title: 'Decorative Vases', desc: 'Sculptural fiberglass vases finished for hospitality, retail, and residential interiors.', image: pots4 },
    ],
    showcase: {
      hero: {
        tagline: 'Handcrafted in Fiberglass',
        heading: 'Pots, Styled for Every Space',
        highlight: 'Styled',
        description: 'From classic rounded pots to bold geometric designs, every piece is hand-finished in fiberglass — lightweight enough to move, tough enough to live outdoors year-round.',
        features: [
          'Lightweight, weatherproof fiberglass build',
          'Wide range of shapes, sizes, and finishes',
          'Custom colors to match any brand or décor',
          'Built for both indoor and outdoor use',
        ],
        mainImage: pots1,
        sideImages: [pots3, pots5],
        fit: 'cover',
      },
      secondary: {
        tagline: 'Decorative Finishes',
        heading: 'Sculptural Pieces for Interiors',
        description: 'Beyond standard pots, we craft decorative vases and sculptural pieces finished for hotels, showrooms, and residences — form and function shaped to order.',
        image: pots4,
        fit: 'cover',
      },
      banner: {
        tagline: 'Made to Order',
        heading: 'Produced in Bulk, Finished by Hand',
        description: 'Every batch is molded, glazed, and finished in our own workshop — consistent color and quality whether you need one piece or a hundred.',
        image: pots2,
      },
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return [...services, ...products].find((s) => s.slug === slug);
}
