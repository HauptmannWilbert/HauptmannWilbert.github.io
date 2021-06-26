
(function($) {
	this.MobileNav = function() {
			this.curItem,
					this.curLevel = 0,
					this.transitionEnd = _getTransitionEndEventName();

			var defaults = {
					initElem: ".main-menu",
					menuTitle: "Меню"
			}

			// Проверяем, инициализирован ли MobileNav с некоторыми параметрами, и присваиваем им "значения по умолчанию"
			if (arguments[0] && typeof arguments[0] === "object") {
					this.options = extendDefaults(defaults, arguments[0]);
			}

			// Добавлять в"defaults" ТОЛЬКО если ключ уже в "defaults"
			function extendDefaults(source, extender) {
					for (option in extender) {
							if (source.hasOwnProperty(option)) {
									source[option] = extender[option];
							}
					}
			}

			MobileNav.prototype.getCurrentItem = function() {
					return this.curItem;
			};

			MobileNav.prototype.setMenuTitle = function(title) {
					defaults.menuTitle = title;
					_updateMenuTitle(this);
					return title;
			};

			// Init - это анонимное выражение немедленно вызываемой функции
			(function(MobileNav) {
					var initElem = ($(defaults.initElem).length) ? $(defaults.initElem) : false;

					if (initElem) {
							defaults.initElem = initElem;
							_clickHandlers(MobileNav);
							_updateMenuTitle(MobileNav);
					} else {
							console.log(defaults.initElem + " element doesn't exist, menu not initialized.");
					}
			}(this));

			function _getTransitionEndEventName() {
					var i,
							undefined,
							el = document.createElement('div'),
							transitions = {
									'transition': 'transitionend',
									'OTransition': 'otransitionend', // oTransitionEnd in very old Opera
									'MozTransition': 'transitionend',
									'WebkitTransition': 'webkitTransitionEnd'
							};

					for (i in transitions) {
							if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
									return transitions[i];
							}
					}
			};

			function _clickHandlers(menu) {
					defaults.initElem.on('click', '.has-dropdown > a', function(e) {
							e.preventDefault();
							menu.curItem = $(this).parent();
							_updateActiveMenu(menu);
					});

					defaults.initElem.on('click', '.nav-toggle', function() {
							_updateActiveMenu(menu, 'back');
					});
			};

			// TODO: Make this DRY (deal with waiting for transitionend event) Сделать это не повторяющимя. (разобраться с ожиданием события, заверщающего перехода)
			function _updateActiveMenu(menu, direction) {
					_slideMenu(menu, direction);
					if (direction === "back") {
							/*defaults.initElem.children('ul').one(menu.transitionEnd, function(e) {
									menu.curItem.removeClass('nav-dropdown-open nav-dropdown-active');
									menu.curItem = menu.curItem.parent().closest('li');
									menu.curItem.addClass('nav-dropdown-open nav-dropdown-active');
									_updateMenuTitle(menu);
							});*/

							menu.curItem.removeClass('nav-dropdown-open nav-dropdown-active');
							menu.curItem = menu.curItem.parent().closest('li');
							menu.curItem.addClass('nav-dropdown-open nav-dropdown-active');
							_updateMenuTitle(menu);
					} else {
							menu.curItem.addClass('nav-dropdown-open nav-dropdown-active');
							_updateMenuTitle(menu);
					}
			};

			// Обновить заголовок главного меню, чтобы он стал текстом выбранного пункта меню
			function _updateMenuTitle(menu) {
					var title = defaults.menuTitle;
					if (menu.curLevel > 0) {
							/*title = menu.curItem.children('a').text();*/
							title = "Назад";
							defaults.initElem.find('.nav-toggle').addClass('back-visible');
							$('.mobile__contacts').addClass('mobile__contacts--hidden');
					} else {
							defaults.initElem.find('.nav-toggle').removeClass('back-visible');
							$('.mobile__contacts').removeClass('mobile__contacts--hidden');
					}
					$('.nav-title').text(title);
			};

			// Сдвиг главного меню в зависимости от текущей глубины меню
			function _slideMenu(menu, direction) {
					if (direction === "back") {
							menu.curLevel = (menu.curLevel > 0) ? menu.curLevel - 1 : 0;
					} else {
							menu.curLevel += 1;
					}
					defaults.initElem.children('ul').css({
							"transform": "translateX(-" + (menu.curLevel * 100) + "%)"
					});
			};
	}
}(jQuery));

$(document).ready(function() {
	var MobileMenu = new MobileNav({
			initElem: "nav",
			menuTitle: "Меню",
	});

	$('.js-nav-toggle').on('click', function(e) {
		e.preventDefault();
		
		$('.nav-wrapper').toggleClass('show-menu');
	});
});