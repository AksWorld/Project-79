menu_list_array = ["Veg Margherita Pizza",
                        "Chicken Tandoori Pizza",
                        "Veg Supreme Pizza",
                        "Paneer Tikka Pizza",
                        "Deluxe Veggie Pizza",
                        "Veg Extravaganza Pizza"];
    
    function getmenu(){
        var htmldata="";
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu 
    }

    function add_item(){
        var htmldata;
		var imgtags='<img id="im1" src="pizzaImg.png">'
        
        var item=document.getElementById("add_item").value;
        menu_list_array.sort();
        htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;
		
    }
    function delete_item(){
        var htmldata;
		var imgtags='<img id="im1" src="pizzaImg.png">';
        var item=document.getElementById("add_item").value;
        var index= menu_list_array.indexOf(item,0)
       if(index>-1){
        const x =menu_list_array.splice(index,1);
        menu_list_array.sort();
        htmldata="";
        for(var j=0;j<menu_list_array.length;j++){
            htmldata=htmldata+imgtags+ menu_list_array[j]+'<br>';
        }
        document.getElementById("display_addedmenu").innerHTML= htmldata;
       }
    
		
    }


function add_top(){
	var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
function delete_top(){
 delete_item();
}