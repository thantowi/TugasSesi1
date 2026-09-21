const products = [
  {
    nama: "Sepatu Running",
    harga: 250000,
    deskripsi: "Sepatu untuk olahraga dan jogging",
    gambar: "Sepatu.jpeg",
    kategori: "Sepatu",
  },
  {
    nama: "Kaos Polos",
    harga: 100000,
    deskripsi: "Kaos cotton nyaman digunakan",
    gambar: "Pakaian.jpeg",
    kategori: "Pakaian",
  },
  {
    nama: "Tas Ransel",
    harga: 180000,
    deskripsi: "Tas untuk sekolah dan kerja",
    gambar: "Tas.jpeg",
    kategori: "Tas",
  },
];

const container = document.getElementById("products");

function tampilkanProduk(data) {
  container.innerHTML = "";

  data.forEach((product) => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.gambar}">
        <h2>${product.nama}</h2>
        <p>${product.deskripsi}</p>
        <p>Rp ${product.harga}</p>
        <small>${product.kategori}</small>
      </div>
    `;
  });
}

tampilkanProduk(products);

document
  .getElementById("categoryFilter")
  .addEventListener("change", function () {
    const kategori = this.value;

    if (kategori === "all") {
      tampilkanProduk(products);
    } else {
      const hasil = products.filter((product) => product.kategori === kategori);
      tampilkanProduk(hasil);
    }
  });
