$(document).ready(function () {
    // Function to load all surah data
    function loadSurahData() {
        $.ajax({
            url: "https://api.myquran.com/v2/quran/surat/semua",
            type: "GET",
            success: function (res) {
                displaySurahList(res.data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("Error fetching Surah information:", textStatus, errorThrown);
            }
        });
    }

    // Function to display the list of surahs
    function displaySurahList(surahs) {
        var htmlContent = "";

        surahs.forEach(function (surah) {
            var nomorSurat = surah.number;
            var namaSurat = surah.name_id;
            var ayat = surah.number_of_verses;
            var audioUrl = surah.audio_url;
            var revelation_id = surah.revelation_id;
            var translation_id = surah.translation_id;
            var tafsir = surah.tafsir;

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
            htmlContent += "    <button class='read-surat' data-surat='" + nomorSurat + "'>Baca</button>";
            htmlContent += "    <button class='hide-surat'>Hide</button>";
            htmlContent += "    <div class='ayat-container' style='display:none;'></div>";
            htmlContent += "  </div>";
            htmlContent += "  <audio controls src='" + audioUrl + "'></audio>";
            htmlContent += "  <div class='additional-info'>";
            htmlContent += "    <span class='tafsir'>" + tafsir + "</span>";
            htmlContent += "  </div>";
            htmlContent += "</li>";
        });

        $(".surat-list").html(htmlContent); // Update the content of the list
    }

    // Load all surah data initially
    loadSurahData();

    // Handle Play Button Click
    $(document).on("click", ".read-surat", function () {
        var button = $(this);
        var suratNumber = button.data("surat");
        var ayatContainer = button.siblings('.ayat-container');

        $.ajax({
            url: "https://quran-api.santrikoding.com/api/surah/" + suratNumber,
            type: "GET",
            success: function (suratData) {
                ayatContainer.empty().show();

                suratData.ayat.forEach(function (ayat) {
                    ayatContainer.append("<p>" + ayat.nomor + ". " + ayat.ar + "</p>");
                    ayatContainer.append("<span>" + ayat.idn + "</span>");
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("Error fetching Ayat information for Surat " + suratNumber + ":", textStatus, errorThrown);
            }
        });
    });

    // Handle Hide Button Click
    $(document).on("click", ".hide-surat", function () {
        var button = $(this);
        var ayatContainer = button.siblings('.ayat-container');

        ayatContainer.empty().hide();
    });

    // Handle Search
    $("#search-form").submit(function (event) {
        event.preventDefault(); // Prevent form submission

        var searchText = $("#search-input").val().toLowerCase();
        $(".nama-surat").each(function () {
            var suratName = $(this).text().toLowerCase();
            var parentLi = $(this).closest("li");
            if (suratName.indexOf(searchText) !== -1 || searchText === "") {
                parentLi.show();
            } else {
                parentLi.hide();
            }
        });
    });
});
