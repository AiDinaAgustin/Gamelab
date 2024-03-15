$(document).ready(function () {

    // Function to load all juz data
    function loadJuzData(){
        $.ajax({
            url: "https://api.myquran.com/v2/quran/juz/semua",
            type: "GET",
            success: function (juzData) {
                displayJuzList(juzData.data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("Error fetching Juz information:", textStatus, errorThrown);
            }
        });
    }

    // Function to display the list of juz
    function displayJuzList(DataJuz) {
        var htmlContent = "";

        DataJuz.forEach(function(juzData) {
            var nomorJuz = juzData.number;
            var namaJuz = juzData.name;
            var mulaiJuz = juzData.name_start_id;
            var ayatAwal = juzData.verse_start;

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
            htmlContent += "    <button class='read-juz' data-juz='" + nomorJuz + "'>Baca</button>"; // Use "Baca" for Indonesian translation
            htmlContent += "    <button class='hide-juz' >Hide</button>"; // Use "Baca" for Indonesian translation
            htmlContent += "    <div class='ayat-container' style='display:none;'></div>"; // Container to display ayat, initially hidden
            htmlContent += "  </div>";
            htmlContent += "</li>";
        });
        $(".juz-list").html(htmlContent); 
    }

    // load all juz
    loadJuzData();

    // play button
    $(document).on("click", "button.read-juz", function(){
        var button = $(this);
        var juzNumber = button.data("juz");
        var ayatContainer = button.siblings('.ayat-container');

        $.ajax({
                url: "https://api.myquran.com/v2/quran/ayat/juz/" + juzNumber,
                type: "GET",
                success: function (ayatData) {
                // Clear previous content and show container
                ayatContainer.empty().show();
                            
                            // Append ayat to container
                    ayatData.data.forEach(function(ayat) {
                        ayatContainer.append("<p>"+ ayat.ayah + ". " + ayat.arab + "</p>");
                        ayatContainer.append("<span>" + ayat.text + "</span>");
                    });
                },
            error: function (jqXHR, textStatus, errorThrown) {
            console.error("Error fetching Ayat information for Juz " + juzNumber + ":", textStatus, errorThrown);
            }
        });
    });

    // Handle Hide Button Click
    $(document).on("click", ".hide-juz", function () {
        var button = $(this);
        var ayatContainer = button.siblings('.ayat-container');

        ayatContainer.empty().hide();
    });

    // **Search**
    $("#search-form").submit(function (event) {
        event.preventDefault(); // Prevent form submission

        var searchText = $("#search-input").val().toLowerCase();
        $(".nama-juz").each(function () {
            var juzName = $(this).text().toLowerCase();
            var parentLi = $(this).closest("li");
            if (searchText === "") {
                parentLi.show(); // Show all juz if search input is empty
            } else {
                if (juzName.indexOf(searchText) !== -1) {
                    parentLi.show();
                } else {
                    parentLi.hide();
                }
            }
        });
    });


   
});
