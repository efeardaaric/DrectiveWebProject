import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cubelune Privacy Policy | Drective',
  description: 'How Cubelune handles local progress, support requests, and advertising data.',
};

export default function CubelunePrivacy() {
  return (
    <main className="min-h-screen bg-[#20134b] px-6 pb-24 pt-32 text-white">
      <article className="mx-auto max-w-3xl space-y-8 leading-relaxed">
        <a className="text-purple-200 underline" href="/cubelune">← Cubelune support</a>
        <h1 className="text-4xl font-bold">Cubelune privacy policy</h1>
        <p className="text-purple-200">Effective date: October 7, 2026</p>
        <section><h2 className="mb-3 text-2xl font-semibold">About this policy</h2><p>This policy applies to Cubelune, published by Efe Arda Arıç under the Drective Interactive brand. For privacy questions, contact <a className="underline" href="mailto:drectivegames@gmail.com">drectivegames@gmail.com</a>.</p></section>
        <section><h2 className="mb-3 text-2xl font-semibold">Game progress</h2><p>Cubelune does not require a player account. Level progress, stars, high scores, and sound, music, and vibration preferences are stored locally on your device. We do not operate a server that receives your saved game progress. Removing the app may delete this local information.</p></section>
        <section><h2 className="mb-3 text-2xl font-semibold">Advertising</h2><p>Cubelune uses Google AdMob and the Google Mobile Ads SDK to show banner ads, ads between rounds, and optional rewarded ads. Google may process your IP address (including approximate location inferred from it), device or app identifiers, advertising interactions, app interactions, crash information, and performance diagnostics. These data may be used to deliver and measure advertising, prevent fraud, and improve services. Depending on your choices and applicable platform permissions, advertising partners may use data for personalized advertising or tracking across other companies’ apps and websites. Cubelune does not ask for access to your precise GPS location, contacts, camera, or microphone.</p><p className="mt-3">See <a className="underline" href="https://policies.google.com/privacy">Google’s privacy policy</a> and <a className="underline" href="https://policies.google.com/technologies/partner-sites">how Google uses information from apps that use its services</a>.</p></section>
        <section><h2 className="mb-3 text-2xl font-semibold">Your choices</h2><p>Where required, Google’s User Messaging Platform presents an advertising consent message. You can review available choices using “Ad privacy choices” in the game’s Settings when that entry point is required. Apple may also present its tracking permission prompt. You may refuse tracking and continue playing. iOS privacy settings let you manage app tracking permission. Rewarded ads are optional and reward a completed viewing with the stated in-game second chance.</p></section>
        <section><h2 className="mb-3 text-2xl font-semibold">Support and retention</h2><p>If you email us, we receive the email address and information you include. We use these to respond and investigate your request, and keep them only as needed for support and applicable obligations. Avoid including sensitive information. Advertising data is handled and retained by Google and its partners under their policies, and may be processed outside your country.</p></section>
        <section><h2 className="mb-3 text-2xl font-semibold">Privacy requests</h2><p>Depending on where you live, you may have rights to access, correct, erase, restrict, or object to processing of personal information, withdraw consent, or complain to your local data protection authority. Email us for requests concerning support information we hold. For Google’s advertising information, use the privacy controls and contact methods described in Google’s policy.</p></section>
        <section><h2 className="mb-3 text-2xl font-semibold">Children and updates</h2><p>Cubelune is a general-audience puzzle game, not an app specifically directed at children. Please contact us if you believe a child has provided personal information in a support request. Changes to this policy will be posted here with an updated effective date.</p></section>
        <section lang="tr" className="rounded-2xl bg-white/10 p-6"><h2 className="mb-3 text-2xl font-semibold">Türkçe özet</h2><p>Cubelune hesap gerektirmez. İlerleme, yıldızlar, en iyi skorlar ve oyun tercihleri cihazda saklanır. Reklamlar için Google AdMob kullanılır; Google yaklaşık konum, cihaz/uygulama tanımlayıcıları, reklam ve uygulama etkileşimleri ile hata ve performans verilerini işleyebilir. İlgili bölgelerde reklam rızası mesajı gösterilir. Gerektiğinde Ayarlar içindeki “Ad privacy choices” seçeneğinden tercihlerinizi değiştirebilirsiniz. Takip iznini reddetmeniz oyuna erişiminizi engellemez. Destek için gönderdiğiniz e-postalar yalnızca talebinizi yanıtlamak ve incelemek amacıyla kullanılır. Gizlilik talepleriniz için drectivegames@gmail.com adresine yazabilirsiniz.</p></section>
      </article>
    </main>
  );
}
