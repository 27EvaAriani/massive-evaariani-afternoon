import Banner from "../components/banner-komunitas";
import Navbar from "../components/navbar";
import SidebarKomunitas from "../components/sidebar-komunitas";

export default function Diskusi() {
  return (
    <>
      <Navbar />
      <div className="grid grid-flow-col bg-komunitas">
        <SidebarKomunitas />
        <Banner />
        <div className="col-span-2 row-span-2 mt-10">
          <section className="bg-komunitas col-span-2 row-span-2">
            <div class="w-full px-4 md:w-1/2 xl:w-[60rem] mx-auto">
              <div class="mb-3 overflow-hidden rounded-2xl bg-purple-sosialify">
                <h3 className="text-yellow-400 border-b-2 px-8 py-6 mx-1 font-semibold">
                  Tentang
                </h3>
                <p class="p-9 text-base leading-relaxed text-white">
                  Programmer Forum adalah tempat perkumpulan para programmer
                  veteran maupun pemula untuk saling berbagi ilmu dan info
                  seputar teknologi. Selain itu, komunitas ini ditunjukkan bagi
                  pemula yang ingin belajar Programming. Dapatkan bantuan dari
                  ribuan ahli dan profesional programmer di seluruh Indonesia.
                  Disini kamu bisa mengajukan berbagai pertanyaan seputar
                  programmer yang kamu tidak ketahui.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-komunitas col-span-2 row-span-2">
            <div class="w-full px-4 md:w-1/2 xl:w-[60rem] mx-auto">
              <div class="mb-3 overflow-hidden rounded-3xl bg-purple-sosialify">
                <h3 className="text-yellow-400 border-b-2 px-8 py-6 mx-1 font-semibold">
                  Riwayat
                </h3>
                <p class="p-9 text-base leading-relaxed text-white">
                  Berdiri sejak 31 mei 2023
                </p>
              </div>
            </div>
          </section>
          <section className="bg-komunitas col-span-2 row-span-2">
            <div class="w-full px-4 md:w-1/2 xl:w-[60rem] mx-auto">
              <div class="mb-3 overflow-hidden rounded-3xl bg-purple-sosialify">
                <h3 className="text-yellow-400 border-b-2 px-8 py-6 mx-1 font-semibold">
                  Lokasi
                </h3>
                <p class="p-9 text-base leading-relaxed text-white">
                  Komunitas ini berlokasi di Jakarta, Indonesia.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-komunitas col-span-2 row-span-2">
            <div class="w-full px-4 md:w-1/2 xl:w-[60rem] mx-auto">
              <div class="mb-3 overflow-hidden rounded-3xl bg-purple-sosialify">
                <h3 className="text-yellow-400 border-b-2 px-8 py-6 mx-1 font-semibold">
                  Aturan Grup dari Admin
                </h3>
                {/* <p class="p-9 text-base leading-relaxed text-white">
                  Komunitas ini berlokasi di Jakarta, Indonesia.
                </p> */}
                <ol className="p-9 text-base leading-relaxed text-white list-decimal">
                  <li className="ml-3">
                    Bersikap Baik dan Sopan
                    <p className="ml-1 mt-3">
                      Kita semua bersama-sama menciptakan lingkungan yang ramah.
                      Mari kita perlakukan semua orang dengan rasa hormat.
                      Perdebatan yang sehat itu hal yang wajar, tapi lakukan
                      dengan baik
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
