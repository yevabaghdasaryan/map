function start (){
    with(document){
        let l1 = String(getElementById ('left_1').value);
        let l2 = String(getElementById ('left_2').value);
        let l3 = String(getElementById ('left_3').value);
        let l4 = String(getElementById ('left_4').value);
        let l5 = String(getElementById ('left_5').value);
        let r1 = String(getElementById ('left_6').value);
        let r2 = String(getElementById ('left_7').value);
        let r3 = String(getElementById ('left_8').value);
        let r4 = String(getElementById ('left_9').value);
        let r5 = String(getElementById ('left_10').value);
        let r6 = String(getElementById ('left_11').value);

        let result = 0;
        let quality;

        
        if(l1 == 'Yerevan'){
            result+=2
            getElementById('left_1').style.backgroundColor = 'green'
     } else{
        getElementById('left_1').style.backgroundColor = 'red'
     } 
     
     
    if(l1 == 'Vashicton'){
        result+=2
        getElementById('left_2').style.backgroundColor = 'green'
 } else{
    getElementById('left_2').style.backgroundColor = 'red'

 }
 
 if(l1 == 'Tokyo'){
    result+=2
    getElementById('left_3').style.backgroundColor = 'green'
} else{
getElementById('left_3').style.backgroundColor = 'red'
}    

if(l1 == 'Mexico'){
    result+=2
    getElementById('left_4').style.backgroundColor = 'green'
} else{
getElementById('left_4').style.backgroundColor = 'red'
}
  

if(l1 == 'Paris'){
    result+=2
    getElementById('left_5').style.backgroundColor = 'green'
} else{
getElementById('left_5').style.backgroundColor = 'red'
}


if(l1 == 'Madrid'){
    result+=2
    getElementById('left_6').style.backgroundColor = 'green'
} else{
getElementById('left_6').style.backgroundColor = 'red'
}



if(l1 == 'rgr3'){
    result+=2
    getElementById('left_7').style.backgroundColor = 'green'
} else{
getElementById('left_7').style.backgroundColor = 'red'
}

if(l1 == 'kiev'){
    result+=2
    getElementById('left_8').style.backgroundColor = 'green'
} else{
getElementById('left_8').style.backgroundColor = 'red'
}

if(l1 == 'London'){
    result+=2
    getElementById('left_9').style.backgroundColor = 'green'
} else{
getElementById('left_9').style.backgroundColor = 'red'
}

if(l1 == 'arkara'){
    result+=2
    getElementById('left_10').style.backgroundColor = 'green'
} else{
getElementById('left_10').style.backgroundColor = 'red'
}

if(l1 == 'Berlin'){
    result+=2
    getElementById('left_11').style.backgroundColor = 'green'
} else{
getElementById('left_11').style.backgroundColor = 'red'
}



}
}