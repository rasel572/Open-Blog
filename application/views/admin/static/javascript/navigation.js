$(document).ready(function(){function B(E){var F=$("#"+E).attr("id");var D=$("#"+F).prev().attr("id");if(D){$("#"+D).insertAfter("#"+F);$.ajax({type:"POST",url:"navigation/move_navigation_item",data:"action=up&item="+F})}}function C(E){var F=$("#"+E).attr("id");var D=$("#"+F).next().attr("id");if(D){$("#"+D).insertBefore("#"+F);$.ajax({type:"POST",url:"navigation/move_navigation_item",data:"action=down&item="+F})}}function A(){$("tr[id^=item_]").each(function(){var F=$(this).attr("id");var G=$("#"+F).attr("id");var E=$("#"+G).prev().attr("id");var D=$("#"+G).next().attr("id");if(!E){$("#"+F+" img.move_up").css("visibility","hidden")}else{if($("#"+F+" img.move_up").css("visibility")=="hidden"){$("#"+F+" img.move_up").css("visibility","visible")}}if(!D){$("#"+F+" img.move_down").css("visibility","hidden")}else{if($("#"+F+" img.move_down").css("visibility")=="hidden"){$("#"+F+" img.move_down").css("visibility","visible")}}})}A();$("img[class=move_up]").bind("click",function(){B($(this).parent().parent().attr("id"));A()});$("img[class=move_down]").bind("click",function(){C($(this).parent().parent().attr("id"));A()})});