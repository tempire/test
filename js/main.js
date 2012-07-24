jQuery(function(j){

  // Scrolling tech blog entries on front page
  var original_height = j('ul.scrollable-list').css('height');

  j('ul.scrollable-list').hoverIntent({
    sensitivity: 7,
    interval: 300,
    over: function() {
      j(this).animate({height: 200}, 500);
    },
    out: function() {
      j(this).animate({height: original_height}, 500);
    }
  });

  // mailto link deobfuscation
  j('a[href^=mailto]').each(function() {
    this.href = 'mailto:' + this.href.substr(7).split('').reverse().join('');
  });

  // rounded corners for image after image loads
  jQuery(window).load(function() {

    j('img.rounded-corners').wrap(function() {

      var el = j(this);

      var wrapper = j('<span>')
        .addClass('rounded-corners')
        .css({
          backgroundImage: 'url(' + el.attr('src') + ')',
          height:           el.height(),
          width:            el.width(),
          float:            el.css('float'),
          margin:           el.css('margin'),
          padding:          el.css('padding')
        });

      el.css('float', '');
      el.css('padding', '');
      el.css('margin', '');

      return wrapper;
    });
  });

  // syntax highlighting
  prettyPrint();

});
