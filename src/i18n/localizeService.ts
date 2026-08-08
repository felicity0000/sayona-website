import type { ServiceData } from '../data/productsData';
import type { Language } from './LanguageContext';
import { serviceTranslations } from './productsData.zh';

interface ServiceItemTranslation {
  title: string;
  desc: string;
}

interface ShowcaseBlockTranslation {
  tagline: string;
  heading: string;
  highlight?: string;
  description: string;
}

export interface ServiceTranslation {
  title: string;
  intro: string;
  items?: ServiceItemTranslation[]; // same order as the English `items` array
  showcase?: {
    hero: {
      tagline: string;
      heading: string;
      highlight?: string;
      description: string;
      features: string[];
    };
    secondary?: ShowcaseBlockTranslation;
    gallery?: {
      tagline: string;
      heading: string;
      highlight?: string;
      description: string;
    };
    banner?: ShowcaseBlockTranslation;
  };
}

export type ServiceTranslations = Record<string, ServiceTranslation>;

// Merges the (Simplified Chinese) translation for a slug over the English base
// data. Images, icons, slugs, fit, and catalogue links always come from the
// English base — only translatable text fields are swapped. Anything missing
// from the translation dictionary quietly falls back to the English text
// instead of rendering blank.
export function localizeService(service: ServiceData, language: Language): ServiceData {
  if (language === 'en') return service;

  const tr = serviceTranslations[service.slug];
  if (!tr) return service;

  const items = tr.items
    ? service.items.map((item, i) => ({
        ...item,
        title: tr.items?.[i]?.title ?? item.title,
        desc: tr.items?.[i]?.desc ?? item.desc,
      }))
    : service.items;

  const showcase = service.showcase && (() => {
    const s = service.showcase!;
    const trShowcase = tr.showcase;
    return {
      ...s,
      hero: {
        ...s.hero,
        tagline: trShowcase?.hero.tagline ?? s.hero.tagline,
        heading: trShowcase?.hero.heading ?? s.hero.heading,
        highlight: trShowcase?.hero.highlight ?? s.hero.highlight,
        description: trShowcase?.hero.description ?? s.hero.description,
        features: trShowcase?.hero.features ?? s.hero.features,
      },
      secondary: s.secondary && {
        ...s.secondary,
        tagline: trShowcase?.secondary?.tagline ?? s.secondary.tagline,
        heading: trShowcase?.secondary?.heading ?? s.secondary.heading,
        highlight: trShowcase?.secondary?.highlight ?? s.secondary.highlight,
        description: trShowcase?.secondary?.description ?? s.secondary.description,
      },
      gallery: s.gallery && {
        ...s.gallery,
        tagline: trShowcase?.gallery?.tagline ?? s.gallery.tagline,
        heading: trShowcase?.gallery?.heading ?? s.gallery.heading,
        highlight: trShowcase?.gallery?.highlight ?? s.gallery.highlight,
        description: trShowcase?.gallery?.description ?? s.gallery.description,
      },
      banner: s.banner && {
        ...s.banner,
        tagline: trShowcase?.banner?.tagline ?? s.banner.tagline,
        heading: trShowcase?.banner?.heading ?? s.banner.heading,
        highlight: trShowcase?.banner?.highlight ?? s.banner.highlight,
        description: trShowcase?.banner?.description ?? s.banner.description,
      },
    };
  })();

  return {
    ...service,
    title: tr.title ?? service.title,
    intro: tr.intro ?? service.intro,
    items,
    ...(showcase ? { showcase } : {}),
  };
}
