function calculate() {
    var nama = document.getElementById('nama').value;
    var totalBerlian = parseFloat(document.getElementById('totalBerlian').value);
    var hargaPerBerlian = 4.05; // Harga per berlian
  
    if (isNaN(totalBerlian)) {
      alert("Masukkan total berlian yang valid.");
      return;
    }
  
    var hasil = totalBerlian * hargaPerBerlian;
  
    var table = document.getElementById('result');
    var newRow = table.insertRow(-1);
    var cellNama = newRow.insertCell(0);
    var cellHasil = newRow.insertCell(1);
    cellNama.innerHTML = nama;
    cellHasil.innerHTML = formatCurrency(hasil);
}

function formatCurrency(amount) {
    var formattedAmount = Math.round(amount).toLocaleString('id-ID'); // Menghilangkan digit desimal dan membulatkan ke atas
    if (amount == 4.05) { // Jika hasilnya adalah 4.05, tetap tampilkan 4.05
        return "Rp 4.05";
    }
    return "Rp " + formattedAmount;
}
