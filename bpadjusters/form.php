<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>form</title>
	<!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
    .container{
        text-align: center;
       }  
	input{
	  margin-top: 280px;
	  font-size: 35px;
      width: auto;
      color: #061027;
      line-height: 1.4;
      font-family: -apple-system,BlinkMacSystemFont,Roboto,Open Sans,Helvetica Neue,sans-serif;
      border: none;
      text-align: center;
      outline: none;
      font-weight: normal;
	}
    select{
      margin-top: 280px;
      font-size: 35px;
      width: auto;
      line-height: 1.4;
      font-family: -apple-system,BlinkMacSystemFont,Roboto,Open Sans,Helvetica Neue,sans-serif;
      text-rendering: optimizeLegibility;
      background: transparent;
      border: none;
      text-align: center;
      outline: none;
      font-weight: normal;
    }
    option{
      font-size: 20px;    
    }
    .btn{
      margin-left: 15px;
      margin-top: -18px;
      font-size: 20px;
      line-height: 1.4;
      font-weight: 500;
      padding: 0px 10px;
    }
    .submit{
      margin-left: 15px;
      margin-top: -18px;
      font-size: 20px;
      line-height: 1.4;
      font-weight: 500;
      padding: 10px 15px;
    }
    .fa{
      font-size:36px;
    }
  </style>
</head>
<body>
	<p style="display: none;" id="al1" class="">
    
    </p>
  <div class="container">
	  <div id="d1" class="form-group">
       <input id="i1" type="number" name="" placeholder="Enter zip code" required="">
       <button onclick="hide1()" class="btn btn-primary"><i  class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
    </div>
    <div id="d2" style="display: none;" class="form-group">
       <input id="i2" type="text" name="" placeholder="Enter Insurance Provider" required >
       <button onclick="hide2()" class="btn btn-primary"><i  class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
    </div>
    <div id="d3" style="display: none;" class="form-group">
       <input id="i3" type="text" name="" placeholder="Enter Type of Property" required >
       <button onclick="hide3()" class="btn btn-primary"><i  class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
    </div>
    <div id="d4" style="display: none;" class="form-group" required>
       <select id="i4">
     	    <option value="Fire Damage">Select Damage Type</option>
     	    <option value="Fire Damage">Fire Damage</option>
     	    <option value="Water Damage">Water Damage</option>
     	    <option value="Hurricane & Wind">Hurricane & Wind</option>
     	    <option value="Leaks & Mold">Leaks & Mold</option>
     	    <option value="Plumbing & Pipes">Plumbing & Pipes</option>
     	    <option value="Burglary & Vandalism">Burglary & Vandalism</option>
     	    <option value="Roof Damage">Roof Damage</option>
       </select>
       <button onclick="hide4()" class="btn btn-primary"><i  class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
    </div>
    <div id="d5" style="display: none;" class=" form-group">
       <input id="i5" type="text" name="" placeholder="Claim Status" required >
       <button onclick="sendmail1()" class="submit btn btn-primary">Submit</button>
    </div>
  </div>
	<!-- jQuery library -->
  <script
              src="https://code.jquery.com/jquery-3.4.1.js"
              integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
              crossorigin="anonymous"></script>

    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script type="text/javascript">
    	$(document).ready(function() {
    		});
    		function hide1()
    		{
    			$("#d1").hide();
    			$("#d2").slideDown();

    		}
    		function hide2()
    		{
    			$("#d2").hide();
    			$("#d3").slideDown();
    			
    		}
    		function hide3()
    		{
    			$("#d3").hide();
    			$("#d4").slideDown();
    			

    		}
    		function hide4()
    		{
    			$("#d4").hide();
    			$("#d5").slideDown();
    			
    		}
    		function sendmail1()
    		{
    			var x1=$("#i1").val();
    			var x2=$("#i2").val();
    			var x3=$("#i3").val();
    			var x4=$("#i4").val();
    			var x5=$("#i5").val();
    			$.ajax({
    				url:'mail.php',
    				method:'post',
    				data:{send:true,v1:x1,v2:x2,v3:x3,v4:x4,v5:x5},
    				success:function(dat)
    				{
				$("#al1").slideDown();
				alert(dat);
    				}
    			});
    		}
    	
    </script>
</body>
</html>