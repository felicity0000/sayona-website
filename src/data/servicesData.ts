import { Layers, Droplet, Warehouse, Building2, Motorbike, Home as HomeIcon, Amphora, DoorClosed, Landmark, Sparkles, Sofa, Paintbrush } from 'lucide-react';
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

import aluminiumOfficePartitions from '../assets/aluminium-product/industrial-component-1.jpeg';
import aluminiumProduct1 from '../assets/aluminium-product/aluminium-product-1.jpg';
import aluminiumProduct2 from '../assets/aluminium-product/aluminium-product-2.jpg';

import decorativeCeilingMedallion from '../assets/architectural-works/decorative-celing.jpeg';
import archway1 from '../assets/architectural-works/architecture-1.jpg';
import archway2 from '../assets/architectural-works/architecture-2.jpg';
import archMoulding1 from '../assets/architectural-works/architecture-3.jpg';
import entrancePortico1 from '../assets/architectural-works/columns-1.jpg';

import epoxy1 from '../assets/epoxy/epoxy-1.jpeg';
import epoxy2 from '../assets/epoxy/epoxy-2.jpeg';
import epoxy3 from '../assets/epoxy/epoxy-3.jpeg';
import epoxy4 from '../assets/epoxy/epoxy-4.jpeg';
import epoxyTable1 from '../assets/epoxy/epoxy-table-1.jpg';

import lightingDecorations1 from '../assets/decorations/lighting-decorations-1.jpeg';
import lightingDecorations2 from '../assets/decorations/lighting-decorations-2.jpg';
import lightingDecorations3 from '../assets/decorations/lighting-decorations-3.jpg';
import lightingDecorations4 from '../assets/decorations/lighting-decorations-4.jpg';

import rawMaterialFiberglassMat from '../assets/raw-materials-supply-products/fiber-glass-mat-1.jpg';
import rawMaterialResin from '../assets/raw-materials-supply-products/resin.jpg';

import furniture1 from '../assets/furniture-products/furniture-1.jpg';
import furniture2 from '../assets/furniture-products/furniture-2.jpg';
import furniture3 from '../assets/furniture-products/furniture-3.jpg';
import furniture4 from '../assets/furniture-products/furniture-4.jpg';
import furniture5 from '../assets/furniture-products/furniture-5.jpg';

import interiorDesign1 from '../assets/interior-design/interior-design-1.jpg';
import interiorDesign2 from '../assets/interior-design/interior-design-2.jpg';
import interiorDesign3 from '../assets/interior-design/interior-design-3.jpg';
import interiorDesign4 from '../assets/interior-design/interior-design-4.jpg';
import exteriorFacade1 from '../assets/interior-design/exterior-1.jpg';

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
      { title: 'CNC Wood Carving', desc: 'Precision CNC-carved woodwork for interiors, signage, and furniture.' },
      { title: 'CNC Plasma Metal Designs', desc: 'Laser-precise plasma-cut metal designs for gates, railings, and decorative features.' },
      { title: '3D Printed Products', desc: 'Custom 3D-printed prototypes, models, and decorative pieces.' },
      { title: 'Gypsum Works', desc: 'Gypsum ceiling and partition installations for interior finishing.' },
      { title: 'Decorative Products', desc: 'Custom decorative pieces tailored for interior and exterior spaces.' },
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
    slug: 'epoxy-products',
    icon: Droplet,
    image: epoxy3,
    title: 'Epoxy Products',
    intro: 'We provide premium epoxy systems suitable for industrial and decorative applications — from protective flooring to designer resin finishes — serving warehouses, hospitals, manufacturing plants, commercial buildings, hotels, offices, and residential homes.',
    catalogue: '/catalogues/epoxy-products.pdf',
    items: [
      { title: 'Clear Casting Epoxy Resin', desc: 'High-clarity casting resin for art, furniture, and decorative pours.' },
      { title: 'Industrial Epoxy Resin', desc: 'Heavy-duty epoxy resin engineered for demanding industrial applications.' },
      { title: 'Epoxy Hardener Systems', desc: 'Precision-formulated hardeners for reliable curing and long-term durability.' },
      { title: 'Metallic Epoxy Flooring', desc: 'Striking, seamless metallic-effect epoxy floors for showrooms and commercial spaces.', image: epoxy4 },
      { title: 'Self-Leveling Epoxy Floors', desc: 'Smooth, high-strength flooring ideal for warehouses and manufacturing plants.', image: epoxy2 },
      { title: 'Protective Industrial Coatings', desc: 'Chemical- and abrasion-resistant coatings that extend the life of industrial surfaces.' },
      { title: 'Decorative Resin Finishes', desc: 'Custom resin finishes that add texture, depth, and color to interior surfaces.' },
      { title: 'Countertop Coatings', desc: 'Durable, glossy epoxy coatings for kitchen and commercial countertops.' },
      { title: 'Table Top Epoxy Systems', desc: 'Crystal-clear epoxy systems for tabletops, bars, and furniture surfaces.', image: epoxyTable1 },
    ],
    showcase: {
      hero: {
        tagline: 'Seamless Resin Finishes',
        heading: 'Epoxy Floors, Poured to Perform',
        highlight: 'Poured',
        description: 'From marbled decorative floors to heavy-duty industrial coatings, every epoxy system is mixed and poured on-site for a seamless, durable finish — engineered to handle daily traffic while looking like a work of art.',
        features: [
          'Seamless, high-gloss marbled & metallic finishes',
          'Heavy-duty industrial & warehouse coatings',
          'Self-leveling floors for a perfectly smooth surface',
          'Custom colors and patterns to match any space',
        ],
        mainImage: epoxy3,
        sideImages: [epoxy2, epoxy4],
        fit: 'cover',
      },
      secondary: {
        tagline: 'Custom Resin Furniture',
        heading: 'Epoxy River Tables & Furniture',
        description: 'Beyond flooring, we cast custom epoxy furniture — river tables, countertops, and bar tops that combine natural wood with crystal-clear or tinted resin for a one-of-a-kind centerpiece.',
        image: epoxyTable1,
        fit: 'cover',
      },
      banner: {
        tagline: 'Built to Last',
        heading: 'Durable Finishes for Every Space',
        description: 'From residential living rooms to commercial showrooms, every floor is finished for long-term durability without compromising on design.',
        image: epoxy1,
      },
    },
  },
  {
    slug: 'motorbike-delivery-boxes',
    icon: Motorbike,
    image: fibreBox15,
    title: 'Motorbike / Delivery Boxes',
    intro: "Weatherproof, lockable fiberglass delivery boxes built for boda-bodas, courier fleets, and utility vehicles — lightweight and secure, with custom branding available for your business.",
    catalogue: '/catalogues/motorbike-boxes-courier.pdf',
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
    catalogue: '/catalogues/roofings.pdf',
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
  {
    slug: 'aluminium-fabrication',
    icon: DoorClosed,
    image: aluminiumOfficePartitions,
    title: 'Aluminium Product Fabrication & Assembly',
    intro: 'We fabricate aluminium doors, windows, partitions, and structural glazing systems — engineered for strength, energy efficiency, and a clean architectural finish across residential and commercial spaces.',
    catalogue: '/catalogues/aluminium-fabrication.pdf',
    items: [
      {
        title: 'Aluminium Doors (Sliding, Casement, Folding)',
        desc: 'We fabricate aluminium doors in sliding, casement, and folding styles — designed for strength, seamless movement, and long-term performance. Custom finishes, hardware, and locking systems ensure these doors meet both aesthetic and security standards for residential and commercial spaces.',
      },
      {
        title: 'Windows and Ventilators',
        desc: 'Our aluminium windows and ventilators deliver optimal airflow, noise reduction, and energy efficiency. Built with precision-cut frames and corrosion-resistant coatings, they suit both modern and traditional structures requiring durable, low-maintenance solutions with clean, contemporary design.',
      },
      {
        title: 'Office Partitions and Cubicles',
        desc: 'We design and fabricate aluminium office partitions and cubicles that enhance workspace flexibility, privacy, and visual appeal. Lightweight yet sturdy, these systems support glass, acrylic, or laminate panels, and are ideal for modular setups with integrated wiring and minimal disruption during installation.',
        image: aluminiumOfficePartitions,
      },
      {
        title: 'Shopfronts, Curtain Walls, and Structural Glazing',
        desc: 'Our aluminium shopfronts, curtain walls, and structural glazing systems feature expansive glass surfaces supported by durable frames. Designed to maximize natural light and visibility, these systems provide a sleek façade with excellent weatherproofing, thermal performance, and architectural elegance.',
      },
    ],
    showcase: {
      hero: {
        tagline: 'Precision Aluminium Systems',
        heading: 'Aluminium Systems, Fabricated for Every Space',
        highlight: 'Fabricated',
        description: 'From sliding doors to full curtain-wall façades, every system is fabricated in-house and finished to fit — precision-cut aluminium framing built for strength, energy efficiency, and a clean architectural look.',
        features: [
          'Sliding, casement & folding aluminium doors',
          'Precision-cut, corrosion-resistant window frames',
          'Modular office partitions & cubicle systems',
          'Structural glazing & curtain wall façades',
        ],
        mainImage: aluminiumProduct1,
        sideImages: [aluminiumProduct2],
        fit: 'cover',
      },
      secondary: {
        tagline: 'Real Installations',
        heading: 'Built and Installed On-Site',
        description: "From directors' offices to open-plan floors, our aluminium partition systems are fabricated to spec and installed with minimal disruption — supporting glass, acrylic, or laminate panels and integrated wiring.",
        image: aluminiumOfficePartitions,
        fit: 'cover',
      },
      banner: {
        tagline: 'Precision Fabrication',
        heading: 'Engineered for Strength, Finished for Design',
        description: 'Every frame is cut, assembled, and finished in our own workshop — from single doors to full structural glazing systems.',
        image: aluminiumProduct2,
      },
    },
  },
  {
    slug: 'grc-cement-architectural',
    icon: Landmark,
    image: decorativeCeilingMedallion,
    title: 'GRC & Cement Architectural Works',
    intro: 'We blend traditional elegance with modern engineering—crafting facades, columns, furniture, and temple elements that endure weather and time. Each piece is designed for structural strength and visual impact, enhancing residential, commercial, and public spaces with refined, lasting architectural beauty.',
    catalogue: '/catalogues/grc-cement-architectural.pdf',
    items: [
      {
        title: 'Decorative Cement Pillars & Columns',
        desc: 'Crafted to offer both load-bearing strength and ornamental detailing, perfect for enhancing entrances, corridors, or open verandas.',
        image: entrancePortico1,
      },
      {
        title: 'Exterior Finishing & Garden Decor',
        desc: 'Resilient outdoor elements including edging, sculptures, and accent decor that withstand environmental exposure while elevating landscape aesthetics.',
        image: archMoulding1,
      },
      {
        title: 'Ceiling Work – Domes, Trims & Mouldings',
        desc: 'Architectural ceiling accents with refined detailing, adding depth, luxury, and cultural character to indoor environments.',
        image: decorativeCeilingMedallion,
      },
      {
        title: 'Designer Boundary Walls & Concrete Fencing',
        desc: 'Modern and classic fence designs molded in cement to offer privacy, perimeter security, and curb appeal.',
      },
      {
        title: 'Stamped Concrete Flooring – Driveways, Walkways',
        desc: 'Durable, slip-resistant surfaces with stone, tile, or wood textures that bring artistic flair to functional outdoor paths and vehicle zones.',
      },
      {
        title: 'Planters, Benches & Outdoor Furniture (Cement-Based)',
        desc: 'Robust and stylish cement furnishings that integrate seamlessly with garden layouts or public seating zones, offering high durability and low upkeep.',
      },
      {
        title: 'Artistic Wall Relief Panels & Murals',
        desc: 'Custom-designed cement panels and relief art that bring storytelling, symbolism, or branding into architectural surfaces.',
      },
    ],
    showcase: {
      hero: {
        tagline: 'Architectural Craftsmanship',
        heading: 'GRC & Cement Works, Cast for Lasting Beauty',
        highlight: 'Cast',
        description: 'We blend traditional elegance with modern engineering — crafting facades, columns, furniture, and temple elements that endure weather and time, designed for structural strength and visual impact.',
        features: [
          'Load-bearing decorative pillars & columns',
          'Weatherproof exterior finishing & garden decor',
          'Domed ceilings, trims & architectural mouldings',
          'Boundary walls, stamped concrete & wall relief art',
        ],
        mainImage: entrancePortico1,
        sideImages: [archway2, archway1],
        fit: 'contain',
      },
      secondary: {
        tagline: 'Cast On-Site',
        heading: 'Exterior Mouldings & Facade Details',
        description: 'Beyond indoor columns and ceilings, we cast exterior window surrounds, cornices, and facade mouldings directly on-site — durable GRC and cement detailing built to hold its finish through years of weather.',
        image: archMoulding1,
        fit: 'cover',
      },
      banner: {
        tagline: 'Refined Interiors',
        heading: 'Domed Ceilings & Ornamental Detail',
        description: 'From medallion ceilings to fluted columns, every piece is moulded and finished to bring depth, luxury, and character to interior spaces.',
        image: decorativeCeilingMedallion,
      },
    },
  },
  {
    slug: 'lighting-decorations',
    icon: Sparkles,
    image: lightingDecorations3,
    title: 'Lighting Decorations',
    intro: 'Custom lighting installations and festive décor for buildings, events, and public spaces — from full facade illuminations to holiday displays that transform a space after dark.',
    catalogue: '/catalogues/lighting-decorations.pdf',
    items: [
      { title: 'Building Facade Lighting', desc: 'Full-height LED string light installations that outline and illuminate entire building facades.', image: lightingDecorations3 },
      { title: 'Festive Holiday Displays', desc: 'Custom Christmas and holiday-season lighting, signage, and decorative motifs for storefronts and offices.', image: lightingDecorations1 },
      { title: 'Event & Hospitality Lighting', desc: 'Elegant string lighting for hotels, event venues, and public spaces.', image: lightingDecorations4 },
    ],
    showcase: {
      hero: {
        tagline: 'Custom Lighting Installations',
        heading: 'Lighting Decorations, Designed to Shine',
        highlight: 'Shine',
        description: "From full building facades to festive holiday displays, we design, install, and maintain custom lighting that transforms a space after dark — built to run reliably through every season.",
        features: [
          'Custom LED & string light installations',
          'Full building facade & rooftop lighting',
          'Festive displays for the holiday season',
          'Designed, installed & maintained by our team',
        ],
        mainImage: lightingDecorations3,
        sideImages: [lightingDecorations2, lightingDecorations4],
        fit: 'cover',
      },
      secondary: {
        tagline: 'Festive Displays',
        heading: 'Custom Holiday Décor',
        description: 'Beyond facade lighting, we design custom festive motifs, signage, and seasonal displays that turn any building into a landmark for the holidays.',
        image: lightingDecorations1,
        fit: 'cover',
      },
    },
  },
  {
    slug: 'raw-materials-supply',
    icon: Warehouse,
    image: rawMaterialFiberglassMat,
    title: 'Raw Materials Supply',
    intro: 'Sayona International supplies premium-quality composite raw materials for manufacturers, contractors, fabricators, and artisans across Uganda and East Africa.',
    catalogue: '/catalogues/raw-materials-supply.pdf',
    items: [
      { title: 'General Purpose Polyester Resin', desc: 'Versatile resin suited for a wide range of fiberglass fabrication needs.', image: rawMaterialResin },
      { title: 'Epoxy Resin', desc: 'High-performance resin for casting, coating, and composite lamination.' },
      { title: 'Vinyl Ester Resin', desc: 'Corrosion-resistant resin for demanding structural and chemical applications.' },
      { title: 'Gelcoat', desc: 'Protective, high-gloss finish coat for fiberglass moulded products.' },
      { title: 'Hardeners & Catalysts', desc: 'Curing agents formulated for consistent, reliable resin performance.' },
      { title: 'Fiberglass Chopped Strand Mat', desc: 'Randomly oriented glass fiber mat for reinforcing moulded laminates.', image: rawMaterialFiberglassMat },
      { title: 'Woven Roving', desc: 'Heavy, woven glass fabric for high-strength structural laminates.' },
      { title: 'Fiberglass Cloth', desc: 'Fine woven glass cloth for smooth surface finishes and reinforcement.' },
      { title: 'Surface Tissue', desc: 'Lightweight veil that delivers a smooth, resin-rich surface finish.' },
      { title: 'Pigments', desc: 'Color concentrates for tinting resins to any custom shade.' },
      { title: 'Fillers', desc: 'Extenders and fillers that adjust resin viscosity, weight, and cost.' },
      { title: 'Release Wax', desc: 'Mould release wax ensuring clean, damage-free part removal.' },
    ],
    showcase: {
      hero: {
        tagline: 'Composite Raw Materials',
        heading: 'Raw Materials, Supplied for Every Build',
        highlight: 'Supplied',
        description: 'We supply premium-quality resins, mats, and composite materials to manufacturers, contractors, fabricators, and artisans across Uganda and East Africa — consistent quality, ready to work with.',
        features: [
          'Polyester, epoxy & vinyl ester resins',
          'Fiberglass chopped strand mat, cloth & woven roving',
          'Gelcoat, hardeners, catalysts & release wax',
          'Pigments and fillers for custom finishes',
        ],
        mainImage: rawMaterialFiberglassMat,
        sideImages: [rawMaterialResin],
        fit: 'cover',
      },
    },
  },
  {
    slug: 'furniture',
    icon: Sofa,
    image: furniture3,
    title: 'Furniture',
    intro: 'From hand-carved wooden pieces to upholstered sofa sets, we design and craft furniture for homes, offices, and hospitality spaces — built to order and finished to a premium standard.',
    catalogue: '/catalogues/furniture.pdf',
    items: [
      { title: 'Sofa Sets', desc: 'Upholstered 3+1+1 sofa sets in a range of fabrics and finishes, built for durability and everyday comfort.', image: furniture4 },
      { title: 'Modern Wood-Frame Sofas', desc: 'Contemporary sofas with solid wood framing and premium cushioning for a clean, modern look.', image: furniture3 },
      { title: 'Hand-Carved Armchairs', desc: 'Intricately carved solid-wood armchairs, upholstered for comfort — statement pieces for any interior.', image: furniture1 },
      { title: 'Custom Carved Doors & Wood Panels', desc: 'Ornately hand-carved wooden doors and decorative panels, crafted to order for a distinctive entrance or feature wall.', image: furniture2 },
      { title: 'Upholstery & Cushioning', desc: 'In-house upholstery services with a wide choice of fabrics, foams, and finishes to match any furniture piece.' },
    ],
    showcase: {
      hero: {
        tagline: 'Crafted Furniture',
        heading: 'Furniture, Handcrafted for Every Room',
        highlight: 'Handcrafted',
        description: 'From solid wood-frame sofas to intricately carved accent chairs, every piece is built and upholstered in-house — combining comfort, craftsmanship, and a finish made to last.',
        features: [
          'Upholstered sofa sets in a range of fabrics',
          'Solid wood-frame sofas and modern seating',
          'Hand-carved armchairs and accent furniture',
          'Custom carved doors and decorative wood panels',
        ],
        mainImage: furniture3,
        sideImages: [furniture4, furniture5],
        fit: 'contain',
      },
      secondary: {
        tagline: 'Hand-Carved Detail',
        heading: 'Carved Furniture & Woodwork',
        description: 'Beyond upholstered seating, our craftsmen hand-carve solid wood armchairs, doors, and panels — intricate detailing finished to order for a distinctive, one-of-a-kind piece.',
        image: furniture1,
        fit: 'cover',
      },
      banner: {
        tagline: 'Bespoke Woodwork',
        heading: 'Carved Doors, Made to Order',
        description: 'Every carved door and panel is designed and finished by hand in our own workshop — a striking centerpiece for any entrance or feature wall.',
        image: furniture2,
      },
    },
  },
  {
    slug: 'interior-exterior-craftsmanship',
    icon: Paintbrush,
    image: interiorDesign4,
    title: 'Interior & Exterior Craftsmanship',
    intro: 'End-to-end interior and exterior craftsmanship — from showroom design and fit-outs to façade works, modular kitchens, lighting, and landscaping — delivered as a single turnkey solution.',
    catalogue: '/catalogues/interior-exterior-craftsmanship.pdf',
    items: [
      { title: 'Showroom Interiors & Facades', desc: 'Captivating showroom designs featuring branded displays, lighting, signage, and premium façade treatments to enhance visibility and attract customers.', image: interiorDesign4 },
      { title: 'Interior Fit-Outs: Walls, Ceilings & Finishes', desc: 'Turnkey solutions including wall paneling, false ceilings, decorative trims, partitions, acoustics, paint, and wallpaper tailored to client aesthetics.', image: interiorDesign3 },
      { title: 'Exterior Facade Works & Architectural Details', desc: 'Durable GRC and cement-based claddings, moldings, columns, parapets, and elevation features delivering elegance and weather resilience.', image: exteriorFacade1 },
      { title: 'Modular Kitchens, Wardrobes & Storage', desc: 'Ergonomic, space-optimized storage and functional kitchen units designed for homes, offices, hospitality, and retail spaces.', image: interiorDesign1 },
      { title: 'Custom Furniture & Display Installations', desc: 'Bespoke furniture, reception counters, product displays, and seating crafted for a seamless blend of form and function.', image: interiorDesign2 },
      { title: 'Lighting, Electrical & Automation', desc: 'Integrated lighting and electrical systems with smart controls for both interior and exterior applications, ensuring aesthetic appeal and compliance.' },
      { title: 'Landscaping & Outdoor Features', desc: 'Cement planters, benches, pergolas, fountains, lighting, and green elements designed to harmonize nature with architecture.' },
    ],
    showcase: {
      hero: {
        tagline: 'Turnkey Fit-Outs',
        heading: 'Interiors & Facades, Crafted End-to-End',
        highlight: 'Crafted',
        description: 'From branded showroom interiors to weather-resilient facade works, our team delivers turnkey interior and exterior craftsmanship — design, fabrication, and installation handled by one team, start to finish.',
        features: [
          'Branded showroom interiors & premium facades',
          'Wall paneling, false ceilings & decorative finishes',
          'GRC & cement facade cladding and elevation details',
          'Modular kitchens, wardrobes & custom furniture',
        ],
        mainImage: interiorDesign4,
        sideImages: [interiorDesign2, interiorDesign3],
        fit: 'cover',
      },
      secondary: {
        tagline: 'Built to Withstand',
        heading: 'Exterior Facade & Architectural Detail',
        description: 'Durable GRC and cement-based claddings, mouldings, columns, and parapets — engineered to deliver elevation and elegance while standing up to the weather.',
        image: exteriorFacade1,
        fit: 'cover',
      },
      banner: {
        tagline: 'One Team, Start to Finish',
        heading: 'Design, Fit-Out & Install — Handled In-House',
        description: 'From the first concept sketch to the final lighting fixture, every interior and exterior element is designed, fabricated, and installed by our own team.',
        image: interiorDesign1,
      },
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return [...services, ...products].find((s) => s.slug === slug);
}
