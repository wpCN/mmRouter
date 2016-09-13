var avalon = require('avalon2')
require('../dist/mmRouter')
var a = require('text!../tab1.html')
var b = require('text!../tab2.html')
var c = require('text!../tab3.html')

var vm = avalon.define({
    $id: 'test',
    main: '',
    aaa: "第一页的内容",
    bbb: "第二页的内容",
    ccc: "第三页的内容",
})
var map = {
    'aaa': a,
    'bbb': b,
    'ccc': c
}


avalon.router.add("/:tab", function (param) {
    vm.main = map[param]
})


avalon.history.start({
    root: "/mmRouter",
    html5: true
})


var hash = avalon.history.getPath()
if (hash === '/exmaple6.html') {//比如一些网站没有, https://segmentfault.com/
    hash = '/aaa' 
}
avalon.router.navigate(hash, 1)//默认打开

avalon.scan(document.body)