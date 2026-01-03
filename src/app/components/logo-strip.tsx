export function LogoStrip() {
  const logos = [
    { name: "SAP", width: "w-16" },
    { name: "Oracle", width: "w-20" },
    { name: "COBOL", width: "w-20" },
    { name: "SQL Server", width: "w-24" },
    { name: "Azure", width: "w-16" }
  ];

  return (
    <section className="py-16 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-600 mb-8">
          Engineered to decouple legacy systems like:
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-12">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center opacity-40 hover:opacity-60 transition-opacity"
            >
              <div className={`${logo.width} h-8 bg-gray-400 rounded flex items-center justify-center`}>
                <span className="text-white font-bold text-sm">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
