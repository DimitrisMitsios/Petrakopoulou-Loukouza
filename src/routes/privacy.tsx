import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Πολιτική Απορρήτου | Κέντρο Ξένων Γλωσσών Πετρακοπούλου" },
      { name: "description", content: "Πολιτική απορρήτου για το Κέντρο Ξένων Γλωσσών Πετρακοπούλου." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-32 pb-20 container-page max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl mb-3">Πολιτική Απορρήτου</h1>
        <p className="text-muted-foreground mb-10">Κέντρο Ξένων Γλωσσών Πετρακοπούλου</p>

        <div className="prose space-y-6 text-foreground/85 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl mb-2">1. Εισαγωγή</h2>
            <p>Η παρούσα Πολιτική Απορρήτου περιγράφει τον τρόπο με τον οποίο το Κέντρο Ξένων Γλωσσών Πετρακοπούλου συλλέγει, χρησιμοποιεί και προστατεύει τις προσωπικές πληροφορίες που μας παρέχετε μέσω του ιστότοπού μας ή κατά την επικοινωνία σας μαζί μας.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-2">2. Πληροφορίες που συλλέγουμε</h2>
            <p>Ενδέχεται να συλλέξουμε στοιχεία επικοινωνίας (όνομα, τηλέφωνο, email) όταν επικοινωνείτε μαζί μας για πληροφορίες σχετικά με τα προγράμματα σπουδών.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-2">3. Χρήση πληροφοριών</h2>
            <p>Τα στοιχεία σας χρησιμοποιούνται αποκλειστικά για την απάντηση στα ερωτήματά σας και για την παροχή πληροφοριών σχετικά με τις υπηρεσίες μας.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-2">4. Προστασία δεδομένων</h2>
            <p>Λαμβάνουμε εύλογα τεχνικά και οργανωτικά μέτρα για την προστασία των δεδομένων σας από μη εξουσιοδοτημένη πρόσβαση, αλλοίωση ή διαρροή.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-2">5. Δικαιώματα χρηστών</h2>
            <p>Έχετε το δικαίωμα πρόσβασης, διόρθωσης ή διαγραφής των προσωπικών σας δεδομένων. Για οποιοδήποτε αίτημα παρακαλούμε επικοινωνήστε μαζί μας.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-2">6. Επικοινωνία</h2>
            <p>Γραβιάς 62, Πετρούπολη · 210 5059577 · petrakopoulou.loukouza@gmail.com</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
