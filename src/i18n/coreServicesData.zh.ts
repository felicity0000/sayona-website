export interface CoreServiceTranslation {
  title: string;
  intro: string;
  items: string[];
}

// Simplified Chinese translations for the home page "Our Core Services"
// cards, keyed by slug. Images/icons always come from the English base.
export const coreServiceTranslations: Record<string, CoreServiceTranslation> = {
  'fiberglass-manufacturing': {
    title: '玻璃纤维制造',
    intro: '我们设计并制造高品质玻璃纤维产品，以满足客户的独特需求——从建筑装饰到工业部件——将耐用性、多样性与精湛工艺融于每一件作品之中。',
    items: ['透明板材与Mabati', '摩托车快递箱', '玻璃纤维花盆', '建筑装饰线条'],
  },
  'epoxy-products': {
    title: '环氧树脂解决方案',
    intro: '我们提供适用于工业和装饰用途的优质环氧树脂系统——从防护地坪到设计感树脂饰面——服务于仓库、医院、制造厂、商业建筑、酒店、写字楼和住宅。',
    items: ['透明浇铸环氧树脂', '工业环氧树脂', '环氧固化剂系统', '金属质感环氧地坪'],
  },
  'raw-materials-supply': {
    title: '原材料供应',
    intro: 'Sayona International 为乌干达及东非地区的制造商、承包商、加工商和工匠供应优质复合材料原材料。',
    items: ['通用聚酯树脂', '环氧树脂', '乙烯基酯树脂', '胶衣'],
  },
  'construction-architectural': {
    title: '建筑与建筑工程解决方案',
    intro: '我们的玻璃纤维建筑系统兼具耐用性、美观性和低维护性——提供经得起乌干达气候考验、同时提升设计水准的建筑解决方案。',
    items: ['装饰天花板', '定制墙板', '室内装饰特征', '现代建筑元素'],
  },
  furniture: {
    title: '家具',
    intro: '从前台柜台和办公桌到定制衣柜，我们为家庭、办公室和酒店空间设计并制作家具——按需定制，饰面达到高端标准。',
    items: ['前台柜台与办公桌', '展示柜台与产品展台', '衣柜与储物单元', '定制家具与软装'],
  },
};
