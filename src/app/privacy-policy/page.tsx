import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | D-RECTIVE',
  description: 'D-RECTIVE Gizlilik Politikası ve Kişisel Verilerin Korunması hakkında detaylı bilgi.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0c] text-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-400 mb-4 font-heading">Gizlilik Politikası</h1>
          <p className="text-gray-400">Son Güncellenme Tarihi: 23 Eylül 2025</p>
        </div>

        <div className="glass p-8 rounded-xl">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4 font-heading">1. Giriş</h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              D-RECTIVE olarak, ziyaretçilerimizin ve kullanıcılarımızın kişisel verilerinin güvenliğine büyük önem vermekteyiz. 
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında, kişisel verilerinizin işlenmesi, saklanması ve paylaşılmasına 
              ilişkin usul ve esaslar aşağıda detaylı bir şekilde açıklanmıştır.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4 font-heading">2. Veri Sorumlusu</h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              <span className="block mb-2"><strong>Şirket Ünvanı:</strong> D-RECTIVE YAZILIM VE DANIŞMANLIK LİMİTED ŞİRKETİ</span>
              <span className="block"><strong>Adres:</strong> Halkalı Merkez Mah. Halkalı Cad No:281/23 Ofis No:34, 34303 Küçükçekmece/İstanbul</span>
              <span className="block"><strong>E-posta:</strong> drectivegames@gmail.com</span>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4 font-heading">3. Hangi Kişisel Verileriniz İşlenmektedir?</h2>
            <p className="mb-4 text-gray-300 leading-relaxed">
              Tarafımızca işlenen kişisel verileriniz şunlardır:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2 leading-relaxed">
              <li>Kimlik bilgileriniz (ad, soyad, doğum tarihi vb.)</li>
              <li>İletişim bilgileriniz (adres, e-posta, telefon numarası vb.)</li>
              <li>Müşteri işlem bilgileriniz (sipariş bilgileri, fatura bilgileri vb.)</li>
              <li>İşlem güvenliği bilgileriniz (IP adresi, çerez bilgileri, konum bilgileri vb.)</li>
              <li>Pazarlama bilgileriniz (tercihler, beğeniler, kullanım alışkanlıkları vb.)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4 font-heading">4. Kişisel Verilerinizin İşlenme Amaçları</h2>
            <p className="mb-4 text-gray-300 leading-relaxed">
              Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2 leading-relaxed">
              <li>Sözleşmelerin kurulması ve ifası</li>
              <li>Kanunlardan kaynaklanan yükümlülüklerin yerine getirilmesi</li>
              <li>Müşteri ilişkileri yönetimi</li>
              <li>Ürün ve hizmetlerimizin geliştirilmesi</li>
              <li>Pazarlama faaliyetlerinin yürütülmesi</li>
              <li>Hukuki ve ticari güvenliğin temini</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4 font-heading">5. Kişisel Verilerin Aktarılması</h2>
            <p className="mb-4 text-gray-300 leading-relaxed">
              Kişisel verileriniz, kanunlarda öngörülen sınırlar çerçevesinde ve yasalara uygun olarak;
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2 leading-relaxed">
              <li>İş ortaklarımıza</li>
              <li>Tedarikçilerimize</li>
              <li>Kanunen yetkili kamu kurumlarına</li>
              <li>Kanunen yetkili özel kişilere</li>
              <li>Yurtdışına (gerekli güvenlik önlemleri alınarak)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              aktarılabilmektedir.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4 font-heading">6. Kişisel Veri Sahibinin Hakları</h2>
            <p className="mb-4 text-gray-300 leading-relaxed">
              KVKK&#39;nın 11. maddesi uyarınca herkes, veri sorumlusuna başvurarak aşağıdaki haklarını kullanabilir:
            </p>
            <ul className="list-decimal pl-6 mb-6 text-gray-300 space-y-2 leading-relaxed">
              <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
              <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
              <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
              <li>KVKK&#39;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
              <li>Düzeltme, silme veya yok edilme işlemlerinin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
              <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme haklarına sahiptir.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 font-heading">7. Değişiklik Hakkı</h2>
            <p className="text-gray-300 leading-relaxed">
              Şirketimiz, işbu gizlilik politikasında değişiklik yapma hakkını saklı tutar. Yapılan değişiklikler, 
              ilgili mevzuata uygun olarak yayınlandıktan hemen sonra yürürlüğe girer.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
