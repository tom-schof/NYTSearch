var q = $("#search-term").val();
var begin_date = $("#start-year").val();
var end_date = $("#end-year").val();



var params = {
    'api-key': "69e810d940ea4558a3e8a2011b10c804",
};

if (q != "") {
    params['q'] = q;
}

if (begin_date != null) {
    params['begin_date'] = begin_date + "0101";
}

if (end_date != null) {
    params['end_date'] = end_date + "0101";
}


console.log(params);

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param(params);


function searchNYT() {
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result);

        $("#top-articles").text(JSON.stringify(result));
    }).fail(function (err) {
        throw err;
    });


}

$("#search-articles").on("click", function (event) {
    event.preventDefault();
    searchNYT();
});