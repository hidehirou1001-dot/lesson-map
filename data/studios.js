// LessonMap learning listings.
// The legacy file name and `studios` variable are kept for compatibility with
// the existing top page and article scripts. New records may represent schools,
// seminars, study groups, workshops, online courses, events, or certification
// courses by adding `listingType`; records without it are treated as schools.
// See docs/learning-listing-content-model.md before adding non-school listings.
const studios = [
  // ================= 松山市（実在するスタジオ） =================
  {
    id: 'studio-real-001',
    name: 'Dance Studio THE ONE',
    description: '松山市朝生田町にあるアットホームなダンススタジオ。音楽と人とのつながりを大切にし、初心者でも安心して踊れる環境です。',
    category: "Dance",
    city: '松山市',
    area: '朝生田周辺',
    access: '松山市朝生田町（詳細は公式サイトへ）',
    genres: ['HIPHOP', 'JAZZ', 'Kids'],
    pricing: {
      system: '料金表公開',
      minPrice: 0,
      note: '料金案内あり / 無料体験予約あり'
    },
    features: {
      parking: true,
      parkingCapacity: 'standard',
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    reviewTendencies: [
      {
        icon: '🔰',
        title: '初心者でも通いやすい',
        description: '初めてでも入りやすい声かけや、緊張しすぎないレッスンの空気感が続けやすさにつながりやすい傾向です。',
        tags: ['#初心者向け', '#体験しやすい', '#大人も通いやすい']
      },
      {
        icon: '🤝',
        title: 'アットホームな雰囲気',
        description: '少人数でも置いていかれにくく、先生や他の受講者との距離感がちょうどよい印象で受け取られやすい教室です。',
        tags: ['#雰囲気重視', '#少人数感', '#親しみやすい']
      },
      {
        icon: '🗓️',
        title: '継続しやすいレッスン環境',
        description: '無料体験と駐車場の両方があり、平日夕方や仕事帰りでも生活に入れやすいと整理しやすい傾向があります。',
        tags: ['#続けやすい', '#駐車場あり', '#無料体験あり']
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://dancestudiotheone.com/'
  },
  {
    id: 'studio-real-002',
    name: "HIP'S DANCE SCHOOL",
    description: '幼児から大人まで受講可能！ヒップホップをはじめ、多様なジャンルのダンスレッスンを提供。親子での参加も大歓迎です。',
    category: "Dance",
    city: '松山市',
    area: '宮田町周辺',
    access: 'JR松山駅から徒歩圏内（宮田町）',
    genres: ['HIPHOP', 'Kids', 'JAZZ', 'LOCK', 'POP'],
    pricing: {
      system: '月謝制',
      minPrice: 5500,
      note: '入会金・月謝案内あり / 体験レッスン1回無料'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://hips-danceschool.jp/'
  },
  {
    id: 'studio-real-003',
    name: 'SKOOP DANCE STUDIO',
    description: '愛媛県松山市で世界に通用するダンサーの育成を目指す本格派。充実した育成プログラムと講師陣が特徴です。',
    category: "Dance",
    city: '松山市',
    area: '松山市内',
    access: '詳細は公式サイトを確認',
    genres: ['HIPHOP', 'LOCK', 'POP'],
    pricing: {
      system: '料金表公開',
      minPrice: 0,
      note: '料金システム案内あり / 新規入会キャンペーン案内あり'
    },
    features: {
      parking: false,
      beginnerFriendly: '〇',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://skoopdance.com/'
  },
  {
    id: 'studio-real-004',
    name: 'EXPG STUDIO MATSUYAMA',
    description: 'LDHが運営する本格的なダンススクール（千舟町）。アーティストを目指す本格的な環境でHIPHOPを学べます。',
    category: "Dance",
    city: '松山市',
    area: '湊町周辺',
    access: '松山市湊町3丁目（銀天街・松山市駅エリア）',
    genres: ['HIPHOP', 'Artist'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '△',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://expg.jp/school/matsuyama/'
  },
  {
    id: 'studio-real-005',
    name: "T's DANCE Labo.",
    description: '松山三越から徒歩1分！ジュニアからシニアまで、健康維持からプロを目指す方まで通える社交ダンス教室です。',
    category: "Dance",
    city: '松山市',
    area: '大街道周辺',
    access: '松山三越から徒歩1分',
    genres: ['Social Dance', 'Ballet'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://tsdancelabo.com/'
  },
  {
    id: 'studio-real-006',
    name: 'ビービーダンススタジオ',
    description: '千舟本校や堀江校など市内に複数展開。キッズから大人まで幅広いジャンルのダンスを丁寧に指導。',
    chainName: 'ビービーダンススタジオ',
    locationSummary: 'ビービーダンススタジオは松山市内に複数拠点があります。この一覧では比較の起点として千舟本校周辺の情報を掲載しています。',
    category: "Dance",
    city: '松山市',
    area: '千舟町周辺',
    access: '千舟本校・堀江校など',
    genres: ['JAZZ', 'HIPHOP'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://instagram.com/bb_dancestudio_ehime'
  },
  {
    id: 'studio-real-007',
    name: '俊野ダンススタジオ',
    description: '松山市勝山町に位置する社交ダンス教室。経験豊富な講師が親切丁寧に指導。35歳以下のユース向け割引もあります。',
    category: "Dance",
    city: '松山市',
    area: '勝山町周辺',
    access: '勝山町駅から徒歩圏内',
    genres: ['Social Dance'],
    pricing: {
      system: '月謝制',
      minPrice: 5000,
      note: '団体クラスの場合'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: false,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://toshinodance.com/'
  },
  {
    id: 'studio-real-008',
    name: 'なないろスタジオ',
    description: '松山市三津浜のレンタルスタジオを利用した様々なクラスあり。バレエやダンス、ピラティス、ヨガも実施されています。',
    category: "Dance",
    city: '松山市',
    area: '三津浜周辺',
    access: '三津浜エリア（駐車場完備）',
    genres: ['Ballet', 'Pilates', 'Yoga'],
    pricing: {
      system: '参加費',
      minPrice: 500,
      note: '社会ダンスの場合'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://nanairos.com/'
  },
  {
    id: 'studio-real-009',
    name: 'DANCE STUDIO MOGA',
    description: '松山市湊町にある老舗ダンススタジオ。HIPHOPだけでなく、JAZZ、LOCK、POP、コンテンポラリーまで幅広く学べる表現系スタジオです。',
    category: "Dance",
    city: '松山市',
    area: '湊町周辺',
    access: '松山市湊町3丁目（銀天街L字交差点から東へ20m）',
    genres: ['HIPHOP', 'JAZZ', 'LOCK', 'POP', 'コンテンポラリー'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '〇',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.moga-jp.com/'
  },

  // ================= ピアノ教室（松山市） =================
  {
    id: 'studio-piano-001',
    name: 'ヤマハミュージック 松山店',
    description: '松山市千舟町。市役所前駅から徒歩5分。子供から大人まで通える王道のピアノ・エレクトーンレッスン。',
    category: 'Piano',
    city: '松山市',
    area: '千舟町周辺',
    access: '市役所前駅から徒歩5分',
    genres: ['Piano', 'Music', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    reviewTendencies: [
      {
        icon: '🎹',
        title: '初心者でも通いやすい',
        description: '子どもの導入から大人の再開まで想定しやすく、王道の入り口として検討しやすい印象につながりやすい教室です。',
        tags: ['#初心者向け', '#大人の再開', '#子どもも通える']
      },
      {
        icon: '🏢',
        title: '落ち着いて通いやすい雰囲気',
        description: '駅近の通いやすさと老舗ブランドの安心感があり、まずは無難に選びたい人に向く傾向で見られやすいです。',
        tags: ['#安心感', '#駅近', '#王道']
      },
      {
        icon: '📅',
        title: '継続しやすいレッスン環境',
        description: '教室の情報量が多く、通う前にイメージを持ちやすいため、比較しながら自分のペースで始めやすい環境です。',
        tags: ['#比較しやすい', '#通いやすい', '#続けやすい']
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://retailing.jp.yamaha.com/shop/matsuyama'
  },
  {
    id: 'studio-piano-002',
    name: 'カワイ音楽教室 松山センター',
    description: '松山センターをはじめ、市内に複数展開。本格的なピアノレッスンから幼児向けのリトミックまで幅広く対応。',
    chainName: 'カワイ音楽教室',
    locationSummary: 'カワイ音楽教室は松山市内にも複数会場があります。この一覧では比較しやすい松山センターを掲載しています。',
    category: 'Piano',
    city: '松山市',
    area: '二番町周辺',
    access: '松山市二番町3丁目（三越横）',
    genres: ['Piano', 'Rythmique', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '無料体験案内あり / コース詳細は公式サイトを確認'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://music.kawai.jp/search/detail/00E792'
  },
  {
    id: 'studio-piano-003',
    name: '越智ピアノ教室',
    description: '松山市道後と森松に教室があります。道後教室は道後中学校から徒歩1分。駐車場完備で通いやすい地元密着の教室です。',
    chainName: '越智ピアノ教室',
    locationSummary: '越智ピアノ教室は道後教室と森松教室があります。この一覧ではアクセスの起点として道後教室の情報を掲載しています。',
    category: 'Piano',
    city: '松山市',
    area: '道後・森松',
    access: '道後中学校から徒歩1分（道後教室）',
    genres: ['Piano', 'Classic'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      parkingCapacity: 'standard',
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://ochimotomi.crayonsite.net/'
  },
  {
    id: 'studio-piano-004',
    name: '山本音楽教室',
    description: '松山市持田町で、ピアノを中心に幼児からシニアまで幅広く対応している音楽教室です。年齢や経験に応じて無理なく続けやすいレッスンが魅力です。',
    category: 'Piano',
    city: '松山市',
    area: '持田町周辺',
    access: '松山市持田町3丁目（南町駅から徒歩圏内）',
    genres: ['Piano'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1550100136-e092101726f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.yamamoto-musica.com/'
  },
  {
    id: 'studio-piano-005',
    name: '松山ピアノ教室「カルテット」',
    description: '松山市内で案内されているピアノ教室。子どもから大人まで幅広く通いやすく、柔軟な個人レッスンが受けやすい候補として紹介しています。',
    category: 'Piano',
    city: '松山市',
    area: '松山市内',
    access: '詳細は公式サイトを確認',
    genres: ['Piano', 'Music'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '料金は要問い合わせ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.t-piano.com/'
  },
  {
    id: 'studio-piano-006',
    name: 'RIBECA音楽教室',
    description: '松山市内で案内されている音楽教室。ピアノの基礎から表現面まで広く見たい人向けに、記事内でも候補として整理しています。',
    category: 'Piano',
    city: '松山市',
    area: '松山市内',
    access: '詳細は公式サイトを確認',
    genres: ['Piano', 'Music'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '料金は要問い合わせ'
    },
    features: {
      parking: false,
      beginnerFriendly: '〇',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://ribeca.info/'
  },

  // ================= プログラミング教室（松山市） =================
  {
    id: 'studio-prog-001',
    name: 'ITものづくり教室テックプログレス 松山山越校',
    description: 'プログラミングだけでなく、ロボットや3Dプリンター、デザインなども学べる話題の教室。松山市内に2教室展開。',
    chainName: 'ITものづくり教室テックプログレス',
    locationSummary: 'テックプログレスは松山市内に複数教室があります。この一覧では比較しやすい山越校を掲載しています。',
    category: 'Programming',
    city: '松山市',
    area: '山越周辺',
    access: '本町六丁目駅から徒歩10分',
    genres: ['Programming', 'Robot', 'Design'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      parkingCapacity: 'standard',
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    reviewTendencies: [
      {
        icon: '💻',
        title: '初心者でも入りやすい',
        description: 'プログラミングだけに絞らず、ロボットやものづくりを入口にできるので、最初の一歩が軽くなりやすい傾向です。',
        tags: ['#初心者向け', '#子ども向け', '#体験しやすい']
      },
      {
        icon: '🧩',
        title: '興味を広げやすい雰囲気',
        description: '作品づくりの幅があるぶん、勉強感だけでなく楽しさから入りたい家庭に向く印象で受け取られやすい教室です。',
        tags: ['#ものづくり', '#興味を広げやすい', '#楽しく学ぶ']
      },
      {
        icon: '🚗',
        title: '継続しやすい学習環境',
        description: '車で通いやすく、通学そのものの負担を抑えやすいので、週1で続ける前提の比較に向いています。',
        tags: ['#駐車場あり', '#通いやすい', '#続けやすい']
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://tech-progress.net/'
  },
  {
    id: 'studio-prog-002',
    name: 'プログラミングスクールTechChance! 松山木屋町校',
    description: '小・中学生向けにマイクラやUnityを使ったプログラミングを指導。楽しくゲーム感覚で実践力を身につけます。',
    category: 'Programming',
    city: '松山市',
    area: '木屋町周辺',
    access: '木屋町駅から徒歩2分',
    genres: ['Programming', 'Minecraft', 'Unity'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      parkingCapacity: 'standard',
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://techchance.jp/'
  },
  {
    id: 'studio-prog-003',
    name: 'プログラミング教室 TiNO',
    description: '松山市久米・鷹子・来住エリア。ScratchからMinecraft、ロボット、Pythonといった本格的な開発まで自由に選べます。',
    category: 'Programming',
    city: '松山市',
    area: '久米・鷹子周辺',
    access: '鷹子駅から徒歩10分',
    genres: ['Programming', 'Python', 'Scratch'],
    pricing: {
      system: '料金表公開',
      minPrice: 0,
      note: '公式サイトで料金表を確認'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://tino-programming.com/'
  },
  {
    id: 'studio-prog-008',
    name: 'プログラボ松山本町',
    description: '松山市本町にあるロボットプログラミング教室。STEM教育やロボット教材を重視したい家庭向けの候補として記事で紹介しています。',
    category: 'Programming',
    city: '松山市',
    area: '本町周辺',
    access: '松山市本町周辺',
    genres: ['Programming', 'Robot', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '料金は要問い合わせ'
    },
    features: {
      parking: false,
      beginnerFriendly: '〇',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.proglab.education/school/matsuyamahonmachi.html'
  },
  {
    id: 'studio-prog-007',
    name: 'まなるご ジョー・プラ南松山校',
    description: '松山市朝生田町にある初心者向けプログラミング教室。個別型で基礎から進めやすく、買い物動線にも乗せやすい教室として紹介しています。',
    category: 'Programming',
    city: '松山市',
    area: '朝生田町周辺',
    access: '松山市朝生田町5丁目1-25（ジョー・プラ内）',
    genres: ['Programming', 'Kids', 'Beginner'],
    pricing: {
      system: '月謝制',
      minPrice: 6600,
      note: '月3回コースの目安 / 無料体験案内あり'
    },
    features: {
      parking: true,
      parkingCapacity: 'large',
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://manalgo.net/entry/entry_chugoku/ehime/matsuyama/'
  },
  {
    id: 'studio-prog-009',
    name: '自立学習RED松山教室 QUREO',
    description: '松山市内で案内されているQUREO対応のプログラミング教室。ゲーム感覚で基礎から学ばせたい家庭向けに整理している候補です。',
    category: 'Programming',
    city: '松山市',
    area: '松山市内',
    access: '詳細は公式サイトを確認',
    genres: ['Programming', 'QUREO', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '料金は要問い合わせ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://qureo.jp/class/red_matsuyama'
  },
  {
    id: 'studio-prog-010',
    name: '明光義塾本町教室 QUREO',
    description: '松山市本町にあるQUREO対応のプログラミング教室。学習塾併設で通いやすく、段階的に学ばせたい家庭向けの候補です。',
    category: 'Programming',
    city: '松山市',
    area: '本町周辺',
    access: '松山市本町周辺',
    genres: ['Programming', 'QUREO', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '料金は要問い合わせ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://qureo.jp/class/meikogijuku_honmachi'
  },
  {
    id: 'studio-prog-004',
    name: 'プログラミング A GO! GO!',
    description: '今治市常盤町にある子ども向けプログラミング教室。Scratchを中心に、通学とオンラインの両方で学べる地域密着型の教室です。',
    category: 'Programming',
    city: '今治市',
    area: '常盤町周辺',
    access: '今治市常盤町2丁目2-1 2階',
    genres: ['Programming', 'Scratch', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.imabari-programming.com/'
  },
  {
    id: 'studio-prog-005',
    name: 'DCプログラミングスクール',
    description: '新居浜市一宮町にあるScratch中心のプログラミング教室。3Dプリンターやデジタル工作も体験できる子ども向けスクールです。',
    category: 'Programming',
    city: '新居浜市',
    area: '一宮町周辺',
    access: '新居浜市一宮町2丁目2-40',
    genres: ['Programming', 'Scratch', '3D'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://dc-school.jp/'
  },
  {
    id: 'studio-prog-006',
    name: '明光義塾新居浜中央教室 QUREO',
    description: '新居浜駅徒歩圏で通いやすいQUREOプログラミング教室。学習塾併設で、初めてでも段階的に進めやすい教室です。',
    category: 'Programming',
    city: '新居浜市',
    area: '坂井町周辺',
    access: '新居浜市坂井町1丁目6-1',
    genres: ['Programming', 'QUREO', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://qureo.jp/class/meikogijuku_niihamachuo'
  },

  // ================= 体操教室（松山市） =================
  {
    id: 'studio-gym-001',
    name: 'JPCスポーツ教室 松山店',
    description: 'スポーツが苦手な子からトップアスリートを目指す子まで、体幹トレーニングを中心に基礎運動能力を高める教室です。',
    category: 'Gymnastics',
    city: '松山市',
    area: '空港通周辺',
    access: '松山市空港通7丁目',
    genres: ['Gymnastics', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://jpc-sports.com/'
  },
  {
    id: 'studio-gym-002',
    name: '愛媛パールズ体操スクール',
    description: '松山市内に複数展開（余戸、道後など）。幼児から専門的なアクロバットやバク転まで幅広いコースが魅力です。',
    chainName: '愛媛パールズ体操スクール',
    locationSummary: '愛媛パールズ体操スクールは松山市内に複数会場があります。この一覧では比較の起点として本部と主要会場の情報をまとめています。',
    category: 'Gymnastics',
    city: '松山市',
    area: '余戸南・久万ノ台など',
    access: '余戸南4丁目（本部）・久万ノ台など',
    genres: ['Gymnastics', 'Acrobat', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://ehime-pearls.com/'
  },
  {
    id: 'studio-gym-003',
    name: 'ファースト体操クラブ',
    description: '2歳〜12歳対象。国体の監督経験もある実績豊富な指導陣による、安全と楽しさを両立した体操教室です。',
    category: 'Gymnastics',
    city: '松山市',
    area: '湯の山・森松など',
    access: '松山市湯の山東4丁目（本部）ほか',
    genres: ['Gymnastics', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://plus.unsplash.com/premium_photo-1663089688180-444ff0066e5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://first-taisou.com/'
  },
  {
    id: 'studio-gym-004',
    name: 'フィッタキッズスクール 松山',
    description: '総合フィットネスクラブ「フィッタ」内。体操のほか水泳なども選べ、広々とした専用スタジオで安全に学べます。',
    category: 'Gymnastics',
    city: '松山市',
    area: '宮西周辺',
    access: '松山市宮西1丁目（フジグラン松山隣接）',
    genres: ['Gymnastics', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://fitta.jp/'
  },

  // ================= 水泳教室（松山市） =================
  {
    id: 'studio-swim-001',
    name: '石原スポーツクラブ 雄郡教室',
    description: '伊予鉄・土橋駅から徒歩6分。これまでに2万人以上の指導実績があり、基礎から応用まで17段階のきめ細かいレベル分けで指導します。',
    category: 'Swimming',
    city: '松山市',
    area: '雄郡・土橋周辺',
    access: '土橋駅から徒歩6分',
    genres: ['Swimming', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://ishihara-s-c.jp/'
  },
  {
    id: 'studio-swim-002',
    name: '南海ドルフィンクラブ 朝生田',
    description: '30年以上の歴史と5万人以上の指導実績を持つスイミングクラブ。生後3ヶ月のベビーコースから大人まで通えます。',
    category: 'Swimming',
    city: '松山市',
    area: '朝生田周辺',
    access: '松山市朝生田町6丁目',
    genres: ['Swimming', 'Kids', 'Baby'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    experienceReport: {
      label: '保護者Uさんの声',
      summary: '先生がアットホームで、子どもも保護者も入りやすい雰囲気を感じたという声がありました。',
      checkpoints: [
        '先生との相性',
        '保護者同士が話しやすそうか',
        '見学時の空気感'
      ]
    },
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://nankaidc.jp/asoda/'
  },
  {
    id: 'studio-swim-003',
    name: 'AQUAキッズアカデミー',
    description: '水慣れから4泳法の習得まで、少人数制で段階的に泳力を伸ばす教室です。慶応幼稚園のプールで土曜日に開講。',
    category: 'Swimming',
    city: '松山市',
    area: '松山市内',
    access: '慶応幼稚園 内プール',
    genres: ['Swimming', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      weekendOpen: true,
      parkingCapacity: 'standard',
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://aqua-community.jp/'
  },

  // ================= ヨガ・ピラティス教室（松山市） =================
  {
    id: 'studio-yoga-001',
    name: 'ホットヨガスタジオLAVA ジョー・プラ松山店',
    description: 'ジョー・プラ松山内にあるホットヨガスタジオ。初心者向けの体験導線が分かりやすく、買い物動線にも乗せやすいのが特徴です。',
    category: 'Yoga',
    city: '松山市',
    area: '朝生田町周辺',
    access: '松山市朝生田町5-1-25 ジョー・プラ3F',
    genres: ['Yoga', 'HotYoga'],
    pricing: {
      system: '月会費',
      minPrice: 6800,
      note: 'ライトプラン / 体験0円案内あり'
    },
    features: {
      parking: true,
      parkingCapacity: 'large',
      beginnerFriendly: '◎',
      kidsClass: false,
      adultClass: true
    },
    imageUrl: 'https://plus.unsplash.com/premium_photo-1663089688180-444ff0066e5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://yoga-lava.com/ehime/matsuyama_jowpla/'
  },
  {
    id: 'studio-yoga-002',
    name: 'ホットヨガスタジオ P・YOGA 中央通り店',
    description: '松山市中央にあるホットヨガスタジオ。ヨガとピラティスの両方を見やすく、無料駐車場が使えるのが特徴です。',
    category: 'Yoga',
    city: '松山市',
    area: '中央通り周辺',
    access: '松山市中央2丁目76-1',
    genres: ['Yoga', 'Pilates', 'HotYoga'],
    pricing: {
      system: '月会費',
      minPrice: 5478,
      note: '体験500円〜 / 入会金7,700円・事務手数料3,300円'
    },
    features: {
      parking: true,
      parkingCapacity: 'standard',
      beginnerFriendly: '◎',
      kidsClass: false,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://yoga.pspo.jp/'
  },

  // ================= 西条市・宇和島市のスタジオ =================
  {
    id: 'studio-saijo-001',
    name: 'Dance Studio REVE',
    description: '西条市で活動しているダンススタジオ。キッズから大人まで、ストリートダンスを中心に学べる教室として案内されています。',
    category: 'Dance',
    city: '西条市',
    area: '西条市内',
    access: '伊予西条駅周辺',
    genres: ['HIPHOP', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.instagram.com/dancestudioreve/'
  },
  {
    id: 'studio-uwa-001',
    name: 'メッサスイミングクラブ宇和島',
    description: '宇和島市で運営されているスイミングクラブ。子ども向けから一般向けまで、水泳を継続しやすい地域密着型の教室として案内されています。',
    category: 'Swimming',
    city: '宇和島市',
    area: '宇和島市内',
    access: '詳細は直接お問い合わせ',
    genres: ['Swimming', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.messaswimmingclubuwajima.com/'
  },

  // ================= 松前町（実在する教室） =================
  {
    id: 'studio-mas-001',
    name: 'ABC Cooking Studio エミフルMASAKIスタジオ',
    description: 'エミフルMASAKI内にある大手料理教室。料理、パン、ケーキまで幅広いコースを公式サイトで確認できます。',
    category: 'Cooking',
    city: '松前町',
    area: '筒井周辺',
    access: '伊予郡松前町筒井850（エミフルMASAKI内）',
    genres: ['Cooking', 'Baking', 'Cake'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      parkingCapacity: 'large',
      beginnerFriendly: '◎',
      kidsClass: false,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://emifull.jp/shop/abc_cooking/'
  },
  {
    id: 'studio-mas-002',
    name: 'セイハ英語学院 エミフルMASAKI教室',
    description: 'エミフルMASAKI内で案内されている子ども向け英会話教室。買い物ついでにも通いやすい立地です。',
    category: 'English',
    city: '松前町',
    area: '筒井周辺',
    access: '伊予郡松前町筒井850（エミフルMASAKI内）',
    genres: ['English', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      parkingCapacity: 'large',
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://emifull.jp/shop/seiha/'
  },
  {
    id: 'studio-mas-003',
    name: '毎日個別塾5-Days 松前校',
    description: '松前町で案内されている個別指導塾。小学生から高校生まで通いやすい地域密着型の学習塾として公式サイトで確認できます。',
    category: 'CramSchool',
    city: '松前町',
    area: '筒井周辺',
    access: '伊予郡松前町筒井356-1',
    genres: ['CramSchool', 'Individual', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://5-days.jp/school/masaki/'
  },

  // ================= 料理教室（松山市） =================
  {
    id: 'studio-cooking-001',
    name: 'レストラン門田 お料理教室',
    description: '松山市三番町にあるレストラン門田のお料理教室。開催日程にあわせて、レストラン品質の料理を学べる実在教室です。',
    category: 'Cooking',
    city: '松山市',
    area: '三番町周辺',
    access: '松山市三番町3丁目（中央郵便局から徒歩5分）',
    genres: ['Cooking', 'French', 'Home Cooking'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      parkingCapacity: 'standard',
      beginnerFriendly: '◎',
      kidsClass: false,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://kadota.co.jp/cooking-school.html'
  },
  {
    id: 'studio-cooking-002',
    name: 'ホームメイドクッキング 松山教室',
    description: '大街道からすぐ。手作りパンをはじめ、和菓子や家庭料理まで、基礎からしっかり学べるアットホームな教室です。',
    category: 'Cooking',
    city: '松山市',
    area: '大街道周辺',
    access: '大街道駅 徒歩3分',
    genres: ['Cooking', 'Bread', 'Wagashi'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: false,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.homemade.co.jp/'
  },

  // ================= 英会話教室（松山市） =================
  {
    id: 'studio-english-001',
    name: 'ECCジュニア 福音寺教室',
    description: 'イヨテツスポーツセンターから徒歩1分。幼児から大人まで少人数制で一人ひとりの個性を大切にする英語教室です。',
    category: 'English',
    city: '松山市',
    area: '福音寺町周辺',
    access: '松山市福音寺町（イヨテツスポーツセンター徒歩1分）',
    genres: ['English', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    reviewTendencies: [
      {
        icon: '🗣️',
        title: '初心者でも通いやすい',
        description: '少人数で進みやすく、英語が久しぶりでも身構えすぎずに入りやすい教室として整理しやすい傾向があります。',
        tags: ['#初心者向け', '#少人数', '#体験しやすい']
      },
      {
        icon: '🌿',
        title: 'アットホームな雰囲気',
        description: '幼児から大人まで受け入れる教室なので、堅すぎず日常の延長で通いやすい空気感として受け取られやすいです。',
        tags: ['#アットホーム', '#社会人向け', '#親子で検討しやすい']
      },
      {
        icon: '📍',
        title: '継続しやすいレッスン環境',
        description: '生活圏に寄せやすい立地で、送迎でも仕事帰りでも無理なく組み込みやすい比較軸を持ちやすい教室です。',
        tags: ['#駐車場あり', '#生活に入れやすい', '#続けやすさ重視']
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.eccjr.com/'
  },
  {
    id: 'studio-english-002',
    name: 'トリニティスクールインジャパン 本町校',
    description: '1歳から大人まで幅広い年齢層に対応。経験豊富な外国人講師と日本人スタッフによる丁寧な指導が評判です。',
    category: 'English',
    city: '松山市',
    area: '本町周辺',
    access: '松山市本町3丁目（本町校）',
    genres: ['English', 'Conversation'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://trinityschoolinjapan.com/'
  },
  {
    id: 'studio-english-008',
    name: 'ECCジュニア 持田教室',
    description: '松山市持田町にある英会話教室。小学生から中学生を中心に、社会人・シニア向けコースもあり、地元で通いやすい教室です。',
    category: 'English',
    city: '松山市',
    area: '持田町周辺',
    access: '松山市持田町周辺',
    genres: ['English', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '無料体験あり / 料金は要問い合わせ'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://eccjuniorbs.jp/ht380166/'
  },
  {
    id: 'studio-english-003',
    name: 'ペッピーキッズクラブ 山越教室',
    description: '松山市山越にある子ども向け英会話教室。1歳から高校生まで対応していて、無料体験から始めやすい候補として記事でも紹介しています。',
    category: 'English',
    city: '松山市',
    area: '山越周辺',
    access: '松山市山越周辺',
    genres: ['English', 'Kids'],
    pricing: {
      system: '月謝制',
      minPrice: 8140,
      note: '子ども向けコースの目安 / 無料体験あり'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.peppy-kids.com/classroom/233/'
  },
  {
    id: 'studio-english-004',
    name: '駅前留学NOVA 松山校',
    description: '松山市湊町にある英会話教室。子どもから大人まで対応し、学び直しや旅行英会話でも比較しやすい候補として整理しています。',
    category: 'English',
    city: '松山市',
    area: '湊町周辺',
    access: '松山市湊町4丁目（松山市駅周辺）',
    genres: ['English', 'Conversation', 'Kids'],
    pricing: {
      system: '月謝制',
      minPrice: 10000,
      note: 'グループレッスンの目安 / 無料体験あり'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.nova.co.jp/schools/chugoku_shikoku/ehime/matsuyama.html'
  },
  {
    id: 'studio-english-007',
    name: '英会話イーオン 松山校',
    description: '松山市朝生田町にある英会話教室。子どもから大人まで対応し、無料体験から比較しやすい教室として松山向け記事で紹介しています。',
    category: 'English',
    city: '松山市',
    area: '朝生田町周辺',
    access: '松山市朝生田町周辺',
    genres: ['English', 'Conversation'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '無料体験あり / 料金詳細は公式サイトを確認'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.aeonet.co.jp/school/ehime/matsuyama.html'
  },

  // ================= 学習塾（松山市） =================
  {
    id: 'studio-cram-001',
    name: '明光義塾 本町教室',
    description: '松山市本町にある個別指導塾。学校の補習から受験対策まで幅広く対応し、自分のペースで学びやすい教室です。',
    category: 'CramSchool',
    city: '松山市',
    area: '本町周辺',
    access: '松山市本町5丁目（本町五丁目駅徒歩1分）',
    genres: ['Cram School', 'Individual', 'Exam Prep'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '料金詳細は公式サイトを確認'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.meikogijuku.jp/school/ehime/matsuyama-shi/S1979/'
  },
  {
    id: 'studio-cram-002',
    name: '東進スクール 松山市駅教室',
    description: '松山市駅エリアで小学生から高校生まで対応している学習塾。学年別の指導コースがあり、通学動線に乗せやすい教室です。',
    category: 'CramSchool',
    city: '松山市',
    area: '千舟町周辺',
    access: '松山市千舟町5-1-4 松山第二ビル1F・2F',
    genres: ['Cram School', 'Exam Prep', 'Elementary'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '料金詳細は公式サイトを確認'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.toshinshikoku.com/map/'
  },
  {
    id: 'studio-cram-003',
    name: '寺小屋グループ FLaT津田',
    description: '松山市北斎院町にある寺小屋グループの学習塾。個別指導ベースで、基礎固めから進学対策まで進めやすい教室です。',
    category: 'CramSchool',
    city: '松山市',
    area: '北斎院町周辺',
    access: '松山市北斎院町1250-13',
    genres: ['Cram School', 'Individual', 'Study Support'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '料金詳細は公式サイトを確認'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.terakoyagroup.com/school/243'
  },

  // ================= 書道教室（松山市） =================
  {
    id: 'studio-calligraphy-001',
    name: '松郷書道会',
    description: '松山市で毛筆・ペン字・鉛筆・かな文字を学べる書道教室。幼児から大人まで幅広く見学や体験の案内があります。',
    category: 'Calligraphy',
    city: '松山市',
    area: '東長戸周辺',
    access: '松山市東長戸4-5-3',
    genres: ['Calligraphy', 'Penmanship', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1550100136-e092101726f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://matsugo.themedia.jp/'
  },
  {
    id: 'studio-calligraphy-002',
    name: '書道教室HAKU',
    description: '愛媛県松山市で運営されている書道教室。習字を始めたい方にも入りやすい内容で、教室案内や開催情報を公式サイトで確認できます。',
    category: 'Calligraphy',
    city: '松山市',
    area: '桑原周辺',
    access: '松山市桑原1丁目周辺',
    genres: ['Calligraphy', 'Penmanship'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://matsu58.wixsite.com/haku'
  },
  {
    id: 'studio-calligraphy-003',
    name: '六六庵書道塾',
    description: '松山市内で案内されている書道塾。毛筆や書に親しみたい方向けに、公式サイトで教室情報を確認できます。',
    category: 'Calligraphy',
    city: '松山市',
    area: '勝山町周辺',
    access: '松山市勝山町2丁目周辺',
    genres: ['Calligraphy', 'Brush'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://tikugai.sakura.ne.jp/'
  },

  // ================= そろばん教室（松山市） =================
  {
    id: 'studio-soroban-001',
    name: 'MAKI.そろばん教室',
    description: '松山市で運営されているそろばん教室。基礎計算を身につけたい子ども向けに、教室情報を公式サイトで確認できます。',
    category: 'Soroban',
    city: '松山市',
    area: '持田・久米など',
    access: 'テクノプラザ愛媛・持田生活文化センターなど',
    genres: ['Soroban', 'Math', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://g2jq9.crayonsite.com/'
  },
  {
    id: 'studio-soroban-002',
    name: '西垣生そろばん教室',
    description: '松山市西垣生町にあるそろばん教室。計算力や集中力を伸ばしたい子どもの通塾先として検討しやすい教室です。',
    category: 'Soroban',
    city: '松山市',
    area: '西垣生周辺',
    access: '松山市西垣生町836-1',
    genres: ['Soroban', 'Math', 'Flash Mental'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.soroban.or.jp/school/%E8%A5%BF%E5%9E%A3%E7%94%9F%E3%81%9D%E3%82%8D%E3%81%B0%E3%82%93%E6%95%99%E5%AE%A4/'
  },
  {
    id: 'studio-soroban-003',
    name: '木原そろばん教室',
    description: '松山市土居田町にあるそろばん教室。日々の計算練習を積みたい子ども向けに、公式ページで教室情報が確認できます。',
    category: 'Soroban',
    city: '松山市',
    area: '土居田町周辺',
    access: '松山市土居田町676-7',
    genres: ['Soroban', 'Math', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.soroban.or.jp/school/%E6%9C%A8%E5%8E%9F%E3%81%9D%E3%82%8D%E3%81%B0%E3%82%93%E6%95%99%E5%AE%A4/'
  },

  // ================= スポーツジム =================
  {
    id: 'studio-fitness-001',
    name: 'スポーツクラブ フィッタ松山',
    description: '松山市宮西にある総合フィットネスクラブ。ジムに加えてプールやスタジオも備え、運動習慣をつくりやすい大型施設です。',
    chainName: 'スポーツクラブ フィッタ',
    locationSummary: 'フィッタは愛媛県内に複数店舗があります。この一覧では松山市内で比較しやすい松山店を掲載しています。',
    category: 'Fitness',
    city: '松山市',
    area: '宮西周辺',
    access: '松山市宮西一丁目5番10号',
    genres: ['Gym', 'Pool', 'Studio'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '料金詳細は公式サイトを確認'
    },
    features: {
      parking: true,
      parkingCapacity: 'standard',
      beginnerFriendly: '◎',
      kidsClass: false,
      adultClass: true
    },
    reviewTendencies: [
      {
        icon: '🏋️',
        title: '初心者でも通いやすい',
        description: 'マシンだけでなくプールやスタジオもあるため、運動の入口を自分のペースで選びやすい施設として見られやすいです。',
        tags: ['#初心者向け', '#大人向け', '#運動習慣']
      },
      {
        icon: '🏢',
        title: '通い方を選びやすい雰囲気',
        description: '本格派すぎる印象よりも、まず生活に運動を入れたい人が入りやすい総合型施設として整理しやすい傾向があります。',
        tags: ['#総合型ジム', '#通いやすい', '#無理なく始める']
      },
      {
        icon: '🚗',
        title: '継続しやすいレッスン環境',
        description: '駐車場があり、設備の選択肢も多いので、通う曜日や気分に合わせて続けやすい比較軸を持ちやすいです。',
        tags: ['#駐車場あり', '#設備が多い', '#続けやすい']
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.fitta.jp/matsuyama/'
  },
  {
    id: 'studio-fitness-002',
    name: 'スポーツクラブ フィッタ衣山',
    description: '松山市衣山にあるフィットネスジム。マシン、ウエイトトレーニング、プールまで揃い、初心者から続けやすい環境です。',
    chainName: 'スポーツクラブ フィッタ',
    locationSummary: 'フィッタは愛媛県内に複数店舗があります。この一覧では松山市内で比較しやすい衣山店を掲載しています。',
    category: 'Fitness',
    city: '松山市',
    area: '衣山周辺',
    access: '松山市衣山1丁目216',
    genres: ['Gym', 'Pool', 'Training'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '料金詳細は公式サイトを確認'
    },
    features: {
      parking: true,
      parkingCapacity: 'standard',
      beginnerFriendly: '◎',
      kidsClass: false,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.fitta.jp/kinuyama/'
  },
  {
    id: 'studio-fitness-003',
    name: 'P・SPO 松山空港通り店',
    description: '松山市空港通にある24時間型フィットネスジム。通いやすい営業時間と駐車場付きで、仕事帰りにも使いやすい店舗です。',
    chainName: 'P・SPO',
    locationSummary: 'P・SPOは愛媛県内に複数店舗があります。この一覧では松山市内で比較しやすい空港通り店を掲載しています。',
    category: 'Fitness',
    city: '松山市',
    area: '空港通周辺',
    access: '松山市空港通1丁目15-1',
    genres: ['Gym', '24h', 'Fitness'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '料金詳細は公式サイトを確認'
    },
    features: {
      parking: true,
      weekendOpen: true,
      parkingCapacity: 'standard',
      beginnerFriendly: '◎',
      kidsClass: false,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://pspo.jp/kuukou/'
  },
  {
    id: 'studio-fitness-004',
    name: 'スポーツクラブ フィッタ新居浜',
    description: '新居浜市新須賀町にある総合フィットネスクラブ。ジム、プール、スタジオを備え、幅広い運動ニーズに対応しています。',
    chainName: 'スポーツクラブ フィッタ',
    locationSummary: 'フィッタは愛媛県内に複数店舗があります。この一覧では新居浜市で比較しやすい新居浜店を掲載しています。',
    category: 'Fitness',
    city: '新居浜市',
    area: '新須賀町周辺',
    access: '新居浜市新須賀町一丁目8番21号',
    genres: ['Gym', 'Pool', 'Studio'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '料金詳細は公式サイトを確認'
    },
    features: {
      parking: true,
      parkingCapacity: 'standard',
      beginnerFriendly: '◎',
      kidsClass: false,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.fitta.jp/niihama/'
  },
  {
    id: 'studio-fitness-005',
    name: 'P・SPO マリエール今治店',
    description: '今治市郷本町にある24時間利用可能なスポーツジム。駐車場があり、日常の運動を無理なく継続しやすい店舗です。',
    chainName: 'P・SPO',
    locationSummary: 'P・SPOは愛媛県内に複数店舗があります。この一覧では今治市で比較しやすいマリエール今治店を掲載しています。',
    category: 'Fitness',
    city: '今治市',
    area: '郷本町周辺',
    access: '今治市郷本町1-1-35',
    genres: ['Gym', '24h', 'Fitness'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '料金詳細は公式サイトを確認'
    },
    features: {
      parking: true,
      weekendOpen: true,
      parkingCapacity: 'standard',
      beginnerFriendly: '◎',
      kidsClass: false,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://pspo.jp/marriyell_imabari/'
  },
  {
    id: 'studio-fitness-006',
    name: 'P・SPO ワールドプラザ店',
    description: '今治市東村のワールドプラザ内にあるフィットネスジム。買い物動線と合わせて利用しやすく、初めてでも始めやすい環境です。',
    chainName: 'P・SPO',
    locationSummary: 'P・SPOは愛媛県内に複数店舗があります。この一覧では今治市で比較しやすいワールドプラザ店を掲載しています。',
    category: 'Fitness',
    city: '今治市',
    area: '東村周辺',
    access: '今治市東村1丁目14-2 センターコート2F',
    genres: ['Gym', '24h', 'Training'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '料金詳細は公式サイトを確認'
    },
    features: {
      parking: true,
      weekendOpen: true,
      parkingCapacity: 'large',
      beginnerFriendly: '◎',
      kidsClass: false,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://pspo.jp/worldplaza/'
  },

  // ================= ボクシングジム（松山市） =================
  {
    id: 'studio-boxing-001',
    name: 'NEWボクシングクラブ',
    description: '松山市土居田町にあるボクシングクラブ。初心者のフィットネス利用から本格的に続けたい人まで相談しやすい環境です。',
    category: 'Boxing',
    city: '松山市',
    area: '土居田町周辺',
    access: '松山市土居田町138-3',
    genres: ['Boxing', 'Beginner', 'Fitness'],
    pricing: {
      system: '月会費',
      minPrice: 6500,
      note: '土日月会員 6,500円〜 / 見学・体験案内あり'
    },
    features: {
      parking: false,
      weekendOpen: true,
      beginnerFriendly: '◎',
      kidsClass: false,
      adultClass: true
    },
    reviewTendencies: [
      {
        icon: '🥊',
        title: '初心者でも通いやすい',
        description: 'フィットネス利用から入りやすく、いきなり本格的な会員ばかりの空気ではない点が一歩目の安心感につながりやすいです。',
        tags: ['#初心者向け', '#社会人向け', '#フィットネス利用']
      },
      {
        icon: '💬',
        title: '相談しやすい雰囲気',
        description: '目的を伝えてから始めやすく、運動不足解消か技術志向かで相談しながら選びやすい傾向で見られやすいジムです。',
        tags: ['#相談しやすい', '#目的別に選べる', '#大人向け']
      },
      {
        icon: '🗓️',
        title: '継続しやすいレッスン環境',
        description: '見学や体験から入りやすく、月会費もイメージしやすいため、続ける前提で比較しやすい環境として整理できます。',
        tags: ['#体験しやすい', '#料金が見やすい', '#続けやすさ重視']
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.new-boxing.com/'
  },
  {
    id: 'studio-boxing-002',
    name: '升田ボクシングジム',
    description: '松山市鴨川にあるボクシングジム。子どもから大人まで通いやすく、体験から始めたい人にも向いています。',
    category: 'Boxing',
    city: '松山市',
    area: '鴨川周辺',
    access: '松山市鴨川1丁目1-3 2F',
    genres: ['Boxing', 'Kids', 'Fitness'],
    pricing: {
      system: '月会費',
      minPrice: 5900,
      note: '入会金11,000円 / 月会費5,900円〜 / 体験1,000円'
    },
    features: {
      parking: true,
      parkingCapacity: 'standard',
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1517438984742-1262db08379e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://masuda-gym.com/'
  },

  // ================= アート・絵画教室（松山市） =================
  {
    id: 'studio-art-001',
    name: 'artspace アテナルミエール',
    description: '松山市柳井町にある子ども向けアート教室。絵画や造形を通して創造力や自己肯定感を育てる実在教室です。',
    category: 'Art',
    city: '松山市',
    area: '柳井町周辺',
    access: '松山市柳井町1丁目（やないまちアトリエ）',
    genres: ['Art', 'Painting', 'Craft', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://athena-lumiere.com/'
  },
  {
    id: 'studio-art-002',
    name: '青い鳥造形絵画教室',
    description: '1975年創立の実績ある教室。幼児から小学生を中心に、大人向けの教室も開講しており表現する楽しさを学べます。',
    category: 'Art',
    city: '松山市',
    area: '西垣生・桑原・富久など',
    access: '西垣生町・桑原公民館・富久集会所・ハトマート文化教室など',
    genres: ['Art', 'Painting'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      parkingCapacity: 'standard',
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://aoitorikaiga.com/'
  },

  // ================= 追加エリア（愛媛県内） =================
  {
    id: 'studio-english-005',
    name: 'NOVAバイリンガルKIDS 川内校',
    description: '東温市北方にある子ども向け英会話教室。無料体験や校舎見学にも対応していて、英語が初めての家庭でも比較しやすい教室です。',
    category: 'English',
    city: '東温市',
    area: '北方周辺',
    access: '東温市北方（町西公民館周辺）',
    genres: ['English', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.nova.co.jp/junior/schools/chugoku_shikoku/ehime/kawauchi.html'
  },
  {
    id: 'studio-programming-007',
    name: 'QUREOプログラミング教室 明光義塾 伊予教室',
    description: '伊予市米湊にある子ども向けプログラミング教室。マイクラを入り口にした学習や、駅近で通いやすい立地が特徴です。',
    category: 'Programming',
    city: '伊予市',
    area: '米湊周辺',
    access: '伊予市米湊（JR伊予市駅・郡中港駅周辺）',
    genres: ['Programming', 'Minecraft', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://qureo.jp/class/meikogijuku_iyo'
  },
  {
    id: 'studio-english-006',
    name: 'ペッピーキッズクラブ 伊予三島南教室',
    description: '四国中央市三島中央にある子ども向け英会話教室。1歳から高校生まで対応していて、駅近で通いやすい教室です。',
    category: 'English',
    city: '四国中央市',
    area: '三島中央周辺',
    access: '四国中央市三島中央（JR伊予三島駅周辺）',
    genres: ['English', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.peppy-kids.com/classroom/713/'
  },
  {
    id: 'studio-english-imabari-nova',
    name: 'NOVA今治馬越そよら校',
    description: '今治市馬越町にある英会話スクール。子どもから大人まで対応していて、今治市内で英会話を総合的に比較したいときの候補です。',
    category: 'English',
    city: '今治市',
    area: '馬越町周辺',
    access: '今治市馬越町（そよら今治馬越周辺）',
    genres: ['English', 'Conversation', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.nova.co.jp/schools/chugoku_shikoku/ehime/imabari.html'
  },
  {
    id: 'studio-english-imabari-scott',
    name: 'スコット英語アカデミー',
    description: '今治市内で子どもから大人まで対応する英語教室。少人数でじっくり学びたい人や、地域密着型の英会話を探す人に向いています。',
    category: 'English',
    city: '今治市',
    area: '今治市内',
    access: '今治市内（詳細は公式サイトへ）',
    genres: ['English', 'Conversation', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.scotteigo-ac.com/'
  },
  {
    id: 'studio-english-imabari-peppy-minami',
    name: 'ペッピーキッズクラブ 今治南教室',
    description: '今治市内にある子ども向け英会話教室。1歳から高校生まで対応していて、低年齢から英語に触れたい家庭の候補になります。',
    category: 'English',
    city: '今治市',
    area: '今治市内',
    access: '今治市内（詳細は公式サイトへ）',
    genres: ['English', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.peppy-kids.com/classroom/143/'
  },
  {
    id: 'studio-english-niihama-nova',
    name: 'NOVA新居浜イオンモール校',
    description: 'イオンモール新居浜周辺で通いやすい英会話スクール。子どもから大人まで対応していて、買い物動線と合わせて検討しやすい候補です。',
    category: 'English',
    city: '新居浜市',
    area: 'イオンモール新居浜周辺',
    access: '新居浜市前田町（イオンモール新居浜）',
    genres: ['English', 'Conversation', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: true,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.nova.co.jp/schools/chugoku_shikoku/ehime/niihama.html'
  },
  {
    id: 'studio-english-niihama-jade',
    name: 'ジェイド英会話',
    description: '新居浜市内の地域密着型英会話教室。ネイティブ講師のいる教室として、じっくり英会話を学びたい人に向いています。',
    category: 'English',
    city: '新居浜市',
    area: '新居浜市内',
    access: '新居浜市内（詳細は公式サイトへ）',
    genres: ['English', 'Conversation'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.jadeeikaiwaniihama.com/'
  },
  {
    id: 'studio-english-niihama-gem',
    name: 'GEM SCHOOL 新居浜校',
    description: '新居浜市内で子ども英会話にも対応する英語スクール。幼児から英語に触れたい家庭や、楽しく始めたい子ども向けの候補です。',
    category: 'English',
    city: '新居浜市',
    area: '新居浜市内',
    access: '新居浜市内（詳細は公式サイトへ）',
    genres: ['English', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.gemschool.com/niihama'
  },
  {
    id: 'studio-english-shikokuchuo-nova-doi',
    name: 'NOVAバイリンガルKIDS 四国中央土居校',
    description: '四国中央市土居町にある子ども向け英会話教室。3歳から12歳を対象に、少人数制で英語を始めたい家庭が比較しやすい候補です。',
    category: 'English',
    city: '四国中央市',
    area: '土居町津根周辺',
    access: '四国中央市土居町津根',
    genres: ['English', 'Kids'],
    pricing: {
      system: '不明',
      minPrice: 0,
      note: '詳細は公式サイトへ'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.nova.co.jp/junior/schools/chugoku_shikoku/ehime/shikokuchuodoi.html'
  },

  // ================= 香川県高松市 =================
  {
    id: 'school-english-takamatsu-aeon',
    listingType: 'school',
    name: '英会話イーオン 高松校',
    description: '高松市丸亀町にある英会話教室。初心者の日常会話から旅行・仕事・資格対策まで、目的別に相談しやすい教室です。',
    category: 'English',
    city: '高松市',
    area: '丸亀町周辺',
    access: 'JR高松駅から徒歩約15分、ことでん瓦町駅から徒歩約7分',
    genres: ['English', 'Conversation', 'Qualification'],
    learningNeeds: ['kids_lessons', 'adult_lessons', 'language_learning'],
    decisionFactors: ['beginner_friendly', 'trial_available', 'schedule_fit'],
    fitSummary: '初心者サポートや目的別コースを相談して決めたい人向け',
    checkpoints: ['希望時間の空き', '教材費を含む総額', '振替条件'],
    pricing: { system: '月謝制', minPrice: 13200, note: 'Lightレッスン月額の公開料金 / 契約内容による別途費用は要確認' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true },
    trial: '無料体験レッスンあり',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.aeonet.co.jp/school/kagawa/takamatsu.html',
    sourceNote: '公式校舎ページを2026-08-20確認'
  },
  {
    id: 'school-english-takamatsu-nova-kawaramachi',
    listingType: 'school',
    name: '駅前留学NOVA 高松瓦町FLAG校',
    description: '瓦町FLAG9階にある英会話教室。幼児からシニアまで対応し、駅直結で通学しやすい校舎です。',
    category: 'English',
    city: '高松市',
    area: '瓦町周辺',
    access: 'ことでん瓦町駅直結、瓦町FLAG 9F',
    genres: ['English', 'Conversation', 'Kids'],
    learningNeeds: ['kids_lessons', 'adult_lessons', 'language_learning'],
    decisionFactors: ['commute_fit', 'trial_available', 'schedule_fit'],
    fitSummary: '駅直結で子どもから大人まで通いやすさを重視する人向け',
    checkpoints: ['固定制と予約制の違い', '別途月会費', '希望曜日の開校'],
    pricing: { system: '月謝制', minPrice: 11000, note: '固定グループ月4回の税込料金 / 別途月会費・地域差あり' },
    features: { parking: false, weekendOpen: true, beginnerFriendly: '◎', kidsClass: true, adultClass: true },
    trial: '無料体験レッスン・見学あり',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.nova.co.jp/schools/chugoku_shikoku/kagawa/takamatsu.html',
    sourceNote: '公式校舎ページを2026-08-20確認'
  },
  {
    id: 'school-english-takamatsu-nova-youme',
    listingType: 'school',
    name: '駅前留学NOVA 高松ゆめタウン校',
    description: 'ゆめタウン高松内にある英会話教室。買い物動線に組み込みやすく、固定制と予約制から選べます。',
    category: 'English',
    city: '高松市',
    area: '三条町周辺',
    access: 'ゆめタウン高松内',
    genres: ['English', 'Conversation', 'Kids'],
    learningNeeds: ['kids_lessons', 'adult_lessons', 'language_learning'],
    decisionFactors: ['commute_fit', 'trial_available', 'schedule_fit'],
    fitSummary: '買い物と合わせて英会話を続けたい家庭・大人向け',
    checkpoints: ['固定制と予約制の違い', '別途月会費', '駐車場利用条件'],
    pricing: { system: '月謝制', minPrice: 11000, note: '固定グループ月4回の税込料金 / 別途月会費・地域差あり' },
    features: { parking: true, parkingCapacity: 'large', weekendOpen: true, beginnerFriendly: '◎', kidsClass: true, adultClass: true },
    trial: '無料体験レッスンあり',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.nova.co.jp/schools/chugoku_shikoku/kagawa/takamatsu_youme.html',
    sourceNote: '公式校舎ページを2026-08-20確認'
  },
  {
    id: 'school-english-takamatsu-yamaha-avenue',
    listingType: 'school',
    name: 'ヤマハ英語教室 ミュージックアベニュー高松',
    description: '丸亀町壱番街にある子ども向け英語教室。ヤマハの幼児教育ノウハウを活用した年齢別コースを用意しています。',
    category: 'English',
    city: '高松市',
    area: '丸亀町周辺',
    access: 'ことでん片原町駅徒歩3分、丸亀町壱番街東館3F',
    genres: ['English', 'Kids'],
    learningNeeds: ['kids_lessons', 'language_learning'],
    decisionFactors: ['age_fit', 'commute_fit', 'trial_available'],
    fitSummary: '幼児期から年齢に合った英語学習を始めたい家庭向け',
    checkpoints: ['対象年齢', '開講曜日', '教材費を含む総額'],
    pricing: { system: '月謝制', minPrice: 0, note: 'コース別料金は公式ページで確認' },
    features: { parking: false, weekendOpen: true, beginnerFriendly: '◎', kidsClass: true, adultClass: false },
    trial: '無料体験・レッスン見学あり',
    imageUrl: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://school.jp.yamaha.com/english_school/room/result.php?add=%E9%AB%98%E6%9D%BE%E5%B8%82&country=%E9%A6%99%E5%B7%9D%E7%9C%8C&jiscode=37',
    sourceNote: 'ヤマハ英語教室公式検索を2026-08-20確認'
  },

  {
    id: 'school-piano-takamatsu-yamaha-avenue',
    listingType: 'school',
    name: 'ヤマハ ミュージックアベニュー高松',
    description: '丸亀町壱番街にある音楽教室。子どもから大人まで、ピアノを含む楽器・歌のコースを選べます。',
    category: 'Piano',
    city: '高松市',
    area: '丸亀町周辺',
    access: 'ことでん片原町駅徒歩3分、丸亀町壱番街東館3F',
    genres: ['Piano', 'Music', 'Kids', 'Adult'],
    learningNeeds: ['kids_lessons', 'adult_lessons'],
    decisionFactors: ['commute_fit', 'trial_available', 'adult_friendly'],
    fitSummary: '中心部で子ども・大人のピアノを比較したい人向け',
    checkpoints: ['個人・グループ形式', '開講曜日', '施設費を含む総額'],
    pricing: { system: '月謝制', minPrice: 0, note: 'コース別料金は公式ページで確認' },
    features: { parking: false, weekendOpen: true, beginnerFriendly: '◎', kidsClass: true, adultClass: true },
    trial: '無料体験・レッスン見学あり',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://school.jp.yamaha.com/music/venue/detail/?id=294181R98',
    sourceNote: 'ヤマハ公式会場情報を2026-08-20確認'
  },
  {
    id: 'school-piano-takamatsu-yamaha-west',
    listingType: 'school',
    name: 'ヤマハ ユニスタイル高松WEST',
    description: '高松市円座町にあるヤマハ音楽教室。子どもの音楽教育から大人のピアノまで検討できる郊外型会場です。',
    category: 'Piano',
    city: '高松市',
    area: '円座町周辺',
    access: '高松市円座町1050、ことでん円座駅から徒歩圏',
    genres: ['Piano', 'Music', 'Kids', 'Adult'],
    learningNeeds: ['kids_lessons', 'adult_lessons'],
    decisionFactors: ['commute_fit', 'trial_available', 'age_fit'],
    fitSummary: '高松西部で子ども・大人のピアノを探す人向け',
    checkpoints: ['駐車場条件', '開講曜日', '施設費を含む総額'],
    pricing: { system: '月謝制', minPrice: 0, note: 'コース別料金は公式ページで確認' },
    features: { parking: true, beginnerFriendly: '◎', kidsClass: true, adultClass: true },
    trial: '体験・レッスン見学あり',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://school.jp.yamaha.com/music/venues/detail/?category=all&courseClsCd=14&prefecture=%E9%A6%99%E5%B7%9D%E7%9C%8C%E9%AB%98%E6%9D%BE%E5%B8%82',
    sourceNote: 'ヤマハ公式高松市教室一覧を2026-08-20確認'
  },
  {
    id: 'school-piano-takamatsu-kawai-center',
    listingType: 'school',
    name: 'カワイ音楽教室 高松センター',
    description: '内町にあるピアノ・リトミック教室。3歳ソルフェージュ、4歳からのピアノ、大人向けコースを確認できます。',
    category: 'Piano',
    city: '高松市',
    area: '内町周辺',
    access: 'ことでん片原町駅徒歩2分、小松ビル2F',
    genres: ['Piano', 'Solfege', 'Kids', 'Adult'],
    learningNeeds: ['kids_lessons', 'adult_lessons'],
    decisionFactors: ['age_fit', 'commute_fit', 'trial_available'],
    fitSummary: '幼児導入から大人のピアノまで中心部で探す人向け',
    checkpoints: ['対象コースの募集状況', '有料駐車場', '教材費を含む総額'],
    pricing: { system: '月謝制', minPrice: 0, note: 'コース別料金は公式ページで確認' },
    features: { parking: false, weekendOpen: true, beginnerFriendly: '◎', kidsClass: true, adultClass: true },
    trial: '体験レッスン案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://music.kawai.jp/search/detail/005266',
    sourceNote: 'カワイ公式教室ページを2026-08-20確認'
  },
  {
    id: 'school-piano-takamatsu-opus-aeon',
    listingType: 'school',
    name: 'ヤマハ オーパスクラブイオン高松',
    description: 'イオンモール高松内にある音楽教室。子ども向け音楽コースと大人のピアノを買い物動線で検討できます。',
    category: 'Piano',
    city: '高松市',
    area: '香西本町周辺',
    access: '高松市香西本町1-1、イオンモール高松内',
    genres: ['Piano', 'Music', 'Kids', 'Adult'],
    learningNeeds: ['kids_lessons', 'adult_lessons'],
    decisionFactors: ['commute_fit', 'trial_available', 'age_fit'],
    fitSummary: '買い物と合わせて子ども・大人のピアノを続けたい人向け',
    checkpoints: ['開講曜日', '施設費を含む総額', '駐車場利用条件'],
    pricing: { system: '月謝制', minPrice: 0, note: 'コース別料金は公式ページで確認' },
    features: { parking: true, parkingCapacity: 'large', weekendOpen: true, beginnerFriendly: '◎', kidsClass: true, adultClass: true },
    trial: '体験・レッスン見学あり',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://school.jp.yamaha.com/music/venues/detail/?category=all&courseClsCd=14&prefecture=%E9%A6%99%E5%B7%9D%E7%9C%8C%E9%AB%98%E6%9D%BE%E5%B8%82',
    sourceNote: 'ヤマハ公式高松市教室一覧を2026-08-20確認'
  },

  {
    id: 'school-programming-takamatsu-qureo-east',
    listingType: 'school',
    name: 'QUREO ベスト個別 高松東教室',
    description: 'フレスポ高松内の小学生向けプログラミング教室。マインクラフト教材から基礎概念とゲーム制作へ進みます。',
    category: 'Programming',
    city: '高松市',
    area: '東山崎町周辺',
    access: 'ことでん水田駅徒歩10分、フレスポ高松内',
    genres: ['Programming', 'Minecraft', 'Kids'],
    learningNeeds: ['kids_lessons', 'ai_it'],
    decisionFactors: ['beginner_friendly', 'trial_available', 'commute_fit'],
    fitSummary: '小学3〜6年生がマイクラから始めたい家庭向け',
    checkpoints: ['キャンペーン終了後の体験条件', '月謝・教材費', '希望時間の空き'],
    pricing: { system: '月謝制', minPrice: 0, note: '授業料は公式教室ページで確認' },
    features: { parking: true, parkingCapacity: 'large', beginnerFriendly: '◎', kidsClass: true, adultClass: false },
    scheduleNote: '火〜金 16:45〜・17:45〜',
    trial: '体験案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://qureo.jp/class/besutokobetsu_takamatsuhigashi',
    sourceNote: 'QUREO公式教室ページを2026-08-20確認'
  },
  {
    id: 'school-programming-takamatsu-qureo-sunflower',
    listingType: 'school',
    name: 'QUREO 個別指導フォレスト 高松サンフラワー通り校',
    description: '今里町にある小学2〜6年生向けプログラミング教室。ゲーム感覚の教材で基礎から段階的に学べます。',
    category: 'Programming',
    city: '高松市',
    area: '今里町周辺',
    access: '高松市今里町1-477-1、花園駅から車で約5分',
    genres: ['Programming', 'Minecraft', 'Kids'],
    learningNeeds: ['kids_lessons', 'ai_it'],
    decisionFactors: ['beginner_friendly', 'trial_available', 'age_fit'],
    fitSummary: '小学2年生から近隣でプログラミングを始めたい家庭向け',
    checkpoints: ['授業曜日', '月謝・教材費', '体験条件'],
    pricing: { system: '月謝制', minPrice: 0, note: '授業料は公式教室ページで確認' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false },
    trial: '体験案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://qureo.jp/class/kobetsushidoforest_takamatsusunflowerdori',
    sourceNote: 'QUREO公式教室ページを2026-08-20確認'
  },
  {
    id: 'school-programming-takamatsu-qureo-rainbow',
    listingType: 'school',
    name: 'QUREO 毎日個別塾5-Days 高松レインボー通り校',
    description: '松縄町にある小学2年生〜高校生向けプログラミング教室。初級からプログラミング検定対策まで確認できます。',
    category: 'Programming',
    city: '高松市',
    area: '松縄町周辺',
    access: '高松市松縄町1012-8、ことでんバス停から徒歩1分',
    genres: ['Programming', 'Minecraft', 'Qualification'],
    learningNeeds: ['kids_lessons', 'ai_it', 'certification'],
    decisionFactors: ['age_fit', 'credential_outcome', 'trial_available'],
    fitSummary: '小学生から高校生まで段階的にプログラミングを学びたい人向け',
    checkpoints: ['対応コース', '授業曜日', '月謝・教材費'],
    pricing: { system: '月謝制', minPrice: 0, note: '授業料は公式教室ページで確認' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false },
    trial: '体験案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://qureo.jp/class/5-days_takamatsurainbowdori',
    sourceNote: 'QUREO公式教室ページを2026-08-20確認'
  },

  {
    id: 'school-dance-takamatsu-studio-mj',
    listingType: 'school',
    name: 'スタジオMJ',
    description: '太田下町にあるダンス教室。ジャズダンス、アクロバット、大人向けストレッチなどを開講しています。',
    category: 'Dance',
    city: '高松市',
    area: '太田下町周辺',
    access: '高松市太田下町2020',
    genres: ['JAZZ', 'Acrobat', 'Kids', 'Adult'],
    learningNeeds: ['kids_lessons', 'adult_lessons'],
    decisionFactors: ['beginner_friendly', 'trial_available', 'schedule_fit'],
    fitSummary: '募集クラスを確認し、体験から始めたい子ども・大人向け',
    checkpoints: ['現在募集中のクラス', '体験料金', '駐車場条件'],
    pricing: { system: '月謝制', minPrice: 0, note: '料金と募集状況は公式サイトで確認' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true },
    trial: '入会前の体験受講が必要',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://studiomj.jimdofree.com/',
    sourceNote: '公式サイトを2026-08-20確認'
  },
  {
    id: 'school-dance-takamatsu-kt-dance',
    listingType: 'school',
    name: 'KT-Dance Group',
    description: '高松市内の複数会場で活動するダンス教室。年中から社会人まで、HIPHOP・JAZZ・アクロバットなどを学べます。',
    category: 'Dance',
    city: '高松市',
    area: '太田・多肥周辺',
    access: '太田コミュニティセンター、MISSMOなど複数会場',
    genres: ['HIPHOP', 'JAZZ', 'Acrobat', 'Kids'],
    learningNeeds: ['kids_lessons', 'adult_lessons'],
    decisionFactors: ['age_fit', 'trial_available', 'beginner_friendly'],
    fitSummary: '年中から大人まで年齢とジャンルに合うクラスを選びたい人向け',
    checkpoints: ['会場と曜日', '対象年齢', '体験・月謝'],
    pricing: { system: '月謝制', minPrice: 0, note: 'クラス別料金は公式サイトで確認' },
    features: { parking: false, weekendOpen: true, beginnerFriendly: '◎', kidsClass: true, adultClass: true },
    trial: '体験・見学申込あり',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://kt-dance-group.com/',
    sourceNote: '公式サイトを2026-08-20確認'
  },
  {
    id: 'school-dance-takamatsu-yeomin',
    listingType: 'school',
    name: 'Yeomin Dance',
    description: '上林町にあるK-POPダンス教室。韓国人講師によるレッスンを、キッズから大人まで受講できます。',
    category: 'Dance',
    city: '高松市',
    area: '上林町周辺',
    access: '高松市上林町510-39',
    genres: ['K-POP', 'Kids', 'Adult'],
    learningNeeds: ['kids_lessons', 'adult_lessons'],
    decisionFactors: ['beginner_friendly', 'trial_available', 'commute_fit'],
    fitSummary: '高松でK-POPを子ども・大人が学びたい人向け',
    checkpoints: ['年齢別クラス', '体験料金', '開講曜日'],
    pricing: { system: '月謝制', minPrice: 0, note: 'クラス別料金は公式サイトで確認' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true },
    trial: '体験案内は公式サイトで確認',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://yeomindance.com/',
    sourceNote: '公式サイトを2026-08-20確認'
  },

  {
    id: 'school-soroban-takamatsu-kawada',
    listingType: 'school',
    name: '川田珠算学園 高松教室',
    description: '高松市中央町にあるそろばん教室。月〜木に1回60分で練習し、フラッシュ暗算にも対応しています。',
    category: 'Soroban',
    city: '高松市',
    area: '中央町周辺',
    access: '高松市中央町16-18、高松八本松郵便局2F',
    genres: ['Soroban', 'Flash Mental', 'Kids'],
    learningNeeds: ['kids_lessons'],
    decisionFactors: ['trial_available', 'schedule_fit', 'commute_fit'],
    fitSummary: '平日に60分ずつそろばん・フラッシュ暗算を学びたい家庭向け',
    checkpoints: ['対象年齢', '月謝・入会金', '受講曜日'],
    pricing: { system: '月謝制', minPrice: 0, note: '料金は教室へ問い合わせ' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false },
    scheduleNote: '月〜木 16:30〜、1回60分',
    trial: '体験学習・見学可',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.soroban.or.jp/school/%E5%B7%9D%E7%94%B0%E7%8F%A0%E7%AE%97%E5%AD%A6%E5%9C%92%E3%81%8B%E3%82%81%E3%81%8A%E3%81%8B%E6%95%99%E5%AE%A4/',
    sourceNote: '全国珠算教育連盟の教室ページを2026-08-20確認'
  },
  {
    id: 'school-soroban-takamatsu-doi',
    listingType: 'school',
    name: '土居珠算教室',
    description: '高松市木太町にあるそろばん教室。そろばんと暗算を通じて、計算・記憶・集中力を伸ばす教室として登録されています。',
    category: 'Soroban',
    city: '高松市',
    area: '木太町周辺',
    access: '高松市木太町5070-15',
    genres: ['Soroban', 'Mental Arithmetic', 'Kids'],
    learningNeeds: ['kids_lessons'],
    decisionFactors: ['commute_fit', 'beginner_friendly'],
    fitSummary: '木太町周辺でそろばんと暗算を学びたい家庭向け',
    checkpoints: ['対象年齢', '練習曜日', '料金・体験条件'],
    pricing: { system: '月謝制', minPrice: 0, note: '料金は教室へ問い合わせ' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false },
    trial: '体験・見学条件は教室へ確認',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.soroban.or.jp/area/kagawa_001/',
    sourceNote: '全国珠算教育連盟の高松市教室一覧を2026-08-20確認'
  },
  {
    id: 'school-soroban-takamatsu-yashima',
    listingType: 'school',
    name: '屋島珠算教室',
    description: '高松市屋島西町にあるそろばん教室。集中力・計算力・学ぶ力を身につける教室として全国珠算教育連盟に登録されています。',
    category: 'Soroban',
    city: '高松市',
    area: '屋島西町周辺',
    access: '高松市屋島西町2453-14',
    genres: ['Soroban', 'Mental Arithmetic', 'Kids'],
    learningNeeds: ['kids_lessons'],
    decisionFactors: ['commute_fit', 'beginner_friendly'],
    fitSummary: '屋島周辺で計算力と集中力を伸ばしたい家庭向け',
    checkpoints: ['対象年齢', '練習曜日', '料金・体験条件'],
    pricing: { system: '月謝制', minPrice: 0, note: '料金は教室へ問い合わせ' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false },
    trial: '体験・見学条件は教室へ確認',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.soroban.or.jp/area/kagawa_001/',
    sourceNote: '全国珠算教育連盟の高松市教室一覧を2026-08-20確認'
  },

  // ================= 香川県丸亀市 =================
  {
    id: 'school-english-marugame-gem', listingType: 'school', name: '英会話のジェムスクール 丸亀校',
    description: '丸亀市土器町東にある英会話教室。0歳から大人までを対象に、年齢と目的に合わせて学べます。',
    category: 'English', city: '丸亀市', area: '土器町東周辺', access: '丸亀市土器町東7-754',
    genres: ['English', 'Conversation', 'Kids'], learningNeeds: ['kids_lessons', 'adult_lessons', 'language_learning'], decisionFactors: ['age_fit', 'trial_available', 'schedule_fit'],
    fitSummary: '子どもから大人まで、年齢に合う英会話を相談したい人向け', checkpoints: ['対象クラス', '開講曜日', '月謝と教材費'],
    pricing: { system: '月謝制', minPrice: 0, note: '入会金・年会費・施設管理費なし / 月謝は公式サイトで確認' },
    features: { parking: true, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験レッスンは公式サイトで確認',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.gemschool.com/marugame', sourceNote: '公式丸亀校ページを2026-08-25確認'
  },
  {
    id: 'school-english-marugame-private', listingType: 'school', name: '丸亀英会話 Marugame English',
    description: '丸亀市にある少人数・プライベート英会話教室。子ども向け、オンライン、英語料理など目的に応じたコースがあります。',
    category: 'English', city: '丸亀市', area: '丸亀市内', access: '所在地の詳細は公式サイトで確認',
    genres: ['English', 'Conversation', 'Kids', 'Online'], learningNeeds: ['kids_lessons', 'adult_lessons', 'language_learning'], decisionFactors: ['small_group', 'schedule_fit', 'beginner_friendly'],
    fitSummary: '少人数やマンツーマンで会話を練習したい人向け', checkpoints: ['教室所在地', 'グループと個別の違い', '料金・体験条件'],
    pricing: { system: 'コース制', minPrice: 0, note: 'コース別料金は公式サイトへ問い合わせ' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験条件は公式サイトへ問い合わせ',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://marugame-english.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-english-marugame-lepton', listingType: 'school', name: '学研CAIスクールLepton丸亀校',
    description: '丸亀市川西町北にある個別指導型の子ども英語教室。小学生から4技能を自分の進度で学べます。',
    category: 'English', city: '丸亀市', area: '川西町北周辺', access: '丸亀市川西町北2220-1F、春日の辻バス停から約10m',
    genres: ['English', 'Kids', 'Qualification'], learningNeeds: ['kids_lessons', 'language_learning'], decisionFactors: ['age_fit', 'trial_available', 'schedule_fit'],
    fitSummary: '小学生が個別進度で英語4技能を学びたい家庭向け', checkpoints: ['週1回と週2回', '教材費', '入会金・年会費'],
    pricing: { system: '月謝制', minPrice: 7810, note: '週1回の公式目安 / 教材費・入会金等は別途確認' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '無料体験レッスンあり',
    imageUrl: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.lepton.co.jp/374001', sourceNote: 'Lepton公式教室ページを2026-08-25確認'
  },
  {
    id: 'school-english-marugame-seiha', listingType: 'school', name: 'セイハ英語学院 ゆめタウン丸亀教室',
    description: 'ゆめタウン丸亀3階にある子ども英会話教室。乳幼児から中学生まで年齢別コースを用意しています。',
    category: 'English', city: '丸亀市', area: '新田町周辺', access: '丸亀市新田町150、ゆめタウン丸亀3F',
    genres: ['English', 'Kids', 'Qualification'], learningNeeds: ['kids_lessons', 'language_learning'], decisionFactors: ['age_fit', 'commute_fit', 'trial_available'],
    fitSummary: '買い物動線で子どもの英会話を続けたい家庭向け', checkpoints: ['対象年齢', '振替条件', '教材費を含む総額'],
    pricing: { system: '月謝制', minPrice: 5940, note: '0〜3歳親子コースの公式掲載額〜 / 年齢別料金・別途費用を確認' },
    features: { parking: true, parkingCapacity: 'large', weekendOpen: true, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '体験レッスン案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://english-academy.seiha.com/classroom/81200/', sourceNote: 'セイハ公式教室ページを2026-08-25確認'
  },
  {
    id: 'school-piano-marugame-kawai-center', listingType: 'school', name: 'カワイ音楽教室 丸亀センター',
    description: '丸亀市幸町にある音楽教室。4歳・小学生からのピアノや、おためしコースなどを確認できます。',
    category: 'Piano', city: '丸亀市', area: '幸町周辺', access: '丸亀市幸町2丁目6-18、丸亀聖母幼稚園前',
    genres: ['Piano', 'Kids', 'Vocal'], learningNeeds: ['kids_lessons', 'adult_lessons'], decisionFactors: ['age_fit', 'trial_available', 'commute_fit'],
    fitSummary: '体験から子どもの個人ピアノを検討したい家庭向け', checkpoints: ['開講曜日', '入会金・管理費', '駐車位置'],
    pricing: { system: '月謝制', minPrice: 0, note: 'コース別料金は公式教室ページで確認' },
    features: { parking: true, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '無料体験・おためし3回案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://music.kawai.jp/search/detail/001448', sourceNote: 'カワイ公式教室ページを2026-08-25確認'
  },
  {
    id: 'school-piano-marugame-kawai-fuji', listingType: 'school', name: 'カワイ音楽教室 フジグラン丸亀',
    description: 'フジグラン丸亀内にある音楽教室。4歳・小学生からの個人ピアノや子ども向け楽器コースがあります。',
    category: 'Piano', city: '丸亀市', area: '川西町南周辺', access: '丸亀市川西町南1280-1、フジグラン丸亀内',
    genres: ['Piano', 'Kids', 'Music'], learningNeeds: ['kids_lessons'], decisionFactors: ['commute_fit', 'trial_available', 'age_fit'],
    fitSummary: '買い物と合わせて子どものピアノを続けたい家庭向け', checkpoints: ['授業料と管理費', '開講曜日', '体験日程'],
    pricing: { system: '月謝制', minPrice: 8250, note: '4歳からのピアノ公式授業料 / 入会金・運営管理費は別途' },
    features: { parking: true, parkingCapacity: 'large', beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '無料体験・おためし案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://music.kawai.jp/search/detail/006555', sourceNote: 'カワイ公式丸亀市教室一覧・教室ページを2026-08-25確認'
  },
  {
    id: 'school-piano-marugame-yamaha', listingType: 'school', name: 'ヤマハ音楽教室 ミュージックパーク丸亀',
    description: '丸亀市川西町南にある音楽教室。1歳から小学生の総合音楽教育と、小学生から大人の楽器・歌を検討できます。',
    category: 'Piano', city: '丸亀市', area: '川西町南周辺', access: '丸亀市川西町南1166、フジグランから徒歩約5分',
    genres: ['Piano', 'Music', 'Kids', 'Adult'], learningNeeds: ['kids_lessons', 'adult_lessons'], decisionFactors: ['age_fit', 'parking', 'trial_available'],
    fitSummary: '幼児の総合音楽教育から大人の楽器まで相談したい人向け', checkpoints: ['募集中コース', '個人とグループ', '教材費を含む総額'],
    pricing: { system: 'コース別', minPrice: 0, note: 'コース別料金は公式サイトで確認' },
    features: { parking: true, parkingCapacity: 'large', beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験・見学はコース別に確認',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://school.jp.yamaha.com/music/venue/detail/?id=207004T32', sourceNote: 'ヤマハ公式会場ページを2026-08-25確認'
  },
  {
    id: 'school-programming-marugame-qureo-ayauta', listingType: 'school', name: 'QUREOプログラミング教室 ベスト個別 綾歌教室',
    description: '丸亀市綾歌町にある小学生向けプログラミング教室。初級コースでゲーム制作を通じて基礎を学べます。',
    category: 'Programming', city: '丸亀市', area: '綾歌町周辺', access: '丸亀市綾歌町栗熊東476-3、ことでん栗熊駅徒歩1分',
    genres: ['Programming', 'Kids', 'Game'], learningNeeds: ['kids_lessons', 'it_learning'], decisionFactors: ['age_fit', 'trial_available', 'commute_fit'],
    fitSummary: '小学3〜6年生が駅近でプログラミングを始めたい家庭向け', checkpoints: ['授業曜日', '授業料', '無料体験の実施期間'],
    pricing: { system: '月謝制', minPrice: 0, note: '授業料は公式教室ページから問い合わせ' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '無料体験受付あり・実施内容は時期により確認',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://qureo.jp/class/bestkobetsu_ayauta', sourceNote: 'QUREO公式教室ページを2026-08-25確認'
  },
  {
    id: 'school-dance-marugame-pullup', listingType: 'school', name: 'プルアップダンススタジオ 丸亀校',
    description: '丸亀市六番丁にあるダンススタジオ。幼児から大人までのクラスがあり、見学・無料体験を受け付けています。',
    category: 'Dance', city: '丸亀市', area: '六番丁周辺', access: '丸亀市六番丁4-48',
    genres: ['Dance', 'HIPHOP', 'JAZZ', 'Kids'], learningNeeds: ['kids_lessons', 'adult_lessons'], decisionFactors: ['age_fit', 'trial_available', 'schedule_fit'],
    fitSummary: '幼児から大人までクラス表を見てダンスを選びたい人向け', checkpoints: ['年齢別クラス', '最新スケジュール', '月謝・体験条件'],
    pricing: { system: '月謝制', minPrice: 0, note: '料金は公式サイトへ確認' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '見学・無料体験レッスンあり',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://pullup-dance.com/', sourceNote: '公式サイト・スケジュールページを2026-08-25確認'
  },
  {
    id: 'school-dance-marugame-fly', listingType: 'school', name: 'FLY dance studio 丸亀駅前校',
    description: '丸亀駅前にあるストリート系ダンススタジオ。HIPHOPやK-POPなどを通じて仲間と学べます。',
    category: 'Dance', city: '丸亀市', area: '浜町周辺', access: '丸亀市浜町45-1 第2フロントビル4F、丸亀駅前',
    genres: ['Dance', 'HIPHOP', 'KPOP', 'Kids'], learningNeeds: ['kids_lessons', 'adult_lessons'], decisionFactors: ['commute_fit', 'genre_fit', 'beginner_friendly'],
    fitSummary: '丸亀駅前でストリートダンスを始めたい子ども・大人向け', checkpoints: ['対象年齢', 'クラス別曜日', '料金・体験条件'],
    pricing: { system: '月謝制', minPrice: 0, note: '料金は公式サイトへ問い合わせ' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験条件は公式サイトへ問い合わせ',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://fly3939.wixsite.com/fly-dance-studio', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-soroban-marugame-aonoyama', listingType: 'school', name: '青の山珠算塾',
    description: '丸亀市土器町東にあるそろばん教室。手作り教材を使い、基礎を大切に指導しています。',
    category: 'Soroban', city: '丸亀市', area: '土器町東周辺', access: '丸亀市土器町東5丁目720',
    genres: ['Soroban', 'Mental Arithmetic', 'Kids'], learningNeeds: ['kids_lessons'], decisionFactors: ['commute_fit', 'schedule_fit', 'beginner_friendly'],
    fitSummary: '土器町周辺で曜日を選んでそろばんを続けたい家庭向け', checkpoints: ['対象年齢', '月謝', '体験・見学条件'],
    pricing: { system: '月謝制', minPrice: 0, note: '料金は教室へ問い合わせ' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, scheduleNote: '火・水・木・土 16:00〜19:30', trial: '体験・見学条件は教室へ確認',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.soroban.or.jp/school/%E9%9D%92%E3%81%AE%E5%B1%B1%E7%8F%A0%E7%AE%97%E5%A1%BE/', sourceNote: '全国珠算教育連盟公式教室ページを2026-08-25確認'
  },
  {
    id: 'school-soroban-marugame-arls', listingType: 'school', name: 'アールズそろばん教室',
    description: '丸亀市金倉町にある、全国珠算教育連盟の教室検索に掲載されたそろばん教室です。',
    category: 'Soroban', city: '丸亀市', area: '金倉町周辺', access: '丸亀市金倉町1709-8',
    genres: ['Soroban', 'Mental Arithmetic', 'Kids'], learningNeeds: ['kids_lessons'], decisionFactors: ['commute_fit', 'beginner_friendly'],
    fitSummary: '金倉町周辺でそろばん教室を探している家庭向け', checkpoints: ['対象年齢', '練習曜日', '料金・体験条件'],
    pricing: { system: '月謝制', minPrice: 0, note: '料金は教室へ問い合わせ' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '体験・見学条件は教室へ確認',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.soroban.or.jp/area/kagawa_002/', sourceNote: '全国珠算教育連盟の丸亀市教室一覧を2026-08-25確認'
  },

  // ================= 香川県坂出市 =================
  {
    id: 'school-english-sakaide-gem', listingType: 'school', name: '英会話のジェムスクール 坂出校',
    description: '坂出市京町にある英会話教室。0歳から大人まで、年齢と目的に合うクラスを相談できます。',
    category: 'English', city: '坂出市', area: '京町周辺', access: '坂出市京町3-7-25 ルミナスMIZUHO京町1F',
    genres: ['English', 'Conversation', 'Kids'], learningNeeds: ['kids_lessons', 'adult_lessons', 'language_learning'], decisionFactors: ['age_fit', 'trial_available', 'schedule_fit'],
    fitSummary: '子どもから大人まで無料体験から英会話を始めたい人向け', checkpoints: ['対象クラス', '開講曜日', '月謝と教材費'],
    pricing: { system: '月謝制', minPrice: 0, note: 'クラス別料金は公式サイトで確認' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '無料体験レッスンあり',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.gemschool.com/sakaide', sourceNote: '公式坂出校ページを2026-08-25確認'
  },
  {
    id: 'school-english-sakaide-seiha', listingType: 'school', name: 'セイハ英語学院 坂出学園通り教室',
    description: '坂出市池園町にある子ども英会話教室。幼児、小学生、中学生向けの年齢別コースがあります。',
    category: 'English', city: '坂出市', area: '池園町周辺', access: '坂出市池園町6-4 1F',
    genres: ['English', 'Kids', 'Qualification'], learningNeeds: ['kids_lessons', 'language_learning'], decisionFactors: ['age_fit', 'trial_available', 'schedule_fit'],
    fitSummary: '年齢別の子ども英会話と英検対策を検討したい家庭向け', checkpoints: ['対象年齢', '開講曜日', '教材費を含む総額'],
    pricing: { system: '月謝制', minPrice: 0, note: '年齢別料金と別途費用は公式サイトで確認' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '体験案内は公式サイトで確認',
    imageUrl: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://english-academy.seiha.com/classroom/915042/', sourceNote: 'セイハ公式教室ページを2026-08-25確認'
  },
  {
    id: 'school-piano-sakaide-takahashi', listingType: 'school', name: '髙橋ピアノ教室',
    description: '坂出市の個人ピアノ教室。演奏する喜び、自信、音楽を通した豊かな心を大切に指導しています。',
    category: 'Piano', city: '坂出市', area: '坂出市内', access: '所在地の詳細は公式サイトへ問い合わせ',
    genres: ['Piano', 'Kids', 'Music'], learningNeeds: ['kids_lessons'], decisionFactors: ['teacher_fit', 'beginner_friendly', 'trial_available'],
    fitSummary: '個人指導で表現する楽しさと自信を育てたい家庭向け', checkpoints: ['対象年齢', 'レッスン曜日', '料金・体験条件'],
    pricing: { system: '月謝制', minPrice: 0, note: '料金は教室へ問い合わせ' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '体験条件は教室へ問い合わせ',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.sakaide-pianoschool.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-piano-sakaide-yamaha', listingType: 'school', name: 'ヤマハ音楽教室 坂出本店',
    description: '坂出市京町にあるヤマハ音楽教室。幼児期の音感育成を中心としたコースを確認できます。',
    category: 'Piano', city: '坂出市', area: '京町周辺', access: '坂出市京町3-7-51',
    genres: ['Piano', 'Music', 'Kids'], learningNeeds: ['kids_lessons'], decisionFactors: ['age_fit', 'trial_available', 'commute_fit'],
    fitSummary: '幼児期から総合的な音楽教育を始めたい家庭向け', checkpoints: ['募集中コース', '個人・グループ', '教材費を含む総額'],
    pricing: { system: 'コース別', minPrice: 0, note: 'コース別料金は公式サイトで確認' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '体験・見学はコース別に確認',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.yamaha-ongaku.com/music-school/room/room_detail.php?shopcode=20700400&venuecode=P35', sourceNote: 'ヤマハ公式会場ページを2026-08-25確認'
  },
  {
    id: 'school-piano-sakaide-kawai', listingType: 'school', name: 'カワイ音楽教室 坂出',
    description: '坂出市にあるカワイ音楽教室。ピアノとリトミックのコースを年齢から検討できます。',
    category: 'Piano', city: '坂出市', area: '坂出市内', access: '所在地・開講曜日は公式教室ページで確認',
    genres: ['Piano', 'Music', 'Kids'], learningNeeds: ['kids_lessons', 'adult_lessons'], decisionFactors: ['age_fit', 'trial_available', 'beginner_friendly'],
    fitSummary: 'ピアノやリトミックを体験から検討したい家庭向け', checkpoints: ['開講コース', '入会金・管理費', '体験日程'],
    pricing: { system: '月謝制', minPrice: 0, note: 'コース別料金は公式教室ページで確認' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '無料体験・おためし案内は公式ページで確認',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://music.kawai.jp/search/detail/00E870', sourceNote: 'カワイ公式教室ページを2026-08-25確認'
  },
  {
    id: 'school-programming-sakaide-qureo', listingType: 'school', name: 'QUREOプログラミング教室 個別指導フォレスト坂出駅南口校',
    description: '坂出駅南口から徒歩4分の小学生向けプログラミング教室。ゲーム制作を通して基礎を学べます。',
    category: 'Programming', city: '坂出市', area: '駒止町周辺', access: '坂出市駒止町1-2-18、坂出駅徒歩4分',
    genres: ['Programming', 'Kids', 'Game'], learningNeeds: ['kids_lessons', 'it_learning'], decisionFactors: ['age_fit', 'trial_available', 'commute_fit'],
    fitSummary: '小学2〜6年生が駅近でプログラミングを始めたい家庭向け', checkpoints: ['授業曜日', '授業料', '無料体験の条件'],
    pricing: { system: '月謝制', minPrice: 0, note: '授業料は公式教室ページから問い合わせ' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '1か月無料体験の対象表示あり・最新条件を確認',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://qureo.jp/class/kagawa/sakaide', sourceNote: 'QUREO公式坂出市教室一覧を2026-08-25確認'
  },
  {
    id: 'school-dance-sakaide-aqua', listingType: 'school', name: 'Aqua Dance School 香川坂出校',
    description: '坂出市久米町にあるダンススクール。専用スタジオで開講クラスを確認できます。',
    category: 'Dance', city: '坂出市', area: '久米町周辺', access: '坂出市久米町1-15-60 ヴェールクレール久米町1F',
    genres: ['Dance', 'Kids'], learningNeeds: ['kids_lessons', 'adult_lessons'], decisionFactors: ['genre_fit', 'schedule_fit', 'trial_available'],
    fitSummary: '坂出市内の専用スタジオでダンスを始めたい人向け', checkpoints: ['対象年齢', 'ジャンル別クラス', '料金・体験条件'],
    pricing: { system: '月謝制', minPrice: 0, note: '料金は公式サイトで確認' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験条件は公式サイトへ問い合わせ',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.logos-dance.com/school/school_10.php', sourceNote: '公式校舎ページを2026-08-25確認'
  },
  {
    id: 'school-soroban-sakaide-arls', listingType: 'school', name: 'アールズ国語そろばん教室',
    description: '坂出市駒止町にあるそろばん教室。全国珠算教育連盟に登録され、体験学習にも対応しています。',
    category: 'Soroban', city: '坂出市', area: '駒止町周辺', access: '坂出市駒止町1-2-18 2F',
    genres: ['Soroban', 'Mental Arithmetic', 'Kids'], learningNeeds: ['kids_lessons'], decisionFactors: ['trial_available', 'commute_fit', 'beginner_friendly'],
    fitSummary: '坂出駅周辺で体験からそろばんを始めたい家庭向け', checkpoints: ['対象年齢', '練習曜日', '料金・体験条件'],
    pricing: { system: '月謝制', minPrice: 0, note: '料金は教室へ問い合わせ' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '体験学習あり',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.soroban.or.jp/school/%E3%82%A2%E3%83%BC%E3%83%AB%E3%82%BA%E5%9B%BD%E8%AA%9E%E3%81%9D%E3%82%8D%E3%81%B0%E3%82%93%E6%95%99%E5%AE%A4/', sourceNote: '全国珠算教育連盟公式教室ページを2026-08-25確認'
  },

  // ================= 香川県宇多津町 =================
  {
    id: 'school-english-utazu-gem', listingType: 'school', name: '英会話のジェムスクール 宇多津校',
    description: 'イオンタウン宇多津2階にある英会話教室。0歳から大人まで、年齢と目的に合うクラスを相談できます。',
    category: 'English', city: '宇多津町', area: '浜二番丁周辺', access: '宇多津町浜二番丁16 イオンタウン宇多津2F',
    genres: ['English', 'Conversation', 'Kids'], learningNeeds: ['kids_lessons', 'adult_lessons', 'language_learning'], decisionFactors: ['age_fit', 'trial_available', 'parking'],
    fitSummary: '買い物や送迎と合わせて子ども・大人の英会話を続けたい人向け', checkpoints: ['対象クラス', '開講曜日', '月謝と教材費'],
    pricing: { system: '月謝制', minPrice: 0, note: '入会金・年会費・施設管理費なし / 月謝は公式サイトで確認' },
    features: { parking: true, parkingCapacity: 'large', beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '無料体験レッスンあり',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.gemschool.com/utazu', sourceNote: '公式宇多津校ページを2026-08-25確認'
  },
  {
    id: 'school-english-utazu-kumon', listingType: 'school', name: '公文式 綾歌宇多津南教室',
    description: '宇多津町にある公文式教室。英語・算数数学・国語を、一人ひとりの進度に合わせて学べます。',
    category: 'English', city: '宇多津町', area: '宇多津南周辺', access: '宇多津町164-1 YSロードビル2F',
    genres: ['English', 'Kids', 'Study'], learningNeeds: ['kids_lessons', 'language_learning'], decisionFactors: ['age_fit', 'schedule_fit', 'beginner_friendly'],
    fitSummary: '英語と基礎学力を自分の進度で積み上げたい家庭向け', checkpoints: ['対象学年', '学習曜日', '会費・教材'],
    pricing: { system: '月額制', minPrice: 0, note: '会費は学年・教科により公式サイトで確認' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '学習相談・体験案内は公式ページで確認',
    imageUrl: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.kumon.ne.jp/enter/search/classroom/1555610210/index.html', sourceNote: '公文式公式教室ページを2026-08-25確認'
  },
  {
    id: 'school-piano-utazu-mion', listingType: 'school', name: 'ミオンミュージックスクール 宇多津教室',
    description: '宇多津町浜五番丁にある初心者向け音楽教室。子ども・大人のピアノ、ギター、ボーカルなどを学べます。',
    category: 'Piano', city: '宇多津町', area: '浜五番丁周辺', access: '宇多津町浜五番丁65 ニューオーヨシステートリーマンションS3',
    genres: ['Piano', 'Music', 'Guitar', 'Vocal'], learningNeeds: ['kids_lessons', 'adult_lessons'], decisionFactors: ['beginner_friendly', 'genre_fit', 'trial_available'],
    fitSummary: '初心者が好きな曲からピアノや音楽を始めたい人向け', checkpoints: ['楽器別コース', '個人レッスン時間', '料金・体験条件'],
    pricing: { system: 'コース別', minPrice: 0, note: 'コース別料金は公式サイトで確認' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true, weekendOpen: true }, trial: '体験レッスン申込みあり',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://mion-utazu.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-piano-utazu-reveur', listingType: 'school', name: 'レヴール ピアノ教室',
    description: '宇多津町浜九番丁にある個人ピアノ教室。教室の方針や約束を確認して問い合わせできます。',
    category: 'Piano', city: '宇多津町', area: '浜九番丁周辺', access: '宇多津町浜九番丁、詳細は公式サイトへ問い合わせ',
    genres: ['Piano', 'Kids', 'Music'], learningNeeds: ['kids_lessons'], decisionFactors: ['teacher_fit', 'commute_fit', 'beginner_friendly'],
    fitSummary: '浜九番丁周辺で個人ピアノ教室を探している家庭向け', checkpoints: ['対象年齢', '空き曜日', '月謝・体験条件'],
    pricing: { system: '月謝制', minPrice: 0, note: '料金は教室へ問い合わせ' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '体験条件は教室へ問い合わせ',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://5acxw.crayonsite.net/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-programming-utazu-qureo', listingType: 'school', name: 'QUREOプログラミング教室 ベスト個別 イオンタウン宇多津教室',
    description: 'イオンタウン宇多津2階にある小学3〜6年生向け教室。ゲーム制作を通してプログラミングの基礎を学べます。',
    category: 'Programming', city: '宇多津町', area: '浜二番丁周辺', access: '宇多津町浜二番丁16 イオンタウン宇多津2F',
    genres: ['Programming', 'Kids', 'Game'], learningNeeds: ['kids_lessons', 'it_learning'], decisionFactors: ['age_fit', 'trial_available', 'parking'],
    fitSummary: '小学3〜6年生が買い物動線でプログラミングを始めたい家庭向け', checkpoints: ['授業曜日', '授業料', '無料体験の条件'],
    pricing: { system: '月謝制', minPrice: 0, note: '授業料は公式教室ページから問い合わせ' },
    features: { parking: true, parkingCapacity: 'large', beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '無料プログラミング体験受付あり',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://qureo.jp/class/bestkobetsu_aeontownutazu', sourceNote: 'QUREO公式教室ページを2026-08-25確認'
  },
  {
    id: 'school-dance-utazu-hiro', listingType: 'school', name: 'ヒロダンススタジオ',
    description: '宇多津町にある社交ダンス教室。5〜15歳のジュニアから未経験の大人、競技選手までレベル別に学べます。',
    category: 'Dance', city: '宇多津町', area: '宇多津町役場東側', access: '宇多津町宇多津2566-2、宇多津町役場から東へ約2分',
    genres: ['Dance', 'Ballroom', 'Kids', 'Adult'], learningNeeds: ['kids_lessons', 'adult_lessons'], decisionFactors: ['age_fit', 'beginner_friendly', 'teacher_fit'],
    fitSummary: '社交ダンスを未経験から個人指導で始めたい子ども・大人向け', checkpoints: ['クラス区分', '個人・グループ', '料金・見学条件'],
    pricing: { system: 'コース別', minPrice: 0, note: '料金は公式サイトへ問い合わせ' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '見学・体験条件は公式サイトへ問い合わせ',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.hirodance.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-dance-utazu-ys', listingType: 'school', name: "Y's Move & Dance オッペンギンキッズ",
    description: '宇多津町のオッペンカルチャークラブで開講するキッズダンスクラス。木曜日にレッスンを行っています。',
    category: 'Dance', city: '宇多津町', area: '宇多津町内', access: '宇多津町2376-2 オッペンカルチャークラブ',
    genres: ['Dance', 'Kids'], learningNeeds: ['kids_lessons'], decisionFactors: ['age_fit', 'schedule_fit', 'genre_fit'],
    fitSummary: '宇多津町内で子どもがダンスを始めたい家庭向け', checkpoints: ['対象年齢', '木曜の開始時間', '料金・体験条件'],
    pricing: { system: '月謝制', minPrice: 0, note: '料金は公式サイトへ問い合わせ' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, scheduleNote: '木曜日17:15〜、対象別の詳細は公式サイトで確認', trial: '体験条件は公式サイトへ問い合わせ',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://ys-move-dance.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-english-ozu-aishinjuku-lepton', listingType: 'school', name: '愛真塾Lepton大洲駅前教室',
    description: '伊予大洲駅から徒歩1分の個別指導型子ども英語教室。聞く・話す・読む・書くを、自分の進度に合わせて学べます。',
    category: 'English', city: '大洲市', area: '若宮・大洲駅周辺', access: '大洲市若宮457-5、JR伊予大洲駅から徒歩1分',
    genres: ['English', 'Kids'], learningNeeds: ['kids_lessons', 'english_learning'], decisionFactors: ['station_access', 'trial_available', 'schedule_fit'],
    fitSummary: '大洲駅周辺で子どもが個別進度の英語学習を始めたい家庭向け', checkpoints: ['対象学年', '週の受講回数', '教材費・入会金'],
    pricing: { system: '月謝制', minPrice: 7810, note: '公式掲載目安：週1回7,810円〜。入会金・教材費等は要確認' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '無料体験レッスン受付あり',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.lepton.co.jp/628001', sourceNote: 'Lepton公式教室ページを2026-08-25確認'
  },
  {
    id: 'school-piano-ozu-rmusic', listingType: 'school', name: 'R.music',
    description: '大洲市大洲にあるリトミック・ピアノ教室。子どもの成長や個性に合わせた個別指導を行い、オンラインレッスンにも対応しています。',
    category: 'Piano', city: '大洲市', area: '大洲城・おはなはん通り周辺', access: '大洲市大洲398-2',
    genres: ['Piano', 'Rhythmic', 'Kids', 'Online'], learningNeeds: ['kids_lessons', 'music_learning'], decisionFactors: ['teacher_fit', 'beginner_friendly', 'online_available'],
    fitSummary: '大洲市内でリトミックまたは個別ピアノを始めたい家庭向け', checkpoints: ['対象年齢', '開講時間', '料金・体験条件'],
    pricing: { system: '問い合わせ', minPrice: 0, note: '料金は公式サイトへ問い合わせ' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '入会までの案内は公式サイトで確認',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.rdotmusic.net/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-music-ozu-coeur', listingType: 'school', name: 'Coeur a Coeur Music School',
    description: '大洲市若宮にあるクラリネット・ピアノ・リトミック教室。小さな子どもから大人まで、目標に合わせたレッスンを行っています。',
    category: 'Piano', city: '大洲市', area: '若宮・大洲駅周辺', access: '大洲市若宮、JR伊予大洲駅から徒歩約3分',
    genres: ['Piano', 'Clarinet', 'Rhythmic', 'Kids', 'Adult'], learningNeeds: ['kids_lessons', 'adult_lessons', 'music_learning'], decisionFactors: ['station_access', 'teacher_fit', 'trial_available'],
    fitSummary: 'ピアノやクラリネットを年齢・目標に合わせて学びたい人向け', checkpoints: ['楽器別の時間', '固定・不定期レッスン', '料金'],
    pricing: { system: '問い合わせ', minPrice: 0, note: '料金は教室へ問い合わせ' },
    features: { parking: true, parkingCapacity: 'small', beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験レッスンあり',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://coeuracoeur.crayonsite.net/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-dance-sanuki-sstudio', listingType: 'school', name: 'S★Dance Studio／S★Ballet School 志度本校',
    description: 'さぬき市志度にあるダンス・バレエ教室。1歳からのリズムベビー、クラシックバレエ、キッズダンスなど年齢別クラスがあります。',
    category: 'Dance', city: 'さぬき市', area: '志度駅・市役所周辺', access: 'さぬき市志度348、JR志度駅・ことでん志度駅から徒歩約5分',
    genres: ['Dance', 'Ballet', 'Kids', 'Rhythmic'], learningNeeds: ['kids_lessons', 'dance_learning'], decisionFactors: ['age_fit', 'station_access', 'trial_available'],
    fitSummary: '幼児期からダンスやクラシックバレエを始めたい家庭向け', checkpoints: ['年齢別クラス', 'タイムテーブル', '月謝・諸費用'],
    pricing: { system: 'クラス別', minPrice: 0, note: '料金は公式コース案内で確認' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '見学・無料体験受付あり',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://s-studio.jp/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-ballet-higashikagawa-sstudio', listingType: 'school', name: 'S★Ballet School 東かがわ市交流プラザ教室',
    description: '東かがわ市交流プラザで開講するバレエ教室。志度本校と共通の教室案内から問い合わせできます。',
    category: 'Dance', city: '東かがわ市', area: '湊・市役所周辺', access: '東かがわ市湊1806-2 東かがわ市交流プラザ',
    genres: ['Ballet', 'Dance', 'Kids'], learningNeeds: ['kids_lessons', 'dance_learning'], decisionFactors: ['age_fit', 'schedule_fit', 'teacher_fit'],
    fitSummary: '東かがわ市内で子どものバレエ教室を探している家庭向け', checkpoints: ['対象年齢', '開講曜日', '料金・体験条件'],
    pricing: { system: 'クラス別', minPrice: 0, note: '料金は公式サイトへ問い合わせ' },
    features: { parking: true, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '見学・体験は公式サイトへ問い合わせ',
    imageUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://s-studio.jp/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-piano-kanonji-piamore', listingType: 'school', name: 'ピアモーレピアノ教室',
    description: '観音寺市大野原町にある音楽知育・ピアノ教室。2歳児から大人まで、プレピアノ、個人ピアノ、大人向けコースがあります。',
    category: 'Piano', city: '観音寺市', area: '大野原町', access: '観音寺市大野原町大野原3816-1、大野原ICから約1分',
    genres: ['Piano', 'Music Education', 'Kids', 'Adult'], learningNeeds: ['kids_lessons', 'adult_lessons', 'music_learning'], decisionFactors: ['age_fit', 'parking', 'trial_available'],
    fitSummary: '幼児の音楽知育から大人の学び直しまで個人ピアノを探す人向け', checkpoints: ['コース別月謝', '設備費・教材費', '家庭練習'],
    pricing: { system: '月謝制', minPrice: 5000, note: '公式掲載：隔週大人5,000円〜。コース・設備費等は要確認' },
    features: { parking: true, parkingCapacity: 'standard', beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験レッスン45分1,000円の案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.piamore-piano.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-music-kanonji-oosakaya', listingType: 'school', name: '大阪屋 観音寺本店 音楽教室',
    description: '観音寺市観音寺町の楽器店併設音楽教室。子どもから大人まで学べるコースがあり、ヤマハ音楽教室の無料体験も案内しています。',
    category: 'Piano', city: '観音寺市', area: '観音寺町・観音寺駅周辺', access: '観音寺市観音寺町甲3082-3',
    genres: ['Piano', 'Electone', 'Music', 'Kids', 'Adult'], learningNeeds: ['kids_lessons', 'adult_lessons', 'music_learning'], decisionFactors: ['genre_fit', 'trial_available', 'teacher_fit'],
    fitSummary: '楽器選びも相談しながら音楽レッスンを始めたい子ども・大人向け', checkpoints: ['開講コース', '対象年齢', '月謝・教材費'],
    pricing: { system: 'コース別', minPrice: 0, note: 'コース別料金は公式サイトへ問い合わせ' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '無料体験レッスン案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.oosakaya-music.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-dance-mitoyo-mayo', listingType: 'school', name: 'Mayo Ballet School／MAYO DANCE STUDIO',
    description: '三豊市高瀬町にあるバレエ・ダンス教室。子どもの集中力やマナーも大切にしながらレッスンを行っています。',
    category: 'Dance', city: '三豊市', area: '高瀬町', access: '三豊市高瀬町比地中1485',
    genres: ['Ballet', 'Dance', 'Kids'], learningNeeds: ['kids_lessons', 'dance_learning'], decisionFactors: ['age_fit', 'genre_fit', 'teacher_fit'],
    fitSummary: '三豊市高瀬町で子どものバレエ・ダンスを探している家庭向け', checkpoints: ['対象年齢', 'クラス内容', '料金・体験条件'],
    pricing: { system: 'クラス別', minPrice: 0, note: '料金は公式サイトへ問い合わせ' },
    features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '見学・体験条件は公式サイトへ問い合わせ',
    imageUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://mayo-school.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-english-tokushima-ui', listingType: 'school', name: 'UI School of English', description: '徳島市国府町にある子ども・大人向け英会話教室。英会話、英検対策、プライベートレッスン、プログラミングを目的に合わせて学べます。',
    category: 'English', city: '徳島市', area: '国府町', access: '徳島市国府町井戸字堂ノ裏28', genres: ['English', 'Kids', 'Adult', 'Programming'], learningNeeds: ['kids_lessons', 'adult_lessons', 'english_learning'], decisionFactors: ['age_fit', 'goal_fit', 'teacher_fit'], fitSummary: '子どもから大人まで英会話や英検を目的別に学びたい人向け', checkpoints: ['クラス区分', '受講料', '体験条件'], pricing: { system: 'コース別', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験・問い合わせは公式サイトで確認', imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://ui-school.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-english-tokushima-espace', listingType: 'school', name: 'E-SPACE', description: '徳島駅近くの子ども・大人向け英会話スクール。会話、学校英語、検定対応などをレベルや目的に合わせて学べます。',
    category: 'English', city: '徳島市', area: '一番町・徳島駅周辺', access: '徳島市一番町2-13', genres: ['English', 'Kids', 'Adult'], learningNeeds: ['kids_lessons', 'adult_lessons', 'english_learning'], decisionFactors: ['station_access', 'goal_fit', 'teacher_fit'], fitSummary: '徳島駅周辺で会話と学校・検定英語を学びたい子ども・大人向け', checkpoints: ['対象コース', 'レッスン時間', '料金・体験'], pricing: { system: 'コース別', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験条件は公式サイトで確認', imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://e-spaceeikaiwa.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-english-tokushima-ect', listingType: 'school', name: '徳島教育センター ECT ランゲージクラス', description: '徳島市南前川町にある小学1年生から大人向けの英語・英会話クラス。子ども向けには英検等の準備にも対応しています。',
    category: 'English', city: '徳島市', area: '南前川町', access: '徳島市南前川町3-2 ECTビル', genres: ['English', 'Kids', 'Adult', 'Exam'], learningNeeds: ['kids_lessons', 'adult_lessons', 'english_learning'], decisionFactors: ['age_fit', 'goal_fit', 'schedule_fit'], fitSummary: '小学生から大人まで英会話や検定準備を進めたい人向け', checkpoints: ['募集対象', '時間割', '受講料'], pricing: { system: 'コース別', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '問い合わせは公式サイトから', imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.ect-kirara.com/language/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-english-tokushima-neyza', listingType: 'school', name: "Neyza's English Room", description: '徳島市八万町にある親子・子ども・大人向け英会話教室。マンツーマン、グループ、出張レッスンなどを案内しています。',
    category: 'English', city: '徳島市', area: '八万町', access: '徳島市八万町下福万128-104', genres: ['English', 'Kids', 'Adult', 'ParentChild'], learningNeeds: ['kids_lessons', 'adult_lessons', 'english_learning'], decisionFactors: ['age_fit', 'parking', 'trial_available'], fitSummary: '親子レッスンから大人の英会話まで相談したい家庭向け', checkpoints: ['レッスン形態', '空き時間', '料金'], pricing: { system: '問い合わせ', minPrice: 0, note: '料金は教室へ問い合わせ' }, features: { parking: true, parkingCapacity: 'standard', beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '無料体験案内あり', imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://saku2.jp/neyza/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-piano-tokushima-aiku', listingType: 'school', name: '愛育音楽教室', description: '徳島市下助任町にある4歳から高校生向けの個人ピアノ教室。生活との両立を大切にし、振替レッスンにも対応しています。',
    category: 'Piano', city: '徳島市', area: '下助任町', access: '徳島市下助任町3丁目68-19', genres: ['Piano', 'Kids', 'Music'], learningNeeds: ['kids_lessons', 'music_learning'], decisionFactors: ['teacher_fit', 'schedule_fit', 'parking'], fitSummary: '無理のないペースで個人ピアノを続けたい子ども向け', checkpoints: ['空き時間', '振替条件', '料金・体験'], pricing: { system: '月謝制', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: true, parkingCapacity: 'small', beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '体験レッスン案内あり', imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://aikupiano.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-piano-tokushima-ikemoto', listingType: 'school', name: 'いけもと音楽教室', description: '徳島市上八万町の個人ピアノ教室。4歳から大人まで対応し、保育士試験対策や中学生以上の隔週レッスンも案内しています。',
    category: 'Piano', city: '徳島市', area: '上八万町・しらさぎ台', access: '徳島市上八万町西山1431-6', genres: ['Piano', 'Kids', 'Adult', 'Exam'], learningNeeds: ['kids_lessons', 'adult_lessons', 'music_learning'], decisionFactors: ['age_fit', 'schedule_fit', 'price_clarity'], fitSummary: '子どもの基礎から大人・保育士試験対策まで個人指導を希望する人向け', checkpoints: ['回数', '兄弟割引', '体験・空き時間'], pricing: { system: '月謝・単発', minPrice: 2000, note: '公式掲載：大人1回2,000円、4〜5歳月4回7,000円、小学生〜大学生月4回8,000円' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '問い合わせは公式サイトから', imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.pianoikemoto.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-programming-tokushima-ety-qureo', listingType: 'school', name: 'QUREOプログラミング教室 エティ 東新町ベース', description: '徳島駅から徒歩圏の小学5年生〜高校3年生向けプログラミング教室。初級・中級コースとプログラミング能力検定会場に対応しています。',
    category: 'Programming', city: '徳島市', area: '東新町・徳島駅周辺', access: '徳島市東新町2丁目35-1 HiTS TOKUSHIMAレンタルスペース', genres: ['Programming', 'Kids', 'Game', 'Exam'], learningNeeds: ['kids_lessons', 'it_learning'], decisionFactors: ['age_fit', 'station_access', 'trial_available'], fitSummary: '小学5年生以降がゲーム教材から本格的なプログラミングへ進みたい家庭向け', checkpoints: ['対象学年', '火曜の時間', '授業料'], pricing: { system: '月謝制', minPrice: 0, note: '授業料は公式教室ページから問い合わせ' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '無料体験受付あり', imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://qureo.jp/class/ety_higashishinmachibase', sourceNote: 'QUREO公式教室ページを2026-08-25確認'
  },
  {
    id: 'school-ballet-tokushima-tamiya', listingType: 'school', name: '徳島バレエ研究所 田宮教室', description: '徳島市北田宮にあるクラシックバレエ教室。幼児期から青年期まで一貫した教育体系を取り入れています。',
    category: 'Dance', city: '徳島市', area: '北田宮', access: '徳島市北田宮2-5-4', genres: ['Ballet', 'Dance', 'Kids'], learningNeeds: ['kids_lessons', 'dance_learning'], decisionFactors: ['age_fit', 'teacher_fit', 'genre_fit'], fitSummary: 'クラシックバレエを基礎から継続して学びたい子ども向け', checkpoints: ['年齢別クラス', '開講曜日', '料金・見学'], pricing: { system: 'クラス別', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '見学・体験条件は公式サイトへ問い合わせ', imageUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.tokushima-ballet.jp/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-ballet-tokushima-shimada', listingType: 'school', name: '島田輝記バレエ研究所 佐古スタジオ', description: '徳島市佐古にある3歳から大人向けのクラシックバレエ教室。初心者・経験者を問わず、年齢別に基礎から学べます。',
    category: 'Dance', city: '徳島市', area: '佐古', access: '徳島市佐古、最新所在地は公式サイトで確認', genres: ['Ballet', 'Dance', 'Kids', 'Adult'], learningNeeds: ['kids_lessons', 'adult_lessons', 'dance_learning'], decisionFactors: ['age_fit', 'trial_available', 'teacher_fit'], fitSummary: '3歳から大人までクラシックバレエを基礎から始めたい人向け', checkpoints: ['移転後の所在地', '年齢別クラス', '料金'], pricing: { system: 'クラス別', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '見学・無料体験受付あり', imageUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://st-ballet.com/', sourceNote: '公式サイトを2026-08-25確認。2026年6月の移転告知あり'
  },
  {
    id: 'class-dance-tokushima-city-sports', listingType: 'class', name: '徳島市体育振興公社 ダンス教室', description: '徳島市の公共体育施設で開催される2026年度のダンス講座。幼児・小学生向けダンスやチア、大人向けリズムダンスなどから選べます。',
    category: 'Dance', city: '徳島市', area: '徳島市内公共体育施設', access: 'とくぎんトモニアリーナ等。講座ごとの会場は公式サイトで確認', genres: ['Dance', 'Kids', 'Adult', 'Cheer'], learningNeeds: ['kids_lessons', 'adult_lessons', 'dance_learning'], decisionFactors: ['age_fit', 'schedule_fit', 'price_clarity'], fitSummary: '公共施設の期間講座でダンスを試したい子ども・大人向け', checkpoints: ['対象年齢', '会場', '募集期間・空き'], pricing: { system: '期間講座', minPrice: 0, note: '講座別の受講料は公式サイトで確認' }, features: { parking: true, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: 'おためし受講案内あり', imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.tokushimacity-sports.or.jp/genre/item4/', sourceNote: '徳島市体育振興公社公式サイトの2026年度講座を2026-08-25確認'
  },
  {
    id: 'school-english-naruto-continental', listingType: 'school', name: 'コンチネンタル英会話',
    description: '鳴門市撫養町の地域密着型英会話スクール。子どもから大人まで、英会話、英検、TOEICなど目的に合わせて学べます。',
    category: 'English', city: '鳴門市', area: '撫養町黒崎', access: '鳴門市撫養町黒崎字松島6-15 黒崎ショッピングセンター内',
    genres: ['English', 'Kids', 'Adult', 'Exam'], learningNeeds: ['kids_lessons', 'adult_lessons', 'english_learning'], decisionFactors: ['parking', 'trial_available', 'goal_fit'],
    fitSummary: '鳴門市で会話から検定まで月謝制で学びたい子ども・大人向け', checkpoints: ['クラス形式', '月謝', '開講時間'],
    pricing: { system: '月謝制', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: true, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '無料体験レッスンあり',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.continental-eikaiwa.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-english-naruto-yamaha', listingType: 'school', name: 'ヤマハ英語教室 鳴門センター',
    description: 'JR鳴門駅から徒歩約10分の子ども向け英語教室。年齢に応じたコースを開講し、無料体験・見学を受け付けています。',
    category: 'English', city: '鳴門市', area: '撫養町斉田・鳴門駅周辺', access: '鳴門市撫養町斉田字北浜64-2、JR鳴門駅から徒歩約10分',
    genres: ['English', 'Kids'], learningNeeds: ['kids_lessons', 'english_learning'], decisionFactors: ['station_access', 'parking', 'trial_available'],
    fitSummary: '鳴門駅周辺で年齢別の子ども英語を始めたい家庭向け', checkpoints: ['募集コース', '曜日', '教材費・月謝'],
    pricing: { system: 'コース別', minPrice: 0, note: '料金は公式教室ページで確認' }, features: { parking: true, parkingCapacity: 'large', beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '無料体験・見学受付あり',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://school.jp.yamaha.com/english_school/room/detail.php?shopcode=20800300&venuecode=P14', sourceNote: 'ヤマハ英語教室公式ページを2026-08-25確認'
  },
  {
    id: 'school-piano-naruto-yuki', listingType: 'school', name: 'YUKIピアノ教室',
    description: '鳴門市にある幼児から大人向けのピアノ教室。クラシックからポピュラーまで、年齢や希望に合わせて学べます。',
    category: 'Piano', city: '鳴門市', area: '鳴門市内', access: '鳴門市内、詳細は公式サイトへ問い合わせ',
    genres: ['Piano', 'Kids', 'Adult'], learningNeeds: ['kids_lessons', 'adult_lessons', 'music_learning'], decisionFactors: ['age_fit', 'genre_fit', 'teacher_fit'],
    fitSummary: '幼児から大人まで好きなジャンルのピアノを学びたい人向け', checkpoints: ['教室所在地', '空き曜日', '料金・体験'],
    pricing: { system: '問い合わせ', minPrice: 0, note: '料金は教室へ問い合わせ' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験条件は公式サイトへ問い合わせ',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://yukipianonaruto.jimdofree.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-english-anan-sprouts', listingType: 'school', name: '英会話スクール SPROUTS',
    description: '阿南駅から徒歩3分の1歳から大人向け英会話教室。年齢別クラス、個別指導、振替制度があり、無料体験を受け付けています。',
    category: 'English', city: '阿南市', area: '富岡町・阿南駅周辺', access: '阿南市富岡町今福寺49-10 ミラビル2F、阿南駅から徒歩約3分',
    genres: ['English', 'Kids', 'Adult', 'Exam'], learningNeeds: ['kids_lessons', 'adult_lessons', 'english_learning'], decisionFactors: ['station_access', 'parking', 'trial_available'],
    fitSummary: '幼児から大人まで阿南駅近くで英会話を続けたい人向け', checkpoints: ['年齢別クラス', '振替条件', '教材費'],
    pricing: { system: '月謝制', minPrice: 8000, note: '公式掲載：グループ月8,000円〜、個別月16,000円〜' }, features: { parking: true, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '無料体験レッスン受付あり',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://mirai-languagehouse.com/top', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-english-anan-crescent', listingType: 'school', name: 'クレセントランゲージスクール 阿南教室',
    description: '阿南市で英会話や翻訳・通訳サービスを提供する地域密着型スクール。家庭的な雰囲気で英語を学べます。',
    category: 'English', city: '阿南市', area: '阿南市内', access: '阿南市内、詳細所在地は公式サイトで確認',
    genres: ['English', 'Kids', 'Adult'], learningNeeds: ['kids_lessons', 'adult_lessons', 'english_learning'], decisionFactors: ['teacher_fit', 'goal_fit', 'beginner_friendly'],
    fitSummary: '阿南市で地域密着の英会話教室を探している子ども・大人向け', checkpoints: ['所在地', '対象クラス', '料金・体験'],
    pricing: { system: '問い合わせ', minPrice: 0, note: '料金は公式サイトへ問い合わせ' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験条件は公式サイトへ問い合わせ',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.crescent-eikaiwa.com/about.php', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-piano-anan-kurosaki', listingType: 'school', name: '黒崎楽器 阿南センター ピアノ個人レッスン',
    description: '阿南市富岡町にある楽器店運営のピアノ個人レッスン。開講状況を確認して体験・見学を申し込めます。',
    category: 'Piano', city: '阿南市', area: '富岡町', access: '阿南市富岡町木松10-3',
    genres: ['Piano', 'Kids', 'Adult', 'Music'], learningNeeds: ['kids_lessons', 'adult_lessons', 'music_learning'], decisionFactors: ['trial_available', 'teacher_fit', 'genre_fit'],
    fitSummary: '楽器店の教室で個人ピアノレッスンを始めたい子ども・大人向け', checkpoints: ['対象年齢', '開講曜日', '月謝・教材費'],
    pricing: { system: 'コース別', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験・見学は教室へ問い合わせ',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.kurosaki-gakki.jp/lesson_info/lesson_info_index/original/piano_kojin/', sourceNote: '黒崎楽器公式サイトを2026-08-25確認'
  },

  // ================= 徳島県藍住町 =================
  {
    id: 'school-english-aizumi-ecc', listingType: 'school', name: 'ECCジュニア 藍住教室',
    description: '藍住町矢上にある2歳から高校生まで通える英語教室。英会話、英検、受験や国際交流まで継続的に学べます。',
    category: 'English', city: '藍住町', area: '矢上周辺', access: '板野郡藍住町矢上字北分82-1',
    genres: ['English', 'Kids', 'Exam'], learningNeeds: ['kids_lessons', 'english_learning'], decisionFactors: ['age_fit', 'goal_fit', 'schedule_fit'],
    fitSummary: '幼児期から高校まで英語学習を継続したい家庭向け', checkpoints: ['年齢別コース', '時間割', '授業料・教材費'],
    pricing: { system: 'コース別', minPrice: 0, note: 'コース別料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '体験・問い合わせは公式サイトから',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://tokushima-ecc.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-programming-aizumi-sunnygarden', listingType: 'school', name: 'サニーガーデンアカデミー',
    description: '藍住町富吉にあるプログラミング、音楽、英語、デジタルものづくりの教室。興味に合わせて複数分野から選べます。',
    category: 'Programming', city: '藍住町', area: '富吉周辺', access: '板野郡藍住町富吉字地神60-3',
    genres: ['Programming', 'Music', 'English', 'Kids'], learningNeeds: ['kids_lessons', 'it_learning', 'music_learning'], decisionFactors: ['goal_fit', 'trial_available', 'genre_fit'],
    fitSummary: 'プログラミングと音楽・英語を横断して学びたい子ども向け', checkpoints: ['対象年齢', 'コース内容', '曜日・料金'],
    pricing: { system: 'コース別', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '無料体験案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://sunnygarden-academy.com/?page_id=478', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-art-aizumi-ashio', listingType: 'school', name: '芦尾節子こども絵画教室',
    description: '藍住町で開講する子ども向けの絵画・工作教室。描くことや作ることを通して自由な表現を楽しめます。',
    category: 'Art', city: '藍住町', area: '藍住町内', access: '板野郡藍住町、詳細は公式サイトで確認',
    genres: ['Art', 'Craft', 'Kids'], learningNeeds: ['kids_lessons', 'creative_learning'], decisionFactors: ['teacher_fit', 'schedule_fit', 'genre_fit'],
    fitSummary: '絵や工作が好きな子どもの表現力を伸ばしたい家庭向け', checkpoints: ['対象年齢', '開催場所', '月謝・材料費'],
    pricing: { system: '問い合わせ', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '見学・体験条件は公式サイトへ問い合わせ',
    imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://kodomo-art.jp/guidance', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'class-sports-aizumi-ok', listingType: 'class', name: 'OKスポーツクラブ藍住',
    description: '藍住町奥野にあるフィットネス＆コミュニティ施設。子ども向け短期教室など、時期に応じたスポーツ講座を案内しています。',
    category: 'Fitness', city: '藍住町', area: '奥野周辺', access: '板野郡藍住町奥野字乾5-7',
    genres: ['Sports', 'Swimming', 'Kids', 'Adult'], learningNeeds: ['kids_lessons', 'adult_lessons', 'sports_learning'], decisionFactors: ['schedule_fit', 'parking', 'trial_available'],
    fitSummary: '地域のスポーツ施設で運動習慣をつくりたい子ども・大人向け', checkpoints: ['募集中の教室', '対象年齢', '受講料・開催期間'],
    pricing: { system: '講座・会員別', minPrice: 0, note: '最新料金は公式サイトで確認' }, features: { parking: true, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験・短期教室は最新案内を確認',
    imageUrl: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.oksportsclub.co.jp/aok', sourceNote: '公式サイトを2026-08-25確認'
  },

  // ================= 徳島県北島町 =================
  {
    id: 'school-english-kitajima-ecc', listingType: 'school', name: 'ECCジュニア 北島中央教室',
    description: '北島町で幼児から高校生までを対象に英語を学べる教室。英会話、英検、受験を見据えた継続学習に対応しています。',
    category: 'English', city: '北島町', area: '北島町内', access: '板野郡北島町、詳細は公式サイトで確認',
    genres: ['English', 'Kids', 'Exam'], learningNeeds: ['kids_lessons', 'english_learning'], decisionFactors: ['age_fit', 'goal_fit', 'teacher_fit'],
    fitSummary: '北島町で幼児期から英語を長く続けたい家庭向け', checkpoints: ['所在地', '年齢別コース', '時間割・料金'],
    pricing: { system: 'コース別', minPrice: 0, note: 'コース別料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '体験・問い合わせは公式サイトから',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://tokushima-ecc.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'class-mixed-kitajima-roufuk', listingType: 'class', name: 'サンライフ北島・サンビレッジ北島 教室',
    description: '北島町の公共施設で開講される各種教室。キッズ英会話・ダンスから、大人のバレエ、卓球、バドミントンまで選べます。',
    category: 'Fitness', city: '北島町', area: '北島町内公共施設', access: 'サンライフ北島・サンビレッジ北島ほか。教室ごとの会場は公式サイトで確認',
    genres: ['Sports', 'English', 'Dance', 'Kids', 'Adult'], learningNeeds: ['kids_lessons', 'adult_lessons', 'sports_learning'], decisionFactors: ['age_fit', 'schedule_fit', 'price_clarity'],
    fitSummary: '公共施設の期間講座から家族に合う学びを選びたい人向け', checkpoints: ['募集期間', '会場', '受講回数・料金'],
    pricing: { system: '期間講座', minPrice: 0, note: '教室別の受講料は公式一覧で確認' }, features: { parking: true, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '募集状況・体験可否は施設へ確認',
    imageUrl: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.roufukkyou.jp/class.php', sourceNote: '公式教室案内を2026-08-25確認'
  },
  {
    id: 'school-karate-kitajima-cuore', listingType: 'school', name: 'クオレ北島スクール',
    description: '北島町高房で開講する子ども向け空手教室。礼儀や基礎体力を身につけながら、初心者から参加できます。',
    category: 'Fitness', city: '北島町', area: '高房周辺', access: '板野郡北島町高房、詳細会場は公式サイトで確認',
    genres: ['Karate', 'Sports', 'Kids'], learningNeeds: ['kids_lessons', 'sports_learning'], decisionFactors: ['age_fit', 'trial_available', 'teacher_fit'],
    fitSummary: '空手を通して礼儀と運動習慣を身につけたい子ども向け', checkpoints: ['対象年齢', '練習曜日', '月謝・会場'],
    pricing: { system: '月謝制', minPrice: 0, note: '料金は公式スクールページで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '無料体験受付あり',
    imageUrl: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://cuore.sport-school.com/school/%E5%8C%97%E5%B3%B6-3', sourceNote: '公式スクールページを2026-08-25確認'
  },

  // ================= 徳島県松茂町 =================
  {
    id: 'class-taichi-matsushige-association', listingType: 'class', name: '徳島県太極拳協会 松茂教室',
    description: '松茂町広島で開講する太極拳教室。健康づくりや仲間づくりを目的に、段級への挑戦もできます。',
    category: 'Fitness', city: '松茂町', area: '広島周辺', access: '板野郡松茂町広島、松茂吉永道場',
    genres: ['TaiChi', 'Sports', 'Adult'], learningNeeds: ['adult_lessons', 'sports_learning'], decisionFactors: ['schedule_fit', 'beginner_friendly', 'teacher_fit'],
    fitSummary: '無理のない運動で健康づくりと仲間づくりをしたい大人向け', checkpoints: ['開催日時', '参加条件', '会費・体験'],
    pricing: { system: '問い合わせ', minPrice: 0, note: '会費は協会へ問い合わせ' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: false, adultClass: true }, scheduleNote: '火曜13:00〜15:00', trial: '見学・体験条件は協会へ確認',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://tokushima-taijiquan.com/schools/%E6%9D%BE%E8%8C%82%E6%95%99%E5%AE%A4-2/', sourceNote: '徳島県太極拳協会公式ページを2026-08-25確認'
  },

  // ================= 高知県高知市 =================
  {
    id: 'school-english-kochi-sky', listingType: 'school', name: 'Sky英会話',
    description: '高知市葛島にある幼児から大人向けの英会話教室。外国人・日本人講師から英会話、4技能、英検など目的に合わせて学べます。',
    category: 'English', city: '高知市', area: '葛島・西高須周辺', access: '高知市葛島2丁目5-14-2F、西高須駅から約150m',
    genres: ['English', 'Kids', 'Adult', 'Exam'], learningNeeds: ['kids_lessons', 'adult_lessons', 'english_learning'], decisionFactors: ['age_fit', 'trial_available', 'parking'],
    fitSummary: '幼児から大人まで無料体験から英会話を始めたい人向け', checkpoints: ['年齢別クラス', '曜日', '教材費を含む総額'],
    pricing: { system: '月謝制', minPrice: 6600, note: '公式掲載：幼児・小学生・一般英会話45分 月6,600円〜' }, features: { parking: true, parkingCapacity: 'standard', weekendOpen: true, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '無料体験サンプルレッスン・親子見学あり',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.sky-kochi.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-english-kochi-enjoy', listingType: 'school', name: 'エンジョイ英会話教室',
    description: '高知市北部環状線沿いにある1歳から大人向けの英会話教室。カナダ人講師による少人数・プライベートレッスンがあります。',
    category: 'English', city: '高知市', area: '高知市北部', access: '高知市北部環状線沿い、詳細所在地は公式サイトで確認',
    genres: ['English', 'Kids', 'Adult', 'Online'], learningNeeds: ['kids_lessons', 'adult_lessons', 'english_learning'], decisionFactors: ['age_fit', 'parking', 'schedule_fit'],
    fitSummary: '1歳から大人まで少人数で自然な英語を学びたい人向け', checkpoints: ['クラス区分', '月謝', '振替・オンライン条件'],
    pricing: { system: '月謝制', minPrice: 0, note: '入会金0円 / クラス別料金は公式サイトで確認' }, features: { parking: true, parkingCapacity: 'standard', beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験レッスン案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://enjoy-eikaiwa.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-english-kochi-aok', listingType: 'school', name: 'A-Ok English 英会話教室',
    description: '高知市中万々にある子ども・大人向け英会話教室。子どもの体験レッスンや大人向けフリートークなどを開催しています。',
    category: 'English', city: '高知市', area: '中万々周辺', access: '高知市中万々57-56 コーポかけみず2F西',
    genres: ['English', 'Kids', 'Adult', 'Conversation'], learningNeeds: ['kids_lessons', 'adult_lessons', 'english_learning'], decisionFactors: ['teacher_fit', 'trial_available', 'schedule_fit'],
    fitSummary: '地域密着の教室で子ども・大人の会話力を伸ばしたい人向け', checkpoints: ['対象クラス', '開催日時', '料金・体験'],
    pricing: { system: 'クラス別', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '子ども英会話体験の開催案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.a-ok-english.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-piano-kochi-yamaha-honmachi', listingType: 'school', name: 'ヤマハミュージックスクール 本町センター',
    description: '高知市本町にある音楽教室。1歳から小学生の総合音楽教育と、小学生から大人向けの楽器・歌のレッスンを選べます。',
    category: 'Piano', city: '高知市', area: '本町周辺', access: '高知市本町2-2-3',
    genres: ['Piano', 'Music', 'Kids', 'Adult'], learningNeeds: ['kids_lessons', 'adult_lessons', 'music_learning'], decisionFactors: ['age_fit', 'trial_available', 'commute_fit'],
    fitSummary: '幼児の総合音楽教育から大人の楽器まで相談したい人向け', checkpoints: ['募集中コース', '開講曜日', '授業料・施設費'],
    pricing: { system: 'コース別', minPrice: 0, note: 'コース別料金は公式サイトで確認' }, features: { parking: true, parkingCapacity: 'paid', beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '無料体験・レッスン見学案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://school.jp.yamaha.com/music/venue/detail/?category=all&courseClsCd=27&id=210001R01', sourceNote: 'ヤマハ公式教室ページを2026-08-25確認'
  },
  {
    id: 'school-piano-kochi-kawai-honmachi', listingType: 'school', name: 'カワイ音楽教室 本町センター',
    description: '高知市本町にある音楽教室。子どものピアノ・リトミックから、大人のピアノ、バイオリン、ギターなどを検討できます。',
    category: 'Piano', city: '高知市', area: '本町・大橋通周辺', access: '高知市本町3-6-40 アルファガーデン本町2F、大橋通電停・バス停から徒歩約5分',
    genres: ['Piano', 'Music', 'Kids', 'Adult'], learningNeeds: ['kids_lessons', 'adult_lessons', 'music_learning'], decisionFactors: ['station_access', 'age_fit', 'trial_available'],
    fitSummary: '中心部で子ども・大人の音楽レッスンを比較したい人向け', checkpoints: ['対象コース', '体験日程', '授業料・管理費'],
    pricing: { system: 'コース別', minPrice: 0, note: 'コース別料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験・おためしコースは公式サイトで確認',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://music.kawai.jp/search/area/39/%E9%AB%98%E7%9F%A5%E5%B8%82', sourceNote: 'カワイ公式高知市教室一覧を2026-08-25確認'
  },
  {
    id: 'school-programming-kochi-qureo-takasu', listingType: 'school', name: 'QUREOプログラミング教室 明光義塾 高知高須教室',
    description: '高知市高須にある小学2〜6年生向けプログラミング教室。ゲーム型教材から基礎を学び、プログラミング能力検定にも対応しています。',
    category: 'Programming', city: '高知市', area: '高須周辺', access: '高知市高須2-6-64 アーバンビル青山2F',
    genres: ['Programming', 'Kids', 'Game', 'Exam'], learningNeeds: ['kids_lessons', 'it_learning'], decisionFactors: ['age_fit', 'parking', 'trial_available'],
    fitSummary: '小学生がゲーム教材からプログラミングを始めたい家庭向け', checkpoints: ['対象学年', '授業曜日', '授業料・体験期間'],
    pricing: { system: '月謝制', minPrice: 0, note: '授業料は公式教室ページから問い合わせ' }, features: { parking: true, parkingCapacity: 'small', weekendOpen: true, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '期間限定無料体験案内あり・最新条件は公式サイトで確認',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://qureo.jp/class/meikogijuku_kochitakasu', sourceNote: 'QUREO公式教室ページを2026-08-25確認'
  },
  {
    id: 'school-programming-kochi-seiwalab', listingType: 'school', name: '高知市の小学生向けプログラミング教室 清和ラボ',
    description: '高知市南万々にある小学生向けプログラミング教室。遊び感覚の教材からITスキルと順序立てて考える力を育てます。',
    category: 'Programming', city: '高知市', area: '南万々周辺', access: '高知市南万々110-2',
    genres: ['Programming', 'Kids', 'Creative'], learningNeeds: ['kids_lessons', 'it_learning'], decisionFactors: ['trial_available', 'teacher_fit', 'beginner_friendly'],
    fitSummary: '遊びと制作を通して考える力とITスキルを伸ばしたい小学生向け', checkpoints: ['対象学年', 'コース内容', '月謝・曜日'],
    pricing: { system: 'コース別', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '無料体験あり',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://seiwalab.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-dance-kochi-saki', listingType: 'school', name: 'saki dance academy',
    description: '高知市桜井町などで開講するダンスアカデミー。バレエを基礎に、モダン・コンテンポラリーを取り入れて身体と表現を磨きます。',
    category: 'Dance', city: '高知市', area: '桜井町・春野町', access: 'studio DANSEUR：高知市桜井町1丁目12-12ほか',
    genres: ['Dance', 'Ballet', 'Contemporary'], learningNeeds: ['kids_lessons', 'adult_lessons', 'dance_learning'], decisionFactors: ['genre_fit', 'trial_available', 'teacher_fit'],
    fitSummary: 'バレエを基礎に舞台表現やコンテンポラリーを学びたい人向け', checkpoints: ['対象年齢', 'レッスン会場', '料金・体験日程'],
    pricing: { system: 'クラス別', minPrice: 0, note: '料金は公式サイトへ問い合わせ' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '見学・体験レッスン受付案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.sakidanceacademy.com/', sourceNote: '公式サイトを2026-08-25確認'
  },

  // ================= 岡山県岡山市 =================
  {
    id: 'school-english-okayama-cornerstone', listingType: 'school', name: 'Cornerstone English School',
    entityType: 'EducationalOrganization', entityId: 'https://www.lesson-map.com/#school-english-okayama-cornerstone', prefecture: '岡山県', addressLocality: '岡山市', officialUrl: 'https://cse-school.jp/',
    description: '岡山市で未就学児から大人まで学べる英会話教室。少人数クラスを中心に、年代や目的に合うコースを相談できます。',
    category: 'English', city: '岡山市', area: '岡山市内', access: '所在地・アクセスは公式サイトで確認',
    genres: ['English', 'Kids', 'Adult', 'Conversation'], learningNeeds: ['kids_lessons', 'adult_lessons', 'english_learning'], decisionFactors: ['age_fit', 'class_size', 'trial_available'],
    fitSummary: '少人数で子どもから大人まで英会話を続けたい人向け', checkpoints: ['校舎・通学経路', '対象クラス', '月謝・教材費'],
    pricing: { system: '月謝制', minPrice: 0, note: 'コース別料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験・見学条件は公式サイトで確認',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://cse-school.jp/', sourceNote: '公式サイトを2026-08-28確認'
  },
  {
    id: 'school-english-okayama-thompson', listingType: 'school', name: 'Thompson Academy',
    entityType: 'EducationalOrganization', entityId: 'https://www.lesson-map.com/#school-english-okayama-thompson', prefecture: '岡山県', addressLocality: '岡山市', officialUrl: 'https://www.thompson-academy.com/',
    description: '岡山市東区城東台東にある子どもから大人向けの英語スクール。英会話に加え、資格・試験対策や大人向けクラスを検討できます。',
    category: 'English', city: '岡山市', area: '東区・城東台周辺', access: '岡山市東区城東台東2-10-17',
    genres: ['English', 'Kids', 'Adult', 'Exam'], learningNeeds: ['kids_lessons', 'adult_lessons', 'english_learning'], decisionFactors: ['age_fit', 'teacher_fit', 'schedule_fit'],
    fitSummary: '会話から試験対策まで目的に合わせて英語を学びたい人向け', checkpoints: ['対象クラス', '開講曜日', '料金・体験'],
    pricing: { system: 'コース別', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験条件は公式サイトで確認',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.thompson-academy.com/', sourceNote: '公式サイトを2026-08-28確認'
  },
  {
    id: 'school-english-okayama-neo', listingType: 'school', name: 'English NEO',
    entityType: 'EducationalOrganization', entityId: 'https://www.lesson-map.com/#school-english-okayama-neo', prefecture: '岡山県', addressLocality: '岡山市', officialUrl: 'https://www.eikaiwa-neo.com/',
    description: '岡山市内にある子ども・大人向け英会話教室。初心者から上級者まで、レベルや目的に合わせたレッスンを検討できます。',
    category: 'English', city: '岡山市', area: '岡山市中心部南側', access: '詳しい所在地・アクセスは公式サイトで確認',
    genres: ['English', 'Kids', 'Adult', 'Conversation'], learningNeeds: ['kids_lessons', 'adult_lessons', 'english_learning'], decisionFactors: ['level_fit', 'trial_available', 'schedule_fit'],
    fitSummary: '自分のレベルに合う英会話を体験から確かめたい人向け', checkpoints: ['対象・レベル', 'レッスン形式', '月謝・教材費'],
    pricing: { system: 'コース別', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験レッスン案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.eikaiwa-neo.com/', sourceNote: '公式サイトを2026-08-28確認'
  },
  {
    id: 'school-piano-okayama-yamaha-music-avenue', listingType: 'school', name: 'ヤマハミュージックスクール ミュージックアベニュー岡山',
    entityType: 'EducationalOrganization', entityId: 'https://www.lesson-map.com/#school-piano-okayama-yamaha-music-avenue', prefecture: '岡山県', addressLocality: '岡山市', officialUrl: 'https://school.jp.yamaha.com/music/venue/detail/?category=all&courseClsCd=32&id=212001E01',
    description: 'JR岡山駅近くの音楽教室。幼児・小学生の総合音楽教育から、小学生・大人向けの楽器や歌のレッスンまで選べます。',
    category: 'Piano', city: '岡山市', area: '北区・岡山駅前', access: '岡山市北区駅前町1-1-1 ビックカメラ4F、JR岡山駅から徒歩約1分',
    genres: ['Piano', 'Music', 'Kids', 'Adult'], learningNeeds: ['kids_lessons', 'adult_lessons', 'music_learning'], decisionFactors: ['station_access', 'age_fit', 'trial_available'],
    fitSummary: '岡山駅近くで子ども・大人の音楽コースを比較したい人向け', checkpoints: ['募集中コース', '開講曜日', '授業料・施設費'],
    pricing: { system: 'コース別', minPrice: 0, note: 'コース別料金は公式サイトで確認' }, features: { parking: true, parkingCapacity: 'paid', beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '無料体験・レッスン見学案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://school.jp.yamaha.com/music/venue/detail/?category=all&courseClsCd=32&id=212001E01', sourceNote: 'ヤマハ公式教室ページを2026-08-28確認'
  },
  {
    id: 'school-piano-okayama-kawai-omoto', listingType: 'school', name: 'カワイ音楽教室 大元駅前',
    entityType: 'EducationalOrganization', entityId: 'https://www.lesson-map.com/#school-piano-okayama-kawai-omoto', prefecture: '岡山県', addressLocality: '岡山市', officialUrl: 'https://music.kawai.jp/search/course/00L602/34459',
    description: '岡山市北区の大元駅周辺にあるカワイ音楽教室。子ども・大人向けの開講コースや体験日程を公式ページから確認できます。',
    category: 'Piano', city: '岡山市', area: '北区・大元駅周辺', access: '大元駅周辺、詳しい所在地は公式教室ページで確認',
    genres: ['Piano', 'Music', 'Kids', 'Adult'], learningNeeds: ['kids_lessons', 'adult_lessons', 'music_learning'], decisionFactors: ['station_access', 'age_fit', 'trial_available'],
    fitSummary: '大元駅周辺で年齢に合う音楽レッスンを探したい人向け', checkpoints: ['募集中コース', '対象年齢', '授業料・管理費'],
    pricing: { system: 'コース別', minPrice: 0, note: 'コース別料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験・おためしコースは公式サイトで確認',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://music.kawai.jp/search/course/00L602/34459', sourceNote: 'カワイ公式教室ページを2026-08-28確認'
  },
  {
    id: 'school-programming-okayama-qureo-nagomi', listingType: 'school', name: 'QUREOプログラミング教室 なごみパソコン教室',
    entityType: 'EducationalOrganization', entityId: 'https://www.lesson-map.com/#school-programming-okayama-qureo-nagomi', prefecture: '岡山県', addressLocality: '岡山市', officialUrl: 'https://qureo.jp/class/nagomipasokonkyoshitsu',
    description: '岡山市中区兼基にある小学2〜6年生向けプログラミング教室。ゲーム型教材から基礎を学び、無料体験から相性を確認できます。',
    category: 'Programming', city: '岡山市', area: '中区・兼基周辺', access: '岡山市中区兼基223',
    genres: ['Programming', 'Kids', 'Game'], learningNeeds: ['kids_lessons', 'it_learning'], decisionFactors: ['age_fit', 'parking', 'trial_available'],
    fitSummary: '小学生が通いやすい曜日でプログラミングを始めたい家庭向け', checkpoints: ['対象学年', '授業曜日', '授業料・教材費'],
    pricing: { system: '月謝制', minPrice: 0, note: '授業料は公式教室ページから問い合わせ' }, features: { parking: true, parkingCapacity: 'large', weekendOpen: true, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, scheduleNote: '火・水・金・土曜開講（最新時間は公式サイトで確認）', trial: '無料体験あり',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://qureo.jp/class/nagomipasokonkyoshitsu', sourceNote: 'QUREO公式教室ページを2026-08-28確認'
  },
  {
    id: 'school-programming-okayama-qureo-fukuhama', listingType: 'school', name: 'QUREOプログラミング教室 ベスト個別 福浜教室',
    entityType: 'EducationalOrganization', entityId: 'https://www.lesson-map.com/#school-programming-okayama-qureo-fukuhama', prefecture: '岡山県', addressLocality: '岡山市', officialUrl: 'https://qureo.jp/class/besutokobetsu_fukuhama',
    description: '岡山市南区三浜町にある小学3〜6年生向けプログラミング教室。ゲーム型教材を使い、基礎から段階的に学べます。',
    category: 'Programming', city: '岡山市', area: '南区・福浜周辺', access: '岡山市南区三浜町2-1-2',
    genres: ['Programming', 'Kids', 'Game'], learningNeeds: ['kids_lessons', 'it_learning'], decisionFactors: ['age_fit', 'parking', 'trial_available'],
    fitSummary: '南区で小学生向けプログラミングを体験から検討したい家庭向け', checkpoints: ['対象学年', '授業曜日', '授業料・体験条件'],
    pricing: { system: '月謝制', minPrice: 0, note: '授業料は公式教室ページから問い合わせ' }, features: { parking: true, parkingCapacity: 'standard', beginnerFriendly: '◎', kidsClass: true, adultClass: false }, scheduleNote: '火〜金曜開講（最新時間は公式サイトで確認）', trial: '期間限定体験案内あり・最新条件は公式サイトで確認',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://qureo.jp/class/besutokobetsu_fukuhama', sourceNote: 'QUREO公式教室ページを2026-08-28確認'
  },
  {
    id: 'school-dance-okayama-line', listingType: 'school', name: 'Dance Studio Line',
    entityType: 'EducationalOrganization', entityId: 'https://www.lesson-map.com/#school-dance-okayama-line', prefecture: '岡山県', addressLocality: '岡山市', officialUrl: 'https://d-s-l.net/',
    description: '岡山市北区厚生町にあるダンススタジオ。ジャズ、バレエ、タップなどを開講し、初心者向けクラスや体験を案内しています。',
    category: 'Dance', city: '岡山市', area: '北区・厚生町周辺', access: '岡山市北区厚生町2-1-5 健康空間4F',
    genres: ['Dance', 'Jazz', 'Ballet', 'Tap'], learningNeeds: ['kids_lessons', 'adult_lessons', 'dance_learning'], decisionFactors: ['genre_fit', 'trial_available', 'beginner_friendly'],
    fitSummary: '複数のダンスジャンルから初心者向けクラスを探したい人向け', checkpoints: ['対象年齢', 'ジャンル・クラス', '月謝・体験日程'],
    pricing: { system: 'クラス別', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験レッスン案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://d-s-l.net/', sourceNote: '公式サイトを2026-08-28確認'
  },
  {
    id: 'school-soroban-okayama-miraijuku', listingType: 'school', name: '未来塾 そろばん教室',
    entityType: 'EducationalOrganization', entityId: 'https://www.lesson-map.com/#school-soroban-okayama-miraijuku', prefecture: '岡山県', addressLocality: '岡山市', officialUrl: 'https://miraijukusoroban.wixsite.com/website',
    description: '岡山市北区伊福町にあるそろばん教室。楽しみながら学び、計算力と集中力を身につけたい子どもの候補として検討できます。',
    category: 'Soroban', city: '岡山市', area: '北区・伊福町周辺', access: '岡山市北区伊福町3-25-18 TAXビル2F',
    genres: ['Soroban', 'Kids'], learningNeeds: ['kids_lessons'], decisionFactors: ['commute_fit', 'teacher_fit', 'beginner_friendly'],
    fitSummary: '岡山駅西側で子どもの計算力と集中力を育てたい家庭向け', checkpoints: ['対象年齢', '開講曜日', '月謝・教材費'],
    pricing: { system: '月謝制', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '体験条件は公式サイトで確認',
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://miraijukusoroban.wixsite.com/website', sourceNote: '公式サイトを2026-08-28確認'
  },
  {
    id: 'school-calligraphy-okayama-hakuhousha', listingType: 'school', name: '書道研究 柏朋社',
    entityType: 'EducationalOrganization', entityId: 'https://www.lesson-map.com/#school-calligraphy-okayama-hakuhousha', prefecture: '岡山県', addressLocality: '岡山市', officialUrl: 'https://okayama-shodo.com/',
    description: '岡山市で未就学児から大人まで学べる書道教室。硬筆・毛筆、実用書、師範取得や公募展への出品など目的に合わせて学べます。',
    category: 'Calligraphy', city: '岡山市', area: '岡山市内', access: '岡山市内の教室所在地・開講日は公式サイトで確認',
    genres: ['Calligraphy', 'Kids', 'Adult'], learningNeeds: ['kids_lessons', 'adult_lessons'], decisionFactors: ['age_fit', 'goal_fit', 'schedule_fit'],
    fitSummary: '子どもの書写から大人の実用書・専門的な書道まで学びたい人向け', checkpoints: ['教室所在地', '対象クラス', '月謝・手本代'],
    pricing: { system: 'クラス別', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '見学・体験条件は公式サイトで確認',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://okayama-shodo.com/', sourceNote: '公式サイトを2026-08-28確認'
  },
  {
    id: 'school-yoga-okayama-ruta', listingType: 'school', name: 'ヨガスタジオ RUTA',
    description: '岡山市北区田町にあるヨガスタジオ。カウンセリングを含む体験レッスンがあり、初心者も無理のない動きから始められます。',
    category: 'Yoga', city: '岡山市', area: '北区・田町周辺', access: '岡山市北区田町1-10-28',
    genres: ['Yoga', 'Adult', 'Beginner'], learningNeeds: ['adult_lessons'], decisionFactors: ['trial_available', 'beginner_friendly', 'schedule_fit'],
    fitSummary: '岡山市中心部で体験からヨガを始めたい初心者向け', checkpoints: ['体験料金', 'クラス強度', '月会費・回数券'],
    pricing: { system: 'プラン別', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: false, adultClass: true }, trial: '体験ヨガレッスンあり',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://ruta2017.com/beginner.php', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-yoga-okayama-plusbody', listingType: 'school', name: 'PLUS BODY',
    description: '岡山市北区問屋町にあるヨガ・ピラティス・骨盤調整の専門スタジオ。初心者から経験者まで参加できるプログラムを提供しています。',
    category: 'Yoga', city: '岡山市', area: '北区・問屋町周辺', access: '岡山市北区問屋町11-105 supleビル2F',
    genres: ['Yoga', 'Pilates', 'Adult'], learningNeeds: ['adult_lessons'], decisionFactors: ['parking', 'schedule_fit', 'beginner_friendly'],
    fitSummary: '駐車場のあるスタジオでヨガとピラティスを比較したい人向け', checkpoints: ['体験・キャンペーン条件', 'プログラム内容', '月会費・回数券'],
    pricing: { system: 'プラン別', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: true, parkingCapacity: 'shared', beginnerFriendly: '◎', kidsClass: false, adultClass: true }, trial: '体験・入会キャンペーンの最新条件は公式サイトで確認',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://plusbody.jp/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-art-okayama-whitepallet', listingType: 'school', name: 'ARTSTUDIO WhitePallet',
    description: '岡山市にある絵画教室。趣味の制作から芸大・美大受験、デザイン・イラストまで目的に合わせて学べ、オンライン教室もあります。',
    category: 'Art', city: '岡山市', area: '東区・益野周辺', access: '益野中バス停から徒歩約3分、所在地詳細は公式サイトで確認',
    genres: ['Art', 'Drawing', 'Online', 'Exam'], learningNeeds: ['kids_lessons', 'adult_lessons'], decisionFactors: ['goal_fit', 'trial_available', 'parking'],
    fitSummary: '趣味の絵画から美大受験・オンライン制作まで目的を持って学びたい人向け', checkpoints: ['対象コース', '受講回数', '料金・画材費'],
    pricing: { system: '回数別', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: true, parkingCapacity: 'small', weekendOpen: true, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '1カ月の体験教室案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.whitepallet.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-art-okayama-artzemi', listingType: 'school', name: 'アートゼミこども絵画教室',
    description: '岡山市中区円山にある2歳から社会人向けの絵画教室。子どもの感性を育てる制作から、大人の創作活動まで幅広く学べます。',
    category: 'Art', city: '岡山市', area: '中区・円山周辺', access: '岡山市中区円山339-1',
    genres: ['Art', 'Kids', 'Adult', 'Creative'], learningNeeds: ['kids_lessons', 'adult_lessons'], decisionFactors: ['age_fit', 'teacher_fit', 'genre_fit'],
    fitSummary: '幼児から大人まで年代に合う絵画・造形を学びたい人向け', checkpoints: ['年齢別クラス', '開講曜日', '月謝・画材費'],
    pricing: { system: 'クラス別', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '見学・体験条件は公式サイトで確認',
    imageUrl: 'https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.artzemi.com/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-cooking-okayama-diletto', listingType: 'school', name: 'COOKING LABO DILETTO',
    description: '岡山市中区門田屋敷にある料理教室。作った料理を試食しながら学べるクラスや、男性向けの料理教室も案内しています。',
    category: 'Cooking', city: '岡山市', area: '中区・門田屋敷周辺', access: '岡山市中区門田屋敷1-9-30',
    genres: ['Cooking', 'Adult'], learningNeeds: ['adult_lessons'], decisionFactors: ['class_content', 'schedule_fit', 'beginner_friendly'],
    fitSummary: '実際に作って試食しながら料理の幅を広げたい大人向け', checkpoints: ['レッスン内容', '開催日', '受講料・材料費'],
    pricing: { system: 'レッスン別', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: false, adultClass: true }, trial: '単発参加・申込条件は公式サイトで確認',
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://cl-diletto.com/class/', sourceNote: '公式サイトを2026-08-25確認'
  },
  {
    id: 'school-programming-okayama-kidsprolab-dolphin', listingType: 'school', name: 'Kidsプログラミングラボ 岡山ドルフィン教室',
    description: '岡山市南区でScratchのゲーム制作からPython、Web制作、Unityまで段階的に学べる子ども向けプログラミング教室です。',
    category: 'Programming', city: '岡山市', area: '南区・甲浦周辺', access: '岡山市南区甲浦小学校近く、パソコン教室ドルフィン内',
    genres: ['Programming', 'Kids', 'Scratch', 'Python', 'Unity'], learningNeeds: ['kids_lessons', 'it_learning'], decisionFactors: ['level_fit', 'trial_available', 'goal_fit'],
    fitSummary: 'Scratchから本格的な言語へ段階的に進みたい子ども向け', checkpoints: ['対象コース', '開講日時', '月謝・教材費'],
    pricing: { system: 'コース別', minPrice: 0, note: '料金は公式教室ページで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '無料体験会あり・日程は公式サイトで確認',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://kids-prolab.com/location/te140/', sourceNote: '公式教室ページを2026-08-28確認'
  },
  {
    id: 'school-programming-okayama-pitagoramin', listingType: 'school', name: 'ピタゴラミン岡山校',
    description: 'Scratch Jr、Scratch、マイクラ×Python、3D制作など、年齢と興味に合わせてコースを選べる岡山市のプログラミング教室です。',
    category: 'Programming', city: '岡山市', area: '岡山市内', access: '所在地・アクセスは公式サイトで確認',
    genres: ['Programming', 'Kids', 'Minecraft', 'Python', '3D'], learningNeeds: ['kids_lessons', 'it_learning'], decisionFactors: ['age_fit', 'genre_fit', 'trial_available'],
    fitSummary: 'マイクラやゲーム制作からPython・3Dへ進みたい子ども向け', checkpoints: ['推奨年齢', '希望コース', '曜日・月額料金'],
    pricing: { system: '月謝制', minPrice: 6600, note: 'コースにより月額6,600円または7,700円など。最新料金は公式サイトで確認' }, features: { parking: false, weekendOpen: true, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '無料体験案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://pitagoramin.com/okayama/', sourceNote: '公式サイトを2026-08-28確認'
  },
  {
    id: 'school-programming-okayama-shinji', listingType: 'school', name: 'しんじ先生のプログラミング／ロボット教室',
    description: '岡山市北区・中区に複数教室を展開し、プログラミング、ロボット、マインクラフト、Roblox、情報Ⅰを年齢別に学べます。',
    category: 'Programming', city: '岡山市', area: '北区・中区', access: '問屋町・豊成・伊島・原尾島の各教室',
    genres: ['Programming', 'Robot', 'Minecraft', 'Roblox', 'Exam'], learningNeeds: ['kids_lessons', 'it_learning'], decisionFactors: ['age_fit', 'commute_fit', 'trial_available'],
    fitSummary: '近隣教室でロボットやマイクラ・Robloxを学びたい小中学生向け', checkpoints: ['教室・曜日', '対象学年', '授業料・体験日程'],
    pricing: { system: 'コース別', minPrice: 0, note: '授業料は公式サイトまたは教室へ確認' }, features: { parking: false, weekendOpen: true, beginnerFriendly: '◎', kidsClass: true, adultClass: false }, trial: '無料体験授業を随時受付',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.shinjipc.com/school/', sourceNote: '公式教室一覧を2026-08-28確認'
  },
  {
    id: 'school-piano-okayama-soleil', listingType: 'school', name: 'ソレイユピアノ教室',
    description: '岡山市北区伊福町にある幼児から大人向けの個人ピアノ教室。初心者、再開、音高・音大受験まで目的に合わせて相談できます。',
    category: 'Piano', city: '岡山市', area: '北区・伊福町', access: '岡山市北区伊福町',
    genres: ['Piano', 'Kids', 'Adult', 'Exam'], learningNeeds: ['kids_lessons', 'adult_lessons', 'music_learning'], decisionFactors: ['teacher_fit', 'trial_available', 'goal_fit'],
    fitSummary: '無料体験で個人指導との相性を確かめたい幼児・大人向け', checkpoints: ['対象・目的', 'レッスン回数', '教材費'],
    pricing: { system: '月謝制', minPrice: 5000, note: '大人月2回5,000円、初級月4回6,000円など。教材費別' }, features: { parking: false, weekendOpen: true, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '無料体験レッスンあり',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://www.soleil-pianoschool.com/', sourceNote: '公式サイトを2026-08-28確認'
  },
  {
    id: 'school-piano-okayama-kishimoto', listingType: 'school', name: 'Music Place KISHIMOTO',
    description: '岡山市中区四御神にある子ども・大人向けの個人ピアノ教室。歌、読譜、リズムも含めて学び、オンラインへの切替相談もできます。',
    category: 'Piano', city: '岡山市', area: '中区・四御神', access: '岡山市中区四御神264-6、竜の口小学校徒歩2分',
    genres: ['Piano', 'Kids', 'Adult', 'Online'], learningNeeds: ['kids_lessons', 'adult_lessons', 'music_learning'], decisionFactors: ['age_fit', 'schedule_fit', 'trial_available'],
    fitSummary: '個人レッスンで音楽の基礎と表現を学びたい子ども・大人向け', checkpoints: ['空き時間', '受講時間', '入会金・月謝'],
    pricing: { system: '月謝制', minPrice: 6500, note: '大人月3回30分6,500円、個人年間40回30分7,500円など' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験レッスンは公式LINEから相談',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://musicplace.jp/', sourceNote: '公式サイトを2026-08-28確認'
  },
  {
    id: 'school-cram-yokohama-aoba-mystep',
    listingType: 'school',
    name: 'MySTEPすすき野・あざみ野校',
    entityType: 'EducationalOrganization',
    entityId: 'https://www.lesson-map.com/#school-cram-yokohama-aoba-mystep',
    prefecture: '神奈川県',
    addressLocality: '横浜市青葉区',
    officialUrl: 'https://mystep-study.com/',
    description: '横浜市青葉区もみの木台にある、小学生・中学生・高校生対象の個別指導塾。1対2の個別指導を基本に、学校の学習・定期テスト対策や受験に向けたコースを案内しています。',
    category: 'CramSchool',
    city: '横浜市青葉区',
    area: 'もみの木台・すすき野・あざみ野周辺',
    access: '横浜市青葉区もみの木台6-8 松本ビル107／すすき野一丁目バス停から徒歩1分',
    genres: ['CramSchool', 'Individual', 'Kids', 'Exam'],
    learningNeeds: ['kids_lessons', 'exam_preparation'],
    decisionFactors: ['age_fit', 'commute_fit', 'trial_available'],
    fitSummary: 'あざみ野・すすき野周辺で、学校別対策や受験準備を個別に相談したい小中高生向け',
    checkpoints: ['学年・受講目的', '授業回数・料金', '空席・体験日程'],
    pricing: { system: '学年・回数別', minPrice: 0, note: '最新の授業料・諸費用は公式サイトまたは教室へ確認' },
    features: { parking: true, parkingCapacity: 'small', beginnerFriendly: '◎', kidsClass: true, adultClass: false },
    scheduleNote: '受付15:30〜22:00。授業日・休校日は公式サイトで確認',
    trial: '無料体験授業・学習相談の案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://mystep-study.com/',
    sourceNote: '掲載依頼および公式サイトを2026-09-05確認'
  },
  {
    id: 'school-piano-okayama-taki', listingType: 'school', name: 'Taki音楽教室',
    description: '岡山市北区のピアノ・ボーカル教室。小さな子どもから大人、シニアまで、生活や目的に合わせた音楽レッスンを相談できます。',
    category: 'Piano', city: '岡山市', area: '北区', access: '教室所在地・アクセスは公式サイトで確認',
    genres: ['Piano', 'Vocal', 'Kids', 'Adult', 'Senior'], learningNeeds: ['kids_lessons', 'adult_lessons', 'music_learning'], decisionFactors: ['age_fit', 'goal_fit', 'teacher_fit'],
    fitSummary: 'ピアノと歌を含め、年代に合う音楽の楽しみ方を相談したい人向け', checkpoints: ['教室所在地', '対象コース', '料金・体験日程'],
    pricing: { system: 'コース別', minPrice: 0, note: '料金は公式サイトで確認' }, features: { parking: false, beginnerFriendly: '◎', kidsClass: true, adultClass: true }, trial: '体験・問い合わせ案内あり',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: 'https://taki-music.com/', sourceNote: '公式サイトを2026-08-28確認'
  }
];

window.studiosData = studios;
