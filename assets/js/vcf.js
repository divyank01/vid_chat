setInterval(this.sizeListener,500);

function sizeListener(){
    var height=window.innerHeight;
    var width=window.innerWidth;
    if(height>width){
        console.log('mobile type view');
        $("#r_vid").addClass('w-100');
        $("#r_vid").removeClass('h-100');
    }else{
        console.log('pc type view'+height+'----'+width);
        $("#r_vid").addClass('h-100');
        $("#r_vid").removeClass('w-100');
    }
}