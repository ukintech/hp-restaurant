// ============================================
// サイトデータ（案件ごとにここだけ書き換える）
// ============================================

export const site = {
  // 基本情報
  name: "和ダイニング こころ",
  description: "旬の食材を活かした和食をお楽しみください",
  url: "https://example.com",

  // ナビゲーション
  nav: [
    { label: "ホーム", href: "/" },
    { label: "お店について", href: "/about" },
    { label: "ご予約・お問い合わせ", href: "/contact" },
  ],

  // Hero セクション
  hero: {
    title: "旬を味わう、ひとときを",
    subtitle:
      "四季折々の食材を丁寧に仕立てた和食をご提供いたします",
    backgroundImage: "/images/hero-bg.jpg",
    cta: { label: "ご予約はこちら", href: "/contact" },
  },

  // こだわり
  features: {
    heading: "こころのこだわり",
    items: [
      {
        icon: "🐟",
        title: "毎朝仕入れる鮮魚",
        description:
          "築地から毎朝届く新鮮な魚介を、刺身や焼き物でお楽しみいただけます。",
      },
      {
        icon: "🍶",
        title: "厳選の日本酒",
        description:
          "全国の蔵元から取り寄せた日本酒を常時20種類以上ご用意しています。",
      },
      {
        icon: "🏡",
        title: "落ち着いた個室空間",
        description:
          "接待やお祝いにも最適な完全個室をご用意。少人数から団体様まで対応いたします。",
      },
    ],
  },

  // メニュー
  menu: {
    heading: "お品書き",
    categories: [
      {
        category: "ランチ",
        items: [
          {
            name: "本日の焼き魚定食",
            price: "¥1,200",
            description: "ご飯・味噌汁・小鉢2品付き",
          },
          {
            name: "刺身御膳",
            price: "¥1,500",
            description: "旬の鮮魚5種盛り",
          },
          {
            name: "天ぷら定食",
            price: "¥1,400",
            description: "海老と季節野菜の天ぷら",
          },
          {
            name: "こころ御膳",
            price: "¥2,000",
            description: "刺身・焼き物・天ぷらの贅沢セット",
          },
        ],
      },
      {
        category: "ディナー",
        items: [
          {
            name: "お造り盛り合わせ",
            price: "¥1,800",
            description: "本日の鮮魚5種盛り",
          },
          {
            name: "和牛の朴葉焼き",
            price: "¥2,500",
            description: "味噌と香味野菜で仕上げた一品",
          },
          {
            name: "季節の天ぷら盛り合わせ",
            price: "¥1,600",
          },
          {
            name: "おまかせコース",
            price: "¥5,500",
            description: "前菜からデザートまで全8品",
          },
        ],
      },
    ],
  },

  // ギャラリー
  // NOTE: 本番では実際の写真に差し替えること
  gallery: {
    heading: "店内・お料理",
    items: [
      { src: "/images/gallery-1.jpg", alt: "新鮮な魚介を使った刺身の盛り合わせ" },
      { src: "/images/gallery-2.jpg", alt: "落ち着いた雰囲気の店内カウンター席" },
      { src: "/images/gallery-3.jpg", alt: "接待やお祝いにも最適な個室空間" },
      { src: "/images/gallery-4.jpg", alt: "海老と季節野菜の天ぷら" },
      { src: "/images/gallery-5.jpg", alt: "温かみのある店舗外観" },
      { src: "/images/gallery-6.jpg", alt: "全国の蔵元から厳選した日本酒セレクション" },
    ],
  },

  // 店舗情報
  about: {
    heading: "お店について",
    description:
      "「和ダイニング こころ」は、地元の食材と全国の旬を組み合わせた創作和食のお店です。ランチからディナーまで、普段使いから特別な日まで、幅広いシーンでご利用いただけます。",
    stats: [
      { label: "創業", value: "2018年" },
      { label: "席数", value: "42席" },
      { label: "個室", value: "3室" },
    ],
    company: {
      name: "和ダイニング こころ",
      address: "東京都目黒区〇〇2-5-10",
      tel: "03-9876-5432",
      email: "info@kokoro-dining.example.com",
      established: "2018年9月",
      ceo: "佐藤 健一",
    },
  },

  // アクセス
  access: {
    heading: "アクセス・営業時間",
    address: "東京都目黒区〇〇2-5-10",
    tel: "03-9876-5432",
    businessHours: [
      { days: "ランチ", hours: "11:30 〜 14:00（L.O. 13:30）" },
      { days: "ディナー", hours: "17:00 〜 22:00（L.O. 21:00）" },
    ],
    closedDay: "毎週月曜日（祝日の場合は翌火曜日）",
    // TODO: Google Maps > 共有 > 地図を埋め込む から取得した src URL を設定すること
    mapEmbedUrl: "",
  },

  // CTA セクション
  cta: {
    heading: "ご予約承ります",
    description:
      "ランチ・ディナーともにご予約を受け付けております。お気軽にお電話またはフォームよりご連絡ください。",
    button: { label: "予約・お問い合わせ", href: "/contact" },
  },

  // フッター
  footer: {
    copyright: "© 2026 和ダイニング こころ",
  },

  // お問い合わせ
  contact: {
    heading: "ご予約・お問い合わせ",
    description:
      "ご予約・ご質問は下記フォームまたはお電話（03-9876-5432）にてお気軽にどうぞ。",
    // TODO: Formspree でフォームを作成し、実際のエンドポイントに差し替えること
    formAction: "https://formspree.io/f/YOUR_FORM_ID",
  },
};
