$('[rel="tooltip"]').tooltip();

function isTouchDevice(){ return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch); } if(isTouchDevice()===false) { jQuery(function(e){e("a").tooltip({html:true,container:"body"})}); } 
if(isTouchDevice()===false) {
    $("[rel='tooltip']").tooltip();
}
 Modernizr.addTest('workinghover', function ()
 {
      // Safari doesn't 'announce' to the world that it behaves badly with :hover
      // so we have to check the userAgent  
      return navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? false : true;
 });