
var tooltip = document.querySelector('.map-tooltip');
window.addEventListener("load", function() {
var svgObject = document.getElementById('svg-object').contentDocument;
var svg = svgObject.getElementById('Moulvibazar_District');
var svgSelector = svgObject.querySelector('.country');

    //    svg.addEventListener("mouseover", function(){
    //       console.log("Moulvibazar");
    //
    //       var sel = this,
    //
    //     pos = sel.getBoundingClientRect()
    //
    // tooltip.style.display = 'block';
    // tooltip.style.top = pos.top + 'px';
    // tooltip.style.left = pos.left + 'px';
    //
    //       //alert("you clicked on moulvibazar");
    //    });
    //    svg.addEventListener("mouseleave", function(){
    //        tooltip.style.display = 'none';
    //    });

$tooltip = $('.map-tooltip');

$(svgSelector).mouseover(function(event) {

    console.log(event.target.id);
    var currentLocation = data[event.target.id];
    $tooltip.html(event.target.id);
    if(currentLocation!==undefined){
        $tooltip.html(currentLocation);
            }
    else {
        $tooltip.html("tooltip");
         }


     // $tooltip.html(currentLocation);
     tooltip.style.display = 'block';

     tooltip.style.top = event.pageY-30;
     tooltip.style.left = event.pageX-10;

           //alert(event.target.id);
           //console.log(event.target.id);
           // if(event.target.id === "Moulvibazar_District"){
           //     console.log(data.Moulvibazar_District);
           // }
           // var currentLocation = data[event.target.id];
           //console.log(currentLocation);
  });
    $(svgSelector).mouseleave(function(event) {
        tooltip.style.display = 'none';

    });



 //       $(svgObject).hover(function() {
 //
 //         alert(event.target.id);
 //
 // });

       // tippy('.btn')

       // $(document).ready(function() {
       //      $('#Moulvibazar').tooltipster();
       //  });

       // var inputId = this.element.attr("id");
       // console.log(inputId);

//    $(document).ready(function(){
//     $('[Moulvibazar]').tooltip();
// });
});
