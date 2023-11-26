// Contoh URL dari Google Apps Script
var scriptUrl = 'https://script.google.com/macros/s/AKfycbxqlAciFm9NTbEZvZEvEmN97vbldq8TFZVZy5nWzWC2_angx_kA1q3RqdJnFb3fXKXKDA/exec';



function loadJokes(){
    // Mendapatkan elemen tombol
    var loadButton = document.getElementById('loadButton');

    // Mengganti teks tombol menjadi "Loading..."
    loadButton.innerHTML = 'Loading...';  
    
    // Mengambil data JSON dari Google Apps Script
    fetch(scriptUrl)
      .then(response => response.json())
      .then(data => {
        // Menggunakan nilai dari objek JSON
        var jokesValue = data.jokes;
        var dateValue = data.date;
        var eventValue = data.event;
    
        dateValue = new Date(dateValue).toLocaleDateString('id-ID', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
    
        // Menampilkan nilai ke dalam elemen HTML
        document.getElementById('output').innerHTML = jokesValue;
        document.getElementById('info').innerHTML = "(" + eventValue + " - " + dateValue + ")";
      })
      .catch(error => console.error('Error fetching data:', error))
      .finally(() => {
        // Mengganti teks tombol kembali setelah selesai loading
        loadButton.innerHTML = 'Niel, Jokes Niel';
      });
  }

  
