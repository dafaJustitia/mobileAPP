import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Modal,
  Button,
  ScrollView,
} from "react-native";

const datas = [
  {
    id: 1,
    title:
      "Telkom Indonesia Gelar Acara Site Visit Implementasi Digital Culture di Telkom University Surabaya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/bfi_thumb/telkom-indonesia-7g41cvdgogl9rhsj4xajruxo4gwvtple82g3pv6nyhc.jpg?lossy=2&strip=1&webp=1",
    description:
      "Surabaya, Agustus 2024 – PT Telkom Indonesia mengadakan acara site visit untuk implementasi Digital Culture yang bertempat di Aula Telkom University Surabaya pada hari Jumat (23/08/2024). Acara ini merupakan bagian dari rangkaian program Satyalancana Wira Karya  yang dinilai langsung oleh Kementerian Komunikasi dan Informatika. Acara dimulai di Telkom Landmark Tower Surabaya dan dilanjutkan dengan kunjungan ke empat pameran inovasi, tiga di antaranya merupakan hasil karya PT Telkom Indonesia, sementara satu inovasi lainnya adalah hasil dari mahasiswa Telkom University Surabaya dengan pendanaan dari PT Telkom Indonesia. Pameran ini menunjukkan komitmen Telkom Indonesia dalam mendorong inovasi dan penerapan budaya digital di berbagai sektor, termasuk pendidikan.",
    date: "27 Agustus 2024",
  },
  {
    id: 2,
    title: "Tel-U Surabaya Gelar Sosialisasi Bandung Techno Park",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/kekayaan-intelektual-1200x600.jpg?lossy=2&strip=1&webp=1",
    description:
      "Surabaya, Agustus 2024 – Tak henti berkarya dan berguna dalam masyarakat, kali ini Telkom University Surabaya menunjukkan komitmennya dalam pengabdian masyarakat dengan mengimplementasikan sistem mixer audio digital di Masjid Al Hidayah, Surabaya pada Juli (28/07/2024). Sebagai bagian dari program pengabdian masyarakat yang bertujuan untuk meningkatkan kualitas suara dan kenyamanan jamaah saat beribadah.s. Implementasi mixer audio digital ini dilakukan oleh tim dosen dan mahasiswa dan dosen dari Program Studi S1 Teknik Komputer yang temasuk dalam Fakultas Teknik Elektro. Tim ini diketuai oleh Pangestu Widodo, S.T., M.Kom, dengan beranggotakan 3 dosen yaitu Dr. Mohammad Yanuar Hariyawan, S.T., M.T., Aulia Rahma Annisa, S.ST., M.T., Hendy Briantoro, S.ST., M.T., Ph.D.. Dan tim ini juga dibantu oleh 2 mahasiswa yaitu Naufal Zakariya dan Muhammad Rizal Firmansyah.",
    date: "6 Agustus 2024",
  },
  {
    id: 3,
    title:
      "Soft Launching dan Pengenalan Laboratorium Motion di Telkom University Surabaya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/motion-capture-1200x600.jpg?lossy=2&strip=1&webp=1",
    description:
      "Surabaya, Agustus 2024 – Telkom University Surabaya menggelar soft launching dan pengenalan Laboratorium Motion pada Kamis (01/08/2024) yang dihadiri oleh Wakil Direktur Bidang Admisi dan Marketing, Agoes Windarto S.T., M.M., serta direktur Summit Feature Sendirian Berhad, Mohammad Azlan bin Mohammed Shafie. Acara ini berlangsung meriah dengan kehadiran berbagai tamu undangan yang memiliki minat yang sama dalam bidang motion capture dan analisis klinis. Acara dibuka dengan sambutan hangat dari kedua belah pihak. Agoes Windarto S.T., M.M., menyampaikan rasa syukur dan kebanggaannya atas terwujudnya laboratorium ini, yang diharapkan dapat memberikan kontribusi besar dalam bidang penelitian motion di Indonesia.",
    date: "2 Agustus 2024",
  },
  {
    id: 4,
    title:
      "Tingkatkan Kualitas Pengelolaan Jurnal Ilmiah: Telkom University Surabaya Gelar Workshop Migrasi Web Jurnal",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/05/workshop-migrasi-web-1200x600.jpg?lossy=2&strip=1&webp=1",
    description:
      "Surabaya, Mei 2024 – Upaya meningkatkan kualitas dan efisiensi pengelolaan jurnal ilmiah menjadi satu hal yang diutamakan, oleh karenanya pada Jumat (17/05/2024) Telkom University Surabaya menyelenggarakan acara “Workshop Migrasi Web Jurnal Telkom University Surabaya”. Acara ini menghadirkan Yoga Dwi Arianda, S.T., yang menjabat sebagai Koordinator Publikasi Ilmiah dan Jurnal Ilmiah Kemdikbudristek, sebagai pemateri utama. Kepala bagian Lembaga Penelitian dan Pengabdian Masyarakat (LPPM), Susjianto Tri Rasmana, S.Kom., M.T. , menjelaskan, “Workshop ini dirancang untuk memberikan pengetahuan teknis kepada peserta mengenai proses migrasi web jurnal dari platform ITTS (Institut Teknologi Telkom Surabaya) ke platform Tel-U (Telkom University) Surabaya. Inisiatif ini diambil untuk memastikan bahwa pengelolaan web jurnal di Surabaya dapat memenuhi standar tinggi yang telah diterapkan di Tel-U Bandung, yang terkenal dengan sistem manajemennya yang efisien dan modern.",
    date: "17 Mei 2024",
  },
  {
    id: 5,
    title:
      "Menggali Potensi Desa: Telkom University Surabaya Mendukung UMKM di TambakKalisogo",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/03/Telkom-University-Surabaya-2-1200x600.jpg?lossy=2&strip=1&webp=1",
    description:
      "Surabaya, Maret 2024 – Desa Tambak Kalisogo, Sidoarjo menjadi semarak pada 18 Januari 2024 lalu saat Tim Telkom University Surabaya yang dipimpin oleh Achmad Muzakki S.kom., M.kom bersama anggotanya Fidi Wincoko Putro, S.ST., M.Kom dan Tita Ayu Rospricilia, S.Kom., M.Kom menyelenggarakan kegiatan pengabdian masyarakat (pengmas) yang bertujuan untuk mengenalkan aplikasi untuk mempermudah akses informasi serta koordinasi antarwarga. Acara ini tidak sekadar menjadi panggung penyuluhan, tetapi lebih sebagai ajang kolaborasi nyata antara akademisi dan masyarakat untuk memajukan Desa Tambak Kalisogo. Dalam suasana hangat tersebut, perwakilan Telkom University menyampaikan pesan penting akan kolaborasi yang erat untuk mencapai kemajuan bersama.",
    date: "13 Maret 2024",
  },
  {
    id: 6,
    title:
      "Telkom University Surabaya Hadirkan Inovasi Pengganti Bantalan Roda SemiOtonom Tank Leopard berbasis Electric Forklift Khusus untuk Penguatan Alutsista TNI",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/02/tank-leopard.jpg?lossy=2&strip=1&webp=1",
    description:
      "Surabaya, Februari 2024 – Seiring perubahan geopolitik strategis yang terjadi baik di tingkat global juga regional mendorong seluruh negara termasuk Indonesia untuk memperkuat keamanan teritorinya. Salah satu bagian terpenting yakni perlengkapan Alat Utama Sistem Senjata Tentara Nasional Indonesia (Alutsista) TNI sebagai gigi kekuatan negara. Karenanya, urgensi pembaruan alusista menjadi agenda penting sejak banyaknya pelanggaran batas wilayah kedaulatan yang dilakukan negara lain terhadap Indonesia telah menempati posisi kedua tertinggi setelah kejahatan konvensional berdasarkan data Kemenko Polhukam RI yang tercatat pada Rencana Strategis Deputi Bidang Koordinasi Pertahanan Negara Tahun 2020-2024 Kemenko Polhukam juga mencatat 44.194 kasus kejahatan transnasional pada tahun 2017, dan hingga kuartal pertama 2023, kasus gangguan keamanan dan keselamatan di laut mencapai 52 kasus. Pembaruan Alutsista TNI menjadi lebih mendesak dengan ketegangan di Laut Tiongkok Selatan antara Tiongkok, AS, dan negara-negara ASEAN yang dapat memicu konflik terbuka. Untuk menghadapi serangan ini, diperlukan Minimum Essential Force (MEF), peralatan dan sarana prasarana yang sesuai.",
    date: "26 Februari 2024",
  },
  {
    id: 7,
    title: "Sosialisasi PKM 2024 Bersama Tim Pemenangan Tel-U Surabaya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/02/pkm-2024-1-1200x600.jpeg?lossy=2&strip=1&webp=1",
    description:
      "Surabaya, Februari 2024 – Program Kreativitas Mahasiswa (PKM) 2024 datang lagi, siapkah dirimu? PKM sebagai sebuah wadah dalam memfasilitasi potensi yang dimiliki mahasiswa Indonesia untuk mengembangkan ide, gagasan, serta ilmu yang telah dipelajari di perkuliahan kepada masyarakat. Program Kreativitas Mahasiswa menjadi langkah strategis dalam menciptakan lingkungan pembelajaran yang inspiratif. Ini merupakan kompetensi bergengsi bagi mahasiswa untuk mencapai taraf kreatifitas dan inovasi di bidang sains dan teknologi dalam cakupan nasional. Sehubungan dengan itu, Telkom University Surabaya mengadakan sosisalisasi PKM 2024 melalui ZOOM pada Selasa (06/02/2024) untuk mendorong lebih banyak lagi mahasiswa yang ikut serta. Ahmad Wali Satria Bahari Johan, S.ST., M.Kom. selaku kepala urusan aktivitas kemahasiswaan menjelaskan, “Tahun lalu (2023) Telkom University Surabaya berhasil meloloskan 13 proposal pendanaan, tahun ini kita harapannya tahun ini lebih banyak PKM yang lolos pendanaan dan target kita ada PKM yang lolos PIMNAS. Perlu dicatat, PKM itu tidak hanya gagasan yang bagus saja namun juga cara menulisnya juga bagus sehingga bagaimana cara kita menuliskan proyek kita agar orang lain atau viewer dapat menilai projek kita lebih baik.”",
    date: "15 Februari 2024",
  },
  {
    id: 8,
    title:
      "Transformasi Digital Al-Barra Studio Melalui Pembuatan Website oleh Institut Teknologi Telkom Surabaya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/11/transformasi-digital.jpg?lossy=2&strip=1&webp=1",
    description:
      "Surabaya, November 2023 – Transformasi digital semakin meluas ke berbagai bidang dan menjadi kunci utama untuk mendukung perkembangan usaha di era ini. Al-Barra Studio di Kota Malang turut merasakan dampak positif dari transformasi digital ini, berkat kolaborasi dengan Tim Pengabdian kepada Masyarakat Institut Teknologi Telkom Surabaya. Tim Pengabdian kepada Masyarakat Institut Teknologi Telkom Surabaya mengunjungi Al-Barra Studio di Kota Malang pada tanggal 24 Agustus 2023 guna memahami kebutuhan dan permasalahan yang dihadapi oleh studio tersebut. Berdasarkan pemahaman ini, tim inisiatif untuk mengembangkan sebuah situs web khusus untuk Al-Barra Studio sebagai salah satu upaya mendukung transformasi digitalnya.",
    date: "08 November 2023",
  },
  {
    id: 9,
    title:
      "Program Pengabdian Masyarakat Telkom University Surabaya Bantu UMKM Desa Panjunan Go Digital dan Raih Pasar Internasional",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/09/umkm-go-digital-1200x600.jpg?lossy=2&strip=1&webp=1",
    description:
      "Surabaya, September 2024 – Telkom University Kampus Surabaya melalui program Pengabdian kepada Masyarakat telah berhasil memberikan dampak signifikan terhadap Usaha Mikro, Kecil, dan Menengah (UMKM) di Desa Panjunan, Gresik. Program ini dipimpin oleh Arni Muarifah Amri, S.T., M.T., dan didukung oleh anggota tim yang terdiri dari Dr. Dyah Putri Rahmawati, Dewi Rahmawati, S.Kom., M.Kom., serta para mahasiswa seperti Deo Farady Santoso, Devit Erlingga Arafiudin, Yemima Alda Puturuhu, Raihan Siyun, dan Evi Fitriya. Program ini bertujuan untuk memberdayakan UMKM di Desa Panjunan melalui pemanfaatan teknologi digital. Masyarakat diperkenalkan dengan aplikasi e-commerce yang dikembangkan oleh tim pengabdian, yang memungkinkan para pelaku UMKM lokal untuk menjual produk-produk mereka langsung kepada konsumen tanpa keterlibatan tengkulak, sehingga mereka bisa mendapatkan harga yang lebih adil. Produk-produk lokal yang dihasilkan, seperti kerajinan tangan dobong, kini memiliki peluang untuk dipasarkan tidak hanya di tingkat nasional, tetapi juga ke pasar internasional.",
    date: "18 September 2024",
  },
  {
    id: 10,
    title:
      "Workshop Social Media Marketing dari INDIBIZ Memberdayakan Pedagang Lokal",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/07/social-media-marketing-1-1200x600.jpg?lossy=2&strip=1&webp=1",
    description:
      "Surabaya, Juli 2024 – Selasa (16/07/2024), Telkom University Surabaya menjadi tempat diselenggarakannya Workshop Social Media Marketing oleh INDIBIZ. Acara ini bertujuan untuk membekali para pedagang di Sentra Wisata Kuliner (SWK) Ketintang Surabaya dengan keterampilan penting untuk memanfaatkan media sosial sebagai alat pemasaran yang efektif. Menyadari bahwa pasar utama para pedagang adalah mahasiswa yang merupakan pengguna aktif media sosial, inisiatif ini bertujuan untuk meningkatkan strategi promosi mereka. Sentra Wisata Kuliner Ketintang Surabaya dikenal sebagai pusat kuliner yang ramai dikunjungi oleh mahasiswa, pegawai, dan pengemudi ojek online. Pedagang di area ini umumnya menjual berbagai jenis makanan berat yang sangat diminati oleh pengunjung, baik untuk makan siang maupun sekadar melepas dahaga.",
    date: "18 Juli 2024",
  },
];

const List = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handlePress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.view} onPress={() => handlePress(item)}>
      <View>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {selectedItem && (
                <>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{ uri: selectedItem.image }}
                      style={styles.modalImage}
                    />
                    <Text style={styles.imageDate}>{selectedItem.date}</Text>
                  </View>

                  <Text style={styles.modalTitle}>{selectedItem.title}</Text>
                  <Text style={styles.modalDescription}>
                    {selectedItem.description}
                  </Text>
                </>
              )}
              <View style={{ marginTop: 20 }}>
                <Button
                  title="Tutup"
                  onPress={() => setModalVisible(false)}
                  color="#AA0002"
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 15,
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    paddingTop: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    width: "85%",
    maxHeight: "80%",
    elevation: 5,
  },
  imageContainer: {
    position: "relative",
    marginBottom: 15,
  },
  modalImage: {
    width: "100%",
    height: 180,
    borderRadius: 10,
  },
  imageDate: {
    position: "absolute",
    bottom: 8,
    left: 10,
    fontSize: 12,
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 15,
    textAlign: "justify",
    color: "#333",
  },
});

export default List;
