"use client";
import { useState } from "react";
import {
    LayoutDashboard,
    Users,
    ShieldCheck,
    CalendarClock,
    FileText,
    Activity,
    CreditCard,
    Settings,
    LogOut,
    TrendingUp,
    AlertTriangle,
    DollarSign,
    CheckCircle,
} from "lucide-react";

export default function SuperAdminDashboard() {
    const [activeTab, setActiveTab] = useState("Dashboard");

    const menus = [
        { name: "Dashboard", icon: LayoutDashboard },
        { name: "User Management", icon: Users },
        { name: "Content Moderation", icon: ShieldCheck },
        { name: "Schedule Posts", icon: CalendarClock },
        { name: "Audit Logs", icon: FileText },
        { name: "System Health", icon: Activity },
        { name: "Billing & Revenue", icon: CreditCard },
        { name: "Settings", icon: Settings },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-72 bg-white shadow-md flex flex-col justify-between">
                <div className="p-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-600 p-3 rounded-md">
                            <ShieldCheck className="text-white" size={22} />
                        </div>
                        <div>
                            <h1 className="text-black text-lg font-semibold">Shoutly AI</h1>
                            <p className="text-sm text-gray-500">Admin Panel</p>
                        </div>
                    </div>

                    <hr className="my-6" />

                    {/* Profile */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-lg">J</span>
                        </div>
                        <div>
                            <h2 className="text-black font-medium">John Doe</h2>
                            <span className="text-xs px-2 py-1 bg-gray-100 text-violet-600 rounded-md">
                                Super Admin
                            </span>
                        </div>
                    </div>

                    <hr className="my-6" />

                    {/* Menu */}
                    <nav className="space-y-1">
                        {menus.map((menu) => {
                            const Icon = menu.icon;
                            const isActive = activeTab === menu.name;
                            return (
                                <button
                                    key={menu.name}
                                    onClick={() => setActiveTab(menu.name)}
                                    className={`flex items-center gap-2 w-full px-4 py-2 rounded-lg text-sm font-medium transition ${isActive
                                        ? "bg-blue-100 text-blue-600"
                                        : "text-black hover:bg-gray-100"
                                        }`}
                                >
                                    <Icon size={18} />
                                    {menu.name}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* Logout */}
                <div className="p-6">
                    <button className="flex items-center gap-2 text-red-600 font-medium">
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main */}
            <main className="flex-1">
                {/* Header */}
                <header className="flex justify-between items-center bg-white px-8 py-5 shadow-sm">
                    <h1 className="text-xl font-semibold text-black">Dashboard</h1>
                    <div className="text-right">
                        <p className="text-black font-medium">John Doe</p>
                        <p className="text-sm text-gray-500">admin@shoutly.ai</p>
                    </div>
                </header>

                {/* Content */}
                <div className="p-8 space-y-8">
                    {activeTab === "Dashboard" && (
                        <>
                            {/* 4 Stats Cards */}
                            <div className="grid grid-cols-4 gap-6">
                                {/* Card 1 */}
                                <div className="bg-white p-6 rounded-xl shadow relative">
                                    <Users className="absolute top-4 right-4 text-blue-600 bg-blue-100 p-2 rounded-md" size={36} />
                                    <p className="text-gray-500 text-sm">Total Users</p>
                                    <h2 className="text-2xl text-black">1,247</h2>
                                    <div className="flex items-center text-green-600 text-sm mt-2">
                                        <TrendingUp size={16} className="mr-1" /> +12%
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="bg-white p-6 rounded-xl shadow relative">
                                    <FileText className="absolute top-4 right-4 text-green-600 bg-green-100 p-2 rounded-md" size={36} />
                                    <p className="text-gray-500 text-sm">Posts Today</p>
                                    <h2 className="text-2xl text-black">453</h2>
                                    <div className="flex items-center text-green-600 text-sm mt-2">
                                        <TrendingUp size={16} className="mr-1" /> +8%
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="bg-white p-6 rounded-xl shadow relative">
                                    <AlertTriangle className="absolute top-4 right-4 text-red-600 bg-red-100 p-2 rounded-md" size={36} />
                                    <p className="text-gray-500 text-sm">Flagged Content</p>
                                    <h2 className="text-2xl text-black">23</h2>
                                    <div className="flex items-center text-green-600 text-sm mt-2">
                                        <TrendingUp size={16} className="mr-1" /> -15%
                                    </div>
                                </div>

                                {/* Card 4 */}
                                <div className="bg-white p-6 rounded-xl shadow relative">
                                    <DollarSign className="absolute top-4 right-4 text-violet-600 bg-violet-100 p-2 rounded-md" size={36} />
                                    <p className="text-gray-500 text-sm">Monthly Revenue</p>
                                    <h2 className="text-2xl text-black">$124.8K</h2>
                                    <div className="flex items-center text-green-600 text-sm mt-2">
                                        <TrendingUp size={16} className="mr-1" /> +23%
                                    </div>
                                </div>
                            </div>

                            {/* 3 Middle Cards */}
                            <div className="grid grid-cols-3 gap-6">
                                {/* Platform Health */}
                                <div className="bg-white p-6 rounded-xl shadow">
                                    <h3 className="flex items-center gap-2 text-green-600 mb-4">
                                        <Activity size={18} /> Platform Health
                                    </h3>
                                    {["API Status", "AI Generation", "Publishing"].map((item) => (
                                        <div key={item} className="flex justify-between mb-2">
                                            <span className="text-black">{item}</span>
                                            <span className="flex items-center text-green-600">
                                                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                                                Operational
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Scheduled Posts */}
                                <div className="bg-white p-6 rounded-xl shadow">
                                    <h3 className="flex items-center gap-2 text-violet-600 mb-4">
                                        <CalendarClock size={18} /> Scheduled Posts
                                    </h3>
                                    <div className="flex text-black justify-between mb-2">
                                        <span>Next 24 Hours</span><span>156</span>
                                    </div>
                                    <div className="flex text-black justify-between mb-2">
                                        <span>This Week</span><span>1,823</span>
                                    </div>
                                    <div className="flex text-black justify-between">
                                        <span>Failed Today</span><span className="text-red-600">3</span>
                                    </div>
                                </div>

                                {/* User Status */}
                                <div className="bg-white p-6 rounded-xl shadow">
                                    <h3 className="flex items-center gap-2 text-green-600 mb-4">
                                        <CheckCircle size={18} /> User Status
                                    </h3>
                                    <div className="flex text-black justify-between mb-2">
                                        <span>Active Users</span><span className="text-green-600">1189</span>
                                    </div>
                                    <div className="flex text-black justify-between mb-2">
                                        <span>Suspended</span><span className="text-yellow-600">42</span>
                                    </div>
                                    <div className="flex text-black justify-between">
                                        <span>Blocked</span><span className="text-red-600">16</span>
                                    </div>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="bg-white text-black p-6 rounded-xl shadow">
                                <h3 className="font-semibold mb-4">Recent Content Activity</h3>
                                <table className="w-full text-sm">
                                    <thead className="border-b border-gray-200">
                                        <tr className="text-left">
                                            <th className="py-2">User</th>
                                            <th>Industry</th>
                                            <th>Platform</th>
                                            <th>Safety Status</th>
                                            <th>Status</th>
                                            <th>Scheduled</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ["Mike Chen", "Fitness", "Instagram", "safe", "approved"],
                                            ["James Wilson", "Real Estate", "Facebook", "review required", "pending"],
                                            ["Dr. Sarah Johnson", "Dentistry", "LinkedIn", "safe", "approved"],
                                            ["Lisa Thompson", "Beauty & Spa", "Instagram", "review required", "pending"],
                                            ["Emily Rodriguez", "Restaurant", "Instagram", "safe", "approved"],
                                        ].map((row, i) => (
                                            <tr key={i} className="border-b border-gray-200">
                                                <td className="py-3">{row[0]}</td>
                                                <td>{row[1]}</td>
                                                <td>{row[2]}</td>
                                                <td>
                                                    {row[3] === "safe" ? (
                                                        <span className="text-green-600 flex items-center">
                                                            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span> safe
                                                        </span>
                                                    ) : (
                                                        <span className="text-yellow-600 flex items-center">
                                                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span> review required
                                                        </span>
                                                    )}
                                                </td>
                                                <td>
                                                    {row[4] === "approved" ? (
                                                        <span className="px-2 py-1 text-green-600 bg-green-100 rounded-md text-xs">
                                                            approved
                                                        </span>
                                                    ) : (
                                                        <span className="px-2 py-1 text-yellow-600 bg-yellow-100 rounded-md text-xs">
                                                            pending
                                                        </span>
                                                    )}
                                                </td>
                                                <td>12/15/2024 10:00:00 AM</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}

