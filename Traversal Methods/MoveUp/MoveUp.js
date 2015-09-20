  $(document).ready(function () {

    var a = $('li.bottom').parent();

    var b = $('span').parents();

    var c = $('span').parents('li');

    var d = $('span').parents('ul');

    var e = $('span').parentsUntil('ul');

    var f = $('span').parentsUntil('ul.foo');

    var g = $('span').closest('ul');

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log(g);

});