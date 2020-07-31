
var RandomNumber = Math.floor(Math.random() * (100-1+1))+1;
console.log(RandomNumber);
hisobchi = 0;
var UserText = document.querySelector('.user-text');
var UserProductInput = document.querySelector('.user-product-input');
var UserProductButton = document.querySelector('.user-product-button');
UserProductButton.addEventListener('click' , function(){
    var UserNumber = parseInt(UserProductInput.value,10);
    if (UserProductInput.value) {
        if (UserNumber >=1 && UserNumber <= 100) {
            hisobchi++;
            UserText.textContent = hisobchi;
            if (UserNumber > RandomNumber){
                alert('Siz kiritgan son katta, yana bir bor urinib ko\'rongchi!');
            } else if( UserNumber < RandomNumber){
                alert('Siz kiritgan son kichik, yana bir bor urinib ko\'ringchi!!');
            }else{
                alert('Tabriklaymiz, siz yutdingiz!');
                var isAgain = confirm('2-bosqichga, o\'tishni xoxlaysizmi!')
                if(isAgain){
                    // window.location.reload();
                    window.location.href = "level-2.html"
                }
            }
        } else {
            alert('Siz tarifda bo\'lmagan son kiritdingiz,Eslatma:1 va 100 oraligidagi sonlar kiritishingiz mumkin!')
        }
    } else {
        alert('Iltimos, son kiriting!!!')
    }
});