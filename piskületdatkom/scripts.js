function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if(name.length < 2){
        text = "Lütfen bir isim giriniz.";
        error_message.innerHTML = text;
        return false;
    }

    if(subject.length < 10){
        text = "Lütfen konuyu giriniz.";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length != 10){
        text = "Lütfen geçerli bir telefon numarası giriniz.";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Lütfen geçerli bir email giriniz.";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length <= 140){
        text = "Mesajınızda en az 140 karakter içermelidir."
        error_message.innerHTML = text;
        return false;
    }
    alert("Formunuz gönderildi.")
    return false;
}