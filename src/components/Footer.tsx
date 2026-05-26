import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container-page py-14 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-2xl mb-3">Κέντρο Ξένων Γλωσσών Πετρακοπούλου - Λουκουζά </h3>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Από το 2000. Για σωστή και υπεύθυνη μάθηση, ελάτε σε μας.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3">Επικοινωνία</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>Γραβιάς 62, Πετρούπολη</li>
            <li><a href="tel:2105059577" className="hover:text-gold">210 5059577</a></li>
            <li><a href="mailto:petrakopoulou.loukouza@gmail.com" className="hover:text-gold break-all">petrakopoulou.loukouza@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3">Νομικά</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="text-primary-foreground/80 hover:text-gold">Πολιτική Απορρήτου</Link></li>
            <li><Link to="/terms" className="text-primary-foreground/80 hover:text-gold">Όροι Χρήσης</Link></li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="https://www.instagram.com/petrakopoulou_loukouza?igsh=b2k1dzkxMGQ4a2Qy" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-gold hover:border-gold transition">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            </a>
            <a href="https://www.facebook.com/p/%CE%9A%CE%95%CE%9D%CE%A4%CE%A1%CE%9F-%CE%9E%CE%95%CE%9D%CE%A9%CE%9D-%CE%93%CE%9B%CE%A9%CE%A3%CE%A3%CE%A9%CE%9D-%CE%A0%CE%95%CE%A4%CE%A1%CE%A1%CE%91%CE%9A%CE%9F%CE%A0%CE%BF%CE%A5%CE%9B%CE%9F%CE%A5-%CE%9B%CE%1F%CE%A5%CE%9A%CE%9F%CE%A5%CE%96%CE%91-100063441986413/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-gold hover:border-gold transition">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-2 2-2h2V2.1C16.6 2 15.4 2 14.3 2 11.6 2 10 3.7 10 6.8V10H7v4h3v8h3z"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* ΕΔΩ ΕΓΙΝΕ Η ΑΛΛΑΓΗ */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-page py-5 text-center text-xs text-primary-foreground/70 space-y-1">
          <p>© {new Date().getFullYear()} Κέντρο Ξένων Γλωσσών Πετρακοπούλου - Λουκουζά. Όλα τα δικαιώματα διατηρούνται.</p>
          <p className="text-[11px] text-primary-foreground/50">
            Designed & Developed by {""}
            <a 
              href="https://www.linkedin.com/in/mitsioss/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gold transition-colors underline underline-offset-2"
            >
              Dimitris Mitsios 
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}