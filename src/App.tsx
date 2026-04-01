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
  Tag
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
    product: { name: "Solar Pump X1", price: "₦150,000" }
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
    isAd: true
  },
  {
    id: 3,
    businessName: "Lagos Tech Hub",
    handle: "@lagostech",
    businessAvatar: "https://picsum.photos/seed/techhub/100/100",
    isVerified: false,
    image: "https://picsum.photos/seed/code/600/600",
    text: "Looking for reliable web developers for your business? We build scalable e-commerce solutions. Book a consultation today. 💻🚀",
    likes: "450",
    comments: "22",
    reposts: "15",
    views: "3.2K",
    timeAgo: "8h"
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

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isChatListOpen, setIsChatListOpen] = useState(false);
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [composeText, setComposeText] = useState('');

  const renderChatList = () => (
    <div className="absolute inset-0 bg-white z-50 flex flex-col">
      <header className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button onClick={() => setIsChatListOpen(false)} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-xl font-bold">Messages</h2>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Settings size={24} />
        </button>
      </header>
      <div className="p-4">
        <div className="bg-gray-100 rounded-full flex items-center px-4 py-2 gap-2">
          <Search size={20} className="text-gray-500" />
          <input type="text" placeholder="Search messages..." className="bg-transparent outline-none flex-1" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {mockChats.map(chat => (
          <div key={chat.id} onClick={() => setActiveChat(chat.id)} className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-50">
            <img src={chat.avatar} alt={chat.name} className="w-14 h-14 rounded-full object-cover" referrerPolicy="no-referrer" />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-[16px] truncate">{chat.name}</h3>
                <span className="text-xs text-gray-500">{chat.time}</span>
              </div>
              <p className={cn("text-sm truncate", chat.unread ? "font-bold text-gray-900" : "text-gray-500")}>
                {chat.lastMessage}
              </p>
            </div>
            {chat.unread > 0 && (
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {chat.unread}
              </div>
            )}
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
        <header className="bg-white flex items-center justify-between p-3 border-b border-gray-100 shadow-sm">
          <div className="flex items-center gap-3">
            <button onClick={() => setActiveChat(null)} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <h2 className="font-bold text-[16px] leading-tight">{chat.name}</h2>
                <p className="text-xs text-green-500 font-medium">Online</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 text-blue-500">
            <button className="p-2 hover:bg-blue-50 rounded-full" title="Pay / Order"><CreditCard size={22} /></button>
            <button className="p-2 hover:bg-blue-50 rounded-full"><Video size={22} /></button>
            <button className="p-2 hover:bg-blue-50 rounded-full"><Phone size={22} /></button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {mockMessages.map(msg => (
            <div key={msg.id} className={cn("flex flex-col max-w-[75%]", msg.isUser ? "ml-auto items-end" : "mr-auto items-start")}>
              <div className={cn(
                "px-4 py-2 rounded-2xl",
                msg.isUser ? "bg-blue-500 text-white rounded-br-sm" : "bg-white border border-gray-200 text-gray-900 rounded-bl-sm"
              )}>
                <p className="text-[15px]">{msg.text}</p>
                {msg.isOrder && (
                  <div className="mt-3 bg-white/20 border border-white/30 rounded-lg p-3 text-white w-full min-w-[200px]">
                    <div className="flex items-center gap-2 mb-3">
                      <ShoppingCart size={18} />
                      <span className="font-bold text-sm">Order Request</span>
                    </div>
                    <button className="w-full bg-white text-blue-500 text-sm font-bold py-2 rounded-md hover:bg-gray-50 transition-colors">
                      Pay ₦150,000
                    </button>
                  </div>
                )}
              </div>
              <span className="text-[11px] text-gray-500 mt-1 px-1">{msg.time}</span>
            </div>
          ))}
        </div>

        <div className="bg-white p-3 border-t border-gray-200 flex items-end gap-2">
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0">
            <Plus size={24} />
          </button>
          <div className="flex-1 bg-gray-100 rounded-3xl flex items-center px-4 py-2 min-h-[44px]">
            <input 
              type="text" 
              placeholder="Message..." 
              className="bg-transparent outline-none flex-1 text-[15px]"
            />
            <button className="p-1 text-gray-500 hover:text-gray-700 ml-2">
              <Smile size={20} />
            </button>
          </div>
          <button className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors flex-shrink-0 shadow-sm">
            <Send size={20} className="ml-0.5" />
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

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center font-sans text-gray-900">
      <div className="w-full max-w-md bg-white min-h-screen relative shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header (Insta/FB/X Hybrid) */}
        <header className="bg-white pt-12 pb-3 px-4 sticky top-0 z-20 border-b border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="https://picsum.photos/seed/user1/150/150" alt="Profile" className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
            <h1 className="text-xl font-bold tracking-tight">Social<span className="text-blue-500">X</span></h1>
          </div>
          <div className="flex gap-4">
            <button className="text-gray-900 hover:bg-gray-100 p-2 rounded-full transition-colors">
              <Search size={22} />
            </button>
            <button 
              onClick={() => setIsChatListOpen(true)}
              className="text-gray-900 hover:bg-gray-100 p-2 rounded-full transition-colors relative"
            >
              <MessageCircle size={22} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                3
              </span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto pb-20 hide-scrollbar bg-gray-50 relative">
          
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
                        <div className="rounded-2xl overflow-hidden border border-gray-200 mb-3 relative">
                          <img src={post.image} alt="Post content" className="w-full h-auto object-cover max-h-[400px]" referrerPolicy="no-referrer" />
                          {post.isAd && (
                            <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm">
                              Sponsored
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
                              <p className="text-blue-600 font-bold text-sm mt-0.5">{post.product.price}</p>
                            </div>
                          </div>
                          <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
                            Order
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
                          <button className="p-2 rounded-full hover:bg-blue-50 hover:text-blue-500 transition-colors">
                            <Bookmark size={18} />
                          </button>
                          <button className="p-2 rounded-full hover:bg-blue-50 hover:text-blue-500 transition-colors">
                            <Share2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Search Tab */}
          {activeTab === 'search' && (
            <div className="p-4">
              <div className="bg-gray-200 rounded-full flex items-center px-4 py-2 gap-2 mb-4">
                <Search size={20} className="text-gray-500" />
                <input type="text" placeholder="Search businesses, products, keywords..." className="bg-transparent outline-none flex-1 text-[15px]" />
              </div>
              
              {/* Search Filters */}
              <div className="flex gap-2 mb-6 overflow-x-auto hide-scrollbar pb-1">
                <button className="px-4 py-1.5 bg-gray-900 text-white rounded-full text-sm font-bold whitespace-nowrap">All</button>
                <button className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded-full text-sm font-bold whitespace-nowrap hover:bg-gray-300">Businesses</button>
                <button className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded-full text-sm font-bold whitespace-nowrap hover:bg-gray-300">Products</button>
                <button className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded-full text-sm font-bold whitespace-nowrap hover:bg-gray-300">Keywords</button>
              </div>

              <h3 className="font-bold text-lg mb-4">Trending Searches</h3>
              <div className="space-y-4">
                {[
                  { tag: "Solar Panels Lagos", type: "Product Search", count: "12K" },
                  { tag: "Wholesale Suppliers", type: "Business Search", count: "8.5K" },
                  { tag: "Farming Equipment", type: "Keyword", count: "5K" },
                  { tag: "Tech Hubs Nairobi", type: "Business Search", count: "3.2K" },
                  { tag: "Logistics Delivery", type: "Keyword", count: "2.1K" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start cursor-pointer hover:bg-gray-100 p-2 -mx-2 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 p-2.5 rounded-full text-gray-500">
                        <Search size={18} />
                      </div>
                      <div>
                        <p className="font-bold text-[15px]">{item.tag}</p>
                        <p className="text-xs text-gray-500">{item.type} · {item.count} searches</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-200">
                      <MoreVertical size={18} />
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

          {/* Market Tab */}
          {activeTab === 'market' && (
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-xl">Marketplace</h2>
                <button className="text-blue-500 font-bold text-[15px] flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <Plus size={18}/> Sell Item
                </button>
              </div>
              
              {/* Categories */}
              <div className="flex gap-2 overflow-x-auto hide-scrollbar mb-6 pb-2 -mx-4 px-4">
                {['All', 'Agriculture', 'Solar & Energy', 'Tech Services', 'Wholesale', 'Logistics'].map(cat => (
                  <button key={cat} className="px-4 py-1.5 bg-gray-200 rounded-full text-sm font-bold whitespace-nowrap hover:bg-gray-300 transition-colors">
                    {cat}
                  </button>
                ))}
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Solar Generator 2KVA", price: "₦300,000", vendor: "EcoPower", img: "https://picsum.photos/seed/gen/300/300" },
                  { name: "Bulk Cassava (1 Ton)", price: "₦150,000", vendor: "AgriConnect", img: "https://picsum.photos/seed/cassava/300/300" },
                  { name: "Web Dev Services", price: "₦500,000", vendor: "TechHub Africa", img: "https://picsum.photos/seed/code/300/300" },
                  { name: "Wholesale Fabrics", price: "₦50,000/bndl", vendor: "Lagos Textiles", img: "https://picsum.photos/seed/fabric/300/300" },
                  { name: "Delivery Van Hire", price: "₦20,000/day", vendor: "FastLogistics", img: "https://picsum.photos/seed/van/300/300" },
                  { name: "Irrigation Kit", price: "₦45,000", vendor: "AgriConnect", img: "https://picsum.photos/seed/water/300/300" },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-all group flex flex-col">
                    <div className="relative">
                      <img src={item.img} alt={item.name} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-gray-900 shadow-sm">
                        <Bookmark size={14} />
                      </div>
                    </div>
                    <div className="p-2.5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-[13px] leading-tight line-clamp-2 mb-1">{item.name}</h3>
                        <p className="text-blue-600 font-bold text-[15px]">{item.price}</p>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-2 flex items-center gap-1">
                        <Store size={12} className="text-gray-400"/> 
                        <span className="truncate">{item.vendor}</span>
                      </p>
                    </div>
                  </div>
                ))}
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

        {/* FAB (X style) */}
        {activeTab === 'home' && (
          <button 
            onClick={() => setIsComposeOpen(true)}
            className="absolute bottom-20 right-4 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:scale-105 transition-all z-40"
          >
            <Plus size={24} />
          </button>
        )}

        {/* Bottom Navigation (Instagram/X hybrid) */}
        <nav className="absolute bottom-0 w-full bg-white border-t border-gray-200 px-6 py-3 pb-8 flex justify-between items-center z-30">
          <NavItem icon={<Home size={26} className={activeTab === 'home' ? "fill-gray-900" : ""} />} isActive={activeTab === 'home'} onClick={() => setActiveTab('home')} />
          <NavItem icon={<Search size={26} className={activeTab === 'search' ? "text-gray-900" : ""} />} isActive={activeTab === 'search'} onClick={() => setActiveTab('search')} />
          <NavItem icon={<Store size={26} className={activeTab === 'market' ? "fill-gray-900" : ""} />} isActive={activeTab === 'market'} onClick={() => setActiveTab('market')} />
          <NavItem icon={<Bell size={26} className={activeTab === 'notifications' ? "fill-gray-900" : ""} />} isActive={activeTab === 'notifications'} onClick={() => setActiveTab('notifications')} />
          <button onClick={() => setActiveTab('profile')} className="p-1 transition-transform hover:scale-105">
            <img src="https://picsum.photos/seed/user1/150/150" alt="Profile" className={cn("w-7 h-7 rounded-full object-cover", activeTab === 'profile' ? "ring-2 ring-gray-900 ring-offset-1" : "")} referrerPolicy="no-referrer" />
          </button>
        </nav>

        {/* Overlays */}
        {isChatListOpen && !activeChat && renderChatList()}
        {activeChat && renderActiveChat()}
        {isComposeOpen && renderCompose()}
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

