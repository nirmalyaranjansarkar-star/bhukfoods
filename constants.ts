import { Plan, MarketItem, FAQItem, Testimonial, ResourceItem, BlogPost, GalleryItem, PainPointItem, ComparisonRow } from './types';

export const LOCATIONS = ['Agarpara', 'Sodepur', 'Belgharia'];

export const SUBSCRIPTION_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd9DcmzwhkLPB989NtGE1SouGTwESEfHpl4kGrZbae8TquuYg/viewform';
export const FREE_RESOURCES_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeOe-Qf2aUaeW7Rc0MB1e3m1qPpiUTYwQiprmuOzFGyCkS0og/viewform';

export const POLICY_URLS = {
  terms: '/terms',
  refund: '/refund',
  privacy: '/privacy'
};

export const MARKET_DATA: MarketItem[] = [
  { id: '1', name: 'Chicken (Dressed)', nameBn: 'চিকেন (ড্রেসড)', price: 220, unit: 'kg', unitBn: 'কেজি', trend: 'up' },
  { id: '2', name: 'Katla Fish', nameBn: 'কাতলা মাছ', price: 350, unit: 'kg', unitBn: 'কেজি', trend: 'stable' },
  { id: '3', name: 'Miniket Rice', nameBn: 'মিনিকেট চাল', price: 58, unit: 'kg', unitBn: 'কেজি', trend: 'up' },
  { id: '4', name: 'Seasonal Veg', nameBn: 'মরশুমি সবজি', price: 40, unit: 'avg/kg', unitBn: 'গড়/কেজি', trend: 'down' },
];

export const PLANS: Plan[] = [
  {
    id: 'student',
    name: 'Student Saver',
    nameBn: 'স্টুডেন্ট সেভার',
    price: 2800,
    perMeal: 30,
    features: ['3 Meals (Bfast+Lunch+Dinner)', 'Rice/Roti', 'Seasonal Sabji', 'Dal', 'Egg (2x week)'],
    featuresBn: ['৩ বেলা খাবার (সকাল+দুপুর+রাত)', 'ভাত/রুটি', 'সবজি', 'ডাল', 'ডিম (সপ্তাহে ২ দিন)'],
    bestFor: 'Students',
    bestForBn: 'ছাত্রছাত্রীদের জন্য',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'professional',
    name: 'Office Ready',
    nameBn: 'অফিস রেডি',
    price: 3500,
    perMeal: 40,
    features: ['3 Meals (Bfast+Lunch+Dinner)', 'Rice/Roti', 'Chicken/Fish (Alt days)', 'Special Sabji', 'Salad'],
    featuresBn: ['৩ বেলা খাবার (সকাল+দুপুর+রাত)', 'ভাত/রুটি', 'মাছ/মাংস (একদিন অন্তর)', 'স্পেশাল সবজি', 'স্যালাড'],
    bestFor: 'Professionals',
    bestForBn: 'অফিস যাত্রীদের জন্য',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'senior',
    name: 'Senior Lite',
    nameBn: 'সিনিয়র লাইট',
    price: 3000,
    perMeal: 35,
    features: ['3 Meals (Bfast+Lunch+Dinner)', 'Soft Rice/Roti', 'Chicken/Fish (Light Stew)', 'Less Oil/Spice', 'Digestible Sabji'],
    featuresBn: ['৩ বেলা খাবার (সকাল+দুপুর+রাত)', 'নরম ভাত/রুটি', 'মাছ/মাংস (হালকা ঝোল)', 'কম তেল-মসলা', 'সহজপাচ্য সবজি'],
    bestFor: 'Seniors',
    bestForBn: 'বয়স্কদের জন্য',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1000&auto=format&fit=crop'
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    parameter: 'Monthly Spend',
    parameterBn: 'মাসিক খরচ',
    bhuk: '₹2,800 - ₹3,500',
    bhukBn: '₹২,৮০০ - ₹৩,৫০০',
    street: '₹3,500+',
    streetBn: '₹৩,৫০০+',
    apps: '₹8,000+',
    appsBn: '₹৮,০০০+',
    self: '₹4,000+',
    selfBn: '₹৪,০০০+',
    maid: '₹5,000+',
    maidBn: '₹৫,০০০+'
  },
  {
    parameter: 'Time Spent Daily',
    parameterBn: 'দৈনিক সময় ব্যয়',
    bhuk: '0 Mins',
    bhukBn: '০ মিনিট',
    street: '30 Mins',
    streetBn: '৩০ মিনিট',
    apps: '20 Mins',
    appsBn: '২০ মিনিট',
    self: '90 Mins',
    selfBn: '৯০ মিনিট',
    maid: 'Maid Management',
    maidBn: 'মনিটরিং প্রয়োজন'
  },
  {
    parameter: 'Oil & Spices',
    parameterBn: 'তেল ও মশলা',
    bhuk: 'High Quality (Control)',
    bhukBn: 'উন্নত মান (নিয়ন্ত্রিত)',
    street: 'Reused Oil ⚠️',
    streetBn: 'পোড়া তেল ⚠️',
    apps: 'Heavy/Rich',
    appsBn: 'অতিরিক্ত তেল/মশলা',
    self: 'Good',
    selfBn: 'ভালো',
    maid: 'Variable',
    maidBn: 'নির্ভরশীল'
  },
  {
    parameter: 'Hygiene / FSSAI',
    parameterBn: 'হাইজিন / FSSAI',
    bhuk: 'Certified ✅',
    bhukBn: 'সার্টিফাইড ✅',
    street: 'Uncertain ❓',
    streetBn: 'অনিশ্চিত ❓',
    apps: 'Varies',
    appsBn: 'ভিন্ন ভিন্ন',
    self: 'Good',
    selfBn: 'ভালো',
    maid: 'Varies',
    maidBn: 'ভিন্ন ভিন্ন'
  },
  {
    parameter: 'Hidden Costs',
    parameterBn: 'লুকানো খরচ',
    bhuk: 'None',
    bhukBn: 'নেই',
    street: 'Health Issues',
    streetBn: 'শারীরিক সমস্যা',
    apps: 'Delivery Fees',
    appsBn: 'ডেলিভারি চার্জ',
    self: 'Gas + Waste',
    selfBn: 'গ্যাস + অপচয়',
    maid: 'Bonuses/Leaves',
    maidBn: 'বোনাস/ছুটি'
  }
];

export const RESOURCES: ResourceItem[] = [
  {
    id: '1',
    title: 'The Truth About "Hotel Food"',
    titleBn: '"হোটেল ফুড" এর আসল সত্যি',
    description: 'Why your stomach hurts after eating out, and the hidden dangers of Soda & Reused Oil.',
    descriptionBn: 'বাইরে খাওয়ার পর কেন পেট ব্যথা করে, এবং সোডা ও পোড়া তেলের গোপন বিপদ।',
    icon: '⚠️'
  },
  {
    id: '2',
    title: 'Brain Fuel: Exam Special',
    titleBn: 'ব্রেন ফুয়েল: এক্সাম স্পেশাল',
    description: 'What to eat (and avoid) to improve memory and focus during exam season.',
    descriptionBn: 'পরীক্ষার মরসুমে স্মৃতিশক্তি ও মনোযোগ বাড়াতে কী খাবেন (আর কী এড়াবেন)।',
    icon: '🧠'
  },
  {
    id: '3',
    title: 'The Rice Myth',
    titleBn: 'ভাত নিয়ে ভুল ধারণা',
    description: 'Can you lose weight eating rice? The science of the "Go-Slim" Bengali Diet.',
    descriptionBn: 'ভাত খেয়েও কি ওজন কমানো সম্ভব? "গো-স্লিম" বাঙালি ডায়েটের বিজ্ঞান।',
    icon: '⚖️'
  },
  {
    id: '4',
    title: "Bachelor's Survival Guide",
    titleBn: 'ব্যাচেলরদের সার্ভাইভাল গাইড',
    description: 'How to stay healthy in a PG without going broke or falling sick.',
    descriptionBn: 'পকেটে টান না ফেলে বা অসুস্থ না হয়ে পিজি-তে (PG) সুস্থ থাকার উপায়।',
    icon: '👛'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'Where exactly do you deliver?',
    questionBn: 'আপনারা ঠিক কোথায় কোথায় ডেলিভারি করেন?',
    answer: 'We cover most of Agarpara, Sodepur, and Belgharia. Specifically, areas from Agarpara Station to Sodepur Traffic More, and up to Rathtala in Belgharia. If you live in the interior lanes, please call us to confirm.',
    answerBn: 'আমরা আগরপাড়া, সোদপুর এবং বেলঘড়িয়ার অধিকাংশ এলাকায় পরিষেবা দিই। বিশেষ করে আগরপাড়া স্টেশন থেকে সোদপুর ট্রাফিক মোড় এবং বেলঘড়িয়া রথতলা পর্যন্ত। ভেতরের রাস্তায় থাকলে ফোন করে নিশ্চিত করুন।'
  },
  {
    id: '2',
    question: 'Can I pause my subscription if I travel?',
    questionBn: 'আমি বাইরে গেলে কি সাবস্ক্রিপশন বন্ধ রাখতে পারি?',
    answer: 'Yes! Inform us 24 hours in advance, and we will pause your subscription. Your unused meal credits will be carried forward to the next month or adjusted in the renewal.',
    answerBn: 'হ্যাঁ! ২৪ ঘণ্টা আগে জানালে আমরা আপনার সাবস্ক্রিপশন পজ করে দেব। আপনার অব্যবহৃত মিলের টাকা পরের মাসে যোগ করা হবে বা রিনিউয়ালের সময় অ্যাডজাস্ট করা হবে।'
  },
  {
    id: '3',
    question: 'What quality of oil and ingredients do you use?',
    questionBn: 'আপনারা কী মানের তেল ও মশলা ব্যবহার করেন?',
    answer: 'We strictly use Kachi Ghani Mustard Oil and premium Sunflower Oil. We grind our own spices in-house to ensure zero adulteration. Vegetables are sourced daily from the local wholesale market.',
    answerBn: 'আমরা শুধুমাত্র খাঁটি কাচ্চি ঘানি সর্ষের তেল এবং ভালো মানের সানফ্লাওয়ার অয়েল ব্যবহার করি। মশলা আমাদের নিজেদের তৈরি। সবজি রোজ সকালে পাইকারি বাজার থেকে আনা হয়।'
  },
  {
    id: '4',
    question: 'Is the food spicy?',
    questionBn: 'খাবার কি খুব ঝাল হয়?',
    answer: 'Our standard "Office Ready" meals are moderately spicy (home-style). However, the "Senior Lite" plan is designed with minimal oil and spice specifically for easy digestion.',
    answerBn: 'আমাদের "অফিস রেডি" মিল সাধারণ ঝাল হয় (ঘরোয়া স্টাইল)। তবে "সিনিয়র লাইট" প্ল্যানটি খুব কম তেল ও মশলা দিয়ে তৈরি করা হয় যা হজমের জন্য ভালো।'
  },
  {
    id: '5',
    question: 'How do I pay for the subscription?',
    questionBn: 'সাবস্ক্রিপশনের টাকা কীভাবে দেব?',
    answer: 'You can pay via UPI (GPay/PhonePe), Bank Transfer, or Cash on the first day of delivery. Subscriptions are prepaid.',
    answerBn: 'আপনি UPI (GPay/PhonePe), ব্যাঙ্ক ট্রান্সফার বা প্রথম দিন ক্যাশ দিতে পারেন। সাবস্ক্রিপশন প্রিপেইড।'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sayan D.',
    role: 'IT Professional',
    content: 'Finally found a service that doesn\'t taste like "hotel food". It is genuinely like my mother\'s cooking. The thermal bag keeps lunch hot till 1:30 PM.',
    contentBn: 'অবশেষে এমন একটা সার্ভিস পেলাম যার স্বাদ হোটেলের মতো নয়, একদম মায়ের হাতের রান্নার মতো। থার্মাল ব্যাগে খাবার দুপুর দেড়টা পর্যন্ত গরম থাকে।',
    source: 'Google',
    rating: 5
  },
  {
    id: '2',
    name: 'Anjali M.',
    role: 'Teacher',
    content: 'I have replaced my kitchen with Bhuk Foods. No more grocery shopping or chopping. The "Senior Lite" plan is perfect for my parents.',
    contentBn: 'আমি আমার রান্নাঘরের ঝামেলা পুরোপুরি ভুক ফুডসের ওপর ছেড়ে দিয়েছি। বাজার করা বা কুটনোর ঝামেলা নেই। আমার বাবা-মায়ের জন্য "সিনিয়র লাইট" প্ল্যানটা দারুণ।',
    source: 'Justdial',
    rating: 5
  },
  {
    id: '3',
    name: 'Rahul R.',
    role: 'Student',
    content: 'Best pocket-friendly option in Agarpara. The quantity is huge for the price. Highly recommended for students living alone.',
    contentBn: 'আগরপাড়ায় পকেট-ফ্রেন্ডলি অপশন। দাম অনুযায়ী পরিমাণ অনেক। যারা মেস-এ থাকো তাদের জন্য সেরা।',
    source: 'Google',
    rating: 4
  },
  {
    id: '4',
    name: 'Debanjan B.',
    role: 'Banker',
    content: 'I did the math. Bhuk is actually cheaper than maintaining a maid and buying groceries. Plus, zero headache.',
    contentBn: 'আমি হিসাব করে দেখেছি। মাসির খরচ আর বাজারের খরচের চেয়ে ভুক ফুডস সস্তা। আর কোনো মাথাব্যথা নেই।',
    source: 'Google',
    rating: 5
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070',
    caption: 'Our Rooftop Kitchen in Agarpara',
    captionBn: 'আগরপাড়ায় আমাদের রুফটপ কিচেন',
    category: 'Kitchen'
  },
  {
    id: '3',
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000',
    caption: 'Sunday Special Chicken Thali',
    captionBn: 'রবিবারের স্পেশাল চিকেন থালি',
    category: 'Food'
  },
  {
    id: '4',
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1000',
    caption: 'Premium Packaging for Office',
    captionBn: 'অফিসের জন্য প্রিমিয়াম প্যাকেজিং',
    category: 'Food'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Why Reused Oil is a Slow Poison',
    titleBn: 'পোড়া তেল কেন স্বাস্থ্যের জন্য বিষ?',
    excerpt: 'Most cheap hotels reuse oil for 7 days. Learn how we maintain 100% oil purity at Bhuk Foods.',
    excerptBn: 'বেশিরভাগ সস্তা হোটেল ৭ দিন ধরে একই তেল ব্যবহার করে। জানুন আমরা কীভাবে তেলের বিশুদ্ধতা বজায় রাখি।',
    date: 'Oct 12, 2024',
    image: 'https://images.unsplash.com/photo-1615485925763-867862f80a3a?q=80&w=1000', 
    readTime: '3 min'
  },
  {
    id: '2',
    title: 'The Secret Spice Mix of Agarpara',
    titleBn: 'আগরপাড়ার স্পেশাল মশলার গোপন রহস্য',
    excerpt: 'We don\'t buy packets. We buy raw spices from Burrabazar and grind them. Here is why it matters.',
    excerptBn: 'আমরা প্যাকেট মশলা কিনি না। আমরা বড়বাজার থেকে কাঁচা মশলা কিনে ভাঙাই। কেন এটা জরুরি?',
    date: 'Sep 28, 2024',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000',
    readTime: '2 min'
  },
  {
    id: '3',
    title: '5 Tips to Pack a Healthy Tiffin',
    titleBn: 'স্বাস্থ্যকর টিফিন প্যাক করার ৫টি টিপস',
    excerpt: 'Even if you don\'t subscribe to us, follow these rules to keep your lunch fresh till 2 PM.',
    excerptBn: 'আমাদের সাবস্ক্রিপশন না নিলেও, দুপুর ২টো পর্যন্ত খাবার তাজা রাখতে এই নিয়মগুলো মেনে চলুন।',
    date: 'Sep 15, 2024',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070',
    readTime: '4 min'
  }
];

export const PAIN_POINTS: PainPointItem[] = [
  {
    id: 'maid',
    emoji: '🧹',
    title: 'The "Maid" Drama',
    titleBn: 'কাজের মাসির সমস্যা',
    problem: '"Didi aj asbo na..." or sudden demands for bonuses and holidays.',
    problemBn: '"দিদি আজ আসবো না..." অথবা হঠাৎ বোনাস বা ছুটির দাবি।',
    solution: 'Zero dependency. We deliver 365 days, rain or shine.',
    solutionBn: 'কারোর ওপর নির্ভর করতে হবে না। আমরা ৩৬৫ দিন খাবার পৌঁছে দিই।'
  },
  {
    id: 'grocery',
    emoji: '🛒',
    title: 'Grocery Logistics',
    titleBn: 'বাজার করার ঝক্কি',
    problem: 'Running out of oil? Carrying heavy bags? Haggling in the heat?',
    problemBn: 'তেল শেষ? ভারী ব্যাগ বয়ে আনা? রোদে দাঁড়িয়ে দরদাম করা?',
    solution: 'We source fresh wholesale ingredients daily. You just eat.',
    solutionBn: 'আমরা রোজ টাটকা পাইকারি বাজার করি। আপনি শুধু খাওয়ার আনন্দ নিন।'
  },
  {
    id: 'breakfast',
    emoji: '🥟',
    title: 'The Kachori Trap',
    titleBn: 'রাস্তার ধারের ব্রেকফাস্ট',
    problem: 'Eating oily roadside Kachori or skipping breakfast in the morning rush?',
    problemBn: 'রোজ সকালে রাস্তার তেলচপচপে কচুরি খাচ্ছেন বা না খেয়েই বেরোচ্ছেন?',
    solution: 'Healthy, home-style breakfast delivered before you leave for work.',
    solutionBn: 'অফিসে বেরোনোর আগেই বাড়িতে পৌঁছে যাবে স্বাস্থ্যকর ব্রেকফাস্ট।'
  },
  {
    id: 'admin',
    emoji: '🤯',
    title: 'The "Kitchen Manager" Trap',
    titleBn: 'রান্নাঘর সামলানোর চাপ',
    problem: 'Gas booking, grocery runs, maid salary, washing dishes, equipment maintenance...',
    problemBn: 'গ্যাস বুকিং, বাজার করা, মাসির মাইনে, বাসন মাজা, রান্নাঘর পরিষ্কার...',
    solution: 'Fire yourself as the manager. One subscription covers everything.',
    solutionBn: 'ম্যানেজারের দায়িত্ব ছাড়ুন। এক সাবস্ক্রিপশনেই সব সমস্যার সমাধান।'
  }
];

export const TRANSLATIONS = {
  en: {
    nav_home: 'Home',
    nav_plans: 'Plans',
    nav_calc: 'Savings Calculator',
    nav_resources: 'Free Guides',
    nav_stories: 'Stories',
    nav_policies: 'Policies',
    hero_headline: 'India\'s First Kitchen Substitution Service.',
    hero_subhead: 'Delete your grocery apps. Sell your stove. We aren\'t just a tiffin service; we are your complete kitchen replacement in Agarpara, Sodepur & Belgharia.',
    hero_cta: 'Start Your Subscription',
    hero_pain: 'Grocery shopping, chopping, cooking, cleaning... it never ends.',
    hero_gain: 'Reclaim 40+ hours/month. We cook exactly like home, so you don\'t have to.',
    calc_title: 'Household Budget Calculator',
    calc_desc: 'See how much you really spend on food vs. a Bhuk subscription.',
    market_title: 'Kolkata Market Watch',
    market_subtitle: 'Kitchen substitution means wholesale efficiency. We pass the savings to you.',
    plans_title: 'Kitchen Substitution Plans',
    trust_fssai: 'FSSAI Registered Kitchen',
    trust_hygiene: '100% Hygiene SOPs',
    trust_local: 'Local Agarpara Kitchen',
    footer_contact: 'Contact Us',
    footer_copy: '© 2024 Bhuk Foods. All rights reserved.',
    label_household: 'Household Size',
    label_grocery: 'Monthly Grocery Bill (₹)',
    label_eating_out: 'Weekly Eating Out (₹)',
    label_cooking_time: 'Cooking Hours/Week',
    result_savings: 'Potential Monthly Savings',
    admin_title: 'Bhuk Admin',
    admin_login: 'Login to Manage',
    faq_title: 'Frequently Asked Questions',
    testimonials_title: 'Life After Quitting the Kitchen',
    cta_form: 'Fill Subscription Form',
    resources_title: 'Free Food & Market Guides',
    resources_subtitle: 'Download our exclusive guides to save money on groceries and eat healthier. Join 1000+ locals.',
    resources_cta: 'Download PDF',
    stories_title: 'Life at Bhuk Foods',
    stories_subtitle: 'Behind the scenes, cooking tips, and stories from our kitchen to your table.',
    filter_all: 'All',
    filter_photos: 'Photos',
    filter_videos: 'Videos',
    filter_blogs: 'Blogs',
    read_more: 'Read More',
    watch_video: 'Watch Video',
    pain_title: 'Why You Need a Kitchen Substitution',
    pain_subtitle: 'Stop acting like a kitchen manager. Let us handle the groceries, cooking, and cleaning.',
    pain_problem: 'The Struggle',
    pain_solution: 'The Solution',
    policy_terms: 'Terms & Conditions',
    policy_refund: 'Return & Refund Policy',
    policy_privacy: 'Privacy Policy',
    comp_title: 'Monthly Food Cost & Lifestyle Comparison',
    comp_subtitle: 'Why smart families in Agarpara are switching to Bhuk Foods.',
    col_bhuk: 'Bhuk Foods',
    col_street: 'Street Food',
    col_apps: 'Delivery Apps',
    col_self: 'Self Cooking',
    col_maid: 'Maid / Cook',
    tagline: 'Stop cooking, Enjoy Living'
  },
  bn: {
    nav_home: 'হোম',
    nav_plans: 'প্ল্যান',
    nav_calc: 'সেভিংস ক্যালকুলেটর',
    nav_resources: 'ফ্রি গাইড',
    nav_stories: 'গল্প ও ছবি',
    nav_policies: 'পলিসি',
    hero_headline: 'ভারতের প্রথম কিচেন সাবস্টিটিউশন সার্ভিস।',
    hero_subhead: 'বাজার করার অ্যাপ ডিলিট করুন। রান্নার ঝামেলা ভুলে যান। আমরা শুধু টিফিন দিই না, আমরা আপনার রান্নাঘরের সম্পূর্ণ বিকল্প।',
    hero_cta: 'সাবস্ক্রিপশন শুরু করুন',
    hero_pain: 'বাজার করা, কুটনো, রান্না, বাসন মাজা... এই ঝামেলার শেষ নেই?',
    hero_gain: 'মাসে ৪০+ ঘণ্টা সময় বাঁচান। আমরা ঠিক বাড়ির মতোই রাঁধি, তাই আপনাকে রাঁধতে হবে না।',
    calc_title: 'খরচের হিসাব করুন',
    calc_desc: 'আপনার বর্তমান খরচের সাথে ভুক সাবস্ক্রিপশনের তুলনা দেখুন।',
    market_title: 'কলকাতার বাজার দর',
    market_subtitle: 'কিচেন সাবস্টিটিউশন মানেই পাইকারি সাশ্রয়।',
    plans_title: 'কিচেন সাবস্টিটিউশন প্ল্যান',
    trust_fssai: 'FSSAI রেজিস্টার্ড কিচেন',
    trust_hygiene: '১০০% হাইজিন মেনে রান্না',
    trust_local: 'আগরপাড়ার নিজস্ব কিচেন',
    footer_contact: 'যোগাযোগ',
    footer_copy: '© ২০২৪ ভুক ফুডস। সর্বস্বত্ব সংরক্ষিত।',
    label_household: 'পরিবার সদস্য সংখ্যা',
    label_grocery: 'মাসিক বাজার খরচ (₹)',
    label_eating_out: 'সপ্তাহে রেস্তোরাঁ খরচ (₹)',
    label_cooking_time: 'সপ্তাহে রান্নার সময় (ঘণ্টা)',
    result_savings: 'সম্ভাব্য মাসিক সাশ্রয়',
    admin_title: 'ভুক অ্যাডমিন',
    admin_login: 'লগইন করুন',
    faq_title: 'সচরাচর জিজ্ঞাসিত প্রশ্ন',
    testimonials_title: 'রান্নাঘর ছাড়ার পর জীবন',
    cta_form: 'সাবস্ক্রিপশন ফর্ম পূরণ করুন',
    resources_title: 'ফ্রি ফুড এবং মার্কেট গাইড',
    resources_subtitle: 'বাজার খরচ বাঁচাতে এবং স্বাস্থ্যকর খেতে আমাদের এক্সক্লুসিভ গাইড ডাউনলোড করুন।',
    resources_cta: 'ডাউনলোড PDF',
    stories_title: 'ভুক ফুডসের গল্প',
    stories_subtitle: 'রান্নাঘরের পেছনের দৃশ্য, রান্নার টিপস এবং আমাদের কিছু কথা।',
    filter_all: 'সব',
    filter_photos: 'ছবি',
    filter_videos: 'ভিডিও',
    filter_blogs: 'ব্লগ',
    read_more: 'আরও পড়ুন',
    watch_video: 'ভিডিও দেখুন',
    pain_title: 'কেন আপনার কিচেন সাবস্টিটিউশন প্রয়োজন?',
    pain_subtitle: 'রান্নাঘরের ম্যানেজার হওয়া বন্ধ করুন। বাজার, রান্না এবং পরিষ্কারের দায়িত্ব আমাদের দিন।',
    pain_problem: 'সমস্যা',
    pain_solution: 'সমাধান',
    policy_terms: 'শর্তাবলী',
    policy_refund: 'রিফান্ড পলিসি',
    policy_privacy: 'গোপনীয়তা নীতি',
    comp_title: 'খরচ এবং জীবনযাত্রার তুলনা',
    comp_subtitle: 'কেন আগরপাড়ার স্মার্ট পরিবারগুলো ভুক ফুডস বেছে নিচ্ছে?',
    col_bhuk: 'ভুক ফুডস',
    col_street: 'রাস্তার খাবার',
    col_apps: 'ডেলিভারি অ্যাপ',
    col_self: 'নিজের রান্না',
    col_maid: 'কাজের মাসি',
    tagline: 'রান্না থামান, জীবন উপভোগ করুন'
  }
};