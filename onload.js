function colorPickerChange(pColor) {
    bg = document.getElementsByTagName('body')[0];
    color = pColor.value;
    if(color=='black'){
        bg.style.background = '#000000';
    } if (color=='white') {
        bg.style.background = '#FFFFFF';
    } if (color=='red') {
        bg.style.background = '#CA3216';
    }
}