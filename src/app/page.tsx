import {
  Hero,
  Features,
  Pricing,
  Testimonials,
  FAQ,
  Footer,
  Header
} from "@/components/sections"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <Hero />

      <section id="features">
        <Features />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <Footer />
    </main>
  )
}
