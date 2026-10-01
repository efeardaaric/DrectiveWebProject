import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kullanım Şartları | Drective',
  description: 'Drective web sitesi kullanım şartları.',
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0c] text-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-400 mb-4 font-heading">Kullanım Şartları</h1>
          <p className="text-gray-400">Son Güncellenme Tarihi: 23 Eylül 2025</p>
        </div>

        <div className="glass p-8 rounded-xl">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4 font-heading">1. Giriş</h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Drective web sitesine (&quot;Site&quot;) hoş geldiniz. Bu Kullanım Şartları (&quot;Şartlar&quot;), Site&apos;yi ziyaret etmeniz ve kullanmanız 
              ile ilgili olarak sizinle Drective arasındaki hukuki ilişkiyi düzenler. Lütfen Site&apos;yi kullanmadan önce bu Şartları dikkatle okuyunuz.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4 font-heading">2. Sorumluluk Reddi</h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Site&apos;de yer alan tüm içerikler &quot;olduğu gibi&quot; sunulmaktadır. Drective, içeriklerin doğruluğu, güncelliği veya 
              eksiksizliği konusunda herhangi bir garanti vermemektedir. Sitenin kullanımından doğabilecek her türlü zarardan 
              Drective sorumlu tutulamaz.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4 font-heading">3. Fikri Mülkiyet Hakları</h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Site&apos;de yer alan tüm içerikler (metinler, görseller, logolar, tasarımlar, yazılımlar vb.) Drective veya lisans 
              verenlerine aittir ve Türk Fikri ve Sınaî Haklar Kanunu ve ilgili mevzuat kapsamında korunmaktadır. İzinsiz kopyalama, 
              çoğaltma, dağıtma veya başka bir şekilde kullanımı yasaktır.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4 font-heading">4. Kullanıcı Yükümlülükleri</h2>
            <p className="mb-4 text-gray-300 leading-relaxed">
              Site&apos;yi kullanırken aşağıdaki kurallara uymayı kabul edersiniz:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2 leading-relaxed">
              <li>Yasalara aykırı faaliyetlerde bulunmamak,</li>
              <li>Başkalarının haklarını ihlal etmemek,</li>
              <li>Zararlı yazılım yaymamak veya yüklememek,</li>
              <li>Site&apos;nin işleyişini engellemeye veya bozmaya çalışmamak,</li>
              <li>Üçüncü kişilerin kişisel verilerini izinsiz olarak paylaşmamak,</li>
              <li>Sahte veya yanıltıcı bilgi vermemek.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4 font-heading">5. Üçüncü Taraf Bağlantıları</h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Site üzerinden erişilebilen üçüncü taraf web sitelerinin içerikleri, gizlilik politikaları veya uygulamaları 
              üzerinde herhangi bir kontrolümüz bulunmamaktadır. Bu tür sitelerin kullanımından doğabilecek her türlü zarar veya 
              kayıptan sorumlu değiliz.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4 font-heading">6. Hizmetlerin Değiştirilmesi veya Sona Erdirilmesi</h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Drective, herhangi bir zamanda önceden bildirimde bulunmaksızın Site&apos;de değişiklik yapma, içerik ekleme veya 
              çıkarma, hizmetleri değiştirme veya sonlandırma hakkını saklı tutar.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4 font-heading">7. Sınırlı Sorumluluk</h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Drective, Site&apos;nin kesintisiz, güvenli veya hatasız olacağına dair herhangi bir garanti vermemektedir. 
              Sitenin kullanımından doğan doğrudan veya dolaylı zararlardan sorumlu tutulamaz.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4 font-heading">8. Tazminat</h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Bu Şartların ihlalinden veya Site&apos;nin kötüye kullanılmasından kaynaklanan her türlü talep, zarar, yükümlülük, 
              gider ve masraflar (avukatlık ücretleri dahil) için Drective&apos;i tazmin etmeyi kabul edersiniz.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4 font-heading">9. Uygulanacak Hukuk ve Yetkili Mahkeme</h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Bu Şartlar, Türk hukukuna tabidir. Taraflar arasında doğabilecek uyuşmazlıkların çözümünde İstanbul Anadolu 
              Mahkemeleri ve İcra Daireleri yetkilidir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 font-heading">10. Değişiklikler</h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Drective, dilediği zaman bu Şartlarda değişiklik yapma hakkını saklı tutar. Değişiklikler, Sitede yayınlandığı 
              andan itibaren geçerli olacaktır. Değişikliklerden sonra Site&apos;yi kullanmaya devam etmeniz, değişiklikleri kabul 
              ettiğiniz anlamına gelir.
            </p>
          </section>

          <section className="pt-8 mt-8 border-t border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4 font-heading">İletişim</h2>
            <p className="text-gray-300 leading-relaxed">
              <span className="block mb-2"><strong>Şirket Ünvanı:</strong> D-RECTIVE YAZILIM VE DANIŞMANLIK LİMİTED ŞİRKETİ</span>
              <span className="block"><strong>Adres:</strong> Halkalı Merkez Mah. Halkalı Cad No:281/23 Ofis No:34, 34303 Küçükçekmece/İstanbul</span>
              <span className="block"><strong>E-posta:</strong> drectivegames@gmail.com</span>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
