import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Nool Destek | Drective', description: 'Nool uygulaması için destek, gizlilik ve topluluk kuralları.' };
export default function NoolSupport() {
  return <main className="min-h-screen bg-[#0a0a0c] px-6 pb-24 pt-32 text-gray-200"><article className="mx-auto max-w-3xl space-y-6 leading-relaxed">
    <h1 className="text-4xl font-bold text-amber-400">Nool destek / Support</h1>
    <p>Nool, kısa videolar paylaşmak, yakınındaki içerikleri keşfetmek ve arkadaşlarla iletişim kurmak için bir sosyal uygulamadır.</p>
    <p>Uygulama desteği, gizlilik talepleri ve uygunsuz içerik bildirimleri için <a className="text-amber-300 underline" href="mailto:aricefearda@gmail.com">aricefearda@gmail.com</a> adresine yazın. Sorunu açıklarken uygulama sürümünü ve cihaz modelini ekleyin. Şifrenizi veya oturum bilgilerinizi paylaşmayın.</p>
    <h2 className="text-2xl font-semibold">İçerik şikayeti ve engelleme</h2><p>Video menüsünden içeriği şikayet edebilir ve kullanıcıyı engelleyebilirsiniz. Acil bir güvenlik sorunu için destek e-postasını kullanın; bu adres acil yardım hizmeti değildir.</p>
    <h2 className="text-2xl font-semibold">Hesap silme / Account deletion</h2><p>Uygulamada Profil → Ayarlar → Hesabı sil yolunu izleyin. Silme başarısız olursa tekrar deneyin veya destek ekibine yazın. Hesap ve hesapla ilişkili içeriklerin silinmesi geri alınamaz.</p>
    <p lang="en">For app support, privacy requests or content reports, email <a className="underline" href="mailto:aricefearda@gmail.com">aricefearda@gmail.com</a>. Account deletion is available under Profile → Settings → Delete account. Never send your password.</p>
    <nav className="flex flex-wrap gap-6"><a className="text-amber-300 underline" href="/nool/privacy">Gizlilik / Privacy</a><a className="text-amber-300 underline" href="/nool/terms">Topluluk kuralları / Terms</a><a className="text-amber-300 underline" href="https://drective.io">Drective</a></nav>
  </article></main>;
}
