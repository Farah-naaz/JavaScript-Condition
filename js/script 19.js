alert('Welcome to ABC Bank ATM. Please insert your card.')

let pin = prompt('Please enter your 4 digit pin number.')

if(pin == 1111){

   let transaction = prompt('Please select transaction type.')

   if(transaction == 'balance inquiry'){
    alert('Your balance is TK 12000. Please take your card.')
}
   if(transaction == 'cash withdraw'){

     let cash = prompt('Enter cash amount')

    if (cash <= 12000){
        alert('Transaction successful. Please take your cash and card.')

    }else{

     if (cash > 12000)
        alert('Insufficient balance. Transaction failed.')
    }
   }
}else{
    alert('Incorrect pin. Transaction is cancelled.')
}