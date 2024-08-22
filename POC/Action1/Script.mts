'SystemUtil.Run "chrome.exe", "https://opensource-demo.orangehrmlive.com/"
Browser("OrangeHRM").Maximize
Browser("OrangeHRM").Page("login").WebButton("Login").Check CheckPoint("Login")
Browser("OrangeHRM").Page("login").WebEdit("username").Set "Admin" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("OrangeHRM").Page("login").WebEdit("password").SetSecure "66c475899064937350741fce8eca3564063922ad9e4c"
Browser("OrangeHRM").Page("login").WebButton("Login").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("OrangeHRM").Page("login").WebElement("Dashboard").Check CheckPoint("Dashboard")
