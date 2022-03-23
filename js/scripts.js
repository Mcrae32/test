//mmenu
var topMenu = $('.menu').html(); //.menu - это класс меню которое отдаёт нам сервер на живом сайте, то что видно на desktop-варианте сайта
topMenu = topMenu.replace(/class="[^"]*"/gi, "").replace(/style="[^"]*"/gi, "").replace(/id="[^"]*"/gi, ""); //Зачищаем всякую хрень    
$('nav#menu').html('<ul>'+topMenu+'</ul>');

new Mmenu(document.querySelector("#menu"), {
    pageScroll: {
        scroll: true,
        update: true,
    },
    navbar: {
        title: 'Меню:',
		add: false,
    },
    "theme": "dark",
    "offCanvas": {
        "position": "bottom"
    },
	slidingSubmenus: false
});

$('.header__mobile-menu a').on({
	click: function() {
		$('.hamburger').addClass('is-active');
	}
});
$('a.mm-wrapper__blocker').on({
	click: function() {
		$('.hamburger').removeClass('is-active');
	}
});
$('.mm-listitem a').on({
	click: function() {
		$('.hamburger').removeClass('is-active');
	}
});

//ui select menu
$( function() {
  $( "#type_sistem" )
      .selectmenu()
      .selectmenu( "menuWidget" )
      .addClass( "overflow" );
      let labelForm = document.querySelector('.form__type');
      let labelFormText = labelForm.innerHTML;
    
      let uiSelectMenuText = document.querySelector('.ui-selectmenu-text');
      uiSelectMenuText.innerHTML = labelFormText;    
} );

//ui scrollbar
$( function() {
  var handle = $( "#custom-handle" );
  var slidNumWrap = $('.slider__number');
  $( "#slider" ).slider({
    create: function() {
      //handle.text( $( this ).slider( "value" ) );
      slidNumWrap.val( '0' + '%' );
    },
    slide: function( event, ui ) {
      //handle.text( ui.value );
      slidNumWrap.val( ui.value + '%' );
    }
  });
} );

//fixed header
$(function(){
  $(window).scroll(function() { 
      var top = $(document).scrollTop();
      if (top > 150) $('.header').addClass('fixed');
      else $('.header').removeClass('fixed');
  });
});


