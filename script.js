function handleticketChange(ticket, isIncrease) {

    const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = ticketNewCount;
    let ticketTotal = 0;
    if (ticket == 'acTicket') {
        ticketTotal = ticketNewCount * 150;
    }
    if (ticket == 'dcTicket') {
        ticketTotal = ticketNewCount *100;
    }

    document.getElementById(ticket + '-total').innerText = '$' + ticketTotal;
    calculateTotal();
}

function calculateTotal() {
    const acTicketCount = getInputValue('acTicket');
    const dcTicketCount = getInputValue('dcTicket');

    const totalPrice = acTicketCount * 150 + dcTicketCount *100;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

function getInputValue(ticket) {
    console.log(ticket);
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

// udhau area 

const bookNow = document.getElementById("book"); 
bookNow.addEventListener("click", function(){
    const udhauArea = document.getElementById("udhau-area");
    udhauArea.style.display = "none";

    const afterUdhau = document.getElementById("after-udhau"); 
    afterUdhau.style.display = "block"; 
    
}) 


// after udhau 

