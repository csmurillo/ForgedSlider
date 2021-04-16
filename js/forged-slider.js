// Options
// width: int
// height: int
// sliderItemSizeWidth:int
// sliderItemSizeHeight:int
// moveSlideNitems: int
function initForgedSlider(slider,options={},leftButton,rightButton){
    const {sliderWidth=1000, sliderHeight=120, sliderItemSizeWidth=200, sliderItemSizeHeight=120, moveSlideNItems=1}=options;

    const sliderItems=[...slider.children];
    setUpForgedSlider(slider,sliderWidth,sliderHeight);
    setUpForgedSliderItems(sliderItems,sliderItemSizeWidth,sliderItemSizeHeight);
    setUpForgedSliderOverlay(slider);
    setUpForgedSliderTape(slider,sliderItems);
    setUpForgedSliderButtons(slider,leftButton,rightButton,moveSlideNItems);
}

function setUpForgedSlider(slider,width,height){
    slider.style.width=width+'px';
    slider.style.height=height+'px';
}
function setUpForgedSliderItems(sliderItems,sliderItemSizeWidth,sliderItemSizeHeight){
    for(var i=0; i<sliderItems.length;i++){
        sliderItems[i].className="fs-items";
        sliderItems[i].style.width=sliderItemSizeWidth+"px";
        sliderItems[i].style.height=sliderItemSizeHeight+"px";
    }
}
function setUpForgedSliderTape(slider,sliderItems){
    const fsSliderTape = document.createElement("div");
    fsSliderTape.className="fs-slider-tape";
    var sliderItemsLength=sliderItems.length
    //set up width
    var width=0;
    for(var i=0; i<sliderItemsLength;i++){
        var itemWidth=sliderItems[i].offsetWidth;
        width=width+itemWidth;
        fsSliderTape.append(sliderItems[i]);
    }
    // setup width & height
    fsSliderTape.style.width=width+'px';
    fsSliderTape.style.height=slider.offsetHeight+'px';
    fsSliderTape.style.backgroundColor='rgb(43, 137, 226)';
    slider.append(fsSliderTape);
    // return fsSliderTape;
}
function setUpForgedSliderOverlay(slider){
    const fsSliderOverlay = document.createElement("div");
    fsSliderOverlay.className="fs-slider-overlay";
    fsSliderOverlay.style.width=slider.offsetWidth+'px';
    fsSliderOverlay.style.height=slider.offsetHeight+'px';
    // fsSliderOverlay.style.backgroundColor="black";
    slider.append(fsSliderOverlay);
    // return fsSliderOverlay;
}
function setUpForgedSliderButtons(slider,leftButton,rightButton,moveSlideNItems){
    if(rightButton){
        setUpRightButtonForgedSlider(slider,rightButton,moveSlideNItems);
    }
    if(leftButton){
        setUpLeftButtonForgedSlider(slider,leftButton,moveSlideNItems);
    }
}
function setUpLeftButtonForgedSlider(slider,leftButton,moveSlideNItems){
    leftButton.addEventListener('click',()=>{
        moveLeftForgedSlider(slider,moveSlideNItems);
    });
}
function setUpRightButtonForgedSlider(slider,rightButton,moveSlideNItems){
    rightButton.addEventListener('click',()=>{
        moveRightForgedSlider(slider,moveSlideNItems);
    });
}
function moveLeftForgedSlider(slider,moveSlideNItems){
    console.log('inside left');
    var forgedSlider=slider;
    // forged slider start point and end point
    var startViewPort=0;
    var endViewPort=forgedSlider.offsetWidth;

    // forged slide tape
    var forgedSliderTape=slider.children[1];
    // forged slide tape children width
    var forgedItemWidth=forgedSliderTape.children[1].offsetWidth;
    console.log(forgedItemWidth);
    // pixels to move forged slide tape to the left
    var moveLeftPx=forgedItemWidth*moveSlideNItems;

    // forged slider tape next left pos
    var fsTapeFutureLeft=forgedSliderTape.offsetLeft-moveLeftPx;
    // forged slider tape right end point  based on future position
    var fsTapeRightFutureEndPoint=fsTapeFutureLeft+forgedSliderTape.offsetWidth;
    
    if(fsTapeRightFutureEndPoint<endViewPort){
        console.log('cant move');
    }
    else{
        console.log('movedleft');
        forgedSliderTape.style.left=fsTapeFutureLeft+"px";
    }
}
function moveRightForgedSlider(slider,moveSlideNItems){
    console.log('inside right');
    var forgedSlider=slider;
    // forged slider start point and end point
    var startViewPort=0;
    var endViewPort=forgedSlider.offsetWidth;

    // forged slide tape
    var forgedSliderTape=slider.children[1];
    // forged slide tape children width
    var forgedItemWidth=forgedSliderTape.children[1].offsetWidth;
    console.log(forgedItemWidth);
    // pixels to move forged slide tape to the right
    var moveRightPx=forgedItemWidth*moveSlideNItems;

    // forged slider tape next left pos
    var fsTapeFutureLeft=forgedSliderTape.offsetLeft+moveRightPx;
    
    if(fsTapeFutureLeft>startViewPort){
        console.log('cant move');
    }
    else{
        console.log('movedleft');
        forgedSliderTape.style.left=fsTapeFutureLeft+"px";
    }
}
