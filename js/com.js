	$(window).ready(function() {
				var $header = $('#header').width();
				var $button_bas = $('.button-bas').length;

				$('.button-bas').css({
					'width': $(document).width() / $button_bas + 'px',
				})

				$(window).resize(function() {
					$('.button-bas').css({
						'width': $(document).width() / $button_bas + 'px',
					})
				})
				$('.button-bas').on({
					mouseenter: function() {

						$(this).children('div:nth-child(1)').css({
							'webkitTransform': 'rotateX(0deg)',
						})
						$(this).children('div:nth-child(2)').css({
							'webkitTransform': 'rotateX(-90deg)',
						})
					},
					mouseleave: function() {
						$(this).children('div:nth-child(1)').css({
							'webkitTransform': 'rotateX(90deg)',
						})
						$(this).children('div:nth-child(2)').css({
							'webkitTransform': 'rotateX(0deg)',
						})

					}
				})

				var URL = 'a.php';
				var time;
				$(window).ajaxStart(function() {
					console.log('正在请求...');
				});
				$(window).ajaxStop(function() {
					console.log('请求完毕...');
				});
				$.ajax({
					type: "GET",
					url: URL,
					async: true,
					data: {},
					success: function() {
						//console.log(res)
						$('#loading_img').addClass('translateX');
						if(($('#loading_img')).hasClass('translateX')) {
							time = setInterval(function() {
								$('#loading').fadeOut();
								clearInterval(time);
							}, 1300)

						}
					},
					dataTtype: 'json',
				});
				//轮播

				//clearInterval(time2);
				var i = 0;
				var time2;
				var lun_li = $('#lunbo ul li');
				var length = lun_li.length ;
				var frist = $('#frist ul li');
                 
				function moir() {
					clearInterval(time2);
					time2 = setInterval(function() {
						i++;
						if(i === length) {
							i = 0;
						}
						lun_li.eq(i).stop(true, true).fadeIn(300).siblings().stop(true, true).fadeOut(300);
						frist.eq(i).addClass('on').siblings().removeClass('on');
					}, 3000)
				}
                function silbings(){
                	lun_li.eq(i).stop(true, true).fadeIn(300).siblings().stop(true, true).fadeOut(300);
					frist.eq(i).addClass('on').siblings().removeClass('on');	
                }
				frist.hover(function() {
					clearInterval(time2);
					i = $(this).index();
					silbings();

				}, function() {
					moir();
				})
				$('.btn1').on('click', function() {
					clearInterval(time2);
					i--;
					if(i === -1) {
						i = length-1;
					}
					silbings();
					console.log(i);
					moir();
				})
				$('.btn2').on('click',function() {
					i++;
				if(i === length) {
						i = 0;
					}
				silbings();
					console.log(i);
					moir();
				})

				moir();
			})