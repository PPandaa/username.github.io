<!-- �^�쳻�ݫ��s start -->
			
		//<![CDATA[
			(function () {
				$("body").append("<img id='goTopButton' style='display: none; z-index: 5; cursor: pointer;' title='�^�쳻��'/>");
				var img = "http://1.bp.blogspot.com/-zMfrIkyhlVs/Uh7FePoKU8I/AAAAAAAAHnA/WA0H_vbWAWc/s1600/go-top.png",
				locatioin = 9/10, // ���s�X�{�b�ù�������
				right = 10, // �Z���k�� px ��
				opacity = 0.5, // �z����
				speed = 800, // ���ʳt��
				$button = $("#goTopButton"),
				$body = $(document),
				$win = $(window);
				$button.attr("src", img);
				$button.on({
				mouseover: function() {$button.css("opacity", 1);},
				mouseout: function() {$button.css("opacity", opacity);},
				click: function() {$("html, body").animate({scrollTop: 0}, speed);}
			});
			window.goTopMove = function () {
				var scrollH = $body.scrollTop(),
				winH = $win.height(),
				css = {"top": winH * locatioin + "px", "position": "fixed", "right": right, "opacity": opacity};
				if(scrollH > 20) {
					$button.css(css);
					$button.fadeIn("slow");
				} else {
					$button.fadeOut("slow");
				}
			};
			$win.on({
				scroll: function() {goTopMove();},
				resize: function() {goTopMove();}
			});
			} )();
		//]]>
			
	<!-- �^�쳻�ݫ��s end, Design by WFU BLOG -->						