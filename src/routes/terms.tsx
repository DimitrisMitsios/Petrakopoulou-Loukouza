import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Όροι Χρήσης | Κέντρο Ξένων Γλωσσών Πετρακοπούλου" },
      { name: "description", content: "Όροι χρήσης για τον ιστότοπο του Κέντρου Ξένων Γλωσσών Πετρακοπούλου." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-32 pb-20 container-page max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl mb-3">Όροι Χρήσης</h1>
        <p className="text-muted-foreground mb-10">Κέντρο Ξένων Γλωσσών Πετρακοπούλου</p>

        <div className="space-y-6 text-foreground/85 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl mb-2">1. Αποδοχή όρων</h2>
            <p>Η χρήση του παρόντος ιστότοπου συνεπάγεται την ανεπιφύλακτη αποδοχή των παρακάτω όρων.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-2">2. Πνευματικά δικαιώματα</h2>
            <p>Το σύνολο του περιεχομένου (κείμενα, εικόνες, λογότυπο) ανήκει στο Κέντρο Ξένων Γλωσσών Πετρακοπούλου και προστατεύεται από τις διατάξεις περί πνευματικής ιδιοκτησίας.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-2">3. Χρήση περιεχομένου</h2>
            <p>Απαγορεύεται η αναπαραγωγή, αντιγραφή ή διανομή του περιεχομένου χωρίς προηγούμενη γραπτή άδεια.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-2">4. Περιορισμός ευθύνης</h2>
            <p>Καταβάλλεται κάθε δυνατή προσπάθεια για την ακρίβεια των πληροφοριών, χωρίς ωστόσο εγγύηση για την πληρότητα ή την επικαιροποίησή τους.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-2">5. Σύνδεσμοι τρίτων</h2>
            <p>Ο ιστότοπος ενδέχεται να περιέχει συνδέσμους προς ιστότοπους τρίτων για τους οποίους δεν φέρουμε καμία ευθύνη.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-2">6. Τροποποιήσεις</h2>
            <p>Διατηρούμε το δικαίωμα να τροποποιήσουμε τους παρόντες όρους ανά πάσα στιγμή.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-2">7. Επικοινωνία</h2>
            <p>Γραβιάς 62, Πετρούπολη · 210 5059577 · petrakopoulou.loukouza@gmail.com</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
