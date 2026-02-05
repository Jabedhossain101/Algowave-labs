export default function PortfolioPage() {
  return (
    <div className="pt-32 min-h-screen bg-[#0a0a0a] text-white px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Our Work</h1>
        <p className="text-gray-400 mb-8">
          Take a look at the projects we've successfully delivered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center italic text-gray-500">
            Project Card 1
          </div>
          <div className="h-64 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center italic text-gray-500">
            Project Card 2
          </div>
        </div>
      </div>
    </div>
  );
}
