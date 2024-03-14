$(document).ready(function () {
    $("button.get").click(function () {
      $.ajax({
        url: "https://api.myquran.com/v2/quran/juz/semua",
        type: "GET",
        success: function (res) {
          var htmlContent = "";
  
          for (var i = 0; i < res.data.length; i++) {
            var nomorJuz = res.data[i].number;
            var namaJuz = res.data[i].name;
            var mulaiJuz = res.data[i].name_start_id;
            var ayatAwal = res.data[i].verse_start;
  
            // Build HTML structure with classes for styling
            htmlContent += "<li>";
            htmlContent += "  <div class='info-container'>";
            htmlContent += "    <span class='nama-juz'>" + namaJuz + "</span>";
            htmlContent += "  </div>";
            htmlContent += "  <div class='info'>";
            htmlContent += "    <span class='mulai-juz'>Mulai Di: " + mulaiJuz + "</span>";
            htmlContent += "    <span class='jumlah-ayat'>| ayat " + ayatAwal + " </span>";
            htmlContent += "  </div>";
            htmlContent += "  <div class='play'>";
            htmlContent += "    <button class='read-juz' data-juz='" + nomorJuz + "'>read</button>";
            htmlContent += "  </div>";
            htmlContent += "</li>";
          }
  
          $(".juz-list").html(htmlContent); // Update the content of the list
        },
      });
    });
});
