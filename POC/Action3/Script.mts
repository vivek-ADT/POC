firstName = Parameter("tp_firstName")
lastName = Parameter("tp_lastName")
vRandomID = RandomNumber(6000,7000)
userName = firstName & vRandomID

Browser("OrangeHRM").Page("empDetails").Link("PIM").Click
Browser("OrangeHRM").Page("empDetails").WebButton("Add").Click

Browser("OrangeHRM").Page("empDetails").WebEdit("firstName").Set firstName @@ script infofile_;_ZIP::ssf52.xml_;_
Browser("OrangeHRM").Page("empDetails").WebEdit("middleName").Set "kumar" @@ script infofile_;_ZIP::ssf53.xml_;_
Browser("OrangeHRM").Page("empDetails").WebEdit("lastName").Set lastName

Browser("OrangeHRM").Page("empDetails").WebElement("Employee Id").Click @@ script infofile_;_ZIP::ssf64.xml_;_
Browser("OrangeHRM").Page("empDetails").WebEdit("EmployeeID").Set userName @@ script infofile_;_ZIP::ssf67.xml_;_
	
Browser("OrangeHRM").Page("empDetails").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf54.xml_;_
Browser("OrangeHRM").Page("empDetails").WebEdit("EmpUN").Set userName @@ script infofile_;_ZIP::ssf55.xml_;_
Browser("OrangeHRM").Page("empDetails").WebEdit("EmpPassword").SetSecure "66c4a0c3ef5e9d079b44dd560756f474567d99aa146a" @@ script infofile_;_ZIP::ssf56.xml_;_
Browser("OrangeHRM").Page("empDetails").WebEdit("EmpConfirmPassword").SetSecure "66c4a0c869d12e10357ab47ad60d4b54bfa7ad7c6dc4"
Browser("OrangeHRM").Page("empDetails").WebButton("Save").Click @@ script infofile_;_ZIP::ssf75.xml_;_
wait(5) @@ script infofile_;_ZIP::ssf77.xml_;_


Dim totalRows, i, getCategory
totalRows = DataTable.GetRowCount

	For i = 1 To totalRows
	    DataTable.SetCurrentRow(i)
	    getCategory = DataTable("DropDownValues", dtGlobalSheet)
	   wait(1)
	   ' Enable error handling
	   On Error Resume Next
	    Browser("OrangeHRM").Page("empDetails").WebElement("xpath:=(//div[@class='oxd-select-text--after'])[1]").Click
	    wait(2)
	    Browser("OrangeHRM").Page("empDetails").WebList("SelectDropDown").Select getCategory
	       ' Check if the object was identified
		If Err.Number <> 0 Then
		    ' An error occurred (e.g., object not found)
		    Reporter.ReportEvent micFail, "Step Skipped  - "&getCategory, "Nationality is not existing in dropdown values"
		    ' Clear the error
		    Err.Clear
		Else
		    ' No error, continue with your operations
		    Browser("OrangeHRM").Page("empDetails").WebButton("Update_Save").Click
		    wait(3)
		
			Dim selectedValue
			 selectedValue = Browser("OrangeHRM").Page("empDetails").WebElement("xpath:=(//div[contains(@class, 'oxd-select-text-input')])[1]").Object.innertext
			
			If selectedValue = getCategory Then
					Reporter.ReportEvent micPass, "Verify Nationality Checkpoint - "&getCategory, "Nationality is selected as expected"
			End If
	     End If
	' Disable error handling
	On Error GoTo 0
	   
Next

