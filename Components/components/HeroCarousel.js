export default function HeroCarousel() {
  const slides = [
    { title: "Upcoming Service", desc: "Join us this Sunday at 9AM", bg: "bg-primary" },
    { title: "Jumbo Sale", desc: "Support our youth initiatives", bg: "bg-secondary" },
    { title: "Live Sermon", desc: "Watch our stream online", bg: "bg-accent" },
  ];

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`${slide.bg} text-white flex flex-col justify-center items-start p-8 absolute inset-0 transition-all duration-1000`}
        >
          <h2 className="text-3xl font-heading font-bold">{slide.title}</h2>
          <p className="mt-2">{slide.desc}</p>
        </div>
      ))}
    </div>
  );
    }
