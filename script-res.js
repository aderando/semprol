function formatRupiah(number) {
    var formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    return formatter.format(number).replace("Rp", "").replace(/,/g, ".");
}

function displayInputs() {
    var tebakanElement = document.getElementById("tebakan");
    var periodeElement = document.getElementById("periode");
    var usernameElement = document.getElementById("username");
    var saldoElement = document.getElementById("saldo");
    var pasaranyaElement = document.getElementById("pasaranya");

    var tebakanDisplay = document.getElementById("tebakanDisplay");
    var periodeDisplay = document.getElementById("periodeDisplay");
    var usernameDisplay = document.getElementById("usernameDisplay");
    var saldoDisplay = document.getElementById("saldoDisplay");
    var pasaranyaDisplay = document.getElementById("pasaranyaDisplay");

    var saldoValue = parseFloat(saldoElement.value);

    if (!isNaN(saldoValue)) {
        tebakanDisplay.textContent = tebakanElement.value;
        periodeDisplay.textContent = periodeElement.value;
        usernameDisplay.textContent = usernameElement.value;
        saldoDisplay.textContent = formatRupiah(saldoValue);
        pasaranyaDisplay.textContent = pasaranyaElement.value;
    } else {
        tebakanDisplay.textContent = "";
        periodeDisplay.textContent = "";
        usernameDisplay.textContent = "";
        saldoDisplay.textContent = "";
        pasaranyaDisplay.textContent = "";
    }
}

// AKHIR PERBATASAN KODE
function multiply() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;

    if (number1 && number2) {
        var formattedNumber1 = Number(number1).toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).replace("Rp", "");
        var result = number1 * number2;
        var formattedResult = result.toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).replace("Rp", "");
        var formattedResultWithoutComma = formattedResult.replace(",", "");
        
        document.getElementById("number1Value1").textContent = formattedNumber1;
        document.getElementById("number1Value2").textContent = formattedNumber1;
        document.getElementById("number2Value").textContent = number2;
        document.getElementById("resultValue1").textContent = formattedResultWithoutComma;
        document.getElementById("resultValue2").textContent = formattedResultWithoutComma;
    } else {
        document.getElementById("number1Value1").textContent = "";
        document.getElementById("number1Value2").textContent = "";
        document.getElementById("number2Value").textContent = "";
        document.getElementById("resultValue1").textContent = "";
        document.getElementById("resultValue2").textContent = "";
    }
}

// kepo lu
let raiseVisible = false;

document.addEventListener('keydown', function(event) {
  // Memeriksa apakah tombol Ctrl (17) dan tombol . (190) (titik) ditekan
  if (event.ctrlKey && event.keyCode === 190) {
    // Mengubah status visibilitas elemen "raise"
    if (raiseVisible) {
      document.getElementById('raise').style.display = 'none';
    } else {
      document.getElementById('raise').style.display = 'block';
    }
    raiseVisible = !raiseVisible;
  }
});
