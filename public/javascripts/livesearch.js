function loadDoc()
{
    console.log("In loadDoc()");
    var xhttp= new XMLHttpRequest();

    var url="http://192.168.100.9:8085/JobInfoCenter3/JicController";
    console.log(document.getElementById("jobsearchform").elements.namedItem("searchinput").value)

    var myarr={searchtext:document.getElementById("txt-search").value,operationtype:document.getElementById("hiddensearch").value};

    var params=JSON.stringify(myarr);
    //var params = "params" + "=" + document.getElementById("jobsearchform").elements.namedItem("searchinput").value ;
    //var params = "searchText" + "=" + "manager";
    console.log(params);
    var params="inputJsonStr" + "=" + params;

    /*var searchText1 = {
               operationType : document.getElementById("searchform").elements.namedItem("operation").value ,
               searchText : document.getElementById("searchform").elements.namedItem("searchtext").value
           };  
    var params = JSON.stringify(searchText1);*/

    xhttp.open("POST",url,true);
    xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function()
    {
        if ((this.readyState == 4) && (this.status == 200)) {
            console.log("after getting response" + xhttp.responseText);

            var my=JSON.parse(this.responseText);
            document.getElementById('resultbox').innerHTML =null;
            for(i=0;i<my.length;i++)
            {

                document.getElementById('resultbox').innerHTML+= '<div class="row"style="border: 1px solid;">'
                document.getElementById('resultbox').innerHTML +='<input type="checkbox" class="checkbox" style="float:right;">';
                document.getElementById('resultbox').innerHTML+="Id:"+my[i].id+"<br/>";
                document.getElementById('resultbox').innerHTML+="Jobtitle:"+my[i].jobtitle+"<br/>";
                document.getElementById('resultbox').innerHTML+="Education:"+my[i].education+"<br/>";
                document.getElementById('resultbox').innerHTML+="Salary:"+my[i].salary+"<br/>";
                document.getElementById('resultbox').innerHTML+="Experience:"+my[i].experience+"<br/>";
                document.getElementById('resultbox').innerHTML+="Jobdescription:"+my[i].jobdescription+"<br/>";
                //document.getElementById('resultbox').innerHTML +='<input type="checkbox" class="checkbox style="float:right;">';
                document.getElementById('resultbox').innerHTML +=  '</div>';
            }

            //document.getElementById('resultbox').innerHTML=xhttp.responseText;
            console.log(xhttp.responseText);
            //alert(xhttp.responseText);
            // document.getElementById('demo').innerHTML=this.responseText;
        }
        else
        {}
    };
    console.log("before sending request");
    xhttp.send(params);
}

