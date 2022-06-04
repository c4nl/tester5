$(document).ready(function () {
    var links = [
      {
        name: 'discord',
        link: 'https://discord.com/users/857788201744728065',
      },
  
      {
        name: 'Tiktok',
        link: 'https://www.tiktok.com/@xqjf',
      },
  
      {
        name: 'insta',
        link: 'https://instagram.com/biggestzillafan',
      },

    ];
  
    for (var i in links) {
      var link = links[i];
  
      $('#marquee').append('<a href="' + link.link + '" target="_BLANK">' + link.name + '</a>');
  
      link = $('#marquee').children('a').last();
  
      if (i != links.length - 1) $('#marquee').append(' | ');
    }
  });
  
  $(function () {
    var $diaplay = $('#display');
    $('.marquee')
      .bind('beforeStarting', function () {
        $diaplay.show().html('started').delay(2000).fadeOut('fast');
      })
      .marquee({
        duration: 4000,
      });
  });
  
