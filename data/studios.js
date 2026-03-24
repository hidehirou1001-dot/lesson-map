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
      note: '無料体験あり / 詳細は公式サイトへ'
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

  // ================= 今治市（実在するスタジオ） =================
  {
    id: 'studio-imb-real-001',
    name: 'EXPG STUDIO IMABARI',
    description: '今治市でLDHが運営する本格的なダンススクール。アーティストを目指す本格的な環境でHIPHOPを学べます。',
    category: "Dance",
    city: '今治市',
    area: '馬越町周辺',
    access: '今治市馬越町エリア',
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
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://expg.jp/school/imabari/'
  },

  // ================= 新居浜市（実在するスタジオ） =================
  {
    id: 'studio-nii-real-001',
    name: 'EXPG STUDIO NIIHAMA',
    description: '新居浜市でLDHが運営する本格的なダンススクール。アーティストを目指す本格的な環境でHIPHOPを学べます。',
    category: "Dance",
    city: '新居浜市',
    area: '前田町周辺',
    access: '新居浜市前田町エリア（イオンモール新居浜付近）',
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
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://expg.jp/school/niihama/'
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
      note: '詳細は公式サイトへ'
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
      beginnerFriendly: '◎',
      kidsClass: true,
      adultClass: false
    },
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
      note: '月3回コースの目安'
    },
    features: {
      parking: true,
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
    name: 'ホットヨガスタジオLAVA 松山店',
    description: '大街道から徒歩すぐ。全国展開する日本最大級のホットヨガスタジオ。初心者が多く、アットホームな雰囲気が特徴。',
    category: 'Yoga',
    city: '松山市',
    area: '大街道周辺',
    access: '大街道駅 徒歩3分',
    genres: ['Yoga', 'HotYoga'],
    pricing: {
      system: '月会費',
      minPrice: 6800,
      note: 'ライトプラン'
    },
    features: {
      parking: false,
      beginnerFriendly: '◎',
      kidsClass: false,
      adultClass: true
    },
    imageUrl: 'https://plus.unsplash.com/premium_photo-1663089688180-444ff0066e5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://yoga-lava.com/'
  },
  {
    id: 'studio-yoga-002',
    name: 'ピラティススタジオ the SILK 松山店',
    description: '女性専用のマシンピラティス専門スタジオ。千舟町にあり、白を基調とした洗練された空間でレッスンが受けられます。',
    category: 'Yoga',
    city: '松山市',
    area: '千舟町周辺',
    access: '松山市駅 徒歩5分',
    genres: ['Pilates', 'Machine'],
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
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://the-silk.co.jp/'
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
      note: '無料体験あり / 料金は要問い合わせ'
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
      beginnerFriendly: '◎',
      kidsClass: false,
      adultClass: true
    },
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
      beginnerFriendly: '◎',
      kidsClass: false,
      adultClass: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://pspo.jp/worldplaza/'
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
  }
];

window.studiosData = studios;
