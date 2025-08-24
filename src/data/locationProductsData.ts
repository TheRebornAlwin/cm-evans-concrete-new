export interface LocationData {
  locationId: string;
  cityName: string;
  region: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  postalCode: string;
  nearbyAreas: string[];
  seo: {
    title: string;
    description: string;
    canonical: string;
    keywords: string[];
  };
  hero: {
    headline: string;
    subheadline: string;
    description: string;
  };
  content: {
    introText: string;
    whyChooseText: string;
    customOrdersText: string;
    stockNoticeText: string;
  };
  localBusinessSchema: {
    name: string;
    description: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    serviceArea: string[];
    areaServed: Array<{
      type: string;
      name: string;
      sameAs?: string;
    }>;
  };
  faqSchema: Array<{
    question: string;
    answer: string;
  }>;
}

export const locationProductsData: Record<string, LocationData> = {
  barry: {
    locationId: 'barry',
    cityName: 'Barry',
    region: 'Vale of Glamorgan',
    coordinates: {
      latitude: '51.4007',
      longitude: '-3.2919'
    },
    postalCode: 'CF62',
    nearbyAreas: ['Penarth', 'Llantwit Major', 'Cowbridge', 'Vale of Glamorgan'],
    seo: {
      title: '🏗️ Premium Concrete Products Barry | #1 Ready Mix Concrete Suppliers Vale of Glamorgan ⭐',
      description: '✅ Top-rated concrete products Barry! Premium ready mix concrete, precast blocks & fence posts. Same-day delivery Vale of Glamorgan. Local Barry concrete suppliers. FREE quotes 07823 330492 🚚',
      canonical: 'https://cmevansconcrete.co.uk/concrete-products-barry',
      keywords: [
        'concrete products Barry',
        'ready mix concrete Barry',
        'concrete suppliers Barry',
        'concrete blocks Barry',
        'precast concrete Barry',
        'concrete delivery Barry',
        'Vale of Glamorgan concrete',
        'Barry concrete fence posts',
        'concrete gravel boards Barry'
      ]
    },
    hero: {
      headline: 'Premium Concrete Products Barry',
      subheadline: 'Ready Mix Concrete & Precast Concrete Vale of Glamorgan',
      description: 'Professional concrete products Barry including ready mix concrete, concrete blocks, and precast concrete. Local Barry concrete suppliers with same-day delivery across Vale of Glamorgan.'
    },
    content: {
      introText: 'C&M Evans Concrete is Barry\'s premier concrete products supplier, serving contractors, builders, and homeowners across Vale of Glamorgan with professional-grade ready mix concrete, durable concrete blocks, and precision-manufactured precast concrete products. Our Barry-based operation ensures rapid delivery and local expertise for all your concrete supply needs.',
      whyChooseText: 'As established concrete suppliers Barry, we understand the unique requirements of Vale of Glamorgan construction projects. From coastal developments to residential extensions, our concrete products Barry inventory includes everything from standard ready mix concrete to specialized precast concrete solutions designed for local conditions.',
      customOrdersText: 'Our Barry concrete products facility can manufacture custom concrete blocks and precast concrete to your exact specifications. Whether you need non-standard fence post heights for Barry properties or custom concrete blocks for Vale of Glamorgan landscaping projects, we deliver precision-manufactured products with reasonable turnaround times.',
      stockNoticeText: 'Concrete products Barry stock levels and ready mix concrete availability change regularly. For current Barry concrete suppliers pricing, Vale of Glamorgan delivery schedules, and immediate quotes on concrete blocks or precast concrete, contact our Barry team directly.'
    },
    localBusinessSchema: {
      name: 'C&M Evans Concrete - Barry Concrete Products',
      description: 'Premier concrete products supplier serving Barry and Vale of Glamorgan with ready mix concrete, concrete blocks, precast concrete, and professional delivery services',
      address: {
        streetAddress: 'Barry Industrial Area',
        addressLocality: 'Barry',
        addressRegion: 'Vale of Glamorgan',
        postalCode: 'CF62',
        addressCountry: 'GB'
      },
      serviceArea: ['Barry', 'Vale of Glamorgan', 'Penarth', 'Llantwit Major', 'Cowbridge'],
      areaServed: [
        {
          type: 'City',
          name: 'Barry',
          sameAs: 'https://en.wikipedia.org/wiki/Barry,_Vale_of_Glamorgan'
        },
        {
          type: 'AdministrativeArea',
          name: 'Vale of Glamorgan'
        },
        {
          type: 'City',
          name: 'Penarth'
        },
        {
          type: 'City',
          name: 'Llantwit Major'
        },
        {
          type: 'City',
          name: 'Cowbridge'
        }
      ]
    },
    faqSchema: [
      {
        question: 'What concrete products are available in Barry?',
        answer: 'C&M Evans Concrete supplies comprehensive concrete products Barry including ready mix concrete, concrete blocks (interlocking and standard), precast concrete fence posts, gravel boards, coping stones, and rapid-set concrete mixes. All products are manufactured to professional standards for Barry and Vale of Glamorgan construction projects.'
      },
      {
        question: 'Do you deliver ready mix concrete in Barry?',
        answer: 'Yes, we provide reliable ready mix concrete delivery throughout Barry and Vale of Glamorgan. Our Barry-based concrete suppliers offer same-day delivery for ready mix concrete, concrete blocks, and precast concrete products with competitive delivery rates across the local area.'
      },
      {
        question: 'Are concrete fence posts available in Vale of Glamorgan?',
        answer: 'We supply high-quality concrete fence posts throughout Vale of Glamorgan in 6ft and 8ft standard sizes, with custom sizes available to order. Our reinforced concrete fence posts are manufactured in Barry and designed to withstand coastal Welsh weather conditions.'
      },
      {
        question: 'What areas around Barry do you serve?',
        answer: 'Our Barry concrete suppliers serve the entire Vale of Glamorgan including Penarth, Llantwit Major, Cowbridge, and surrounding areas. We provide concrete products delivery and collection services throughout the region with competitive rates.'
      }
    ]
  },
  cardiff: {
    locationId: 'cardiff',
    cityName: 'Cardiff',
    region: 'South Wales',
    coordinates: {
      latitude: '51.4816',
      longitude: '-3.1791'
    },
    postalCode: 'CF',
    nearbyAreas: ['Caerphilly', 'Pontypridd', 'Newport', 'Rhondda Cynon Taf'],
    seo: {
      title: '🏗️ Professional Concrete Products Cardiff | #1 Ready Mix Concrete Suppliers South Wales ⭐',
      description: '✅ Leading concrete products Cardiff! Premium ready mix concrete, precast blocks & fence posts. Same-day delivery South Wales. Professional Cardiff concrete suppliers. FREE quotes 07823 330492 🚚',
      canonical: 'https://cmevansconcrete.co.uk/concrete-products-cardiff',
      keywords: [
        'concrete products Cardiff',
        'ready mix concrete Cardiff',
        'concrete suppliers Cardiff',
        'concrete blocks Cardiff',
        'precast concrete Cardiff',
        'concrete delivery Cardiff',
        'South Wales concrete',
        'Cardiff concrete fence posts',
        'concrete gravel boards Cardiff'
      ]
    },
    hero: {
      headline: 'Professional Concrete Products Cardiff',
      subheadline: 'Ready Mix Concrete & Precast Concrete South Wales',
      description: 'Leading concrete products Cardiff including ready mix concrete, concrete blocks, and precast concrete. Professional Cardiff concrete suppliers with reliable delivery across South Wales.'
    },
    content: {
      introText: 'C&M Evans Concrete serves Cardiff and South Wales with professional-grade concrete products including ready mix concrete, durable concrete blocks, and precision-manufactured precast concrete. Our Cardiff concrete suppliers operation provides rapid delivery and expert guidance for residential, commercial, and industrial construction projects throughout the capital region.',
      whyChooseText: 'As trusted concrete suppliers Cardiff, we understand the demanding requirements of South Wales construction projects. From city center developments to suburban extensions, our concrete products Cardiff range includes everything from volumetric ready mix concrete to specialized precast concrete solutions engineered for urban construction challenges.',
      customOrdersText: 'Our Cardiff concrete products service includes custom manufacturing of concrete blocks and precast concrete to meet specific project requirements. Whether you need specialized concrete blocks for Cardiff commercial developments or custom precast concrete for South Wales infrastructure projects, we deliver precision-engineered solutions.',
      stockNoticeText: 'Concrete products Cardiff availability and ready mix concrete stock levels are updated regularly. For current Cardiff concrete suppliers pricing, South Wales delivery options, and immediate quotes on concrete blocks or precast concrete, contact our professional team directly.'
    },
    localBusinessSchema: {
      name: 'C&M Evans Concrete - Cardiff Concrete Products',
      description: 'Professional concrete products supplier serving Cardiff and South Wales with ready mix concrete, concrete blocks, precast concrete, and commercial delivery services',
      address: {
        streetAddress: 'Cardiff Service Area',
        addressLocality: 'Cardiff',
        addressRegion: 'South Wales',
        postalCode: 'CF',
        addressCountry: 'GB'
      },
      serviceArea: ['Cardiff', 'South Wales', 'Caerphilly', 'Pontypridd', 'Newport', 'Rhondda Cynon Taf'],
      areaServed: [
        {
          type: 'City',
          name: 'Cardiff',
          sameAs: 'https://en.wikipedia.org/wiki/Cardiff'
        },
        {
          type: 'State',
          name: 'South Wales',
          sameAs: 'https://en.wikipedia.org/wiki/South_Wales'
        },
        {
          type: 'City',
          name: 'Caerphilly'
        },
        {
          type: 'City',
          name: 'Pontypridd'
        },
        {
          type: 'City',
          name: 'Newport'
        }
      ]
    },
    faqSchema: [
      {
        question: 'What concrete products are available in Cardiff?',
        answer: 'Our Cardiff concrete suppliers provide comprehensive concrete products including ready mix concrete, concrete blocks (interlocking and building), precast concrete fence posts, gravel boards, coping stones, and commercial-grade concrete mixes. All products meet Cardiff building standards and South Wales construction requirements.'
      },
      {
        question: 'Do you deliver ready mix concrete in Cardiff?',
        answer: 'Yes, we provide professional ready mix concrete delivery throughout Cardiff and South Wales. Our Cardiff concrete suppliers offer same-day and scheduled delivery for ready mix concrete, concrete blocks, and precast concrete products with competitive commercial rates.'
      },
      {
        question: 'Are concrete blocks available for Cardiff construction projects?',
        answer: 'We supply professional-grade concrete blocks throughout Cardiff including interlocking blocks, standard building blocks, and custom-sized options. Our concrete blocks Cardiff inventory is suitable for commercial developments, residential projects, and infrastructure construction across South Wales.'
      },
      {
        question: 'What areas around Cardiff do you serve?',
        answer: 'Our Cardiff concrete suppliers serve the greater South Wales region including Caerphilly, Pontypridd, Newport, Rhondda Cynon Taf, and surrounding areas. We provide comprehensive concrete products delivery throughout the Cardiff metropolitan area.'
      }
    ]
  },
  bristol: {
    locationId: 'bristol',
    cityName: 'Bristol',
    region: 'South West England',
    coordinates: {
      latitude: '51.4545',
      longitude: '-2.5879'
    },
    postalCode: 'BS',
    nearbyAreas: ['Bath', 'Gloucester', 'Weston-super-Mare', 'South Gloucestershire'],
    seo: {
      title: '🏗️ Quality Concrete Products Bristol | #1 Ready Mix Concrete Suppliers South West ⭐',
      description: '✅ Premium concrete products Bristol! Quality ready mix concrete, precast blocks & fence posts. Same-day delivery South West England. Trusted Bristol concrete suppliers. FREE quotes 07823 330492 🚚',
      canonical: 'https://cmevansconcrete.co.uk/concrete-products-bristol',
      keywords: [
        'concrete products Bristol',
        'ready mix concrete Bristol',
        'concrete suppliers Bristol',
        'concrete blocks Bristol',
        'precast concrete Bristol',
        'concrete delivery Bristol',
        'South West concrete',
        'Bristol concrete fence posts',
        'concrete gravel boards Bristol'
      ]
    },
    hero: {
      headline: 'Quality Concrete Products Bristol',
      subheadline: 'Ready Mix Concrete & Precast Concrete South West England',
      description: 'Premium concrete products Bristol including ready mix concrete, concrete blocks, and precast concrete. Trusted Bristol concrete suppliers with efficient delivery across South West England.'
    },
    content: {
      introText: 'C&M Evans Concrete extends our expertise to Bristol and South West England, providing premium concrete products including ready mix concrete, robust concrete blocks, and precision-manufactured precast concrete. Our Bristol concrete suppliers service ensures reliable delivery and professional support for construction projects throughout the South West region.',
      whyChooseText: 'As experienced concrete suppliers Bristol, we bring Welsh quality standards to South West England construction projects. From Bristol city developments to rural South West projects, our concrete products Bristol selection includes everything from standard ready mix concrete to specialized precast concrete solutions designed for diverse construction applications.',
      customOrdersText: 'Our Bristol concrete products service includes bespoke manufacturing of concrete blocks and precast concrete for unique project specifications. Whether you need custom concrete blocks for Bristol commercial projects or specialized precast concrete for South West infrastructure, we deliver engineered solutions with professional service.',
      stockNoticeText: 'Concrete products Bristol stock levels and ready mix concrete availability are regularly updated. For current Bristol concrete suppliers pricing, South West England delivery schedules, and immediate quotes on concrete blocks or precast concrete, contact our experienced team directly.'
    },
    localBusinessSchema: {
      name: 'C&M Evans Concrete - Bristol Concrete Products',
      description: 'Premium concrete products supplier serving Bristol and South West England with ready mix concrete, concrete blocks, precast concrete, and professional delivery services',
      address: {
        streetAddress: 'Bristol Service Area',
        addressLocality: 'Bristol',
        addressRegion: 'South West England',
        postalCode: 'BS',
        addressCountry: 'GB'
      },
      serviceArea: ['Bristol', 'South West England', 'Bath', 'Gloucester', 'Weston-super-Mare', 'South Gloucestershire'],
      areaServed: [
        {
          type: 'City',
          name: 'Bristol',
          sameAs: 'https://en.wikipedia.org/wiki/Bristol'
        },
        {
          type: 'State',
          name: 'South West England'
        },
        {
          type: 'City',
          name: 'Bath'
        },
        {
          type: 'City',
          name: 'Gloucester'
        },
        {
          type: 'City',
          name: 'Weston-super-Mare'
        }
      ]
    },
    faqSchema: [
      {
        question: 'What concrete products are available in Bristol?',
        answer: 'Our Bristol concrete suppliers provide comprehensive concrete products including ready mix concrete, concrete blocks (interlocking and construction-grade), precast concrete fence posts, gravel boards, coping stones, and specialized concrete mixes. All products are suitable for Bristol construction standards and South West England building requirements.'
      },
      {
        question: 'Do you deliver ready mix concrete in Bristol?',
        answer: 'Yes, we provide reliable ready mix concrete delivery throughout Bristol and South West England. Our Bristol concrete suppliers offer flexible delivery scheduling for ready mix concrete, concrete blocks, and precast concrete products with competitive rates across the region.'
      },
      {
        question: 'Are precast concrete products available in South West England?',
        answer: 'We supply high-quality precast concrete throughout South West England including reinforced fence posts, decorative gravel boards, coping stones, and custom precast elements. Our precast concrete Bristol service covers the entire South West region with professional delivery and installation support.'
      },
      {
        question: 'What areas around Bristol do you serve?',
        answer: 'Our Bristol concrete suppliers serve the broader South West England region including Bath, Gloucester, Weston-super-Mare, South Gloucestershire, and surrounding areas. We provide comprehensive concrete products delivery throughout the Bristol metropolitan area and beyond.'
      }
    ]
  }
};

export const getCoreProducts = (locationId: string) => {
  const baseProducts = [
    {
      name: 'Concrete Fence Posts',
      description: `8ft and 6ft concrete fence posts available. Other sizes can be made to order for specific ${locationProductsData[locationId].cityName} project requirements.`,
      image: '/assets/concretefenceposts.jpeg',
      features: ['8ft and 6ft standard sizes', 'Custom sizes to order', 'Reinforced concrete', 'Weather resistant'],
      category: 'Fencing & Posts',
      sku: 'CFP-001',
      brand: 'C&M Evans Concrete'
    },
    {
      name: 'Concrete Gravel Boards',
      description: `Available in 6' x 1' Smooth and Rockface finish, plus 6' x 6" smooth options for complete ${locationProductsData[locationId].cityName} fencing solutions.`,
      image: '/assets/concretegravelboards.jpg',
      features: ['6\' x 1\' Smooth finish', '6\' x 1\' Rockface finish', '6\' x 6" Smooth option', 'Complete fencing system'],
      category: 'Fencing & Posts',
      sku: 'CGB-001',
      brand: 'C&M Evans Concrete'
    },
    {
      name: 'Concrete Interlocking (Lego) Blocks',
      description: `Versatile interlocking concrete blocks for ${locationProductsData[locationId].cityName} projects in multiple sizes: 1200x600x600, 600x600x600, 1800x600x600, and 1200x300x600.`,
      image: '/assets/interlockinglegoblocks.jpg',
      features: ['1200 x 600 x 600mm', '600 x 600 x 600mm', '1800 x 600 x 600mm', '1200 x 300 x 600mm'],
      category: 'Building Blocks',
      sku: 'ILB-001',
      brand: 'C&M Evans Concrete'
    },
    {
      name: 'Postfast 20kg Rapid Set',
      description: `Quick-setting concrete mix in convenient 20kg bags. Perfect for ${locationProductsData[locationId].cityName} fence post installation and rapid setting applications.`,
      image: '/assets/postfast.jpg',
      features: ['20kg bags', 'Rapid setting formula', 'Easy to use', 'Professional strength'],
      category: 'Cement & Mix',
      sku: 'PRS-001',
      brand: 'Postfast'
    },
    {
      name: 'Mannok General Purpose Cement 25kg',
      description: `High-quality Mannok general purpose cement in 25kg bags. Suitable for all standard ${locationProductsData[locationId].cityName} construction applications.`,
      image: '/assets/manokgeneralcement.jpg',
      features: ['25kg bags', 'General purpose use', 'Mannok brand quality', 'Construction grade'],
      category: 'Cement & Mix',
      sku: 'MGC-001',
      brand: 'Mannok'
    },
    {
      name: 'Coping Stones & Pillar Caps',
      description: `Various sizes of coping stones and pillar caps available for professional finishing of ${locationProductsData[locationId].cityName} walls and boundaries.`,
      image: '/assets/copingstonespillarcaps.jpg',
      features: ['Various sizes available', 'Professional finish', 'Weather resistant', 'Custom options'],
      category: 'Finishing',
      sku: 'CSP-001',
      brand: 'C&M Evans Concrete'
    }
  ];

  return baseProducts;
};