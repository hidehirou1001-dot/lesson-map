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
    genres: ['HIPHOP', 'Jazz', 'Kids'],
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
    genres: ['HIPHOP', 'Kids', 'Jazz'],
    pricing: {
      system: '月謝制',
      minPrice: 5500,
      note: '無料体験等詳細確認'
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
    genres: ['HIPHOP', 'Lock', 'Pop'],
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
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://skoopdance.com/'
  },
  {
    id: 'studio-real-004',
    name: 'EXPG STUDIO MATSUYAMA',
    description: 'LDHが運営する本格的なダンススクール（千舟町）。アーティストを目指す本格的な環境でHIPHOPを学べます。',
    category: "Dance",
    city: '松山市',
    area: '千舟町周辺',
    access: '松山市駅徒歩圏内',
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
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://tsdancelabo.com/'
  },
  {
    id: 'studio-real-006',
    name: 'ビービーダンススタジオ',
    description: '千舟本校や堀江校など市内に複数展開。キッズから大人まで幅広いジャンルのダンスを丁寧に指導。',
    category: "Dance",
    city: '松山市',
    area: '千舟町周辺',
    access: '千舟本校・堀江校など',
    genres: ['Jazz', 'HIPHOP'],
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
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://nanairos.com/'
  },

  // ================= 今治市（実在するスタジオ） =================
  {
    id: 'studio-imb-real-001',
    name: 'EXPG STUDIO IMABARI',
    description: '今治市でLDHが運営する本格的なダンススクール。アーティストを目指す本格的な環境でHIPHOPを学べます。',
    category: "Dance",
    city: '今治市',
    area: '今治市内',
    access: '詳細は公式サイトを確認',
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
  {
    id: 'studio-imb-real-002',
    name: 'EXPG STUDIO IMABARI',
    description: '今治市でLDHが運営する本格的なダンススクール。アーティストを目指す本格的な環境でHIPHOPを学べます。',
    category: "Dance",
    city: '今治市',
    area: '今治市内',
    access: '詳細は公式サイトを確認',
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
  {
    id: 'studio-imb-real-003',
    name: 'EXPG STUDIO IMABARI',
    description: '今治市でLDHが運営する本格的なダンススクール。アーティストを目指す本格的な環境でHIPHOPを学べます。',
    category: "Dance",
    city: '今治市',
    area: '今治市内',
    access: '詳細は公式サイトを確認',
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
    area: '新居浜市内',
    access: '詳細は公式サイトを確認',
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
  {
    id: 'studio-nii-real-002',
    name: 'EXPG STUDIO NIIHAMA',
    description: '新居浜市でLDHが運営する本格的なダンススクール。アーティストを目指す本格的な環境でHIPHOPを学べます。',
    category: "Dance",
    city: '新居浜市',
    area: '新居浜市内',
    access: '詳細は公式サイトを確認',
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
    imageUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://expg.jp/school/niihama/'
  },
  {
    id: 'studio-nii-real-003',
    name: 'EXPG STUDIO NIIHAMA',
    description: '新居浜市でLDHが運営する本格的なダンススクール。アーティストを目指す本格的な環境でHIPHOPを学べます。',
    category: "Dance",
    city: '新居浜市',
    area: '新居浜市内',
    access: '詳細は公式サイトを確認',
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
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.yamahamusic.jp/shop/matsuyama'
  },
  {
    id: 'studio-piano-002',
    name: 'カワイ音楽教室 松山センター',
    description: '松山センターをはじめ、市内に複数展開。本格的なピアノレッスンから幼児向けのリトミックまで幅広く対応。',
    category: 'Piano',
    city: '松山市',
    area: '松山市内',
    access: '詳細は各教室の情報を確認',
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
    link: 'https://music.kawai.jp/'
  },
  {
    id: 'studio-piano-003',
    name: '越智ピアノ教室',
    description: '松山市道後と森松に教室があります。道後教室は道後中学校から徒歩1分。駐車場完備で通いやすい地元密着の教室です。',
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
    imageUrl: 'https://plus.unsplash.com/premium_photo-1683141114443-41bb7fb5d2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://ochi-piano.crayonsite.net/'
  },
  {
    id: 'studio-piano-004',
    name: 'さやかピアノ音楽教室',
    description: '松山市内に複数教室（荏原・素鵞・拓南地区など）。年齢やレベルに合わせた丁寧な個人レッスンが魅力です。',
    category: 'Piano',
    city: '松山市',
    area: '荏原・素鵞',
    access: '各教室の情報を確認',
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
    link: 'https://sayakapiano.studio.site/'
  },

  // ================= プログラミング教室（松山市） =================
  {
    id: 'studio-prog-001',
    name: 'ITものづくり教室テックプログレス 松山山越校',
    description: 'プログラミングだけでなく、ロボットや3Dプリンター、デザインなども学べる話題の教室。松山市内に2教室展開。',
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
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://tino-programming.com/'
  },

  // ================= 体操教室（松山市） =================
  {
    id: 'studio-gym-001',
    name: 'JPCスポーツ教室 松山店',
    description: 'スポーツが苦手な子からトップアスリートを目指す子まで、体幹トレーニングを中心に基礎運動能力を高める教室です。',
    category: 'Gymnastics',
    city: '松山市',
    area: '空港通周辺',
    access: '空港通7丁目（ファミリーマート付近）',
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
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://jpc-sports.com/'
  },
  {
    id: 'studio-gym-002',
    name: '愛媛パールズ体操スクール',
    description: '松山市内に複数展開（余戸、道後など）。幼児から専門的なアクロバットやバク転まで幅広いコースが魅力です。',
    category: 'Gymnastics',
    city: '松山市',
    area: '余戸・道後など',
    access: '詳細は各教室の情報を確認',
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
    area: '松山市内',
    access: '詳細は公式情報を確認',
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
    access: 'フジグラン松山近く',
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
    link: 'https://ishihara-sc.com/'
  },
  {
    id: 'studio-swim-002',
    name: '南海ドルフィンクラブ 朝生田',
    description: '30年以上の歴史と5万人以上の指導実績を持つスイミングクラブ。生後3ヶ月のベビーコースから大人まで通えます。',
    category: 'Swimming',
    city: '松山市',
    area: '朝生田周辺',
    access: '南町駅 徒歩圏内',
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
    imageUrl: 'https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://nankai-dolphin.com/'
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
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
    name: 'VIVO DANCE STUDIO 西条校',
    description: '西条市で人気のダンススタジオ。元気なキッズから大人まで、ヒップホップを中心に楽しく汗を流しています。',
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
    link: 'https://search.yahoo.co.jp/search?p=VIVO+DANCE+STUDIO+西条'
  },
  {
    id: 'studio-uwa-001',
    name: '宇和島スイミングクラブ',
    description: '宇和島市内の老舗スイミングスクール。子供の体力づくりから大人の健康維持まで、地域に根差した指導を行います。',
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
    link: 'https://search.yahoo.co.jp/search?p=宇和島スイミングクラブ'
  },

  // ================= 料理教室（松山市） =================
  {
    id: 'studio-cooking-001',
    name: 'ABC Cooking Studio いよてつ高島屋スタジオ',
    description: '松山市駅直結の高島屋内にある大手料理教室。初心者から本格的な料理、パン作り、ケーキ作りまで豊富なコースが魅力です。',
    category: 'Cooking',
    city: '松山市',
    area: '松山市駅周辺',
    access: '松山市駅 直結（いよてつ高島屋8F）',
    genres: ['Cooking', 'Baking', 'Cake'],
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
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.abc-cooking.co.jp/'
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
    area: '福音寺周辺',
    access: '福音寺駅 徒歩圏内（イヨテツスポーツセンター付近）',
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
    access: '本町六丁目駅周辺',
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

  // ================= アート・絵画教室（松山市） =================
  {
    id: 'studio-art-001',
    name: '図工のひろば イロトリドリ',
    description: '松山市のまちなかにある絵画造形教室。作品の完成度だけでなく、子どもたちのアイデアや制作過程を重視しています。',
    category: 'Art',
    city: '松山市',
    area: '松山市内',
    access: '詳細は公式サイトを確認',
    genres: ['Art', 'Painting', 'Kids'],
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
    link: 'https://irotoridori-art.crayonsite.com/'
  },
  {
    id: 'studio-art-002',
    name: '青い鳥造形絵画教室',
    description: '1975年創立の実績ある教室。幼児から小学生を中心に、大人向けの教室も開講しており表現する楽しさを学べます。',
    category: 'Art',
    city: '松山市',
    area: '松山市内',
    access: '詳細は公式サイトを確認',
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
  }
];

window.studiosData = studios;

