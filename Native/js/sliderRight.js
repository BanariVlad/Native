document.getElementById('left').onclick = sliderLeft;
var left = 0;
    function sliderLeft(){
            var slider = document.getElementById('slider-hot');
            left = left - 860;
            if (left < -860) {
                left=0;
            }
            slider.style.left = left+'px';
    }

document.getElementById('right').onclick = sliderRight;
var right = 0;
    function sliderRight(){
            slider = document.getElementById('slider-hot');
            right = right - 860;
            if (right > 860) {
                right=0;
            }
            slider.style.right = right+'px';
        }
            
    