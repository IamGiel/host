let btn = document.getElementById('selection_');
btn.addEventListener('click', send);

let selected_item = document.getElementById('ddlViewBy').value;

function send() {
    /**
     * `message` field will be sent as user reply and will NOT be stored in mergeField
     * `myData` field will be stored in mergeField
     **/
    sendMessage({
        message: `you selected: ${selected_item}`,
        myData: selected_item
    });
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("option");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }


    }

}