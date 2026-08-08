import type { CoreService } from '../data/coreServicesData';
import type { Language } from './LanguageContext';
import { coreServiceTranslations } from './coreServicesData.zh';

export function localizeCoreService(service: CoreService, language: Language): CoreService {
  if (language === 'en') return service;
  const tr = coreServiceTranslations[service.slug];
  if (!tr) return service;
  return { ...service, title: tr.title, intro: tr.intro, items: tr.items };
}
