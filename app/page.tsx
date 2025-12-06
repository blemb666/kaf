"use client"
import { Twitch, Youtube, MessageCircle, Music2, Star } from "lucide-react"

const socials = [
  {
    name: "Telegram",
    icon: MessageCircle,
    url: "https://t.me",
    color: "from-sky-500 to-sky-600",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com",
    color: "from-red-600 to-red-700",
  },
  {
    name: "TikTok",
    icon: Music2,
    url: "https://tiktok.com",
    color: "from-pink-500 to-violet-600",
  },
  {
    name: "Twitch",
    icon: Twitch,
    url: "https://twitch.tv",
    color: "from-purple-500 to-purple-700",
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Внешняя рамка удостоверения */}
        <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl border-4 border-amber-500 shadow-2xl shadow-amber-500/20 overflow-hidden">
          {/* Верхняя золотая полоса */}
          <div className="h-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400"></div>

          {/* Шапка с эмблемой */}
          <div className="bg-gradient-to-b from-blue-950 to-slate-900 pt-8 pb-6 px-6 text-center border-b-2 border-amber-500/50">
            {/* Звезда/бейдж */}
            <div className="relative mx-auto w-24 h-24 mb-4">
              <div className="absolute inset-0 bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-600 rounded-full"></div>
              <div className="absolute inset-1 bg-gradient-to-b from-blue-900 to-blue-950 rounded-full flex items-center justify-center">
                <Star className="w-10 h-10 text-amber-400 fill-amber-400" />
              </div>
            </div>

            {/* Промо код */}
            <div className="space-y-1">
              <p className="text-xs text-amber-400/80 tracking-[0.3em] uppercase font-medium">Promo Code</p>
              <h1
                className="text-4xl font-black text-amber-400 tracking-wide"
                style={{ textShadow: "0 0 30px rgba(251, 191, 36, 0.4)" }}
              >
                /promo kaf
              </h1>
            </div>
          </div>

          <div className="bg-slate-900/80 py-5 px-6 border-b-2 border-amber-500/30">
            <div className="bg-slate-800/50 rounded-lg border border-amber-500/30 p-4">
              <p className="text-[10px] text-slate-500 tracking-[0.2em] uppercase mb-1">Agent ID</p>
              <p className="text-2xl font-bold text-slate-100 tracking-widest" style={{ fontFamily: "monospace" }}>
                og_chainss
              </p>
            </div>
          </div>

          <div className="p-6 space-y-3">
            <p className="text-[10px] text-slate-500 tracking-[0.2em] uppercase text-center mb-4">Official Channels</p>

            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-slate-800/60 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 rounded-lg p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/10"
                >
                  {/* Иконка с градиентом */}
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Название */}
                  <span className="flex-1 text-lg font-semibold text-slate-200 group-hover:text-white tracking-wide">
                    {social.name}
                  </span>

                  {/* Стрелка */}
                  <div className="w-8 h-8 rounded-full bg-slate-700/50 group-hover:bg-amber-500/20 flex items-center justify-center transition-colors">
                    <svg
                      className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Нижняя полоса */}
          <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 py-4 px-6 border-t-2 border-amber-500/30">
            <div className="flex items-center justify-center gap-3">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
              <p className="text-xs text-slate-400 tracking-[0.15em] uppercase">Majestic RP</p>
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
            </div>
          </div>

          {/* Нижняя золотая полоса */}
          <div className="h-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400"></div>
        </div>
      </div>

      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl"></div>
      </div>
    </main>
  )
}
