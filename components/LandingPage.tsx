// components/LandingPage.tsx
'use client';

<<<<<<< HEAD
import { useTheme } from '@/components/ThemeProvider';
import { isRamadanPeriod } from '@/utils/themeUtils';
import RamadanDashboard from '@/components/RamadanDashboard';
import NotificationButton from '@/components/NotificationButton';
=======
import RamadanDashboard from '../components/RamadanDashboard'; 
>>>>>>> 08d7e4342679625329fe4fb8170fff9facac125c
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Cpu, Zap, Monitor, Globe, Shield,
  Settings, X, Check, Languages, Palette,
  ChevronRight, Info, Heart, Bell, Calendar, Cookie,
  Loader2, AlertCircle, Clock, Moon, Star
} from 'lucide-react';

import { ASSETS } from '@/lib/assets';

type Language = 'en' | 'id' | 'ja' | 'ko' | 'fr' | 'es' | 'de' | 'zh' | 'ru' | 'ar' | 'ms';

const translations: Record<Language, any> = {
  en: {
    heroTitle: "PLAY ANYWHERE.",
    heroSub: "ZERO LAG.",
    heroDesc: "Transform any device into a high-end gaming rig. Stream your favorite games at 4K 120FPS with ultra-low latency.",
    getStarted: "Get Started",
    startTrial: "Start Free Trial",
    viewDemo: "View Demo",
    features: "Features",
    performance: "Performance",
    pricing: "Pricing",
    perMonth: "/month",
    updates: "Updates",
    settings: "Settings",
    theme: "Theme",
    language: "Language",
    cookieText: "We use cookies to enhance your gaming experience.",
    accept: "Accept",
    poweredBy: "Powered by kaljamsut",
    featureTitle: "ENGINEERED FOR SPEED.",
    featureDesc: "Our proprietary protocol ensures that every input is registered instantly, giving you the competitive edge.",
    choosePower: "CHOOSE YOUR PACKAGE.",
    currencySymbol: "$",
    currencyCode: "USD",
    plans: [
      { name: "Basic", price: "0" },
      { name: "Pro", price: "19" },
      { name: "Elite", price: "39" }
    ],
    plansDesc: "Flexible plans for every type of gamer.",
    latency: "Latency",
    resolution: "Resolution",
    frameRate: "Frame Rate",
    globalNodes: "Global Nodes",
    latestUpdates: "LATEST UPDATES",
    footerDesc: "The world's most advanced cloud gaming platform. Experience the future of interactive entertainment today.",
    platform: "Platform",
    company: "Company",
    support: "Support",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookieSettings: "Cookie Settings",
    save: "Save Changes",
    light: "Light",
    dark: "Dark",
    ramadan: "Ramadan",
  },
  ms: {
    heroTitle: "MAIN DI MANA SAJA.",
    heroSub: "TANPA LAG.",
    heroDesc: "Ubah mana-mana peranti menjadi rig permainan kelas tinggi. Strim permainan kegemaran anda pada 4K 120FPS dengan latensi ultra-rendah.",
    getStarted: "Mula Sekarang",
    startTrial: "Mula Percubaan Percuma",
    viewDemo: "Lihat Demo",
    features: "Ciri-ciri",
    performance: "Prestasi",
    pricing: "Harga",
    perMonth: "/bulan",
    updates: "Kemas Kini",
    settings: "Tetapan",
    theme: "Tema",
    language: "Bahasa",
    cookieText: "Kami menggunakan kuki untuk meningkatkan pengalaman permainan anda.",
    accept: "Terima",
    poweredBy: "Dikuasakan oleh kaljamsut",
    featureTitle: "DIREKA UNTUK KELAJUAN.",
    featureDesc: "Protokol proprietari kami memastikan setiap input didaftarkan serta-merta, memberikan anda kelebihan kompetitif.",
    choosePower: "PILIH PAKEJ ANDA.",
    currencySymbol: "RM",
    currencyCode: "MYR",
    plans: [
      { name: "Basic", price: "0" },
      { name: "Pro", price: "89" },
      { name: "Elite", price: "179" }
    ],
    plansDesc: "Pelan fleksibel untuk setiap jenis pemain.",
    latency: "Latensi",
    resolution: "Resolusi",
    frameRate: "Kadar Bingkai",
    globalNodes: "Nod Global",
    latestUpdates: "KEMAS KINI TERKINI",
    footerDesc: "Platform permainan awan paling maju di dunia. Alami masa depan hiburan interaktif hari ini.",
    platform: "Platform",
    company: "Syarikat",
    support: "Sokongan",
    privacy: "Dasar Privasi",
    terms: "Syarat Perkhidmatan",
    cookieSettings: "Tetapan Kuki",
    save: "Simpan Perubahan",
    light: "Cerah",
    dark: "Gelap",
    ramadan: "Ramadan",
  },
  id: {
    heroTitle: "MAIN DI MANA SAJA.",
    heroSub: "TANPA LAG.",
    heroDesc: "Ubah perangkat apa pun menjadi rig gaming kelas atas. Streaming game favorit Anda pada 4K 120FPS dengan latensi ultra-rendah.",
    getStarted: "Mulai Sekarang",
    startTrial: "Mulai Uji Coba Gratis",
    viewDemo: "Lihat Demo",
    features: "Fitur",
    performance: "Performa",
    pricing: "Harga",
    perMonth: "/bulan",
    updates: "Pembaruan",
    settings: "Pengaturan",
    theme: "Tema",
    language: "Bahasa",
    cookieText: "Kami menggunakan cookie untuk meningkatkan pengalaman bermain game Anda.",
    accept: "Terima",
    poweredBy: "Didukung oleh kaljamsut",
    featureTitle: "DIRANCANG UNTUK KECEPATAN.",
    featureDesc: "Protokol milik kami memastikan bahwa setiap input terdaftar secara instan, memberi Anda keunggulan kompetitif.",
    choosePower: "PILIH PAKET ANDA.",
    currencySymbol: "Rp",
    currencyCode: "IDR",
    plans: [
      { name: "Basic", price: "0" },
      { name: "Pro", price: "299k" },
      { name: "Elite", price: "599k" }
    ],
    plansDesc: "Paket fleksibel untuk setiap jenis gamer.",
    latency: "Latensi",
    resolution: "Resolusi",
    frameRate: "Frame Rate",
    globalNodes: "Node Global",
    latestUpdates: "PEMBARUAN TERBARU",
    footerDesc: "Platform cloud gaming tercanggih di dunia. Rasakan masa depan hiburan interaktif hari ini.",
    platform: "Platform",
    company: "Perusahaan",
    support: "Dukungan",
    privacy: "Kebijakan Privasi",
    terms: "Ketentuan Layanan",
    cookieSettings: "Pengaturan Cookie",
    save: "Simpan Perubahan",
    light: "Terang",
    dark: "Gelap",
    ramadan: "Ramadan",
  },
  ja: {
    heroTitle: "どこでもプレイ。",
    heroSub: "ラグなし。",
    heroDesc: "あらゆるデバイスをハイエンドのゲーミングリグに変えます。4K 120FPSの超低遅延でお気に入りのゲームをストリーミング。",
    getStarted: "始める",
    startTrial: "無料トライアルを開始",
    viewDemo: "デモを見る",
    features: "機能",
    performance: "パフォーマンス",
    pricing: "料金",
    perMonth: "/月",
    updates: "アップデート",
    settings: "設定",
    theme: "テーマ",
    language: "言語",
    cookieText: "ゲーム体験を向上させるためにクッキーを使用しています。",
    accept: "同意する",
    poweredBy: "kaljamsut提供",
    featureTitle: "スピードのために設計。",
    featureDesc: "独自のプロトコルにより、すべての入力が即座に登録され、競争上の優位性が得られます。",
    choosePower: "パワーを選ぶ。",
    plans: [
      { name: "ベーシック", price: "0" },
      { name: "プロ", price: "2900" },
      { name: "エリート", price: "5900" }
    ],
    plansDesc: "あらゆるタイプのゲーマー向けの柔軟なプラン。",
    latency: "遅延",
    resolution: "解像度",
    frameRate: "フレームレート",
    globalNodes: "グローバルノード",
    latestUpdates: "最新のアップデート",
    footerDesc: "世界で最も先進的なクラウドゲーミングプラットフォーム。インタラクティブエンターテインメントの未来を今すぐ体験してください。",
    platform: "プラットフォーム",
    company: "会社",
    support: "サポート",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    cookieSettings: "クッキー設定",
    save: "変更を保存",
    light: "ライト",
    dark: "ダーク",
    ramadan: "ラマダン",
  },
  ko: {
    heroTitle: "어디서나 플레이.",
    heroSub: "지연 없음.",
    heroDesc: "모든 장치를 고사양 게이밍 PC로 변신시키세요. 초저지연 4K 120FPS로 좋아하는 게임을 스트리밍하세요.",
    getStarted: "시작하기",
    startTrial: "무료 체험 시작",
    viewDemo: "데모 보기",
    features: "기능",
    performance: "성능",
    pricing: "가격",
    perMonth: "/월",
    updates: "업데이트",
    settings: "설정",
    theme: "테마",
    language: "언어",
    cookieText: "게임 경험을 향상시키기 위해 쿠키를 사용합니다.",
    accept: "수락",
    poweredBy: "kaljamsut 제공",
    featureTitle: "속도를 위한 설계.",
    featureDesc: "당사의 독점 프로토콜은 모든 입력이 즉시 등록되도록 보장하여 경쟁 우위를 제공합니다.",
    choosePower: "파워를 선택하세요.",
    plans: [
      { name: "베이직", price: "0" },
      { name: "프로", price: "25,000" },
      { name: "엘리트", price: "49,000" }
    ],
    plansDesc: "모든 유형의 게이머를 위한 유연한 요금제.",
    latency: "지연 시간",
    resolution: "해상도",
    frameRate: "프레임 속도",
    globalNodes: "글로벌 노드",
    latestUpdates: "최신 업데이트",
    footerDesc: "세계에서 가장 진보된 클라우드 게이밍 플랫폼. 오늘 인터랙티브 엔터테인먼트의 미래를 경험하십시오.",
    platform: "플랫폼",
    company: "회사",
    support: "지원",
    privacy: "개인정보 처리방침",
    terms: "서비스 약관",
    cookieSettings: "쿠키 설정",
    save: "변경 사항 저장",
    light: "라이트",
    dark: "다크",
    ramadan: "라마단",
  },
  fr: {
    heroTitle: "JOUEZ PARTOUT.",
    heroSub: "ZÉRO LATENCE.",
    heroDesc: "Transformez n'importe quel appareil en une machine de jeu haut de gamme. Diffusez vos jeux préférés en 4K 120FPS avec une latence ultra-faible.",
    getStarted: "Commencer",
    startTrial: "Essai Gratuit",
    viewDemo: "Voir la Démo",
    features: "Fonctionnalités",
    performance: "Performance",
    pricing: "Tarifs",
    perMonth: "/mois",
    updates: "Mises à jour",
    settings: "Paramètres",
    theme: "Thème",
    language: "Langue",
    cookieText: "Nous utilisons des cookies pour améliorer votre expérience de jeu.",
    accept: "Accepter",
    poweredBy: "Propulsé par kaljamsut",
    featureTitle: "CONÇU POUR LA VITESSE.",
    featureDesc: "Notre protocole propriétaire garantit que chaque entrée est enregistrée instantanément, vous donnant l'avantage compétitif.",
    choosePower: "CHOISISSEZ VOTRE PUISSANCE.",
    plans: [
      { name: "Basique", price: "0" },
      { name: "Pro", price: "19" },
      { name: "Élite", price: "39" }
    ],
    plansDesc: "Des forfaits flexibles pour chaque type de joueur.",
    latency: "Latence",
    resolution: "Résolution",
    frameRate: "Images/s",
    globalNodes: "Nœuds Mondiaux",
    latestUpdates: "DERNIÈRES MISES À JOUR",
    footerDesc: "La plateforme de cloud gaming la plus avancée au monde. Découvrez l'avenir du divertissement interactif dès aujourd'hui.",
    platform: "Plateforme",
    company: "Entreprise",
    support: "Support",
    privacy: "Confidentialité",
    terms: "Conditions",
    cookieSettings: "Cookies",
    save: "Enregistrer",
    light: "Clair",
    dark: "Sombre",
    ramadan: "Ramadan",
  },
  es: {
    heroTitle: "JUEGA DONDE SEA.",
    heroSub: "CERO LAG.",
    heroDesc: "Transforma cualquier dispositivo en una plataforma de juegos de alta gama. Transmite tus juegos favoritos a 4K 120FPS con latencia ultra baja.",
    getStarted: "Empezar",
    startTrial: "Prueba Gratis",
    viewDemo: "Ver Demo",
    features: "Funciones",
    performance: "Rendimiento",
    pricing: "Precios",
    perMonth: "/mes",
    updates: "Actualizaciones",
    settings: "Ajustes",
    theme: "Tema",
    language: "Idioma",
    cookieText: "Usamos cookies para mejorar tu experiencia de juego.",
    accept: "Aceptar",
    poweredBy: "Desarrollado por kaljamsut",
    featureTitle: "DISEÑADO PARA LA VELOCIDAD.",
    featureDesc: "Nuestro protocolo patentado garantiza que cada entrada se registre instantáneamente, dándote la ventaja competitiva.",
    choosePower: "ELIGE TU POTENCIA.",
    plans: [
      { name: "Básico", price: "0" },
      { name: "Pro", price: "19" },
      { name: "Elite", price: "39" }
    ],
    plansDesc: "Planes flexibles para cada tipo de jugador.",
    latency: "Latencia",
    resolution: "Resolución",
    frameRate: "FPS",
    globalNodes: "Nodos Globales",
    latestUpdates: "ÚLTIMAS ACTUALIZACIONES",
    footerDesc: "La plataforma de juegos en la nube más avanzada del mundo. Experimenta el futuro del entretenimiento interactivo hoy.",
    platform: "Plataforma",
    company: "Compañía",
    support: "Soporte",
    privacy: "Privacidad",
    terms: "Términos",
    cookieSettings: "Cookies",
    save: "Guardar",
    light: "Claro",
    dark: "Oscuro",
    ramadan: "Ramadán",
  },
  de: {
    heroTitle: "ÜBERALL SPIELEN.",
    heroSub: "KEIN LAG.",
    heroDesc: "Verwandeln Sie jedes Gerät in einen High-End-Gaming-PC. Streamen Sie Ihre Lieblingsspiele in 4K 120FPS mit extrem niedriger Latenz.",
    getStarted: "Loslegen",
    startTrial: "Kostenlos testen",
    viewDemo: "Demo ansehen",
    features: "Funktionen",
    performance: "Leistung",
    pricing: "Preise",
    perMonth: "/Monat",
    updates: "Updates",
    settings: "Einstellungen",
    theme: "Design",
    language: "Sprache",
    cookieText: "Wir verwenden Cookies, um Ihr Spielerlebnis zu verbessern.",
    accept: "Akzeptieren",
    poweredBy: "Unterstützt von kaljamsut",
    featureTitle: "AUF GESCHWINDIGKEIT AUSGELEGT.",
    featureDesc: "Unser proprietäres Protokoll stellt sicher, dass jede Eingabe sofort registriert wird, was Ihnen den Wettbewerbsvorteil verschafft.",
    choosePower: "WÄHLEN SIE IHRE POWER.",
    plans: [
      { name: "Basis", price: "0" },
      { name: "Pro", price: "19" },
      { name: "Elite", price: "39" }
    ],
    plansDesc: "Flexible Pläne für jeden Spielertyp.",
    latency: "Latenz",
    resolution: "Auflösung",
    frameRate: "Bildrate",
    globalNodes: "Globale Knoten",
    latestUpdates: "NEUESTE UPDATES",
    footerDesc: "Die weltweit fortschrittlichste Cloud-Gaming-Plattform. Erleben Sie noch heute die Zukunft des interaktiven Entertainments.",
    platform: "Plattform",
    company: "Unternehmen",
    support: "Support",
    privacy: "Datenschutz",
    terms: "Bedingungen",
    cookieSettings: "Cookies",
    save: "Speichern",
    light: "Hell",
    dark: "Dunkel",
    ramadan: "Ramadan",
  },
  zh: {
    heroTitle: "随处畅玩。",
    heroSub: "零延迟。",
    heroDesc: "将任何设备转变为高端游戏机。以超低延迟流式传输 4K 120FPS 的您喜爱的游戏。",
    getStarted: "开始使用",
    startTrial: "开始免费试用",
    viewDemo: "查看演示",
    features: "功能",
    performance: "性能",
    pricing: "价格",
    perMonth: "/月",
    updates: "更新",
    settings: "设置",
    theme: "主题",
    language: "语言",
    cookieText: "我们使用 Cookie 来增强您的游戏体验。",
    accept: "接受",
    poweredBy: "由 kaljamsut 提供支持",
    featureTitle: "为速度而生。",
    featureDesc: "我们的专有协议确保每一次输入都能立即注册，为您提供竞争优势。",
    choosePower: "选择您的力量。",
    plans: [
      { name: "基础版", price: "0" },
      { name: "专业版", price: "128" },
      { name: "精英版", price: "258" }
    ],
    plansDesc: "适合各类玩家的灵活计划。",
    latency: "延迟",
    resolution: "分辨率",
    frameRate: "帧率",
    globalNodes: "全球节点",
    latestUpdates: "最新更新",
    footerDesc: "全球最先进的云游戏平台。立即体验互动娱乐的未来。",
    platform: "平台",
    company: "公司",
    support: "支持",
    privacy: "隐私政策",
    terms: "服务条款",
    cookieSettings: "Cookie 设置",
    save: "保存更改",
    light: "浅色",
    dark: "深色",
    ramadan: "斋月",
  },
  ru: {
    heroTitle: "ИГРАЙТЕ ВЕЗДЕ.",
    heroSub: "БЕЗ ЗАДЕРЖЕК.",
    heroDesc: "Превратите любое устройство в мощную игровую станцию. Транслируйте любимые игры в 4K 120FPS с ультранизкой задержкой.",
    getStarted: "Начать",
    startTrial: "Бесплатная версия",
    viewDemo: "Демо",
    features: "Функции",
    performance: "Производительность",
    pricing: "Цены",
    perMonth: "/мес",
    updates: "Обновления",
    settings: "Настройки",
    theme: "Тема",
    language: "Язык",
    cookieText: "Мы используем файлы cookie для улучшения вашего игрового опыта.",
    accept: "Принять",
    poweredBy: "При поддержке kaljamsut",
    featureTitle: "СОЗДАНО ДЛЯ СКОРОСТИ.",
    featureDesc: "Наш собственный протокол гарантирует мгновенную регистрацию каждого ввода, обеспечивая вам преимущество.",
    choosePower: "ВЫБЕРИТЕ МОЩНОСТЬ.",
    plans: [
      { name: "Базовый", price: "0" },
      { name: "Про", price: "1490" },
      { name: "Элит", price: "2990" }
    ],
    plansDesc: "Гибкие тарифы для любого типа игроков.",
    latency: "Задержка",
    resolution: "Разрешение",
    frameRate: "Частота кадров",
    globalNodes: "Глобальные узлы",
    latestUpdates: "ПОСЛЕДНИЕ ОБНОВЛЕНИЯ",
    footerDesc: "Самая продвинутая в мире платформа для облачного гейминга. Испытайте будущее интерактивных развлечений уже сегодня.",
    platform: "Платформа",
    company: "Компания",
    support: "Поддержка",
    privacy: "Конфиденциальность",
    terms: "Условия",
    cookieSettings: "Cookie",
    save: "Сохранить",
    light: "Светлая",
    dark: "Темная",
    ramadan: "Рамадан",
  },
  ar: {
    heroTitle: "العب في أي مكان.",
    heroSub: "بدون تأخير.",
    heroDesc: "حول أي جهاز إلى منصة ألعاب متطورة. قم ببث ألعابك المفضلة بدقة 4K و120 إطارًا في الثانية مع زمن وصول منخفض للغاية.",
    getStarted: "ابدأ الآن",
    startTrial: "ابدأ التجربة المجانية",
    viewDemo: "عرض العرض التوضيحي",
    features: "الميزات",
    performance: "الأداء",
    pricing: "الأسعار",
    perMonth: "/شهر",
    updates: "التحديثات",
    settings: "الإعدادات",
    theme: "المظهر",
    language: "اللغة",
    cookieText: "نحن نستخدم ملفات تعريف الارتباط لتحسين تجربة الألعاب الخاصة بك.",
    accept: "قبول",
    poweredBy: "بدعم من kaljamsut",
    featureTitle: "مصمم للسرعة.",
    featureDesc: "يضمن بروتوكولنا الخاص تسجيل كل إدخال على الفور، مما يمنحك ميزة تنافسية.",
    choosePower: "اختر قوتك.",
    plans: [
      { name: "أساسي", price: "0" },
      { name: "برو", price: "75" },
      { name: "إيليت", price: "150" }
    ],
    plansDesc: "خطط مرنة لكل نوع من اللاعبين.",
    latency: "زمن الوصول",
    resolution: "الدقة",
    frameRate: "معدل الإطارات",
    globalNodes: "العقد العالمية",
    latestUpdates: "أحدث التحديثات",
    footerDesc: "منصة الألعاب السحابية الأكثر تقدماً في العالم. جرب مستقبل الترفيه التفاعلي اليوم.",
    platform: "المنصة",
    company: "الشركة",
    support: "الدعم",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    cookieSettings: "إعدادات ملفات الارتباط",
    save: "حفظ التغييرات",
    light: "فاتح",
    dark: "داكن",
    ramadan: "رمضان",
  },
};

const Skeleton = ({ className }: { className?: string }) => (
  <span className={`animate-shimmer bg-black/5 dark:bg-white/5 rounded-2xl inline-block ${className}`} />
);

interface PrayerTime {
  name: string;
  time: string;
}

export default function LandingPage() {
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useState<Language>('id');
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([
    { name: 'Imsak', time: '04:32' },
    { name: 'Subuh', time: '04:42' },
    { name: 'Dzuhur', time: '12:05' },
    { name: 'Ashar', time: '15:12' },
    { name: 'Maghrib', time: '18:08' },
    { name: 'Isya', time: '19:17' }
  ]);
  const [loadingPrayer, setLoadingPrayer] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('xy-theme');
    if (!savedTheme) {
      const autoTheme = isRamadanPeriod() ? 'ramadan' : 'light';
      setTheme(autoTheme);
    }
  }, [setTheme]);

  useEffect(() => {
    localStorage.setItem('xy-lang', lang);
  }, [lang]);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch('https://api.aladhan.com/v1/timingsByCity?city=Jakarta&country=Indonesia&method=11');
        const data = await response.json();
        if (data.code === 200) {
          const timings = data.data.timings;
          const mapped: PrayerTime[] = [
            { name: 'Imsak', time: timings.Imsak },
            { name: 'Subuh', time: timings.Fajr },
            { name: 'Dzuhur', time: timings.Dhuhr },
            { name: 'Ashar', time: timings.Asr },
            { name: 'Maghrib', time: timings.Maghrib },
            { name: 'Isya', time: timings.Isha }
          ];
          setPrayerTimes(mapped);
        }
      } catch (error) {
        console.error('Gagal mengambil jadwal sholat:', error);
      } finally {
        setLoadingPrayer(false);
      }
    };
    fetchPrayerTimes();
  }, []);

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const [isValidatingOpen, setIsValidatingOpen] = useState(false);
  const [showRamadanGreeting, setShowRamadanGreeting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSkeletonPhase, setIsSkeletonPhase] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const t = translations[lang];

  const playNotificationSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log("Audio play blocked:", e));
    }
  };

  useEffect(() => {
    audioRef.current = new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_c8c8a73456.mp3');

    const hasLoaded = sessionStorage.getItem('xy-has-loaded');
    if (hasLoaded) {
      setTimeout(() => {
        setIsLoading(false);
        setIsSkeletonPhase(false);
      }, 0);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsSkeletonPhase(true);
        sessionStorage.setItem('xy-has-loaded', 'true');
        setTimeout(() => setIsSkeletonPhase(false), 1500);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      const timer = setTimeout(() => {
        setShowCookies(true);
        playNotificationSound();
      }, 2000);
      return () => clearTimeout(timer);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (theme === 'ramadan') {
      const hasSeenGreeting = localStorage.getItem('xy-ramadan-greeting');
      if (!hasSeenGreeting) {
        setTimeout(() => {
          setShowRamadanGreeting(true);
          playNotificationSound();
        }, 100);
        localStorage.setItem('xy-ramadan-greeting', 'true');
      }
    }
  }, [theme]);

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowCookies(false);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/id/870/200/300?grayscale&blur=2" 
            alt="Loading Background" 
            fill 
            className="object-cover opacity-50 dark:opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-white/40 dark:bg-black/60 backdrop-blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          {theme === 'ramadan' && (
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#f3e5ab]/5 rounded-full blur-[100px] animate-pulse" />
          )}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-40 h-40 mb-12"
          >
            <Image 
              src={theme === 'ramadan' ? ASSETS.images.loading : ASSETS.icons.logo} 
              alt="Loading..." 
              fill 
              className={`object-contain ${theme === 'ramadan' ? 'animate-pulse brightness-150' : ''}`}
              unoptimized
            />
            {theme === 'ramadan' && (
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-[#f3e5ab]/20 rounded-full"
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className={`flex items-center gap-3 text-xs font-black uppercase tracking-[0.4em] ${theme === 'ramadan' ? 'text-[#f3e5ab] opacity-80' : 'opacity-40'}`}>
              <Loader2 className={`w-4 h-4 animate-spin ${theme === 'ramadan' ? 'text-[#f3e5ab]' : ''}`} />
              {theme === 'ramadan' ? 'Mempersiapkan XYCLOUD Ramadan' : 'Initializing XYCLOUD'}
            </div>
            
            <div className="w-48 h-[2px] bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className={`w-1/2 h-full ${theme === 'ramadan' ? 'bg-[#f3e5ab]' : 'bg-black dark:bg-white'}`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative min-h-screen overflow-hidden selection:bg-black selection:text-white ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Background Effects */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-10" />
      
      {/* Ramadan Floating Elements */}
      <AnimatePresence>
        {theme === 'ramadan' && (
          <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
            {[
              { t: 10, l: 20, d: 4, del: 0 },
              { t: 30, l: 80, d: 5, del: 1 },
              { t: 50, l: 10, d: 6, del: 2 },
              { t: 70, l: 90, d: 4, del: 3 },
              { t: 20, l: 50, d: 5, del: 4 },
              { t: 80, l: 30, d: 6, del: 0.5 },
              { t: 40, l: 40, d: 4, del: 1.5 },
              { t: 60, l: 70, d: 5, del: 2.5 },
              { t: 90, l: 60, d: 6, del: 3.5 },
              { t: 15, l: 75, d: 4, del: 4.5 },
              { t: 85, l: 15, d: 5, del: 0.2 },
              { t: 45, l: 25, d: 6, del: 1.2 }
            ].map((star, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: [0.2, 0.5, 0.2],
                  y: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: star.d, 
                  repeat: Infinity,
                  delay: star.del
                }}
                className="absolute text-[#f3e5ab]/30"
                style={{
                  top: `${star.t}%`,
                  left: `${star.l}%`,
                }}
              >
                <Star className="w-4 h-4 fill-current" />
              </motion.div>
            ))}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.1, scale: 1 }}
              className="absolute top-20 right-20 w-64 h-64 border border-[#f3e5ab] rounded-full blur-3xl"
            />
          </div>
        )}
      </AnimatePresence>
      
      {/* Ramadan Dashboard */}
      {theme === 'ramadan' && <RamadanDashboard prayerTimes={prayerTimes} />}

      {/* Ramadan Lanterns */}
      {theme === 'ramadan' && (
        <div className="fixed top-0 left-0 right-0 pointer-events-none z-40 flex justify-between px-12 md:px-24">
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="w-1 h-24 bg-gradient-to-b from-[#f3e5ab]/40 to-transparent mx-auto" />
            <div className="w-12 h-16 bg-[#f3e5ab]/20 border border-[#f3e5ab]/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <div className="w-6 h-10 border-2 border-[#f3e5ab]/40 rounded-full flex items-center justify-center">
                <div className="w-2 h-4 bg-[#f3e5ab] rounded-full animate-pulse blur-[2px]" />
              </div>
            </div>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 30, 0], rotate: [5, -5, 5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="relative"
          >
            <div className="w-1 h-32 bg-gradient-to-b from-[#f3e5ab]/40 to-transparent mx-auto" />
            <div className="w-10 h-14 bg-[#f3e5ab]/20 border border-[#f3e5ab]/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <div className="w-4 h-8 border-2 border-[#f3e5ab]/40 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-3 bg-[#f3e5ab] rounded-full animate-pulse blur-[1px]" />
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
        <div className={`max-w-7xl mx-auto flex items-center justify-between glass rounded-3xl px-8 py-3 transition-all duration-500 ${scrolled ? 'shadow-xl' : ''}`}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 relative">
              <Image 
                src={ASSETS.icons.logo} 
                alt="XYCLOUD Logo" 
                fill 
                className="dark:invert transition-all"
              />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">XYCLOUD</span>
          </motion.div>

          <div className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest opacity-60">
            {['features', 'performance', 'pricing'].map((item) => (
              <a key={item} href={`#${item}`} className="hover:opacity-100 transition-opacity relative group">
                {t[item as keyof typeof t]}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                  theme === 'ramadan' ? 'bg-[#f3e5ab]' : 'bg-black dark:bg-white'
                }`} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 relative" ref={settingsRef}>
            <button 
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className={`p-2 rounded-xl transition-colors opacity-60 hover:opacity-100 ${
                theme === 'ramadan' 
                  ? 'hover:bg-[#f3e5ab]/10' 
                  : 'hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <Settings className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl opacity-60 hover:opacity-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <button className={`hidden lg:block px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all active:scale-95 ${
              theme === 'ramadan'
                ? 'bg-[#f3e5ab] text-[#0a1a10]'
                : 'bg-black text-white dark:bg-white dark:text-black'
            }`}>
              {t.getStarted}
            </button>
            
            <AnimatePresence>
              {isSettingsOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-4 w-72 glass rounded-3xl p-6 shadow-2xl z-[100] border border-black/5 dark:border-white/5"
                >
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4 opacity-40">
                        <Palette className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest">{t.theme}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { id: 'light', name: t.light, icon: <Palette className="w-3 h-3" /> },
                          { id: 'dark', name: t.dark, icon: <Moon className="w-3 h-3" /> },
                          { id: 'ramadan', name: t.ramadan, icon: <Star className="w-3 h-3" /> }
                        ].map((item) => (
                          <button 
                            key={item.id}
                            onClick={() => setTheme(item.id as any)}
                            className={`p-3 rounded-2xl border transition-all flex items-center gap-3 ${
                              theme === item.id 
                                ? theme === 'ramadan' 
                                  ? 'border-[#f3e5ab] bg-[#f3e5ab]/10 text-[#f3e5ab]' 
                                  : 'border-black dark:border-white bg-black/5 dark:bg-white/5'
                                : 'border-transparent hover:bg-black/5 dark:hover:bg-white/5'
                            }`}
                          >
                            <div className="opacity-40">{item.icon}</div>
                            <span className="text-[10px] font-bold uppercase tracking-widest">{item.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-4 opacity-40">
                        <Languages className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest">{t.language}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                        {Object.keys(translations).map((langCode) => (
                          <button 
                            key={langCode}
                            onClick={() => setLang(langCode as Language)}
                            className={`px-3 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                              lang === langCode 
                                ? theme === 'ramadan'
                                  ? 'bg-[#f3e5ab] text-[#0a1a10]'
                                  : 'bg-black text-white dark:bg-white dark:text-black'
                                : theme === 'ramadan'
                                  ? 'hover:bg-[#f3e5ab]/10 opacity-60'
                                  : 'hover:bg-black/5 dark:hover:bg-white/5 opacity-60'
                            }`}
                          >
                            {langCode}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-0 right-0 z-40 lg:hidden"
          >
            <div className="glass mx-4 rounded-3xl p-6 shadow-2xl border border-black/5 dark:border-white/5">
              <div className="flex flex-col gap-4">
                {['features', 'performance', 'pricing'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-bold uppercase tracking-widest opacity-60 hover:opacity-100 py-3 px-4 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  >
                    {t[item as keyof typeof t]}
                  </a>
                ))}
                <button className={`w-full mt-2 py-4 rounded-xl text-xs font-black uppercase tracking-widest ${
                  theme === 'ramadan'
                    ? 'bg-[#f3e5ab] text-[#0a1a10]'
                    : 'bg-black text-white dark:bg-white dark:text-black'
                }`}>
                  {t.getStarted}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-6 z-10">
        {theme === 'ramadan' && (
          <div className="absolute top-20 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
            <Moon className="w-64 h-64 text-[#f3e5ab] rotate-12" />
          </div>
        )}
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className={`font-display text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] uppercase ${theme === 'ramadan' ? 'font-serif' : ''}`}>
              {isSkeletonPhase ? (
                <div className="flex flex-col items-center gap-4">
                  <Skeleton className="w-3/4 h-20 md:h-32" />
                  <Skeleton className="w-1/2 h-20 md:h-32 opacity-20" />
                </div>
              ) : (
                <>
                  {t.heroTitle}<br />
                  <span className="opacity-20 italic">{t.heroSub}</span>
                </>
              )}
            </h1>
            <div className="max-w-2xl mx-auto mb-12">
              {isSkeletonPhase ? (
                <div className="space-y-3">
                  <Skeleton className="w-full h-4" />
                  <Skeleton className="w-5/6 h-4 mx-auto" />
                </div>
              ) : (
                <p className="text-lg md:text-xl opacity-50 leading-relaxed font-light">
                  {t.heroDesc}
                </p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsValidatingOpen(true)}
                className={`w-full sm:w-auto px-10 py-5 font-black rounded-2xl transition-all shadow-2xl uppercase tracking-widest text-xs animate-shimmer ${
                  theme === 'ramadan'
                    ? 'bg-[#f3e5ab] text-[#0a1a10]'
                    : 'bg-black text-white dark:bg-white dark:text-black'
                }`}
              >
                {t.startTrial}
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsComingSoonOpen(true)}
                className={`w-full sm:w-auto px-10 py-5 glass font-black rounded-2xl transition-all uppercase tracking-widest text-xs ${
                  theme === 'ramadan'
                    ? 'hover:bg-[#f3e5ab]/10'
                    : 'hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {t.viewDemo}
              </motion.button>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center justify-center gap-4 opacity-30"
            >
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-black bg-black/10 dark:bg-white/10 overflow-hidden">
                    <Image src={`https://picsum.photos/seed/user${i}/32/32`} alt="User" width={32} height={32} />
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                12.4k Players Online
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image/Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-24 relative group"
          >
            <div className="relative glass rounded-[3rem] p-4 border-black/5 dark:border-white/5 shadow-2xl overflow-hidden aspect-video max-w-5xl mx-auto group-hover:border-black/20 dark:group-hover:border-white/20 transition-colors">
              <Image 
                src={ASSETS.images.mockup} 
                alt="XYCLOUD Interface" 
                fill
                className="w-full h-full object-cover rounded-[2.5rem] opacity-80 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="performance" className="py-24 px-6 border-y border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: t.latency, value: '< 5ms', icon: <Zap className="w-4 h-4" /> },
            { label: t.resolution, value: '4K HDR', icon: <Monitor className="w-4 h-4" /> },
            { label: t.frameRate, value: '120 FPS', icon: <Cpu className="w-4 h-4" /> },
            { label: t.globalNodes, value: '50+', icon: <Globe className="w-4 h-4" /> },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className={`p-2 rounded-lg opacity-40 group-hover:opacity-100 transition-opacity ${
                  theme === 'ramadan' ? 'bg-[#f3e5ab]/10' : 'bg-black/5 dark:bg-white/5'
                }`}>
                  {stat.icon}
                </div>
              </div>
              <div className="font-display text-4xl md:text-5xl font-black mb-2 tracking-tighter">
                {isSkeletonPhase ? <Skeleton className="w-24 h-12 mx-auto" /> : stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] opacity-30 font-black">
                {isSkeletonPhase ? <Skeleton className="w-16 h-3 mx-auto mt-2" /> : stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bento Features Section */}
      <section className="py-40 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 md:row-span-2 glass rounded-[3rem] p-12 flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-8 ${
                  theme === 'ramadan'
                    ? 'bg-[#f3e5ab] text-[#0a1a10]'
                    : 'bg-black text-white dark:bg-white dark:text-black'
                }`}>
                  {isSkeletonPhase ? <Loader2 className="w-6 h-6 animate-spin opacity-20" /> : <Cpu className="w-6 h-6" />}
                </div>
                <h3 className="font-display text-4xl font-black mb-4 tracking-tighter uppercase">
                  {isSkeletonPhase ? <Skeleton className="w-48 h-10" /> : "RTX 4090 POWER"}
                </h3>
                <p className="opacity-40 max-w-xs font-light leading-relaxed">
                  {isSkeletonPhase ? <Skeleton className="w-full h-12" /> : "Experience the ultimate performance with our enterprise-grade NVIDIA hardware."}
                </p>
              </div>
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <Image src={ASSETS.images.feature1} alt="RTX" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`md:col-span-2 glass rounded-[3rem] p-10 flex items-center gap-8 group transition-colors ${
                theme === 'ramadan' ? 'hover:bg-[#f3e5ab]/5' : 'hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${
                theme === 'ramadan' ? 'bg-[#f3e5ab]/10' : 'bg-black/5 dark:bg-white/5'
              }`}>
                <Globe className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2 tracking-tight">Global Edge Network</h3>
                <p className="opacity-40 text-sm font-light">50+ locations worldwide.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`glass rounded-[3rem] p-10 flex flex-col justify-center text-center group transition-colors ${
                theme === 'ramadan' ? 'hover:bg-[#f3e5ab]/5' : 'hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <Zap className="w-8 h-8 mx-auto mb-4 opacity-40" />
              <h3 className="font-display text-lg font-bold tracking-tight">5ms Latency</h3>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`glass rounded-[3rem] p-10 flex flex-col justify-center text-center group transition-colors ${
                theme === 'ramadan' ? 'hover:bg-[#f3e5ab]/5' : 'hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <Monitor className="w-8 h-8 mx-auto mb-4 opacity-40" />
              <h3 className="font-display text-lg font-bold tracking-tight">8K Support</h3>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`md:col-span-2 glass rounded-[3rem] p-10 flex items-center justify-between group overflow-hidden relative transition-colors ${
                theme === 'ramadan' ? 'hover:bg-[#f3e5ab]/5' : 'hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold mb-2 tracking-tight">Cross-Platform</h3>
                <p className="opacity-40 text-sm font-light">Play on any device.</p>
              </div>
              <Monitor className="w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity absolute -right-4 -bottom-4 rotate-12" />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`md:col-span-2 glass rounded-[3rem] p-10 flex items-center gap-6 group transition-colors ${
                theme === 'ramadan' ? 'hover:bg-[#f3e5ab]/5' : 'hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <div className={`p-4 rounded-2xl ${
                theme === 'ramadan' ? 'bg-[#f3e5ab]/10' : 'bg-black/5 dark:bg-white/5'
              }`}>
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-1 tracking-tight">Secure Sessions</h3>
                <p className="opacity-40 text-xs font-light">End-to-end encryption.</p>
              </div>
            </motion.div>

            {theme === 'ramadan' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="md:col-span-4 glass rounded-[3rem] p-12 flex items-center justify-between relative overflow-hidden bg-gradient-to-r from-[#0a1a10]/40 to-transparent border-[#f3e5ab]/20"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-3 py-1 bg-[#f3e5ab] text-[#0a1a10] text-[10px] font-black rounded-full uppercase tracking-widest">Ramadan Special</div>
                  </div>
                  <h3 className="font-display text-4xl font-black mb-4 tracking-tighter uppercase text-[#f3e5ab]">Berkah Gaming</h3>
                  <p className="opacity-60 max-w-md font-light leading-relaxed text-[#f3e5ab]">Nikmati performa maksimal dengan paket khusus selama bulan suci. Latensi rendah untuk mabar saat sahur dan ngabuburit.</p>
                </div>
                <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10">
                  <Moon className="w-40 h-40 text-[#f3e5ab] fill-current" />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-40 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-display text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase"
            >
              {t.featureTitle}
            </motion.h2>
            <p className="opacity-40 max-w-xl mx-auto text-lg font-light leading-relaxed">
              {t.featureDesc}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Cpu className="w-8 h-8" />, title: "RTX 4090 Power", desc: "Every instance is backed by enterprise-grade NVIDIA hardware.", img: ASSETS.images.feature1 },
              { icon: <Globe className="w-8 h-8" />, title: "Global Edge Network", desc: "Servers in 50+ locations worldwide to ensure proximity.", img: ASSETS.images.feature2 },
              { icon: <Monitor className="w-8 h-8" />, title: "Cross-Platform", desc: "Play on your phone, tablet, old laptop, or smart TV.", img: ASSETS.images.feature3 },
              { icon: <Shield className="w-8 h-8" />, title: "Secure & Private", desc: "Your data is encrypted end-to-end. We never store sessions.", img: ASSETS.images.hero },
              { icon: <Zap className="w-8 h-8" />, title: "Instant Setup", desc: "No downloads, no updates. Just click play and start.", img: ASSETS.images.mockup },
              { icon: <Cpu className="w-8 h-8" />, title: "Library Sync", desc: "Connect your Steam, Epic, and GOG libraries easily.", img: ASSETS.images.feature1 }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`glass rounded-[3rem] border-black/5 dark:border-white/5 transition-all group relative overflow-hidden flex flex-col ${
                  theme === 'ramadan' ? 'hover:border-[#f3e5ab]/30' : ''
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={feature.img} 
                    alt={feature.title} 
                    fill 
                    className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black to-transparent" />
                  <div className={`absolute bottom-6 left-10 p-4 backdrop-blur-md rounded-2xl border border-white/20 dark:border-black/20 ${
                    theme === 'ramadan' 
                      ? 'bg-[#f3e5ab]/10 text-[#f3e5ab]' 
                      : 'bg-white/10 dark:bg-black/10 text-black dark:text-white'
                  }`}>
                    {feature.icon}
                  </div>
                </div>
                <div className="p-10 pt-4">
                  <h3 className="font-display text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                  <p className="opacity-40 text-sm leading-relaxed font-light">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-40 px-6 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-24">
            <h2 className="font-display text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">{t.choosePower}</h2>
            <p className="opacity-40 text-lg font-light">{t.plansDesc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {t.plans.map((plan: any, i: number) => {
              const features = [
                i === 0 ? "1080p 60FPS" : i === 1 ? "4K 120FPS" : "4K 240FPS",
                i === 0 ? "Standard GPU" : i === 1 ? "RTX 4080 Power" : "RTX 4090 Power",
                i === 0 ? "1h Session Limit" : i === 1 ? "Unlimited Sessions" : "Zero-Wait Queue",
                i === 0 ? "Community Support" : i === 1 ? "Priority Access" : "Dedicated Support"
              ];
              const popular = i === 1;
              
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={`relative glass p-12 rounded-[3.5rem] border-black/5 dark:border-white/5 ${
                    popular 
                      ? theme === 'ramadan'
                        ? 'border-[#f3e5ab]/30 bg-[#f3e5ab]/5 shadow-2xl'
                        : 'border-black/20 dark:border-white/20 bg-black/[0.02] dark:bg-white/[0.02] shadow-2xl'
                      : ''
                  }`}
                >
                  {popular && (
                    <div className={`absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl ${
                      theme === 'ramadan'
                        ? 'bg-[#f3e5ab] text-[#0a1a10]'
                        : 'bg-black text-white dark:bg-white dark:text-black'
                    }`}>
                      Most Popular
                    </div>
                  )}
                  <div className="mb-12">
                    <h3 className="font-display text-3xl font-bold mb-4 tracking-tight">{plan.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black">{t.currencySymbol}{plan.price}</span>
                      <span className="opacity-30 text-sm font-bold uppercase tracking-widest">{t.perMonth}</span>
                    </div>
                  </div>
                  <ul className="space-y-5 mb-12">
                    {features.map((f, j) => (
                      <li key={j} className="flex items-center gap-4 text-sm opacity-50 font-light">
                        <Check className="w-4 h-4" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsComingSoonOpen(true)}
                    className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all animate-shimmer ${
                      popular
                        ? theme === 'ramadan'
                          ? 'bg-[#f3e5ab] text-[#0a1a10] shadow-2xl'
                          : 'bg-black text-white dark:bg-white dark:text-black shadow-2xl'
                        : theme === 'ramadan'
                          ? 'bg-[#f3e5ab]/10 hover:bg-[#f3e5ab]/20 text-[#f3e5ab]'
                          : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10'
                    }`}
                  >
                    Select {plan.name}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Live Server Status Section */}
      <section className="py-40 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
              <div className="max-w-lg">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500">Live Server Status</span>
                </div>
                <h2 className="font-display text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase">Global Network Operational</h2>
                <p className="opacity-40 text-lg font-light leading-relaxed mb-10">Our edge nodes are running at peak performance. Real-time monitoring across 52 global regions ensures zero downtime.</p>
                
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { label: "Uptime", value: "99.99%" },
                    { label: "Active Nodes", value: "52" },
                    { label: "Avg. Latency", value: "8ms" },
                    { label: "Bandwidth", value: "100Gbps" }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-[10px] font-black uppercase tracking-widest opacity-30 mb-2">{stat.label}</div>
                      <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full max-w-md space-y-4">
                {[
                  { region: "Asia Pacific", status: "Operational", load: 42 },
                  { region: "North America", status: "Operational", load: 68 },
                  { region: "Europe Central", status: "Operational", load: 55 },
                  { region: "Middle East", status: "Operational", load: 31 }
                ].map((node, i) => (
                  <div key={i} className={`p-6 rounded-3xl flex items-center justify-between group transition-all ${
                    theme === 'ramadan'
                      ? 'bg-[#f3e5ab]/5 hover:bg-[#f3e5ab]/10'
                      : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10'
                  }`}>
                    <div>
                      <div className="font-bold text-sm mb-1">{node.region}</div>
                      <div className="text-[10px] uppercase tracking-widest text-emerald-500 font-black">{node.status}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-widest opacity-30 mb-1">Load</div>
                      <div className="w-24 h-1 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${node.load}%` }}
                          className="h-full bg-emerald-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6 border-t border-black/5 dark:border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-20">
            <div className="max-w-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  theme === 'ramadan'
                    ? 'bg-[#f3e5ab] text-[#0a1a10]'
                    : 'bg-black text-white dark:bg-white dark:text-black'
                }`}>
                  <Zap className="w-6 h-6 fill-current" />
                </div>
                <span className="font-display font-bold text-2xl tracking-tight">XYCLOUD</span>
              </div>
              <p className="opacity-30 text-sm leading-relaxed font-light mb-8">
                {t.footerDesc}
              </p>
              <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 w-fit px-4 py-2 rounded-full mb-4 ${
                theme === 'ramadan' ? 'bg-[#f3e5ab]/10' : 'bg-black/5 dark:bg-white/5'
              }`}>
                <Heart className="w-3 h-3 fill-current" />
                {t.poweredBy}
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 w-fit px-4 py-2 rounded-full">
                <div className="w-1.5 h-1.5 bg-current rounded-full animate-pulse" />
                System Operational
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest mb-8">{t.platform}</h4>
                <ul className="space-y-4 text-sm opacity-40 font-light">
                  <li><a href="#" className={`transition-opacity ${
                    theme === 'ramadan' ? 'hover:text-[#f3e5ab]' : 'hover:opacity-100'
                  }`}>Download</a></li>
                  <li><a href="#" className={`transition-opacity ${
                    theme === 'ramadan' ? 'hover:text-[#f3e5ab]' : 'hover:opacity-100'
                  }`}>Web Player</a></li>
                  <li><a href="#" className={`transition-opacity ${
                    theme === 'ramadan' ? 'hover:text-[#f3e5ab]' : 'hover:opacity-100'
                  }`}>Mobile App</a></li>
                  <li><a href="#" className={`transition-opacity ${
                    theme === 'ramadan' ? 'hover:text-[#f3e5ab]' : 'hover:opacity-100'
                  }`}>TV App</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest mb-8">{t.company}</h4>
                <ul className="space-y-4 text-sm opacity-40 font-light">
                  <li><a href="#" className={`transition-opacity ${
                    theme === 'ramadan' ? 'hover:text-[#f3e5ab]' : 'hover:opacity-100'
                  }`}>About Us</a></li>
                  <li><a href="#" className={`transition-opacity ${
                    theme === 'ramadan' ? 'hover:text-[#f3e5ab]' : 'hover:opacity-100'
                  }`}>Careers</a></li>
                  <li><a href="#" className={`transition-opacity ${
                    theme === 'ramadan' ? 'hover:text-[#f3e5ab]' : 'hover:opacity-100'
                  }`}>Press Kit</a></li>
                  <li><a href="#" className={`transition-opacity ${
                    theme === 'ramadan' ? 'hover:text-[#f3e5ab]' : 'hover:opacity-100'
                  }`}>Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest mb-8">{t.support}</h4>
                <ul className="space-y-4 text-sm opacity-40 font-light">
                  <li><a href="#" className={`transition-opacity ${
                    theme === 'ramadan' ? 'hover:text-[#f3e5ab]' : 'hover:opacity-100'
                  }`}>Help Center</a></li>
                  <li><a href="/maintenance" className={`transition-opacity ${
                    theme === 'ramadan' ? 'hover:text-[#f3e5ab]' : 'hover:opacity-100'
                  }`}>Status</a></li>
                  <li><a href="#" className={`transition-opacity ${
                    theme === 'ramadan' ? 'hover:text-[#f3e5ab]' : 'hover:opacity-100'
                  }`}>Community</a></li>
                  <li><a href="#" className={`transition-opacity ${
                    theme === 'ramadan' ? 'hover:text-[#f3e5ab]' : 'hover:opacity-100'
                  }`}>API Docs</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-black/5 dark:border-white/5">
            <div className="text-[10px] opacity-20 font-black uppercase tracking-[0.3em]">
              © 2026 XYCLOUD. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest opacity-30">
              <Link href="/privacy" className={`transition-opacity ${
                theme === 'ramadan' ? 'hover:text-[#f3e5ab]' : 'hover:opacity-100'
              }`}>{t.privacy}</Link>
              <Link href="/terms" className={`transition-opacity ${
                theme === 'ramadan' ? 'hover:text-[#f3e5ab]' : 'hover:opacity-100'
              }`}>{t.terms}</Link>
              <Link href="/cookies" className={`transition-opacity ${
                theme === 'ramadan' ? 'hover:text-[#f3e5ab]' : 'hover:opacity-100'
              }`}>{t.cookieSettings}</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <AnimatePresence>
        {showCookies && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-8 left-8 right-8 z-[90] md:left-auto md:w-[400px]"
          >
            <div className="glass p-6 rounded-3xl border-black/10 dark:border-white/10 shadow-2xl flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl opacity-60 ${
                  theme === 'ramadan' ? 'bg-[#f3e5ab]/10' : 'bg-black/5 dark:bg-white/5'
                }`}>
                  <Info className="w-5 h-5" />
                </div>
                <p className="text-xs opacity-60 leading-relaxed">
                  {t.cookieText}
                </p>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={acceptCookies}
                  className={`flex-1 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all ${
                    theme === 'ramadan'
                      ? 'bg-[#f3e5ab] text-[#0a1a10]'
                      : 'bg-black text-white dark:bg-white dark:text-black'
                  }`}
                >
                  {t.accept}
                </button>
                <button 
                  onClick={() => setIsDetailsModalOpen(true)}
                  className={`px-6 py-3 glass rounded-xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-2 ${
                    theme === 'ramadan'
                      ? 'hover:bg-[#f3e5ab]/10'
                      : 'hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <Cookie className="w-3 h-3" />
                  Details
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ramadan Greeting Modal */}
      <AnimatePresence>
        {showRamadanGreeting && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowRamadanGreeting(false)}
              className="absolute inset-0 bg-[#0a1a10]/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md glass rounded-[3rem] p-12 text-center shadow-2xl border-[#f3e5ab]/20 bg-gradient-to-b from-[#0a1a10] to-[#0a1a10]/90"
            >
              <div className="w-24 h-24 bg-[#f3e5ab]/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                <Moon className="w-12 h-12 text-[#f3e5ab] fill-current" />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-[#f3e5ab]/20 rounded-full blur-xl"
                />
              </div>
              <h2 className="font-display text-4xl font-black mb-4 tracking-tighter uppercase text-[#f3e5ab]">Ramadan Kareem</h2>
              <p className="text-[#f3e5ab] opacity-60 text-sm font-light leading-relaxed mb-10">Selamat menunaikan ibadah di bulan suci Ramadan. Semoga keberkahan menyertai setiap langkah dan permainan Anda.</p>
              <button 
                onClick={() => setShowRamadanGreeting(false)}
                className="w-full py-5 bg-[#f3e5ab] text-[#0a1a10] rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(243,229,171,0.3)]"
              >
                Aamiin
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Details Modal */}
      <AnimatePresence>
        {isDetailsModalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDetailsModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg glass rounded-[3rem] p-10 shadow-2xl border border-black/5 dark:border-white/5"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display text-2xl font-bold tracking-tight">Cookie Details</h2>
                <button 
                  onClick={() => setIsDetailsModalOpen(false)}
                  className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-6 opacity-60 text-sm leading-relaxed font-light">
                <p>We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve user experience and analyze website traffic.</p>
                <div className="space-y-4">
                  <div className={`flex items-center justify-between p-4 rounded-2xl ${
                    theme === 'ramadan' ? 'bg-[#f3e5ab]/5' : 'bg-black/5 dark:bg-white/5'
                  }`}>
                    <span className="font-bold uppercase tracking-widest text-[10px]">Essential</span>
                    <Check className="w-4 h-4" />
                  </div>
                  <div className={`flex items-center justify-between p-4 rounded-2xl ${
                    theme === 'ramadan' ? 'bg-[#f3e5ab]/5' : 'bg-black/5 dark:bg-white/5'
                  }`}>
                    <span className="font-bold uppercase tracking-widest text-[10px]">Analytics</span>
                    <div className="w-4 h-4 rounded-full border border-black/20 dark:border-white/20" />
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsDetailsModalOpen(false)}
                className={`w-full mt-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] transition-all ${
                  theme === 'ramadan'
                    ? 'bg-[#f3e5ab] text-[#0a1a10]'
                    : 'bg-black text-white dark:bg-white dark:text-black'
                }`}
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {isComingSoonOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsComingSoonOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md glass rounded-[3rem] p-12 text-center shadow-2xl border border-black/5 dark:border-white/5"
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 ${
                theme === 'ramadan' ? 'bg-[#f3e5ab]/10' : 'bg-black/5 dark:bg-white/5'
              }`}>
                <Clock className="w-10 h-10 opacity-40" />
              </div>
              <h2 className="font-display text-3xl font-black mb-4 tracking-tighter uppercase">Coming Soon</h2>
              <p className="opacity-40 text-sm font-light leading-relaxed mb-10">This feature is currently under development and will be available in the next major update of XYCLOUD 2026.</p>
              <button 
                onClick={() => setIsComingSoonOpen(false)}
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] transition-all ${
                  theme === 'ramadan'
                    ? 'bg-[#f3e5ab] text-[#0a1a10]'
                    : 'bg-black text-white dark:bg-white dark:text-black'
                }`}
              >
                Got it
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Validation Modal */}
      <AnimatePresence>
        {isValidatingOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsValidatingOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md glass rounded-[3rem] p-12 text-center shadow-2xl border border-black/5 dark:border-white/5"
            >
              <div className={`w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8`}>
                <Check className="w-10 h-10 text-emerald-500" />
              </div>
              <h2 className="font-display text-3xl font-black mb-4 tracking-tighter uppercase">Validated</h2>
              <p className="opacity-40 text-sm font-light leading-relaxed mb-10">Your request has been successfully validated. You are now ready to experience the future of gaming.</p>
              <button 
                onClick={() => setIsValidatingOpen(false)}
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] transition-all ${
                  theme === 'ramadan'
                    ? 'bg-[#f3e5ab] text-[#0a1a10]'
                    : 'bg-black text-white dark:bg-white dark:text-black'
                }`}
              >
                Continue
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Notification Button */}
      <NotificationButton prayerTimes={prayerTimes} />
    </div>
  );
}