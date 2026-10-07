export default function Home() {
  const PAY_LINK = "https://buy.stripe.com/5kQaEX1fe12b4qsbGTeME00"; // on mettra le lien Stripe ici à l'action suivante

  return (
    <main className="min-h-screen bg-[#FBF7EE] text-[#14213D]">
      <div className="mx-auto max-w-xl px-5 py-10">
        <p className="text-sm font-bold tracking-widest uppercase text-[#14213D]/60">
          Agios
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight">
          Récupère les frais bancaires que ta banque t&apos;a prélevés à tort.
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-[#14213D]/80">
          Commissions d&apos;intervention, frais de rejet, options facturées sans
          usage : ils s&apos;ajoutent par petites lignes illisibles. La plupart
          sont plafonnés par la loi, souvent négociables, et presque jamais
          contestés.
        </p>

        <div className="mt-8 rounded-2xl border border-[#14213D]/15 bg-white p-5">
          <p className="font-bold">Ce que la loi plafonne</p>
          <p className="mt-2 text-[#14213D]/80">
            La commission d&apos;intervention est limitée à{" "}
            <strong>8 € par opération et 80 € par mois</strong>. Pour les clients
            en situation de fragilité financière : <strong>4 € et 20 €</strong>.
          </p>
        </div>

        <ul className="mt-8 space-y-4">
          <li className="flex gap-3">
            <span className="font-bold text-[#F4B942]">1.</span>
            <span>
              <strong>Tu déposes ton relevé.</strong> On repère chaque ligne de
              frais.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-[#F4B942]">2.</span>
            <span>
              <strong>Tu vois ton total sur 12 mois,</strong> comparé aux
              plafonds légaux.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-[#F4B942]">3.</span>
            <span>
              <strong>Tu reçois ton courrier de réclamation,</strong> prêt à
              envoyer à la bonne agence.
            </span>
          </li>
        </ul>

        <div className="mt-10 rounded-2xl bg-[#14213D] p-6 text-white">
          <p className="text-sm uppercase tracking-widest text-white/60">
            Précommande
          </p>
          <p className="mt-2 text-4xl font-bold">19 €</p>
          <p className="text-white/70">paiement unique, soit 0,05 € par jour sur 1 an</p>

          <p className="mt-4 text-white/90">
            Accès livré par email sous 7 jours maximum. Suivi des remboursements
            inclus pendant 12 mois.
          </p>

          <a
            href={PAY_LINK}
            className="mt-6 block w-full rounded-xl bg-[#F4B942] px-6 py-4 text-center text-lg font-bold text-[#14213D]"
          >
            Précommander pour 19 €
          </a>

          <p className="mt-3 text-center text-sm text-white/70">
            Paiement unique, sans abonnement
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-[#F4B942] bg-[#F4B942]/15 p-5">
          <p className="font-bold">Satisfait ou remboursé, 30 jours</p>
          <p className="mt-2 text-[#14213D]/80">
            Si tu n&apos;es pas satisfait, écris-nous par email dans les 30 jours
            suivant ton achat. Tu es remboursé intégralement sous 5 jours
            ouvrés, sans justification.
          </p>
        </div>

        <footer className="mt-12 text-sm text-[#14213D]/50">
          Mentions légales · CGV · Confidentialité (à venir avant la vraie vente)
        </footer>
      </div>
    </main>
  );
}
