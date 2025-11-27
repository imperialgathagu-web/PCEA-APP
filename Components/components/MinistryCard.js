export default function MinistryCard({ title, desc, img, link }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      <img src={img} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-heading text-xl font-bold">{title}</h3>
        <p className="mt-2 flex-1">{desc}</p>
        <a href={link} className="mt-4 bg-primary text-white text-center py-2 rounded-md hover:bg-[#083C6D]">Visit</a>
      </div>
    </div>
  );
    }
