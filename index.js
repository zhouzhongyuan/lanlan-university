var appTbody = $('#appTbody');
universityList.forEach(function (item, index) {
    if(!item.chineseName){
        return;
    }
    var html = `<tr><td class="mdl-data-table__cell--non-numeric">${item.chineseName}</td><td class="mdl-data-table__cell--non-numeric" > <a href=${item.url} target="_blank"> ${item.name} </a></td><td>${item.country ? item.country  : ' '}</td></tr>`;
    appTbody.append(html)



})