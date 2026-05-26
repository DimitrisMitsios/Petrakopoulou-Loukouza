import { useEffect, useState, useCallback } from "react";

const reviews = [
  { id: 1, name: "xrusa ksiggeni", avatar: "XK", text: "Είστε μοναδικές !!!! Τι να πω τώρα εγώ για εσάς μετά από τόσα χρόνια συνεργασίας, γεμάτα γνώση, χαρές, διακρίσεις, συγκινήσεις. Σας αγαπώ και δεν θα σας άλλαζα με τίποτα. !!!!!" },
  { id: 2, name: "Μάνος Πετσάκης", avatar: "ΜΠ", text: "Είναι ένα φροντιστήριο που το απαρτίζουν αξιόλογα άτομα με μόνο σκοπό την εκμάθηση των ξένων γλωσσών! Το περιβάλλον είναι πολύ φιλικό και τα παιδιά νιώθουν σαν το σπίτι τους...!!!" },
  { id: 3, name: "eleftheria bletsa", avatar: "EB", text: "Καταπληκτική δουλειά από όλους! Εκπαιδευτικοί με γνώση και ζεστασιά την οποία χαρίζουν απλόχερα στα παιδιά μας! Και φυσικά με την καλύτερη γραμματεία ever!! Ευχαριστούμε για όλα!! Είμαστε τυχεροί που σας έχουμε!" },
  { id: 4, name: "Stella Taladianou", avatar: "ST", text: "Εξαιρετική δουλειά απ' όλο το προσωπικό! Άριστη εκπαιδευτική κατάρτιση με παιδαγωγικό και ανθρώπινο ενδιαφέρον. Το συστήνω ανεπιφύλακτα!" },
  { id: 5, name: "ΑΛΕΞΑΝΔΡΑ ΤΑΚΗ", avatar: "ΑΤ", text: "Δεν θα σας άλλαζα με κανένα άλλο. Σας αγαπώ και σας ευχαριστώ για όλα." },
  { id: 6, name: "ΜΑΡΙΑ", avatar: "Μ", text: "ΑΓΑΠΗΜΕΝΕΣ ΔΑΣΚΑΛΕΣ ΓΙΑ ΓΟΝΕΙΣ ΚΑΙ ΠΑΙΔΙΑ. ΑΡΙΣΤΟΙ ΕΠΑΓΓΕΛΜΑΤΙΕΣ!!!!" },
  { id: 7, name: "MAKIS GONIS", avatar: "MG", text: "Αξιόλογοι εκπαιδευτικοί και άνθρωποι! Μπράβο σε όλους!!!" },
  { id: 8, name: "ΒΑΣΙΛΗΣ ΔΗΜΗΤΡΟΠΟΥΛΟΣ", avatar: "ΒΔ", text: "ΑΨΟΓΟΙ ΔΑΣΚΑΛΟΙ ΜΕ ΠΑΘΟΣ ΚΑΙ ΑΓΑΠΗ ΓΙΑ ΤΑ ΠΑΙΔΙΑ !!!" },
  { id: 9, name: "Mary Kat", avatar: "MK", text: "Οι καλύτεροι με διαφορά !!!" },
  { id: 10, name: "Natassa K", avatar: "NK", text: "Είστε καταπληκτικές!!!!" },
];

function Star() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
    </svg>
  );
}

export function ReviewsCarousel() {
  const [i, setI] = useState(0);
  const [touchX, setTouchX] = useState<number | null>(null);

  const next = useCallback(() => setI((p) => (p + 1) % reviews.length), []);
  const prev = useCallback(() => setI((p) => (p - 1 + reviews.length) % reviews.length), []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const r = reviews[i];

  return (
    <div
      className="relative max-w-3xl mx-auto"
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (dx > 50) prev();
        else if (dx < -50) next();
        setTouchX(null);
      }}
    >
      <div className="bg-card rounded-2xl border border-border shadow-sm p-8 md:p-12 min-h-[280px] flex flex-col justify-between">
        <div>
          <div className="flex gap-1 mb-4">{Array.from({ length: 5 }).map((_, k) => <Star key={k} />)}</div>
          <p className="font-display text-xl md:text-2xl leading-relaxed text-foreground/90 italic">
            «{r.text}»
          </p>
        </div>
        <div className="flex items-center gap-3 mt-8">
          <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-semibold">
            {r.avatar}
          </div>
          <div>
            <div className="font-medium text-foreground">{r.name}</div>
            <div className="text-xs text-muted-foreground">Google Review</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <button onClick={prev} aria-label="Προηγούμενη" className="w-11 h-11 rounded-full border border-border bg-card hover:bg-accent transition flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div className="flex gap-2">
          {reviews.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Κριτική ${k + 1}`}
              className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-border"}`}
            />
          ))}
        </div>
        <button onClick={next} aria-label="Επόμενη" className="w-11 h-11 rounded-full border border-border bg-card hover:bg-accent transition flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
}
