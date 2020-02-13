"use strict";

(function($) {
    $(document).ready(function() {
	// MY code HERE        
        $('.select__button').click(function() {
			let width = $("#width").val(),
				height = $("#height").val();

			// Select peper size
            if (width !== "" && height !== "") {
				$(".select").addClass("delete")
				$(".paper").css("grid-template-rows",`repeat(${width}, 1fr)`).css("grid-template-columns",`repeat(${height}, 1fr)`);
                return;
			} else {
				alert("Please fill all fields")
			}
        });

		$('.control__button').click( function() {
			$(`<div/>`).appendTo(".paper");
			let count
			$('.paper div').each(function(i) {		   
				count =  i+1;	
			$(this).addClass(`box-${count}`)	
			});
			drow(count);
			clear();
		})

        // Drow
        function drow(number) {
			let Rstart = $("#Rstart").val(),
				Rend = $("#Rend").val(),
				Cstart = $("#Cstart").val(),
				Cend = $("#Cend").val(),
				color = $("#color").val();

			$(`.box-${number}`).css("grid-row-start",`${Rstart}`).css("grid-row-end",`${Rend}`).css("grid-column-start",`${Cstart}`).css("grid-column-end",`${Cend}`).css("background-color", `#${color}`);

			console.log(Rstart, Rend, Cstart, Cend,number)
		}
		// Clear
		// function clear() {
		// 	$("#Rstart").val(""),
		// 	$("#Rend").val(""),
		// 	$("#Cstart").val(""),
		// 	$("#Cend").val(""),
		// 	$("#color").val("");
		// }
		
    });
})(jQuery);

// employeeList.forEach((emp, i) => {
// 	let draw = new Draw(emp, i + 1);

// 	list.append(draw.render());
// });

// class Draw {
// 	constructor(employee,
// 				count) {
// 		this.employee = employee;
// 		this.count = count;
// 	}
// }

// number.innerText = this.count;