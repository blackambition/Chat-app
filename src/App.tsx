import React, { useState } from 'react';
import { 
  Search, 
  Heart, 
  MessageCircle, 
  Share2, 
  Users,
  MoreVertical,
  CheckCircle2,
  Home,
  Bell,
  Bookmark,
  Repeat,
  BarChart2,
  Plus,
  ArrowLeft,
  Video,
  Phone,
  Image as ImageIcon,
  Smile,
  Send,
  X,
  Settings,
  Grid,
  MapPin,
  Store,
  ShoppingBag,
  ShoppingCart,
  CreditCard,
  Tag,
  CheckCheck,
  Paperclip,
  Camera,
  Mic,
  PlusSquare,
  TrendingUp,
  Megaphone,
  DollarSign,
  Zap,
  Package,
  Monitor,
  Star,
  Eye,
  Briefcase,
  Building,
  Clock
} from 'lucide-react';
import { cn } from './lib/utils';

// Mock Data for Hybrid Social App
const mockStories = [
  { id: 1, name: "Your Story", avatar: "https://picsum.photos/seed/user1/150/150", isUser: true, hasUnseen: false },
  { id: 2, name: "zuck", avatar: "https://picsum.photos/seed/zuck/150/150", isUser: false, hasUnseen: true },
  { id: 3, name: "elonmusk", avatar: "https://picsum.photos/seed/elon/150/150", isUser: false, hasUnseen: true },
  { id: 4, name: "mosseri", avatar: "https://picsum.photos/seed/mosseri/150/150", isUser: false, hasUnseen: true },
  { id: 5, name: "mkbhd", avatar: "https://picsum.photos/seed/mkbhd/150/150", isUser: false, hasUnseen: false },
];

const feedPosts: any[] = [
  {
    id: 1,
    businessName: "AgriConnect NG",
    handle: "@agriconnect",
    businessAvatar: "https://picsum.photos/seed/agri/100/100",
    isVerified: true,
    image: "https://picsum.photos/seed/tractor/600/600",
    text: "New arrival of solar-powered irrigation pumps. Perfect for dry season farming. DM to order or tap below! 🌱☀️",
    likes: "1.2K",
    comments: "45",
    reposts: "120",
    views: "4.5K",
    timeAgo: "2h",
    product: { name: "Solar Pump X1", price: "₦150,000", isWholesale: true, moq: 5 }
  },
  {
    id: 2,
    businessName: "Nairobi Solar Solutions",
    handle: "@nairobisolar",
    businessAvatar: "https://picsum.photos/seed/solar/100/100",
    isVerified: true,
    image: "https://picsum.photos/seed/panel/600/600",
    text: "Say goodbye to power outages. Our new 5KVA home solar kits are now in stock. Installation included. ⚡🏠",
    likes: "892",
    comments: "120",
    reposts: "54",
    views: "12K",
    timeAgo: "5h",
    isAd: true,
    actionText: "Shop Now"
  },
  {
    id: 3,
    businessName: "Your Name",
    handle: "@yourhandle",
    businessAvatar: "https://picsum.photos/seed/user1/150/150",
    isVerified: false,
    image: "https://picsum.photos/seed/code/600/600",
    text: "Just launched our new B2B SaaS platform for local merchants! Check it out. 🚀💻",
    likes: "45",
    comments: "12",
    reposts: "5",
    views: "320",
    timeAgo: "8h",
    isUser: true
  },
  {
    id: 4,
    businessName: "Ministry of Power",
    handle: "@minpower_ng",
    businessAvatar: "https://picsum.photos/seed/gov/100/100",
    isVerified: true,
    text: "We are accepting bids for the Rural Electrification Project. Empowering communities through sustainable energy. ⚡🌍",
    likes: "342",
    comments: "56",
    reposts: "189",
    views: "15K",
    timeAgo: "1d",
    isTender: true,
    tenderDetails: { title: "Rural Electrification Project", budget: "₦500M", deadline: "12 May 2026", type: "Gov Tender" }
  },
  {
    id: 5,
    businessName: "TechHub Africa",
    handle: "@techhubafrica",
    businessAvatar: "https://picsum.photos/seed/techhub/100/100",
    isVerified: true,
    text: "We are expanding our engineering team! Looking for a Senior React Developer to join our remote workforce. Apply now! 💻🚀",
    likes: "890",
    comments: "124",
    reposts: "340",
    views: "22K",
    timeAgo: "2d",
    isJob: true,
    jobDetails: { title: "Senior React Developer", salary: "₦800k/mo", location: "Lagos (Remote)", type: "Hiring" }
  },
  {
    id: 6,
    businessName: "Oluwaseun Adeyemi",
    handle: "@seundesigns",
    businessAvatar: "https://picsum.photos/seed/uiux/100/100",
    isVerified: false,
    text: "Hi network! 👋 I'm a UI/UX Designer looking for my next role. I specialize in creating intuitive and beautiful interfaces. Open to full-time or contract roles.",
    likes: "1.5K",
    comments: "89",
    reposts: "210",
    views: "18K",
    timeAgo: "3h",
    isSeeker: true,
    seekerDetails: { role: "UI/UX Designer", skills: ["Figma", "React"], availability: "Immediate", type: "Looking for Work" }
  }
];

const mockChats = [
  { id: 1, name: "AgriConnect NG", avatar: "https://picsum.photos/seed/agri/150/150", lastMessage: "Your order has been confirmed.", time: "2m", unread: 2 },
  { id: 2, name: "Nairobi Solar", avatar: "https://picsum.photos/seed/solar/150/150", lastMessage: "Yes, we do installations in your area.", time: "1h", unread: 0 },
  { id: 3, name: "Lagos Tech Hub", avatar: "https://picsum.photos/seed/techhub/150/150", lastMessage: "Let's schedule a call.", time: "3h", unread: 0 },
];

const mockMessages: any[] = [
  { id: 1, text: "Hello, I'm interested in the Solar Pump X1.", isUser: true, time: "10:00 AM" },
  { id: 2, text: "Great! It's currently in stock for ₦150,000. Would you like to place an order?", isUser: false, time: "10:05 AM" },
  { id: 3, text: "Yes, please. Deliver to Abuja.", isUser: true, time: "10:06 AM", isOrder: true },
];

const mockProducts = [
  { id: 1, name: "Solar Generator 2KVA", price: "₦300,000", moq: 1, vendor: "EcoPower", img: "https://picsum.photos/seed/gen/300/300", type: "Retail", rating: 4.8, reviews: 124, description: "High-capacity solar generator perfect for small businesses and homes. Includes 2 solar panels and battery unit.", inStock: true },
  { id: 2, name: "Bulk Cassava (1 Ton)", price: "₦150,000", moq: 5, vendor: "AgriConnect", img: "https://picsum.photos/seed/cassava/300/300", type: "Wholesale", rating: 4.5, reviews: 89, description: "Premium quality cassava sourced directly from local farmers. Ideal for processing into garri or flour.", inStock: false },
  { id: 3, name: "Web Dev Services", price: "₦500,000", moq: 1, vendor: "TechHub Africa", img: "https://picsum.photos/seed/code/300/300", type: "Service", rating: 5.0, reviews: 42, description: "Full-stack web development services for e-commerce and corporate websites. Includes 1 year of free maintenance.", inStock: true },
  { id: 4, name: "Wholesale Fabrics", price: "₦50,000/bndl", moq: 10, vendor: "Lagos Textiles", img: "https://picsum.photos/seed/fabric/300/300", type: "Wholesale", rating: 4.2, reviews: 215, description: "High-quality Ankara fabrics in various vibrant patterns. Sold in bundles of 6 yards each.", inStock: true },
  { id: 5, name: "Delivery Van Hire", price: "₦20,000/day", moq: 1, vendor: "FastLogistics", img: "https://picsum.photos/seed/van/300/300", type: "Service", rating: 4.7, reviews: 310, description: "Reliable delivery van hire for intra-city logistics. Driver included. Fuel not included.", inStock: false },
  { id: 6, name: "Irrigation Kit", price: "₦45,000", moq: 2, vendor: "AgriConnect", img: "https://picsum.photos/seed/water/300/300", type: "Retail", rating: 4.6, reviews: 56, description: "Complete drip irrigation kit for small to medium-sized farms. Easy to install and highly efficient.", inStock: true },
];

const mockTenders = [
  { id: 1, title: "Rural Electrification Project", agency: "Ministry of Power", deadline: "12 May 2026", budget: "₦500M", type: "Gov Tender" },
  { id: 2, title: "Supply of Agricultural Machinery", agency: "Dept of Agriculture", deadline: "20 Apr 2026", budget: "₦150M", type: "Gov Tender" },
];

const mockJobs = [
  { id: 1, title: "Senior React Developer", company: "TechHub Africa", salary: "₦800k/mo", type: "Hiring", location: "Lagos (Remote)" },
  { id: 2, title: "Logistics Coordinator", company: "FastLogistics", salary: "₦250k/mo", type: "Hiring", location: "Abuja" },
];

const mockSeekers = [
  { id: 1, name: "Oluwaseun Adeyemi", role: "UI/UX Designer", skills: ["Figma", "React"], availability: "Immediate", type: "Looking for Work", avatar: "https://picsum.photos/seed/uiux/100/100" },
  { id: 2, name: "Chioma Nwosu", role: "Civil Engineer", skills: ["AutoCAD", "Project Management"], availability: "2 weeks", type: "Looking for Work", avatar: "https://picsum.photos/seed/civil/100/100" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isChatListOpen, setIsChatListOpen] = useState(false);
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [isListProductOpen, setIsListProductOpen] = useState(false);
  const [isPromoteOpen, setIsPromoteOpen] = useState(false);
  const [composeText, setComposeText] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [workFilter, setWorkFilter] = useState('all');
  const [marketCategory, setMarketCategory] = useState('All');
  const [priceFilter, setPriceFilter] = useState('all');
  const [stockFilter, setStockFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');

  const filteredProducts = mockProducts.filter(product => {
    // Category filter
    if (marketCategory !== 'All') {
      if (marketCategory === 'Flash Deals' && !product.inStock) return false;
      if (marketCategory === 'Wholesale' && product.type !== 'Wholesale') return false;
      if (marketCategory === 'Agriculture' && product.vendor !== 'AgriConnect') return false;
      if (marketCategory === 'Tech' && product.vendor !== 'TechHub Africa' && product.vendor !== 'EcoPower') return false;
      if (marketCategory === 'Logistics' && product.vendor !== 'FastLogistics') return false;
    }

    // Stock filter
    if (stockFilter === 'in_stock' && !product.inStock) return false;
    if (stockFilter === 'out_of_stock' && product.inStock) return false;

    // Rating filter
    if (ratingFilter === '4_plus' && product.rating < 4.0) return false;
    if (ratingFilter === '4.5_plus' && product.rating < 4.5) return false;

    // Price filter
    if (priceFilter !== 'all') {
      const numericPrice = parseInt(product.price.replace(/[^\d]/g, ''), 10);
      if (priceFilter === 'under_50k' && numericPrice >= 50000) return false;
      if (priceFilter === '50k_200k' && (numericPrice < 50000 || numericPrice > 200000)) return false;
      if (priceFilter === 'over_200k' && numericPrice <= 200000) return false;
    }

    return true;
  });
  
  // Group Buy State
  const [groupBuys, setGroupBuys] = useState<Record<number, any>>({
    1: { target: 100, current: 45, expiresAt: new Date(Date.now() + 86400000 * 3).toISOString() }
  });
  const [isCreatingGroupBuy, setIsCreatingGroupBuy] = useState(false);
  const [groupBuyTarget, setGroupBuyTarget] = useState(50);
  const [groupBuyDuration, setGroupBuyDuration] = useState(7);

  const renderChatList = () => (
    <div className="absolute inset-0 bg-white z-50 flex flex-col">
      <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200 text-gray-900">
        <div className="flex items-center gap-3">
          <button onClick={() => setIsChatListOpen(false)} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-xl font-bold">Inbox</h2>
        </div>
        <div className="flex gap-2 items-center text-gray-600">
          <button className="hover:bg-gray-100 p-2 rounded-full transition-colors"><Search size={20} /></button>
          <button className="hover:bg-gray-100 p-2 rounded-full transition-colors"><MoreVertical size={20} /></button>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto bg-white">
        {mockChats.map(chat => (
          <div key={chat.id} onClick={() => setActiveChat(chat.id)} className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
            <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-semibold text-[16px] truncate text-gray-900">{chat.name}</h3>
                <span className={cn("text-xs", chat.unread ? "text-blue-600 font-bold" : "text-gray-500")}>{chat.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className={cn("text-sm truncate pr-2", chat.unread ? "text-gray-900 font-medium" : "text-gray-500")}>
                  {chat.lastMessage}
                </p>
                {chat.unread > 0 && (
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0">
                    {chat.unread}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderActiveChat = () => {
    const chat = mockChats.find(c => c.id === activeChat);
    if (!chat) return null;

    return (
      <div className="absolute inset-0 bg-gray-50 z-[60] flex flex-col">
        <header className="bg-white text-gray-900 flex items-center justify-between p-3 border-b border-gray-200 shadow-sm z-10">
          <div className="flex items-center gap-2">
            <button onClick={() => setActiveChat(null)} className="p-2 -ml-2 hover:bg-gray-100 rounded-full flex items-center text-gray-600">
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="cursor-pointer">
                <h2 className="font-bold text-[16px] leading-tight">{chat.name}</h2>
                <p className="text-[12px] text-gray-500 font-medium">Customer • Active now</p>
              </div>
            </div>
          </div>
          <div className="flex gap-1 items-center text-gray-600">
            <button className="p-2 hover:bg-gray-100 rounded-full" title="Create Invoice"><CreditCard size={20} /></button>
            <button className="p-2 hover:bg-gray-100 rounded-full" title="Schedule Meeting"><Video size={20} /></button>
            <button className="p-2 hover:bg-gray-100 rounded-full"><MoreVertical size={20} /></button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {mockMessages.map(msg => (
            <div key={msg.id} className={cn("flex flex-col max-w-[85%]", msg.isUser ? "ml-auto items-end" : "mr-auto items-start")}>
              <div className={cn(
                "px-4 py-2.5 rounded-2xl shadow-sm relative",
                msg.isUser ? "bg-blue-600 text-white rounded-br-sm" : "bg-white border border-gray-200 text-gray-900 rounded-bl-sm"
              )}>
                <p className="text-[15px] leading-relaxed">{msg.text}</p>
                {msg.isOrder && (
                  <div className="mt-3 bg-white border border-gray-100 rounded-xl p-4 text-gray-900 w-full min-w-[240px] shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-gray-700">
                        <ShoppingCart size={18} className="text-blue-600" />
                        <span className="font-bold text-sm">Purchase Order</span>
                      </div>
                      <span className="text-xs font-medium text-gray-500">#PO-2094</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-2xl font-bold">₦150,000</p>
                      <p className="text-xs text-gray-500 mt-0.5">Due on receipt</p>
                    </div>
                    <button className="w-full bg-blue-600 text-white text-sm font-bold py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                      Process Payment
                    </button>
                  </div>
                )}
                <div className={cn("flex items-center justify-end gap-1 mt-1.5", msg.isUser ? "text-blue-100" : "text-gray-400")}>
                  <span className="text-[11px]">{msg.time}</span>
                  {msg.isUser && <CheckCheck size={14} />}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-3 border-t border-gray-200 flex items-end gap-2">
          <button className="p-2.5 text-gray-500 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0">
            <Plus size={22} />
          </button>
          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl flex items-end px-3 py-2 min-h-[44px] focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
            <textarea 
              placeholder="Type a message..." 
              className="bg-transparent outline-none flex-1 text-[15px] max-h-32 resize-none py-1 px-1"
              rows={1}
            />
            <div className="flex items-center gap-1 ml-2 mb-0.5">
              <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-200 transition-colors">
                <Paperclip size={18} />
              </button>
              <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-200 transition-colors">
                <Smile size={18} />
              </button>
            </div>
          </div>
          <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex-shrink-0 shadow-sm">
            <Send size={18} className="ml-0.5" />
          </button>
        </div>
      </div>
    );
  };

  const renderCompose = () => (
    <div className="absolute inset-0 bg-white z-[70] flex flex-col animate-in slide-in-from-bottom-full duration-200">
      <header className="flex justify-between items-center p-4 border-b border-gray-100">
        <button onClick={() => setIsComposeOpen(false)} className="text-gray-900 p-2 -ml-2 rounded-full hover:bg-gray-100">
          <X size={24} />
        </button>
        <button 
          className={cn(
            "px-5 py-1.5 rounded-full font-bold text-[15px] transition-colors",
            composeText.trim() ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-blue-300 text-white cursor-not-allowed"
          )}
        >
          Post
        </button>
      </header>
      <div className="flex-1 p-4 flex gap-3">
        <img src="https://picsum.photos/seed/user1/150/150" alt="Profile" className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
        <div className="flex-1">
          <textarea 
            autoFocus
            placeholder="What's happening?"
            className="w-full text-xl outline-none resize-none min-h-[150px] placeholder:text-gray-500"
            value={composeText}
            onChange={(e) => setComposeText(e.target.value)}
          />
        </div>
      </div>
      <div className="border-t border-gray-100 p-4 flex items-center gap-4 text-blue-500">
        <button className="p-2 hover:bg-blue-50 rounded-full"><ImageIcon size={22} /></button>
        <button className="p-2 hover:bg-blue-50 rounded-full"><MapPin size={22} /></button>
        <button className="p-2 hover:bg-blue-50 rounded-full"><Smile size={22} /></button>
      </div>
    </div>
  );

  const renderPromote = () => (
    <div className="absolute inset-0 bg-black/50 z-[80] flex flex-col justify-end animate-in fade-in duration-200">
      <div className="bg-white rounded-t-3xl p-6 animate-in slide-in-from-bottom-full duration-300">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Megaphone className="text-blue-600" /> Promote Post
          </h2>
          <button onClick={() => setIsPromoteOpen(false)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Goal</label>
            <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-blue-500">
              <option>More Website Visits</option>
              <option>More Messages</option>
              <option>More Profile Visits</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Audience</label>
            <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-blue-500">
              <option>Automatic (Similar to your followers)</option>
              <option>Create your own</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Budget & Duration</label>
            <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5">
              <span className="font-bold">₦5,000 / day</span>
              <span className="text-gray-500">for 5 days</span>
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-bold text-blue-900">Total Spend</span>
              <span className="text-lg font-bold text-blue-600">₦25,000</span>
            </div>
            <p className="text-xs text-blue-700">Est. Reach: 15,000 - 45,000 people</p>
          </div>
        </div>

        <button 
          onClick={() => setIsPromoteOpen(false)}
          className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 flex justify-center items-center gap-2"
        >
          <DollarSign size={20} /> Pay & Create Ad
        </button>
      </div>
    </div>
  );

  const renderListProduct = () => (
    <div className="absolute inset-0 bg-white z-[70] flex flex-col animate-in slide-in-from-bottom-full duration-200">
      <header className="flex justify-between items-center p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button onClick={() => setIsListProductOpen(false)} className="text-gray-900 p-2 -ml-2 rounded-full hover:bg-gray-100">
            <X size={24} />
          </button>
          <h2 className="text-xl font-bold">List Product</h2>
        </div>
        <button 
          onClick={() => setIsListProductOpen(false)}
          className="px-5 py-1.5 rounded-full font-bold text-[15px] bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Publish
        </button>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col items-center justify-center h-40 border-dashed cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="bg-blue-50 p-3 rounded-full text-blue-600 mb-2">
            <Camera size={24} />
          </div>
          <p className="font-bold text-sm text-gray-700">Add Photos</p>
          <p className="text-xs text-gray-500 mt-1">Up to 10 images</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <input type="text" placeholder="Product Title" className="w-full px-4 py-3 border-b border-gray-100 outline-none font-medium" />
          <textarea placeholder="Description" className="w-full px-4 py-3 border-b border-gray-100 outline-none resize-none min-h-[100px]" />
          <div className="flex border-b border-gray-100">
            <div className="flex-1 border-r border-gray-100 relative">
              <span className="absolute left-4 top-3 text-gray-500 font-bold">₦</span>
              <input type="number" placeholder="Price" className="w-full pl-8 pr-4 py-3 outline-none" />
            </div>
            <div className="flex-1 relative">
              <input type="number" placeholder="Min. Order Qty" className="w-full px-4 py-3 outline-none" />
            </div>
          </div>
          <select className="w-full px-4 py-3 outline-none bg-transparent text-gray-700">
            <option value="" disabled selected>Select Category</option>
            <option>Wholesale</option>
            <option>Agriculture</option>
            <option>Tech Services</option>
            <option>Logistics</option>
          </select>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between">
          <div>
            <p className="font-bold text-sm text-gray-900">Wholesale Pricing</p>
            <p className="text-xs text-gray-500">Offer discounts for bulk orders</p>
          </div>
          <div className="w-10 h-6 bg-blue-600 rounded-full relative cursor-pointer">
            <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuickView = () => {
    if (!selectedProduct) return null;
    return (
      <div className="absolute inset-0 bg-black/60 z-[90] flex flex-col justify-end animate-in fade-in duration-200">
        <div className="bg-white rounded-t-3xl overflow-hidden flex flex-col max-h-[85vh] animate-in slide-in-from-bottom-full duration-300">
          <div className="relative">
            <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
            <button 
              onClick={() => { setSelectedProduct(null); setIsCreatingGroupBuy(false); }} 
              className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 backdrop-blur-sm"
            >
              <X size={20} />
            </button>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              {selectedProduct.type}
            </div>
            {!selectedProduct.inStock && (
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                Sold Out
              </div>
            )}
          </div>
          
          <div className="p-5 flex-1 overflow-y-auto">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-bold text-gray-900 leading-tight pr-4">{selectedProduct.name}</h2>
              <button className="text-gray-400 hover:text-red-500 transition-colors shrink-0">
                <Heart size={24} />
              </button>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center text-yellow-500">
                <Star size={16} className="fill-yellow-500" />
                <span className="font-bold ml-1 text-sm">{selectedProduct.rating}</span>
              </div>
              <span className="text-gray-400 text-sm">•</span>
              <span className="text-gray-600 text-sm underline cursor-pointer">{selectedProduct.reviews} reviews</span>
            </div>

            <p className="text-2xl font-bold text-gray-900 mb-1">{selectedProduct.price}</p>
            <p className="text-sm text-gray-500 mb-6">Min. Order: {selectedProduct.moq} {selectedProduct.moq > 1 ? 'units' : 'unit'}</p>

            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{selectedProduct.description}</p>
            </div>

            {/* Group Buy Section */}
            <div className="mb-6 bg-indigo-50 rounded-xl p-4 border border-indigo-100">
              <div className="flex items-center gap-2 mb-3">
                <Users size={20} className="text-indigo-600" />
                <h3 className="font-bold text-indigo-900">Order with me (Group Buy)</h3>
              </div>
              
              {groupBuys[selectedProduct.id] ? (
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-indigo-800">{groupBuys[selectedProduct.id].current} / {groupBuys[selectedProduct.id].target} units</span>
                    <span className="text-indigo-600 font-bold">{Math.round((groupBuys[selectedProduct.id].current / groupBuys[selectedProduct.id].target) * 100)}%</span>
                  </div>
                  <div className="w-full bg-indigo-200 rounded-full h-2.5 mb-3 overflow-hidden">
                    <div className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${Math.min(100, (groupBuys[selectedProduct.id].current / groupBuys[selectedProduct.id].target) * 100)}%` }}></div>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs text-indigo-700 flex items-center gap-1"><Clock size={12}/> Ends in {Math.max(0, Math.ceil((new Date(groupBuys[selectedProduct.id].expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))} days</p>
                    <p className="text-xs text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-full font-medium">Wholesale Price Unlocked</p>
                  </div>
                  <button 
                    onClick={() => {
                      setGroupBuys(prev => ({
                        ...prev,
                        [selectedProduct.id]: {
                          ...prev[selectedProduct.id],
                          current: prev[selectedProduct.id].current + 1
                        }
                      }));
                    }}
                    className="w-full bg-indigo-600 text-white font-bold py-2.5 rounded-lg hover:bg-indigo-700 transition-colors text-sm shadow-sm"
                  >
                    Join Group Buy
                  </button>
                </div>
              ) : isCreatingGroupBuy ? (
                <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div>
                    <label className="block text-xs font-bold text-indigo-900 mb-1">Target Quantity (Units)</label>
                    <input type="number" value={groupBuyTarget} onChange={e => setGroupBuyTarget(Number(e.target.value))} className="w-full p-2 rounded-lg border border-indigo-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-indigo-900 mb-1">Duration (Days)</label>
                    <input type="number" value={groupBuyDuration} onChange={e => setGroupBuyDuration(Number(e.target.value))} className="w-full p-2 rounded-lg border border-indigo-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button onClick={() => setIsCreatingGroupBuy(false)} className="flex-1 bg-white text-indigo-600 border border-indigo-200 font-bold py-2 rounded-lg hover:bg-indigo-50 transition-colors text-sm">Cancel</button>
                    <button 
                      onClick={() => {
                        setGroupBuys(prev => ({
                          ...prev,
                          [selectedProduct.id]: {
                            target: groupBuyTarget,
                            current: 1,
                            expiresAt: new Date(Date.now() + 86400000 * groupBuyDuration).toISOString()
                          }
                        }));
                        setIsCreatingGroupBuy(false);
                      }} 
                      className="flex-1 bg-indigo-600 text-white font-bold py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm shadow-sm"
                    >
                      Start Group Buy
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-indigo-800 mb-3">Start a group buy to unlock wholesale prices. Invite others to join your order and save together!</p>
                  <button onClick={() => setIsCreatingGroupBuy(true)} className="w-full bg-white text-indigo-600 border border-indigo-200 font-bold py-2.5 rounded-lg hover:bg-indigo-50 transition-colors text-sm shadow-sm">
                    Initiate Group Buy
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Store size={20} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm text-gray-900">{selectedProduct.vendor}</p>
                <p className="text-xs text-gray-500">Verified Supplier</p>
              </div>
              <button className="text-blue-600 text-sm font-bold px-3 py-1.5 bg-blue-50 rounded-lg hover:bg-blue-100">
                Visit Store
              </button>
            </div>
          </div>

          <div className="p-4 border-t border-gray-100 bg-white flex gap-3 pb-safe">
            <button 
              className={cn("flex-1 text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg", selectedProduct.inStock ? "bg-blue-600 hover:bg-blue-700 shadow-blue-500/30" : "bg-gray-400 cursor-not-allowed")}
              disabled={!selectedProduct.inStock}
            >
              {selectedProduct.inStock ? "Buy Now" : "Sold Out"}
            </button>
            <button className="px-6 bg-gray-100 text-gray-700 font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-colors flex items-center gap-2">
              <MessageCircle size={20} /> Chat
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center font-sans text-gray-900">
      <div className="w-full max-w-md bg-white h-[100dvh] relative shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header (LinkedIn/FB/Insta Hybrid) */}
        <header className="bg-white pt-8 pb-2 px-4 sticky top-0 z-20 border-b border-gray-200 flex flex-col gap-3 shadow-sm">
          <div className="flex justify-between items-center">
            {/* Logo (LinkedIn/FB vibe) */}
            <div className="flex items-center gap-1.5">
              <div className="bg-blue-600 text-white p-1 rounded font-bold text-lg leading-none tracking-tighter w-7 h-7 flex items-center justify-center">in</div>
              <h1 className="text-xl font-bold tracking-tight text-gray-900">Biz<span className="text-blue-600">Connect</span></h1>
            </div>
            
            {/* Actions (Instagram/FB vibe) */}
            <div className="flex gap-2 items-center">
              <button 
                onClick={() => setIsComposeOpen(true)}
                className="text-gray-900 hover:bg-gray-100 p-2 rounded-full transition-colors bg-gray-50"
              >
                <PlusSquare size={22} />
              </button>
              <button 
                onClick={() => setActiveTab('notifications')}
                className="text-gray-900 hover:bg-gray-100 p-2 rounded-full transition-colors relative bg-gray-50"
              >
                <Heart size={22} />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
            </div>
          </div>
          
          {/* Search Bar (LinkedIn/FB vibe) */}
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5 mb-1">
            <Search size={18} className="text-gray-500" />
            <input type="text" placeholder="Search jobs, products, people..." className="bg-transparent outline-none flex-1 ml-2 text-[14px]" />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-50 relative hide-scrollbar">
          
          {/* Stories (Instagram style) */}
          {activeTab === 'home' && (
            <div className="bg-white py-4 px-2 border-b border-gray-200 flex gap-4 overflow-x-auto hide-scrollbar">
              {mockStories.map(story => (
                <div key={story.id} className="flex flex-col items-center gap-1 flex-shrink-0 cursor-pointer">
                  <div className={cn(
                    "p-[2px] rounded-full",
                    story.hasUnseen ? "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500" : "bg-gray-200",
                    story.isUser && !story.hasUnseen && "bg-transparent"
                  )}>
                    <div className="bg-white p-[2px] rounded-full relative">
                      <img src={story.avatar} alt={story.name} className="w-16 h-16 rounded-full object-cover" referrerPolicy="no-referrer" />
                      {story.isUser && (
                        <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full border-2 border-white p-0.5">
                          <Plus size={12} />
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-gray-600 truncate w-16 text-center">
                    {story.name}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Feed (X/Facebook/Insta Hybrid) */}
          {activeTab === 'home' && (
            <div className="divide-y divide-gray-200">
              {feedPosts.map(post => (
                <article key={post.id} className="bg-white p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex gap-3">
                    {/* Left Col: Avatar (X style) */}
                    <div className="flex-shrink-0">
                      <img src={post.businessAvatar} alt={post.businessName} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    
                    {/* Right Col: Content */}
                    <div className="flex-1 min-w-0">
                      {/* Post Header */}
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-1 flex-wrap">
                          <span className="font-bold text-[15px] hover:underline">{post.businessName}</span>
                          {post.isVerified && <CheckCircle2 size={14} className="text-blue-500 fill-blue-50" />}
                          <span className="text-gray-500 text-[15px]">{post.handle}</span>
                          <span className="text-gray-500 text-[15px]">· {post.timeAgo}</span>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-blue-50 transition-colors">
                          <MoreVertical size={18} />
                        </button>
                      </div>

                      {/* Post Text (Facebook/X style) */}
                      <p className="text-[15px] text-gray-900 mt-1 mb-3 whitespace-pre-wrap">
                        {post.text}
                      </p>

                      {/* Post Image (Instagram style) */}
                      {post.image && (
                        <div className="rounded-2xl overflow-hidden border border-gray-200 mb-3 relative group">
                          <img src={post.image} alt="Post content" className="w-full h-auto object-cover max-h-[400px]" referrerPolicy="no-referrer" />
                          {post.isAd && (
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 pt-8 flex justify-between items-end">
                              <span className="text-white text-[12px] font-bold bg-black/50 px-2 py-1 rounded backdrop-blur-sm">Sponsored</span>
                              {post.actionText && (
                                <button className="bg-blue-600 text-white text-sm font-bold px-4 py-1.5 rounded-full hover:bg-blue-700 transition-colors">
                                  {post.actionText}
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Product Card / Order Button */}
                      {post.product && (
                        <div className="mb-3 border border-gray-200 rounded-xl p-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-2.5 rounded-lg text-blue-600">
                              <ShoppingBag size={20} />
                            </div>
                            <div>
                              <p className="font-bold text-[15px] leading-tight">{post.product.name}</p>
                              <div className="flex items-center gap-2 mt-0.5">
                                <p className="text-blue-600 font-bold text-sm">{post.product.price}</p>
                                {post.product.isWholesale && (
                                  <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-1.5 py-0.5 rounded">Wholesale (Min: {post.product.moq})</span>
                                )}
                              </div>
                            </div>
                          </div>
                          <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
                            Buy Now
                          </button>
                        </div>
                      )}

                      {/* Tender Card */}
                      {post.isTender && post.tenderDetails && (
                        <div className="mb-3 border border-gray-200 rounded-xl p-3 bg-blue-50/50 hover:bg-blue-50 transition-colors cursor-pointer">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                                <Building size={18} />
                              </div>
                              <div>
                                <p className="font-bold text-[14px] leading-tight text-blue-900">{post.tenderDetails.title}</p>
                                <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded mt-1 inline-block">{post.tenderDetails.type}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center text-xs text-gray-600 mt-2 bg-white p-2 rounded-lg border border-blue-100">
                            <span className="flex items-center gap-1"><Clock size={12}/> {post.tenderDetails.deadline}</span>
                            <span className="font-bold text-gray-900">{post.tenderDetails.budget}</span>
                          </div>
                          <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">
                            View Tender Details
                          </button>
                        </div>
                      )}

                      {/* Job Card */}
                      {post.isJob && post.jobDetails && (
                        <div className="mb-3 border border-gray-200 rounded-xl p-3 bg-green-50/50 hover:bg-green-50 transition-colors cursor-pointer">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                                <Briefcase size={18} />
                              </div>
                              <div>
                                <p className="font-bold text-[14px] leading-tight text-green-900">{post.jobDetails.title}</p>
                                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded mt-1 inline-block">{post.jobDetails.type}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center text-xs text-gray-600 mt-2 bg-white p-2 rounded-lg border border-green-100">
                            <span className="flex items-center gap-1"><MapPin size={12}/> {post.jobDetails.location}</span>
                            <span className="font-bold text-gray-900">{post.jobDetails.salary}</span>
                          </div>
                          <button className="w-full mt-2 bg-green-600 text-white py-2 rounded-lg text-sm font-bold hover:bg-green-700 transition-colors">
                            Apply Now
                          </button>
                        </div>
                      )}

                      {/* Seeker Card */}
                      {post.isSeeker && post.seekerDetails && (
                        <div className="mb-3 border border-gray-200 rounded-xl p-3 bg-purple-50/50 hover:bg-purple-50 transition-colors cursor-pointer">
                          <div className="flex items-start gap-3 mb-2">
                            <div className="bg-purple-100 p-2 rounded-lg text-purple-600 shrink-0">
                              <Users size={18} />
                            </div>
                            <div>
                              <p className="font-bold text-[14px] leading-tight text-purple-900">{post.seekerDetails.role}</p>
                              <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-1.5 py-0.5 rounded mt-1 inline-block">{post.seekerDetails.type}</span>
                            </div>
                          </div>
                          <div className="bg-white p-2 rounded-lg border border-purple-100 mt-2">
                            <div className="flex flex-wrap gap-1.5 mb-2">
                              {post.seekerDetails.skills.map((skill: string) => (
                                <span key={skill} className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full font-medium">{skill}</span>
                              ))}
                            </div>
                            <p className="text-xs text-gray-600 flex items-center gap-1"><Clock size={12}/> Available: <span className="font-bold text-gray-900">{post.seekerDetails.availability}</span></p>
                          </div>
                          <button className="w-full mt-2 bg-purple-600 text-white py-2 rounded-lg text-sm font-bold hover:bg-purple-700 transition-colors">
                            Contact {post.businessName.split(' ')[0]}
                          </button>
                        </div>
                      )}

                      {/* Action Bar (X style layout, Insta/FB actions) */}
                      <div className="flex justify-between items-center text-gray-500 max-w-md pr-4">
                        <button className="flex items-center gap-1.5 hover:text-blue-500 transition-colors group">
                          <div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors">
                            <MessageCircle size={18} />
                          </div>
                          <span className="text-xs">{post.comments}</span>
                        </button>
                        <button className="flex items-center gap-1.5 hover:text-green-500 transition-colors group">
                          <div className="p-2 rounded-full group-hover:bg-green-50 transition-colors">
                            <Repeat size={18} />
                          </div>
                          <span className="text-xs">{post.reposts}</span>
                        </button>
                        <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors group">
                          <div className="p-2 rounded-full group-hover:bg-red-50 transition-colors">
                            <Heart size={18} />
                          </div>
                          <span className="text-xs">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-1.5 hover:text-blue-500 transition-colors group">
                          <div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors">
                            <BarChart2 size={18} />
                          </div>
                          <span className="text-xs">{post.views}</span>
                        </button>
                        <div className="flex items-center gap-2">
                          {post.isUser ? (
                            <button 
                              onClick={() => setIsPromoteOpen(true)}
                              className="flex items-center gap-1 text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
                            >
                              <Megaphone size={14} /> Promote
                            </button>
                          ) : (
                            <>
                              <button className="p-2 rounded-full hover:bg-blue-50 hover:text-blue-500 transition-colors">
                                <Bookmark size={18} />
                              </button>
                              <button className="p-2 rounded-full hover:bg-blue-50 hover:text-blue-500 transition-colors">
                                <Share2 size={18} />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Network Tab */}
          {activeTab === 'network' && (
            <div className="p-4 bg-gray-50 min-h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-xl">My Network</h2>
                <button className="text-blue-600 text-sm font-bold">Manage</button>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
                <div className="p-3 border-b border-gray-100 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                  <span className="font-medium text-gray-700">Connections</span>
                  <span className="text-gray-500">1,024</span>
                </div>
                <div className="p-3 border-b border-gray-100 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                  <span className="font-medium text-gray-700">Following & followers</span>
                  <span className="text-gray-500">56.7K</span>
                </div>
                <div className="p-3 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                  <span className="font-medium text-gray-700">Groups</span>
                  <span className="text-gray-500">12</span>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-3">People you may know</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Sarah Jenkins", role: "Product Manager at TechCorp", mutual: "12 mutual connections", avatar: "https://picsum.photos/seed/sarah/150/150" },
                  { name: "David Okeke", role: "Software Engineer", mutual: "5 mutual connections", avatar: "https://picsum.photos/seed/david/150/150" },
                  { name: "Aisha Mohammed", role: "Founder @ AgriConnect", mutual: "28 mutual connections", avatar: "https://picsum.photos/seed/aisha/150/150" },
                  { name: "Michael Chen", role: "UX Designer", mutual: "3 mutual connections", avatar: "https://picsum.photos/seed/michael/150/150" },
                ].map((person, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-3 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <img src={person.avatar} alt={person.name} className="w-16 h-16 rounded-full mb-2 object-cover" referrerPolicy="no-referrer" />
                    <h4 className="font-bold text-[14px] leading-tight mb-1">{person.name}</h4>
                    <p className="text-[11px] text-gray-500 line-clamp-2 mb-1 h-8">{person.role}</p>
                    <p className="text-[10px] text-gray-400 mb-3 flex items-center gap-1"><Users size={10}/> {person.mutual}</p>
                    <button className="w-full py-1.5 border border-blue-600 text-blue-600 rounded-full text-xs font-bold hover:bg-blue-50 transition-colors mt-auto">
                      Connect
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="bg-white min-h-full">
              <div className="h-32 bg-gray-300 relative">
                <img src="https://picsum.photos/seed/banner/800/300" alt="Banner" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="px-4 pb-4 relative">
                <div className="flex justify-between items-end -mt-12 mb-4">
                  <img src="https://picsum.photos/seed/user1/150/150" alt="Profile" className="w-24 h-24 rounded-full border-4 border-white object-cover relative z-10 bg-white" referrerPolicy="no-referrer" />
                  <button className="border border-gray-300 font-bold text-[15px] px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">
                    Edit profile
                  </button>
                </div>
                <div>
                  <h2 className="font-bold text-xl leading-tight">Your Name</h2>
                  <p className="text-gray-500 text-[15px]">@yourhandle</p>
                </div>
                <p className="mt-3 text-[15px]">Building the future of social media. 🚀 Developer & Designer.</p>
                <div className="flex gap-4 mt-3 text-[15px]">
                  <span className="text-gray-500"><strong className="text-gray-900">1,234</strong> Following</span>
                  <span className="text-gray-500"><strong className="text-gray-900">56.7K</strong> Followers</span>
                </div>
              </div>
              <div className="flex border-b border-gray-200">
                <button className="flex-1 py-3 font-bold text-gray-900 border-b-2 border-blue-500">Posts</button>
                <button className="flex-1 py-3 font-bold text-gray-500 hover:bg-gray-50">Replies</button>
                <button className="flex-1 py-3 font-bold text-gray-500 hover:bg-gray-50">Media</button>
                <button className="flex-1 py-3 font-bold text-gray-500 hover:bg-gray-50">Likes</button>
              </div>
              <div className="p-8 text-center text-gray-500">
                <p className="font-bold text-lg text-gray-900 mb-1">No posts yet</p>
                <p>When you post, they will show up here.</p>
              </div>
            </div>
          )}

          {/* Market Tab (Alibaba/AliExpress Hybrid) */}
          {activeTab === 'market' && (
            <div className="bg-gray-50 min-h-full pb-6">
              {/* Market Header */}
              <div className="bg-white p-4 border-b border-gray-200 sticky top-0 z-10">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="font-bold text-xl flex items-center gap-1">
                    <ShoppingBag size={22} className="text-blue-600" /> B2B Market
                  </h2>
                  <button 
                    onClick={() => setIsListProductOpen(true)}
                    className="bg-blue-600 text-white font-bold text-[13px] px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    <Plus size={16}/> List Product
                  </button>
                </div>
                
                {/* Search & Filter */}
                <div className="flex gap-2">
                  <div className="flex-1 bg-gray-100 rounded-lg flex items-center px-3 py-2">
                    <Search size={18} className="text-gray-500" />
                    <input type="text" placeholder="Search suppliers, products..." className="bg-transparent outline-none flex-1 ml-2 text-[14px]" />
                  </div>
                  <button className="bg-gray-100 p-2 rounded-lg text-gray-700 hover:bg-gray-200">
                    <Grid size={20} />
                  </button>
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white py-3 mb-2 border-b border-gray-200">
                <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4">
                  {[
                    { name: 'All', icon: <Grid size={18} className={marketCategory === 'All' ? "text-blue-600" : "text-gray-500"} /> },
                    { name: 'Flash Deals', icon: <Zap size={18} className="text-orange-500" /> },
                    { name: 'Wholesale', icon: <Package size={18} className="text-blue-500" /> },
                    { name: 'Agriculture', icon: <Store size={18} className="text-green-500" /> },
                    { name: 'Tech', icon: <Monitor size={18} className="text-purple-500" /> },
                    { name: 'Logistics', icon: <MapPin size={18} className="text-red-500" /> }
                  ].map(cat => (
                    <button 
                      key={cat.name} 
                      onClick={() => setMarketCategory(cat.name)}
                      className="flex flex-col items-center gap-1.5 flex-shrink-0 group"
                    >
                      <div className={cn("w-12 h-12 rounded-full flex items-center justify-center border transition-colors", marketCategory === cat.name ? "bg-blue-100 border-blue-300" : "bg-gray-50 border-gray-100 group-hover:border-blue-200 group-hover:bg-blue-50")}>
                        {cat.icon}
                      </div>
                      <span className={cn("text-[11px] font-medium", marketCategory === cat.name ? "text-blue-600 font-bold" : "text-gray-700")}>{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Advanced Filters */}
              <div className="px-4 mb-4 flex gap-2 overflow-x-auto hide-scrollbar">
                <select 
                  className="bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-full px-3 py-1.5 outline-none focus:border-blue-500 flex-shrink-0"
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                >
                  <option value="all">Any Price</option>
                  <option value="under_50k">Under ₦50k</option>
                  <option value="50k_200k">₦50k - ₦200k</option>
                  <option value="over_200k">Over ₦200k</option>
                </select>

                <select 
                  className="bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-full px-3 py-1.5 outline-none focus:border-blue-500 flex-shrink-0"
                  value={stockFilter}
                  onChange={(e) => setStockFilter(e.target.value)}
                >
                  <option value="all">All Stock</option>
                  <option value="in_stock">In Stock</option>
                  <option value="out_of_stock">Sold Out</option>
                </select>

                <select 
                  className="bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-full px-3 py-1.5 outline-none focus:border-blue-500 flex-shrink-0"
                  value={ratingFilter}
                  onChange={(e) => setRatingFilter(e.target.value)}
                >
                  <option value="all">Any Rating</option>
                  <option value="4_plus">4.0+ Stars</option>
                  <option value="4.5_plus">4.5+ Stars</option>
                </select>
              </div>

              {/* Product Grid */}
              <div className="px-3">
                <div className="flex justify-between items-center mb-3 px-1">
                  <h3 className="font-bold text-gray-900 flex items-center gap-1.5">
                    {marketCategory === 'All' ? <><TrendingUp size={18} className="text-red-500" /> Recommended for you</> : <>{marketCategory}</>}
                  </h3>
                  <button className="text-blue-600 text-[13px] font-bold">See all</button>
                </div>
                
                <div className="grid grid-cols-2 gap-2.5">
                  {filteredProducts.map((item) => (
                    <div key={item.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all group flex flex-col">
                      <div className="relative cursor-pointer" onClick={() => { setSelectedProduct(item); setIsCreatingGroupBuy(false); }}>
                        <img src={item.img} alt={item.name} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
                        <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          {item.type}
                        </div>
                        {!item.inStock && (
                          <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                            Sold Out
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-sm text-gray-900 rounded-full p-2 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                            <Eye size={20} />
                          </div>
                        </div>
                      </div>
                      <div className="p-3 flex-1 flex flex-col justify-between">
                        <div className="cursor-pointer" onClick={() => { setSelectedProduct(item); setIsCreatingGroupBuy(false); }}>
                          <h3 className="font-medium text-[13px] leading-tight line-clamp-2 mb-1 text-gray-800 group-hover:text-blue-600 transition-colors">{item.name}</h3>
                          <div className="flex items-center gap-1 mb-1">
                            <Star size={10} className="fill-yellow-500 text-yellow-500" />
                            <span className="text-[10px] font-bold text-gray-700">{item.rating}</span>
                            <span className="text-[10px] text-gray-400">({item.reviews})</span>
                          </div>
                          <p className="text-gray-900 font-bold text-[16px]">{item.price}</p>
                          <p className="text-[10px] text-gray-500 mt-0.5">Min. Order: {item.moq} {item.moq > 1 ? 'units' : 'unit'}</p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-gray-100 flex flex-col gap-2">
                          <p className="text-[11px] text-gray-600 flex items-center gap-1 truncate">
                            <Store size={12} className="text-gray-400 shrink-0"/> 
                            <span className="truncate">{item.vendor}</span>
                          </p>
                          <div className="flex gap-1.5">
                            <button 
                              onClick={() => { setSelectedProduct(item); setIsCreatingGroupBuy(false); }}
                              className="flex-1 bg-blue-50 text-blue-600 text-[11px] font-bold py-1.5 rounded hover:bg-blue-100 transition-colors flex items-center justify-center gap-1"
                            >
                              <Eye size={12} /> Quick View
                            </button>
                            <button className="bg-gray-100 text-gray-700 p-1.5 rounded hover:bg-gray-200 transition-colors" title="Contact Supplier">
                              <MessageCircle size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Work & Tenders Tab */}
          {activeTab === 'work' && (
            <div className="bg-gray-50 min-h-full pb-6">
              {/* Header */}
              <div className="bg-white p-4 border-b border-gray-200 sticky top-0 z-10">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="font-bold text-xl flex items-center gap-2">
                    <Briefcase size={22} className="text-blue-600" /> Jobs & Tenders
                  </h2>
                  <button className="bg-blue-600 text-white font-bold text-[13px] px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-blue-700 transition-colors shadow-sm">
                    <Plus size={16}/> Post
                  </button>
                </div>
                {/* Filters */}
                <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
                  <button onClick={() => setWorkFilter('all')} className={cn("px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors", workFilter === 'all' ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300")}>All</button>
                  <button onClick={() => setWorkFilter('tenders')} className={cn("px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors", workFilter === 'tenders' ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300")}>Gov Tenders</button>
                  <button onClick={() => setWorkFilter('hiring')} className={cn("px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors", workFilter === 'hiring' ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300")}>Hiring</button>
                  <button onClick={() => setWorkFilter('seekers')} className={cn("px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors", workFilter === 'seekers' ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300")}>Looking for Work</button>
                </div>
              </div>

              <div className="p-3 space-y-5">
                {/* Tenders Section */}
                {(workFilter === 'all' || workFilter === 'tenders') && (
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-1.5"><Building size={18} className="text-gray-500"/> Government Tenders</h3>
                    <div className="space-y-3">
                      {mockTenders.map(tender => (
                        <div key={tender.id} className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                          <div className="flex justify-between items-start mb-1.5">
                            <h4 className="font-bold text-[15px] text-blue-700 leading-tight pr-2">{tender.title}</h4>
                            <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded border border-blue-100 whitespace-nowrap">{tender.type}</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-3">{tender.agency}</p>
                          <div className="flex justify-between items-center text-xs text-gray-500 pt-2 border-t border-gray-100">
                            <span className="flex items-center gap-1"><Clock size={12}/> Deadline: {tender.deadline}</span>
                            <span className="font-bold text-gray-900">{tender.budget}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hiring Section */}
                {(workFilter === 'all' || workFilter === 'hiring') && (
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-1.5"><Briefcase size={18} className="text-gray-500"/> Advertising Work (Hiring)</h3>
                    <div className="space-y-3">
                      {mockJobs.map(job => (
                        <div key={job.id} className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                           <div className="flex justify-between items-start mb-1.5">
                            <h4 className="font-bold text-[15px] text-gray-900 leading-tight pr-2">{job.title}</h4>
                            <span className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded border border-green-100 whitespace-nowrap">{job.type}</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-3">{job.company} • {job.location}</p>
                          <div className="flex justify-between items-center text-xs pt-2 border-t border-gray-100">
                            <span className="font-bold text-gray-900">{job.salary}</span>
                            <button className="text-blue-600 font-bold hover:underline">Apply Now</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Looking for Work Section */}
                {(workFilter === 'all' || workFilter === 'seekers') && (
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-1.5"><Users size={18} className="text-gray-500"/> Looking for Work</h3>
                    <div className="space-y-3">
                      {mockSeekers.map(seeker => (
                        <div key={seeker.id} className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm flex gap-3 hover:shadow-md transition-shadow cursor-pointer">
                        <img src={seeker.avatar} alt={seeker.name} className="w-14 h-14 rounded-full object-cover border border-gray-100" referrerPolicy="no-referrer" />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-bold text-[15px] text-gray-900 leading-tight">{seeker.name}</h4>
                            <span className="bg-purple-50 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded border border-purple-100">Available</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">{seeker.role}</p>
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {seeker.skills.map(skill => (
                              <span key={skill} className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full font-medium">{skill}</span>
                            ))}
                          </div>
                          <button className="w-full py-1.5 border border-gray-300 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                            Contact
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                )}

              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="divide-y divide-gray-100">
              <div className="p-4 border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-md z-10">
                <h2 className="font-bold text-xl">Notifications</h2>
              </div>
              {[
                { type: 'like', user: 'Elon Musk', text: 'liked your post', time: '2m', icon: <Heart size={20} className="text-red-500 fill-red-500" />, avatar: "https://picsum.photos/seed/elon/100/100" },
                { type: 'repost', user: 'Mark Zuckerberg', text: 'reposted your post', time: '1h', icon: <Repeat size={20} className="text-green-500" />, avatar: "https://picsum.photos/seed/zuck/100/100" },
                { type: 'follow', user: 'mkbhd', text: 'started following you', time: '3h', icon: <Users size={20} className="text-blue-500 fill-blue-500" />, avatar: "https://picsum.photos/seed/mkbhd/100/100" },
              ].map((notif, i) => (
                <div key={i} className="flex gap-3 p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="w-8 flex justify-end pt-1">
                    {notif.icon}
                  </div>
                  <div className="flex-1">
                    <img src={notif.avatar} alt={notif.user} className="w-8 h-8 rounded-full mb-2" referrerPolicy="no-referrer" />
                    <p className="text-[15px]">
                      <span className="font-bold">{notif.user}</span> {notif.text}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{notif.time}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>

        {/* Bottom Navigation (Sticky) */}
        <nav className="w-full bg-white border-t border-gray-200 px-4 py-3 pb-safe flex justify-between items-center z-30 mt-auto">
          <NavItem icon={<Home size={26} className={activeTab === 'home' ? "fill-gray-900" : ""} />} isActive={activeTab === 'home'} onClick={() => setActiveTab('home')} />
          <NavItem icon={<Users size={26} className={activeTab === 'network' ? "fill-gray-900" : ""} />} isActive={activeTab === 'network'} onClick={() => setActiveTab('network')} />
          <NavItem icon={<Store size={26} className={activeTab === 'market' ? "fill-gray-900" : ""} />} isActive={activeTab === 'market'} onClick={() => setActiveTab('market')} />
          <NavItem icon={<Briefcase size={26} className={activeTab === 'work' ? "fill-gray-900" : ""} />} isActive={activeTab === 'work'} onClick={() => setActiveTab('work')} />
          <NavItem 
            icon={
              <div className="relative">
                <MessageCircle size={26} className={isChatListOpen ? "fill-gray-900" : ""} />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 text-white text-[9px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                  3
                </span>
              </div>
            } 
            isActive={isChatListOpen} 
            onClick={() => setIsChatListOpen(true)} 
          />
          <button onClick={() => setActiveTab('profile')} className="p-1 transition-transform hover:scale-105">
            <img src="https://picsum.photos/seed/user1/150/150" alt="Profile" className={cn("w-7 h-7 rounded-full object-cover", activeTab === 'profile' ? "ring-2 ring-gray-900 ring-offset-1" : "")} referrerPolicy="no-referrer" />
          </button>
        </nav>

        {/* Overlays */}
        {isChatListOpen && !activeChat && renderChatList()}
        {activeChat && renderActiveChat()}
        {isComposeOpen && renderCompose()}
        {isPromoteOpen && renderPromote()}
        {isListProductOpen && renderListProduct()}
        {renderQuickView()}
      </div>
    </div>
  );
}

function NavItem({ icon, isActive, onClick }: { icon: React.ReactNode, isActive: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "p-2 transition-all hover:scale-110",
        isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
      )}
    >
      {icon}
    </button>
  );
}

