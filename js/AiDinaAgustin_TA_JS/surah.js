$(document).ready(function () {
    $("button").click(function () {
      $.ajax({
        url: "https://api.myquran.com/v2/quran/surat/semua",
        type: "GET",
        success: function (res) {
          var htmlContent = "";
  
          for (var i = 0; i < res.data.length; i++) {
            var nomorSurat = res.data[i].number;
            var namaSurat = res.data[i].name_id;
            var ayat = res.data[i].number_of_verses;
            var audioUrl = res.data[i].audio_url;
            var revelation_id = res.data[i].revelation_id;
            var translation_id = res.data[i].translation_id;
            var tafsir = res.data[i].tafsir;
  
            // Build HTML structure with classes for styling
            htmlContent += "<li>";
            htmlContent += "  <div class='nomor'>";
            htmlContent += "    <span class='nomor-surat'>" + nomorSurat + "</span>";
            htmlContent += "  </div>";
            htmlContent += "  <div class='info-container'>";
            htmlContent += "    <span class='nama-surat'>" + namaSurat + "</span>";
            htmlContent += "    <span class='translation_id'>" + translation_id + "</span>";
            htmlContent += "  </div>";
            htmlContent += "  <div class='info'>";
            htmlContent += "    <span class='revelation_id'>" + revelation_id + "</span>";
            htmlContent += "    <span class='jumlah-ayat'>| " + ayat + " ayat </span>";
            htmlContent += "  </div>";
            htmlContent += "  <div class='play'>";
            htmlContent += "    <button class='read-surat' data-surat='" + nomorSurat + "'>Baca</button>"; // Use "Baca" for Indonesian translation
            htmlContent += "    <button class='hide-surat' >Hide</button>"; // Use "Baca" for Indonesian translation
            htmlContent += "    <div class='ayat-container' style='display:none;'></div>"; // Container to display ayat, initially hidden
            htmlContent += "  </div>";
            htmlContent += "  <audio controls src='" + audioUrl + "'></audio>";
            htmlContent += "  <div class='additional-info'>";  
            htmlContent += "    <span class='tafsir'>" + tafsir + "</span>";
            htmlContent += "  </div>";  htmlContent += "</li>";
          }
  
          $(".surat-list").html(htmlContent); // Update the content of the list

          // play button
          $(".read-surat").click(function() {
            var button = $(this);
            var suratNumber = button.data("surat");
            var ayatContainer = button.siblings('.ayat-container');

            $.ajax({
                url: "https://quran-api.santrikoding.com/api/surah/" + suratNumber,
                type: "GET",
                success: function(suratData) {
                    ayatContainer.empty().show();

                    suratData.ayat.forEach(function(ayat){
                        ayatContainer.append("<p>"+ ayat.id + ". " + ayat.ar + "</p>");
                        ayatContainer.append("<span>" + ayat.idn + "</span>");
                    });
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.error("Error fetching Ayat information for Surat " + suratNumber + ":", textStatus, errorThrown);
                }
            });
          });

          // Button hide
          $(".hide-surat").click(function() {
            var button = $(this);
            var ayatContainer = button.siblings('.ayat-container');

            ayatContainer.empty().hide();
          });
        },

        error: function (jqXHR, textStatus, errorThrown) {
            console.error("Error fetching Juz information:", textStatus, errorThrown);
        }
      });
    });
  });
  