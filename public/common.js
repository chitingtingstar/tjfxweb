/**配置全局ajax */
$.ajaxSetup({
    // headers: {
    //      Authorization: localStorage.Authorization
    // },
    xhrFields:{
        withCredentials:true
    }
});

function dateFormat(month){
    var nowdate = new Date();
    var monthN = 0;
    if(month){
        monthN = parseInt(month);
        var setMonth = nowdate.getMonth() + monthN;
        nowdate.setMonth(setMonth);
    }
    var y = nowdate.getFullYear();
    var m = (nowdate.getMonth()+1 < 10 ? '0'+(nowdate.getMonth()+1) : nowdate.getMonth()+1);
    var d= nowdate.getDate() < 10 ? '0'+ nowdate.getDate() : nowdate.getDate();
    var formatwdate = y+'-'+m+'-'+d;
    return formatwdate
}

function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}
