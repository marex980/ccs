import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
    <Navbar />
    <header className="bg-blue-600 text-white p-10 text-center">
      <h1 className="text-4xl font-bold">Customs Clearance Services</h1>
      <p className="mt-4">Efficient and Reliable Customs Solutions for Your Business</p>
    </header>
    <main className="container mx-auto p-6">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <p>We provide customs clearance, transportation, and shipping solutions tailored to your needs.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-5">
          <li>Experienced Professionals</li>
          <li>Streamlined Communication</li>
          <li>Customer-Centric Approach</li>
        </ul>
      </section>
    </main>
    <Footer />
  </div>
  );
}
