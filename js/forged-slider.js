// Options
// width: int
// height: int
// sliderItemSizeWidth:int
// sliderItemSizeHeight:int
// moveSlideNitems: int
function initForgedSlider(slider,options,buttonOne,buttonTwo){
    const {sliderWidth=1200, sliderHeight=200, sliderItemSizeWidth=200,
        sliderItemSizeHeight=200, moveSlideNItems=1, direction=''}=options;
    const sliderItems=[...slider.children];

    // basic slider setup
    setUpForgedSlider(slider,sliderWidth,sliderHeight);
    setUpForgedSliderItems(sliderItems,sliderItemSizeWidth,sliderItemSizeHeight);
    setUpForgedSliderOverlay(slider);

    // setup slider horizontally
    if(direction=='horizontal'){
        setUpForgedSliderTapeHorizontal(slider,sliderItems);
        setUpForgedSliderButtonsHorizontal(slider,buttonOne,buttonTwo,moveSlideNItems);
    }
    // setup slider vertically
    else if(direction=='vertical'){
        setUpForgedSliderTapeVertical(slider,sliderItems);
        setUpForgedSliderButtonsVertical(slider,buttonOne,buttonTwo,moveSlideNItems);
    }
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
function setUpForgedSliderTapeHorizontal(slider,sliderItems){
    const fsSliderTapeHorizontal = document.createElement("div");
    fsSliderTapeHorizontal.className="fs-slider-tape-horizontal";
    var sliderItemsLength=sliderItems.length;
    //set up width
    var width=0;
    for(var i=0; i<sliderItemsLength;i++){
        var itemWidth=sliderItems[i].offsetWidth;
        width=width+itemWidth;
        fsSliderTapeHorizontal.append(sliderItems[i]);
    }
    // setup width & height
    fsSliderTapeHorizontal.style.width=width+'px';
    fsSliderTapeHorizontal.style.height=slider.offsetHeight+'px';
    fsSliderTapeHorizontal.style.backgroundColor='rgb(43, 137, 226)';
    slider.append(fsSliderTapeHorizontal);
}
function setUpForgedSliderTapeVertical(slider,sliderItems){
    const fsSliderTapeVertical = document.createElement("div");
    fsSliderTapeVertical.className="fs-slider-tape-vertical";
    var sliderItemsLength=sliderItems.length;
    var height=0;
    for(var i=0; i<sliderItemsLength;i++){
        var itemWidth=sliderItems[i].offsetHeight;
        height=height+itemWidth;
        fsSliderTapeVertical.append(sliderItems[i]);
    }
    // setup width & height
    fsSliderTapeVertical.style.width=slider.offsetWidth+'px';
    fsSliderTapeVertical.style.height=height+'px';
    fsSliderTapeVertical.style.backgroundColor='rgb(43, 137, 226)';
    slider.append(fsSliderTapeVertical);
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
function setUpForgedSliderButtonsVertical(slider,upButton,downButton,moveSlideNItemVertically){
    if(upButton){
        setUpButtonForgedSlider(slider,upButton,moveSlideNItemVertically);
    }
    if(downButton){
        setUpDownButtonForgedSlider(slider,downButton,moveSlideNItemVertically);
    }
}
function setUpButtonForgedSlider(slider,upButton,moveSlideNItems){
    upButton.addEventListener('click',()=>{
        moveUpForgedSlider(slider,moveSlideNItems);
    });
}
function setUpDownButtonForgedSlider(slider,downButton,moveSlideNItems){
    downButton.addEventListener('click',()=>{
        moveDownForgedSlider(slider,moveSlideNItems);
    });
}
function moveUpForgedSlider(slider,moveSlideNItems){
    console.log('inside');
    var forgedSlider=slider;
    // forged slider start point and end point
    var startViewPort=0;
    var endViewPort=forgedSlider.offsetHeight;

    // forged slide tape
    var forgedSliderTape=slider.children[1];
    // forged slide tape children height
    var forgedItemHeight=forgedSliderTape.children[1].offsetHeight;

    // pixels to move forged slide tape to the left
    var moveUpPx=forgedItemHeight*moveSlideNItems;

    // forged slider tape next left pos
    var fsTapeFutureTop=forgedSliderTape.offsetTop-moveUpPx;
    // forged slider tape right end point  based on future position
    var fsTapeRightFutureEndPoint=fsTapeFutureTop+forgedSliderTape.offsetHeight;
    
    if(fsTapeRightFutureEndPoint<endViewPort){
        console.log('cant move');
    }
    else{
        console.log('movedleft');
        forgedSliderTape.style.top=fsTapeFutureTop+"px";
    }
}
function moveDownForgedSlider(slider,moveSlideNItems){
    var forgedSlider=slider;
    // forged slider start point and end point
    var startViewPort=0;

    // forged slide tape
    var forgedSliderTape=slider.children[1];
    // forged slide tape children width
    var forgedItemHeight=forgedSliderTape.children[1].offsetHeight;

    // pixels to move forged slide tape to the right
    var moveDownPx=forgedItemHeight*moveSlideNItems;

    // forged slider tape next left pos
    var fsTapeFutureTop=forgedSliderTape.offsetTop+moveDownPx;
    
    if(fsTapeFutureTop>startViewPort){
        console.log('cant move');
    }
    else{
        console.log('movedleft');
        forgedSliderTape.style.top=fsTapeFutureTop+"px";
    }
}

function setUpForgedSliderButtonsHorizontal(slider,leftButton,rightButton,moveSlideNItems){
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
    // forged slider start point and end point
    var startViewPort=0;

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