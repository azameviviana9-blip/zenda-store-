
let cart = 0;

function addToCart(){
    cart++;
    document.getElementById("cart-count").textContent = cart;
}

document.getElementById("upload").addEventListener("change", function(e){

    const file = e.target.files[0];

    if(file){
        const reader = new FileReader();

        reader.onload = function(event){
            const preview = document.getElementById("preview");
            preview.src = event.target.result;
            preview.style.display = "block";
            preview.style.width = "300px";
            preview.style.margin = "20px auto";
        }

        reader.readAsDataURL(file);
    }

});
