export default function Home() {
  const events = [
    {
      title: 'Bergen International Film Festival',
      timeLabel: 'TODAY',
      time: '17:00',
      desc: 'Films from all over the world gather all film enthusiasts for unique moments at the Bergen International Film Festival.',
      accentClass: 'bg-violet-50'
    },
    {
      title: 'Wool week',
      timeLabel: '22 - 31 OCT',
      time: '10:00',
      desc: 'ULLVEKA 2021 will be held for the eighth time in the period 22 - 31 October 2021, and will take place in the entire Bergen region.',
      accentClass: 'bg-rose-50'
    },
    {
      title: 'Light park at Bergenhus Fortress',
      timeLabel: '22 - 31 OCT',
      time: '19:00',
      desc: 'LUMAGICA - a magical experience for young and old at Bergenhus Fortress, 12 November to 19 December 2021.',
      accentClass: 'bg-amber-50'
    },
    {
      title: 'Gingerbread City 2021',
      timeLabel: '13 - 31 DEC',
      time: '10:00',
      desc: "The world's largest Gingerbread Town can be found in the Xhibition shopping center, right in the center of Bergen",
      accentClass: 'bg-emerald-50'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-slate-800 mb-6 font-playfair">Events</h1>

        <div className="space-y-6">
          {events.map((e, i) => (
            <article key={i} className="flex items-stretch bg-white rounded-2xl shadow-md overflow-hidden">
              <div className={`w-36 flex-none p-4 flex flex-col items-center justify-center ${e.accentClass}`}>
                <div className="text-xs text-slate-500">{e.timeLabel}</div>
                <div className="text-3xl font-semibold text-slate-900 mt-2">{e.time}</div>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-xl font-semibold text-slate-900 font-playfair">{e.title}</h2>
                  <button className="ml-4 self-start rounded-full bg-transparent border border-slate-200 px-4 py-2 text-slate-600 hover:bg-slate-900 hover:text-white transition">+ Add to calendar</button>
                </div>
                <p className="text-slate-600 mt-3">{e.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
