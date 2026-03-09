import { motion } from "motion/react";

export default function App() {
  const dummyData = [
    {
      id: 1,
      title: "On-site Assessment & Diagnostics",
      body: "On-site diagnosis leveraging LG's deep manufacturing knowledge to evaluate existing operations, equipment, and processes to identify bottlenecks, risks, and opportunities for process innovation. Provides foundational data for subsequent feasibility studies. Can support Due Diligence.",
      image: "https://www.lg.com/content/dam/channelbtb/lgcom/global/pri/smart-factory/engineering-consulting/common/2025/main/pri-smart-factory-2025-feature-engineering-consulting-02-solutions-01-consulting-01-health-checks.jpg"
    },
    {
      id: 2,
      title: "Strategic Roadmap",
      body: "Develops strategic roadmaps, detailing implementation plans, integrated schedules budgets, and aligning with overall business objectives. Incorporates high-level feasibility assessment and strategic risk evaluation to ensure robust planning. Ensures project viability, clarifies requirements, and improves Delivery Assurance through clear roadmap proposals. Provides Total Management perspective.",
      image: "https://www.lg.com/content/dam/channelbtb/lgcom/global/pri/smart-factory/engineering-consulting/common/2025/main/pri-smart-factory-2025-feature-engineering-consulting-02-solutions-01-consulting-02-master-plan.jpg"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-zinc-950 flex items-center justify-center p-4">
      {/* Fixed size popup container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-[480px] h-[480px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-white/10"
        id="popup-container"
      >
        {/* Header */}
        <div className="bg-zinc-900 px-6 py-4 flex justify-between items-center">
          <h1 className="text-white font-semibold tracking-tight">Featured Content</h1>
          {/* <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div> */}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide">
          {dummyData.map((item) => (
            <section key={item.id} className="space-y-3" id={`section-${item.id}`}>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1">
                <h2 className="text-lg font-bold text-zinc-900 leading-tight">
                  {item.title}
                </h2>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        {/* <div className="px-6 py-4 border-t border-zinc-100 bg-zinc-50 flex justify-end gap-3">
          <button className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            Dismiss
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors shadow-sm">
            Learn More
          </button>
        </div> */}
      </motion.div>
    </div>
  );
}