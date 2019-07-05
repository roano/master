<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<?php
error_reporting(0);
include('functions/database.php');
include('functions/session.php');
?>	
<title>Shiphealth Inc.</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<link rel="stylesheet" media="screen,projection" type="text/css" href="css/reset.css" />
<link rel="stylesheet" media="screen,projection" type="text/css" href="css/main.css" />
<link rel="stylesheet" media="screen,projection" type="text/css" href="css/2col.css" title="2col" />
<link rel="alternate stylesheet" media="screen,projection" type="text/css" href="css/1col.css" title="1col" />
<!--[if lte IE 6]><link rel="stylesheet" media="screen,projection" type="text/css" href="css/main-ie6.css" /><![endif]-->
<link rel="stylesheet" media="screen,projection" type="text/css" href="css/style.css" />
<link rel="stylesheet" media="screen,projection" type="text/css" href="css/mystyle.css" />
<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
<!--added by gab1-->
     <link rel='stylesheet' type="text/css" href='modal/modal.css'/>
 <!--link rel="stylesheet" href="examples.css" type="text/css"/-->
<!--added by gab1-->
<!-- added by gab2-->
<script src="datatables/icd/jquery-1.11.2.min.js"></script>
<script src="datatables/icd/jquery-ui-1.11.3.min.js"></script>
<!--added by gab2-->
<!--script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/switcher.js"></script>
<script type="text/javascript" src="js/toggle.js"></script>
<script type="text/javascript" src="js/ui.core.js"></script>
<script type="text/javascript" src="js/ui.tabs.js"></script-->
<script src="bootstrap/bootstrap-4.1.2/dist/js/bootstrap.js"></script>

<!--Gab DataTable-->
<!--script src="https://code.jquery.com/jquery-3.3.1.js"></script-->
<script src="datatables/media/js/jquery.dataTables.min.js"></script>
<script src="datatables/icd/Responsive-2.2.2/js/dataTables.responsive.min.js"></script>
<link rel="stylesheet" href="datatables/media/css/jquery.dataTables.min.css" type="text/css"/>
<link rel="stylesheet" href="datatables/icd/Responsive-2.2.2/css/responsive.dataTables.min.css" type="text/css"/>
	<!--Gab-->

<script type="text/javascript">
	$(document).ready(function(){
		$(".tabs > ul").tabs();
	});
	</script>

<style>
		input[type=button] {
			padding: 10px 15px;
			background-color: #F0F0F0;
			border: .5px solid #9D9D9F;
			border-radius: 4px;
			cursor: pointer;
		}
		input[type=text] {
			padding: 7px;
			width:90%;
			height:70%;
		}

		.userInput {
			width:200px;
			font-size: 13px;
			border: .5px solid #999999;
			border-radius: 4px;
			padding: 5px 10px;
		}
		.second-level-select  {
			width:220px;
			font-size: 13px;
			border: .5px solid #999999;
			border-radius: 4px;
			padding: 5px 10px;
		}
		
		.heading, .cell-content, .cell-content2, .cell-content3 {
			text-align:	left;
			padding-left: 12px;
		}
		.cell-content, .cell-content2, .cell-content3 {
			overflow-x: auto;
		}
		.heading {
			background: #188FDC;
			text-align: center;
			color: #fff;	
		}    
		.cell-selection {
			border-right-color: silver;
			border-right-style: solid;
			background: #fff;
			color: gray;
			text-align: right;
			font-size: 10.5px;
		}
		.cell-content2, .cell-content3 {
			background-color: #E8F5FF;
		}	
		.content {
			vertical-align: middle;
			/*background-color: #E8F5FF;*/
		}

		::-webkit-scrollbar {
			height: 2.5px;
			display: none;
		}

		/* Track */
		::-webkit-scrollbar-track {
			background: #f1f1f1; 
			border-radius: 24px;
		}

		/* Handle */
		::-webkit-scrollbar-thumb {
			background: #888; 
			border-radius: 12px;
		}

		/* Handle on hover */
		::-webkit-scrollbar-thumb:hover {
			background: #555; 
		}
		/*/CUSTOM SCROLLBAR*/

		.dataTables_filter {
			display: none; 
		}
		td{
			height: 20px;
			font-size: 14px;
		}

		#myDataTableOne_info{
			padding-left: 15px;
		}
		#myDataTableTwo_info{
			padding-left: 15px;
		}

		#myDataTableOne_paginate{
			padding-right: 5px;
		}
		#myDataTableTwo_paginate{
			padding-right: 5px;
		}

		tr.odd td/*:first-child*/{
			background-color: white!important;
		}
		tr.even td/*:first-child*/{
			background-color: #F6F7F7!important;
		}
		tr td:first-child{
			font-weight: bold!important;
		}
		table{
		    border: 0px!important;
		    border-color: transparent!important;
		    width: 100%!important;
		}
		tr:hover{
			background-color: lightyellow!important;
		}
		#myDataTableOne td, #myDataTableTwo td, #myDataTableThree td{
			border-left: 0px!important;
			border-right: 0px!important;
		}


	</style>


</head>
<body>
<div id="main">
  <!-- Tray -->
  <div id="tray" class="box">
    <p class="f-left box">
      <!-- Switcher -->
      <span class="f-left" id="switcher"> <a href="javascript:void(0);" rel="1col" class="styleswitch ico-col1" title="Display one column"><img src="design/switcher-1col.gif" alt="1 Column" /></a> <a href="javascript:void(0)" rel="2col" class="styleswitch ico-col2" title="Display two columns"><img src="design/switcher-2col.gif" alt="" /></a> </span> Hide Side Bar </p>
<?php
include('functions/user.php');
?>		
  </div>
  <!--  /tray -->
  <hr class="noscreen" />
  <!-- Menu -->
  <div id="menu" class="box">
    <ul class="box f-right">
      <li><a href="#"><span><strong>Visit Site &raquo;</strong></span></a></li>
    </ul>
    <ul class="box">
      <li><a href="home.php"><span>&nbsp;&nbsp;&nbsp; Home &nbsp;&nbsp;&nbsp;</span></a></li>
      <!-- Active -->
      <li><a href="companyList.php"><span>Company List</span></a></li>
      <li><a href="clubList.php"><span>&nbsp;&nbsp; Club List &nbsp;&nbsp;</span></a></li>	  	  
      <li><a href="activeCases.php"><span>Active Cases</span></a></li>
      <li><a href="closedCases.php"><span>Closed Cases</span></a></li>
      <li><a href="patientStats.php"><span>&nbsp;&nbsp;&nbsp; Stats &nbsp;&nbsp;&nbsp;</span></a></li>
      <li><a href="searchRVU.php"><span>&nbsp;&nbsp;&nbsp; RVU &nbsp;&nbsp;&nbsp;</span></a></li>
      <li><a href="patientCensus.php"><span>&nbsp;&nbsp; Census &nbsp;&nbsp;</span></a></li>
      <li><a href="medicalSpecialistList.php"><span>&nbsp;&nbsp; Specialists &nbsp;&nbsp;</span></a></li>	  	  
    </ul>
  </div>
  <!-- /header -->
  <hr class="noscreen" />
  <!-- Columns -->
  <div id="cols" class="box">
    <!-- Aside (Left Column) -->
    <div id="aside" class="box">
      <div class="padding box">
        <!-- Logo (Max. width = 200px) -->
        <p id="logo"><a href="#"><img src="tmp/logo.jpg" alt="" /></a></p>
        <!--p id="btn-create" class="box"><a href="#"><span>Lorem Ipsum</span></a></p-->
        <?php
        $id = $_GET['id'];

        $diagnosis = null;
		$d_result = mysql_query("SELECT autoID FROM icd_diagnosis WHERE patientID LIKE '%$id%'");
		$d_result = mysql_fetch_array($d_result);
		$diagnosis = $d_result[0];

		echo '<p id="btn-create" class="box"><a href="patientProfile.php?id=' . $id . '"><span>' . "Patient Profile" . '</span></a></p>';

        if(($diagnosis) != NULL){	
        	echo '<p id="btn-create" class="box"><a href="patientProfileDiagnosis.php?id=' . $id . '"><span>' . "View Assessments" . '</span></a></p>';
    	}
        ?>
      </div>
    </div>
    <!-- /aside -->
    <hr class="noscreen" />
    <!-- Content (Right Column) -->
    <div id="content" class="box">
<?Php
// Set row counter
$row_count = 0;

//Get Patient ID
$id = $_GET['id'];

$result = mysql_query("SELECT * FROM patient_info WHERE id LIKE '%$id%'");

	while($row = mysql_fetch_array($result)){
		$repatNumber = $row['repatNumber'];
//Check if Repat is 2 above		
		if($repatNumber != NULL){
			echo"<h1>" . htmlspecialchars($row['lastName'] .", ". $row['firstName'] ." ". $row['middleName'] ." ". $row['suffix']) . "&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;" . $row['repatNumber'] . "</h1>";
		}
		else{
			echo"<h1>" . htmlspecialchars($row['lastName'] .", ". $row['firstName'] ." ". $row['middleName'] ." ". $row['suffix']) . "</h1>";			
		}
	}	
?>
		<form action='' enctype='multipart/form-data' method='POST' style="#808080">	
			<table class="width100">
				<th colspan="2">
					Diagnosis
				</th>
				<tr class='even'>
					<td width='5%'>
						Select Diagnosis
					</td>
					<td width='20%' style="padding:12px;">  
						<!-- Trigger the modal with a button -->
						<button type="button" style="border-radius: 4px;border: 1px solid #808080;font-size: 14px;padding: 3.5px 7.5px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" name="select_icd" id="select_icd">Select Diagnosis</button>
						<br><br>
						<div style="text-align: center;vertical-align:middle;width:1320px;height:300px;">
							<table id="myDataTableThree" class="display" style="width: 100%; height: 100%">
										<thead>
											<tr>
												<th>Code</th>
												<th>Description</th>
												<th>Comment</th>
											</tr>
										</thead>
										<tfoot>
											<tr>
												<th>Code</th>
												<th>Description</th>
												<th>Comment</th>
											</tr>
										</tfoot>
									</table>
						</div>
					</td>
				</tr>
				<tr class='even'>
					<td width='5%' style="vertical-align:top;">
						Assessment Comment
					</td>
					<td style="padding:9px;">
						<textarea placeholder="Enter assessment comments here.." rows="8" style="font-size:14px; width:85%; resize:active;" name="diagnosis" id="diagnosis" value='<?php echo $_POST['diagnosis']; ?>' ></textarea>
					</td>
				</tr>
				<tr class='even'>
					<td style="padding: 12px;">
						Save
					</td>
					<td style="padding:8px;">
						<input type="button" name='submit_icd' id='submit_icd' value="Save">
						<span id="insertHere"></span>
					</td>
				</tr>

			</table>

			<div id="myModal" class="modal">
				<div class="modal-content" style='font-size:12.5px;background-color: #fff;text-align: center; padding: -2px;'>

					<div style='position: relative;display: inline-block;'>
						<div class='left' style='float: left;width: 50%;'>
							<div class='modal-header'>
								<h4 style="">Select Diagnosis<input type='search' id='txtSearchOne' style='float: left; width: 250px; border: .5px solid #363636; border-radius: 4px; padding: 7px 10px; font-size: 14px;'></h4>
							</div>
							<div style='position: relative;'>
								<div style='width: 769px;height: 500px;'>
									<table id="myDataTableOne" class="display" style="width: 100%; height: 100%">
										<thead>
											<tr>
												<th>Code</th>
												<th>Description</th>
											</tr>
										</thead>
										<tfoot>
											<tr>
												<th>Code</th>
												<th>Description</th>
											</tr>
										</tfoot>
									</table>
								</div>
							</div>
						</div>

						<div class='right' style='float: right;width: 50%;'>
							<div class='modal-header'>
								<span class="close" data-dismiss="modal">&times;</span>
								<h4>Selected Diagnosis<input type='search' id='txtSearchTwo' style='float: left; width: 250px; border: .5px solid #363636; border-radius: 4px; padding: 7px; font-size: 14px;'></h4>
							</div>
							<div style='position: relative;'>
								<div style='width: 769px;height: 500px;'>
									<table id="myDataTableTwo" class="display" style="width: 100%; height: 100%">
										<thead>
											<tr>
												<th>Code</th>
												<th>Description</th>
											</tr>
										</thead>
										<tfoot>
											<tr>
												<th>Code</th>
												<th>Description</th>
											</tr>
										</tfoot>
									</table>
								</div>
							</div>
						</div>
					</div>

					<div clas='modal-footer' style='background-color: #303030; height: 24px;'>
					</div>
				</div>
			</div>

					<?php
						$data_2 = '';
						$i = 0;

						$sql_query = mysql_query('SELECT icdCode, icdDesc FROM icd10_2018 ORDER BY icdCode');
						while($row = mysql_fetch_array($sql_query)){

							$data_2[$i] = array('icdcode' => $row['icdCode'], 'icddesc' => $row['icdDesc']);

							$i++;
						}

						$fp = fopen('datatables/icd/icdadd.txt', 'w+');
						$json_data = json_encode(array('data' => $data_2));
						fwrite($fp, $json_data);
						fclose($fp);
					?>

					<script>
						var tableOne;
						var tableTwo;
						var tableThree;

						$(document).ready(function() {

							///////////////////////////TABLE 1

							tableOne = $('#myDataTableOne').DataTable({
								"sAjaxSource": "datatables/icd/icdadd.txt",
								"pageLength": 15,
								"deferRender": true,
								//"scrollY": "500px",
								"bLengthChange": false,
								"deferRender": true,
								"columns": [
									{"data": 'icdcode', width: "10%"},
									{"data": 'icddesc'}
								]
							});

							tableOne.on('click', 'tr', function(){
								var data = tableOne.row( this ).data();
        						console.log( 'You clicked on '+data['icdcode']+' row' );
        						tableTwo.row.add({
        							"icdcode": data['icdcode'],
        							"icddesc": data['icddesc']
        						}).draw(false);
        						tableThree.row.add({
        							"icdcode": data['icdcode'],
        							"icddesc": data['icddesc'],
        							"comment": '<input id="' + data['icdcode'] + '" autocomplete="off" type="text" style="width: 95%;height: 100%" placeholder="Type optional comment here.."/>'
        						}).draw(false);
        						tableOne.row(this).remove().draw(false);
							});

							$('#txtSearchOne').keyup(function(){
				              tableOne.search($(this).val()).draw() ;
				            });

							//////////////////////////TABLE 2

							tableTwo = $('#myDataTableTwo').DataTable({
								"pageLength": 15,
								"bLengthChange": false,
								fixedHeader:{
									header: false,
									footer: true
								},
								//"scrollY": "500px",
								"ordering": false,
								"columns": [
									{"data": 'icdcode', width: "10%"},
									{"data": 'icddesc'}
								]
							});

							setTimeout(function () {
							     $($.fn.dataTable.tables( true ) ).DataTable().columns.adjust().draw(false);
							},200);

							tableTwo.on('click', 'tr', function(){
								var data = tableTwo.row( this ).data();
        						console.log(data['icdcode']);
        						tableOne.row.add({
        							"icdcode": data['icdcode'],
        							"icddesc": data['icddesc']
        						}).draw(false);
        						//tableThree.row(data).remove().draw(); //doesnt work because comment
        						tableTwo.row(this).remove().draw(false);

        						var filteredData = tableThree
        												.rows()
        												.indexes()
        												.filter(function (value, index){
        													return tableThree.row(value).data()['icdcode'] == data['icdcode'];
        												});
        						tableThree.rows(filteredData).remove().draw(false);
							});

							$('#txtSearchTwo').keyup(function(){
				              tableTwo.search($(this).val()).draw() ;
				            });

							///////////////////table 3

							tableThree = $('#myDataTableThree').DataTable({
								"bLengthChange": false,
								"ordering": false,
								"bPaginate": false,
								"columns": [
									{"data": 'icdcode', width: "10%"},
									{"data": 'icddesc'},
									{"data": 'comment'}
								]
							});

							var submit_btn = document.getElementById("submit_icd");
							submit_btn.onclick = function(){
								var textstring = document.getElementById("diagnosis").value;

								var idx = tableThree
											.columns()
											.data()
											.eq(0);

								var comment_array = [];
								var icdcode_array = [];
								var temp_dom;
								
								if(!tableThree.data().count()){
									alert('Please enter some codes!');
								}else{
									for(var com_counter = 0; com_counter < tableThree.data().count(); com_counter++){
										temp_dom = document.getElementById(idx[com_counter]);
										temp_string = temp_dom.value;
										temp_string = temp_string
																.replace(/&/g, "&amp;")
															    .replace(/</g, "&lt;")
															    .replace(/>/g, "&gt;")
															    .replace(/"/g, "&quot;")
															    .replace(/'/g, "&#039;");
										comment_array.push(temp_string);
										icdcode_array.push(idx[com_counter]);
									}

									window.location = document.location.href + "&icdid=" + JSON.stringify(icdcode_array) + "&comment=" + textstring + "&dcomment=" + JSON.stringify(comment_array);
								}
							}

						});

					</script>
						
				<br>
				
		</form>	
    </div>
    <!-- /content -->
  </div>
  <!-- /cols -->
 <!-- Start -->
<?Php
	$jsonid = $_GET['icdid'];
	$json_dcomment = $_GET['dcomment'];

	if(empty($jsonid)){
		//echo "<center>" . " Please enter some codes! "  . "</center>";
	}else{

		$jsonid = json_decode($jsonid);
		$json_dcomment = json_decode($json_dcomment);
		$comment = $_GET['comment'];

		$username = $_SESSION['username'];
		$result = mysql_query("SELECT * FROM users WHERE username LIKE '%$username%'");

		while($row = mysql_fetch_array($result)){
			$userID = htmlspecialchars($row['idNum']);
		}

		$temp_comment = htmlspecialchars($comment);
		mysql_query("INSERT icd_diagnosis SET patientID='$id', comment='$temp_comment', encodedBy='$userID', encodedDate='$date'") or die(mysql_error());

		$result = mysql_query("SELECT max(autoID) FROM icd_diagnosis WHERE encodedBy='$userID'");
		$d_id = mysql_insert_id($con);
		$d_id = mysql_fetch_array($result);
		$d_id = $d_id[0];

		$loop_count = 0;
		foreach($jsonid as $temp){
			$temp_dcomment = htmlspecialchars($json_dcomment[$loop_count]);
			mysql_query("INSERT icd_diagnosis_details SET diagnosisID='$d_id', icdCode='$temp', diagnosisComment='$temp_dcomment'") or die(mysql_error());
			$loop_count++;
		}

		echo "<script>window.location = 'patientProfileDiagnosis.php?id=" . $id . "';</script>";

	}

//Insert Encoder Name
include('functions/encoder.php');						

	mysql_close($con);
?>
<!-- End --> 
  <hr class="noscreen" />
  <!-- Footer -->
  <div id="footer" class="box">
    <p class="f-left">&copy; 2015 <a href="http://www.shiphealthinc.com">Shiphealth Inc.</a>, All Rights Reserved &reg;</p>
  </div>
  <!-- /footer -->
</div>
<!-- /main -->
</body>
</html>
