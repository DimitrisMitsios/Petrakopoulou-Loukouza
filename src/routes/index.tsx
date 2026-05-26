import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Κέντρο Ξένων Γλωσσών Πετρακοπούλου | Αγγλικά, Γαλλικά, Γερμανικά" },
      { name: "description", content: "Από το 2000 στην Πετρούπολη. Αγγλικά, Γαλλικά, Γερμανικά για όλα τα επίπεδα έως C2. Τμήματα και ιδιαίτερα, παιδιά και ενήλικες." },
      { property: "og:title", content: "Κέντρο Ξένων Γλωσσών Πετρακοπούλου" },
      { property: "og:description", content: "Για σωστή και υπεύθυνη μάθηση, ελάτε σε μας." },
      { property: "og:image", content: "https://ik.imagekit.io/mitsioss/petrakopoulou/outside-view/background.jpeg?updatedAt=1779706437487" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const HERO_BG = "https://ik.imagekit.io/mitsioss/petrakopoulou/outside-view/background.jpeg?updatedAt=1779706437487";

const Books = "https://ik.imagekit.io/mitsioss/petrakopoulou/logo-banners/books.png?updatedAt=1779706353415";

const interiorImages = [
  
  
  "https://ik.imagekit.io/mitsioss/petrakopoulou/inside/IMG_2225.jpeg?updatedAt=1779706467502",
  "https://ik.imagekit.io/mitsioss/petrakopoulou/inside/IMG_2216.jpeg?updatedAt=1779706203748",
  "https://ik.imagekit.io/mitsioss/petrakopoulou/inside/IMG_2220.jpeg?updatedAt=1779706203731",
  "https://ik.imagekit.io/mitsioss/petrakopoulou/inside/IMG_2226.jpeg?updatedAt=1779706203743",
  "https://ik.imagekit.io/mitsioss/petrakopoulou/inside/IMG_2215.jpeg?updatedAt=1779706203697",
  "https://ik.imagekit.io/mitsioss/petrakopoulou/inside/IMG_2214.jpeg?updatedAt=1779706203695",
  "https://ik.imagekit.io/mitsioss/petrakopoulou/inside/IMG_2213.jpeg?updatedAt=1779706203680",
  "https://ik.imagekit.io/mitsioss/petrakopoulou/inside/IMG_2221.jpeg?updatedAt=1779706203668",
];

const studentImages = [
  "https://ik.imagekit.io/mitsioss/petrakopoulou/mathites/IMG_2232.jpeg?updatedAt=1779706110229",
  "https://ik.imagekit.io/mitsioss/petrakopoulou/mathites/IMG_2242.jpeg?updatedAt=1779706110213",
  "https://ik.imagekit.io/mitsioss/petrakopoulou/mathites/IMG_2236.jpeg?updatedAt=1779706110295",
  "https://ik.imagekit.io/mitsioss/petrakopoulou/mathites/IMG_2208.jpeg?updatedAt=1779706110184",
  "https://ik.imagekit.io/mitsioss/petrakopoulou/mathites/IMG_2237.jpeg?updatedAt=1779706110267",
  "https://ik.imagekit.io/mitsioss/petrakopoulou/mathites/IMG_2227.jpeg?updatedAt=1779706110202",
  "https://ik.imagekit.io/mitsioss/petrakopoulou/mathites/IMG_2239.jpeg?updatedAt=1779706110148",
];

function SectionTitle({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="text-center mb-12 max-w-2xl mx-auto">
      {eyebrow && <div className="text-xs tracking-[0.25em] uppercase text-gold mb-3">{eyebrow}</div>}
      <h2 className="font-display text-3xl md:text-5xl text-foreground">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground leading-relaxed">{sub}</p>}
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center text-center text-white overflow-hidden">
        <img src={HERO_BG} alt="Εξωτερική όψη του κέντρου" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        <div className="relative container-page animate-fade-up">
          <div className="text-xs tracking-[0.3em] uppercase mb-5 text-white/80">Από το 2000</div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl mx-auto">
            Κέντρο Ξένων Γλωσσών<br />Πετρακοπούλου
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 font-light max-w-xl mx-auto">
            Για σωστή και υπεύθυνη μάθηση, ελάτε σε μας.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-3.5 bg-white text-primary font-medium rounded-full hover:bg-gold hover:text-white transition-all shadow-lg">
              Επικοινωνία
            </a>
            <a href="#programs" className="px-8 py-3.5 border border-white/70 text-white font-medium rounded-full hover:bg-white hover:text-primary transition-all">
              Προγράμματα Σπουδών
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-background">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-gold mb-3">Σχετικά με εμάς</div>
            <h2 className="font-display text-3xl md:text-5xl mb-6">25 χρόνια επιτυχίας</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>Το Κέντρο μας λειτουργεί από το 2000, με 26 χρόνια επιτυχημένης πορείας σε όλα τα επίπεδα σπουδών και σε όλες τις εξετάσεις.</p>
              <p>Στο κέντρο μας λειτουργούν τμήματα Αγγλικών, Γαλλικών και Γερμανικών για όλα τα επίπεδα, ομαδικά και ατομικά.</p>
              <p>Οι καθηγητές που διδάσκουν είναι πολυετείς συνεργάτες μας, αυστηρά επιλεγμένοι.</p>
              <p>Το κέντρο μας είναι εξοπλισμένο με συστήματα διαδραστικής τεχνολογίας και διδάσκουμε διεθνώς βραβευμένα και άριστης ποιότητας βιβλία.</p>
              <p>Η συνεχής και ουσιαστική επικοινωνία με τους σπουδαστές και τους γονείς τους μας κάνει συνεχώς καλύτερους.</p>
              <p>Το κέντρο μας είναι επίσημος συνεργάτης του Γαλλικού Ινστιτούτου (IFA) καθώς και του Goethe Institut.</p>
            </div>
          </div>
          <div className="relative">
            <img
              src={Books}
              alt="Εσωτερικός χώρος"
              loading="lazy"
              className="rounded-2xl shadow-xl w-full aspect-[8/6] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-5 shadow-lg hidden sm:block">
              <div className="font-display text-4xl text-primary">25+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Χρόνια εμπειρίας</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-24 bg-secondary/50">
        <div className="container-page">
          <SectionTitle eyebrow="Γλώσσες & Προγράμματα" title="Διδάσκονται" sub="Όλα τα επίπεδα, ομαδικά και ατομικά μαθήματα." />
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { lang: "Αγγλικά", desc: "Από το νήπιο έως το proficiency (C2). Μαθήματα μπορούν να ξεκινήσουν από την Β' ή Γ' Δημοτικού (A' Junior)." },
              { lang: "Γαλλικά", desc: "Ξεκινούν συνήθως στην Δ' Δημοτικού και διδάσκονται έως C2. Επίσημος συνεργάτης του Γαλλικού Ινστιτούτου (IFA)." },
              { lang: "Γερμανικά", desc: "Ξεκινούν συνήθως στην Δ' Δημοτικού και διδάσκονται έως C2. Επίσημος συνεργάτης του Goethe Institut." },
            ].map((p) => (
              <div key={p.lang} className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>
                </div>
                <h3 className="font-display text-2xl mb-3">{p.lang}</h3>
                <p className="text-foreground/75 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Τμήματα", "Ιδιαίτερα", "Παιδιά", "Ενήλικες"].map((t) => (
              <div key={t} className="bg-background border border-border rounded-xl py-6 text-center font-display text-xl text-foreground">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="py-24 bg-background">
        <div className="container-page">
          <SectionTitle eyebrow="Τεχνολογία" title="Εμπειρία μάθησης" sub="Εξοπλισμός διαδραστικής τεχνολογίας για ουσιαστική μάθηση." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Talking pen",
              "Interactive whiteboard",
              "Educational applications",
              "Οπτικοακουστικά μέσα",
              "Διαδραστικοί πίνακες",
            ].map((t) => (
              <div key={t} className="flex items-start gap-4 p-6 rounded-xl bg-secondary/40 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12l5 5L20 7"/></svg>
                </div>
                <div className="font-medium text-foreground pt-1.5">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="stats" className="py-24 bg-primary text-primary-foreground">
        <div className="container-page">
          <div className="text-center mb-14">
            <div className="text-xs tracking-[0.25em] uppercase text-gold mb-3">Επιτυχόντες</div>
            <h2 className="font-display text-3xl md:text-5xl">Αριθμοί που μιλούν</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-10 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5">
              <div className="font-display text-6xl md:text-7xl text-gold mb-2">798</div>
              <div className="text-lg text-primary-foreground/90">Β2 (Lower)</div>
            </div>
            <div className="text-center p-10 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5">
              <div className="font-display text-6xl md:text-7xl text-gold mb-2">702</div>
              <div className="text-lg text-primary-foreground/90">C2 (Proficiency)</div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-background">
        <div className="container-page">
          <SectionTitle eyebrow="Gallery" title="Ο χώρος μας" />
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {interiorImages.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Εσωτερικός χώρος ${i + 1}`}
                loading="lazy"
                className="w-full rounded-xl break-inside-avoid hover:scale-[1.02] transition-transform duration-500"
              />
            ))}
          </div>

          <div className="mt-20">
            <SectionTitle title="Οι μαθητές μας" />
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {studentImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Μαθητές ${i + 1}`}
                  loading="lazy"
                  className="w-full rounded-xl break-inside-avoid hover:scale-[1.02] transition-transform duration-500"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-secondary/50">
        <div className="container-page">
          <SectionTitle eyebrow="Κριτικές" title="4.7 Αστέρια αξιολογήσεις Google" />
          <ReviewsCarousel />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-background">
        <div className="container-page">
          <SectionTitle eyebrow="Επικοινωνία" title="Ελάτε να γνωριστούμε" />
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-5">
              {[
                { label: "Διεύθυνση", value: "Γραβιάς 62, Πετρούπολη", href: "https://www.google.com/maps/search/?api=1&query=Γραβιάς+62+Πετρούπολη" },
                { label: "Τηλέφωνο", value: "210 5059577", href: "tel:2105059577" },
                { label: "Email", value: "petrakopoulou.loukouza@gmail.com", href: "mailto:petrakopoulou.loukouza@gmail.com" },
              ].map((c) => (
                <a key={c.label} href={c.href} target={c.label === "Διεύθυνση" ? "_blank" : undefined} rel="noopener noreferrer" className="block p-6 rounded-xl border border-border bg-card hover:border-gold transition-all">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{c.label}</div>
                  <div className="font-medium text-foreground break-all">{c.value}</div>
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <a href="https://www.instagram.com/petrakopoulou_loukouza?igsh=b2k1dzkxMGQ4a2Qy" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
                </a>
                <a href="https://www.facebook.com/p/%CE%9A%CE%95%CE%9D%CE%A4%CE%A1%CE%9F-%CE%9E%CE%95%CE%9D%CE%A9%CE%9D-%CE%93%CE%9B%CE%A9%CE%A3%CE%A3%CE%A9%CE%9D-%CE%A0%CE%95%CE%A4%CE%A1%CE%91%CE%9A%CE%9F%CE%A0%CE%9F%CE%A5%CE%9B%CE%9F%CE%A5-%CE%9B%CE%9F%CE%A5%CE%9A%CE%9F%CE%A5%CE%96%CE%91-100063441986413/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-2 2-2h2V2.1C16.6 2 15.4 2 14.3 2 11.6 2 10 3.7 10 6.8V10H7v4h3v8h3z"/></svg>
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border min-h-[400px] shadow-sm">
              <iframe
                title="Χάρτης τοποθεσίας"
                src="https://www.google.com/maps?q=Γραβιάς+62+Πετρούπολη&output=embed"
                width="100%"
                height="100%"
                style={{ minHeight: 400, border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
