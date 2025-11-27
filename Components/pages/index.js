import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import MinistryCard from "../components/MinistryCard";
import Footer from "../components/Footer";

export default function Home() {
  const ministries = [
    { title: "PCEA Center Youth", desc: "Engaging youth spiritually and socially.", img: "/youth.jpg", link: "/ministries/youth" },
    { title: "Women's Guild", desc: "Empowering women in faith.", img: "/women.jpg", link: "/ministries/women" },
    { title: "Men's Fellowship", desc: "Building men of faith.", img: "/men.jpg", link: "/ministries/men" },
  ];

  return (
    <div>
      <Navbar />
      <section className="p-6">
        <HeroCarousel />
      </section>

      <section className="container mx-auto p-6">
        <h2 className="font-heading text-3xl font-bold mb-4">Our Ministries</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {ministries.map((m, i) => (
            <MinistryCard key={i} {...m} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
    }
