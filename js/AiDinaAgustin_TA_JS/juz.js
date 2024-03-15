$(document).ready(function () {

    $("button.get").click(function () {
        $.ajax({
            url: "https://api.myquran.com/v2/quran/juz/semua",
            type: "GET",
            success: function (juzData) {
                var htmlContent = "";

                for (var i = 0; i < juzData.data.length; i++) {
                    var nomorJuz = juzData.data[i].number;
                    var namaJuz = juzData.data[i].name;
                    var mulaiJuz = juzData.data[i].name_start_id;
                    var ayatAwal = juzData.data[i].verse_start;

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
                }

                $(".juz-list").html(htmlContent); // Update the content of the list
                
                // ** Play Button Click**
                $("button.read-juz").click(function () {
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

                // ** Hide Button Click**
                $("button.hide-juz").click(function() {
                    var ayatContainer = $(this).siblings('.ayat-container');
                    ayatContainer.empty().hide();
                    });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("Error fetching Juz information:", textStatus, errorThrown);
            }
        });
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
