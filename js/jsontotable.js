function jsontotable(thiselement, url) {
    var _this = thiselement;
    $.get(url, function(callback) {
        var data = callback;
        if (data.length != 0) {
            var names = [];
            var k = 0;
            _this.children('thead').append("<tr></tr>");
            for (var key in data[0]) {
                _this.children('thead').children('tr').append('<td>' + key + '</td>');
                names[k] = key;
                k++;
            }
            var __this = _this.children('tbody');
            for (i = 0; i < data.length; i++) {
                $("<tr></tr>").appendTo(__this);
            }
            for (i = 0; i < data.length; i++) {
                for (j = 0; j < names.length; j++) {
                    __this.children('tr').eq(i).append("<td>" + data[i][names[j]] + "</td>");
                }
            }
            cssshow(_this);
            showtable(thiselement);
        } else {
            alert("wrong");
        }
    }, "json");
}

function cssshow(thiselement) {

    thiselement.css({
        'border': '1px solid #8EC1DB',
        'font-family': 'Arial',
        'border-collapse': 'collapse',
        'font-size': '14px'
    });
    thiselement.children('thead').css({
        'color': '#005681',
        'background': '#D0E6F1',
        'font-weight': 'bold',
        'padding': '2px 2px 2px 2px',
        'border-bottom': '1px solid #8EC1DB'
    });
    _thisthead = thiselement.children('thead');
    _thistbody = thiselement.children('tbody');
    thiselement.find('td').css({
        'border': '1px solid #8EC1DB',
        'padding': '10px',
        'white-space': 'nowrap'
    });
    thiselement.find('td').hover(function() {
        thiscolor = $(this).css('background-color');
        $(this).css({
            'background-color': '#dca06b'
        });
    }, function() {
        $(this).css({
            'background-color': thiscolor
        });
    });
}

function showtable(thiselement) {
    thiselement.dataTable({
        "bPaginate": true,
        "iDisplayLength": 10,
        "bLengthChange": true
    });
}