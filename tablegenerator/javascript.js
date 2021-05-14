function myFunction() {
    var x, result = "",
        i;
    x = document.getElementById("numb").value;
    if (x == "") {
        alert('empty');

        return false;
    } else {
        for (i = 1; i <= 10; i++) {
            result = result + "<p>" + x + "*" + i + "=" + x * i + "</p>";

        }
        document.getElementById("demo").innerHTML = result;

        return true;
    }
}