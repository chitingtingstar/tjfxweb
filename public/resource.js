
//css资源
var resource = [];

var baseUrl = 'http://192.168.253.43:8080';

resource = [
    './public/plugins/css/gdui.min.css',
    './public/style.css'
];

for (var i = 0; i < resource.length; i++) {
    document.write('<link rel="stylesheet" href="' + resource[i] + '">');
}

//js资源
resource = [
    './public/vue.min.js',
    './public/jquery.min.js',
    './public/plugins/js/gdui.min.js',
    './public/bootstrap-tab/contabs.js',
    './public/echarts.min.js'
];
for (var i = 0; i < resource.length; i++) {
    document.write('<script src="' + resource[i] + '"></script>');
}

