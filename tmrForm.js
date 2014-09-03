var TMR = 
{
   config:  
   {

   },
   fields: 
   {
      URI:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "URI",
         readonly: true,
      },
      HardwareVersion:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Hardware Version",
         readonly: true,
      },
      ProductGroup:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Product Group",
         readonly: true,
      },
      Model:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Model",
         readonly: true,
      },
      SerialNumber:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Serial Number",
         readonly: true,
      },
      ReaderDescription:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Reader Description",
         readonly: false,
      },
      SoftwareVersion:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Software Version",
         readonly: true,
      },
      Temperature:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Temperature",
         readonly: true,
      },
      ReaderTime:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Reader Time",
         readonly: false,
      },
      CurrentAntenna:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Current Antenna",
         readonly: true,
      },
      Baudrate:
      {
         datatype: "picklist",
         options: ["9600", "115200", "921600"],
         value: "",
         label: "Baud Rate",
         readonly: false,
      },
      CommandTimeout:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Command Timeout",
         readonly: false,
      },
      TransportTimeout:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Transport Timeout",
         readonly: false,
      },
      EnableReadFilter:
      {
         datatype: "radio",
         options: ["Yes", "No"],
         value: "",
         label: "Enable Read Filter",
         readonly: false,
      },
      ReadFilterTimeout:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Read Filter Timeout",
         readonly: false,
      },
      ASyncOffTime:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "ASync Off Time",
         readonly: false,
      },
      ASyncOnTime:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "ASync On time",
         readonly: false,
      },
      MaxPower:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Maximum Power",
         readonly: true,
      },
      MinPower:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Minimum Power",
         readonly: true,
      },
      ReadPower:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Read Power",
         readonly: false,
      },
      WritePower:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Write Power",
         readonly: false,
      },
      SuccessfulTagOp:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Successful Tag Operations",
         readonly: true,
      },
      FailedTagOp:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Failed Tag Operations",
         readonly: true,
      },
      CheckAntenna:
      {
         datatype: "radio",
         options: ["Yes", "No"],
         value: "",
         label: "Check Antenna Port",
         readonly: false,
      },
      ConnectedAntenna:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Connected Antenna Ports",
         readonly: true,
      },
      AvailableAntenna:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Available Antenna Ports",
         readonly: true,
      },
      PortSwitchPins:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Available Port Switching Pins",
         readonly: false,
      },
      InputPins:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Available Input Pins",
         readonly: false,
      },
      OutputPins:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Available Output Pins",
         readonly: false,
      },
      SettlingTime:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Port Number/Settling Time",
         readonly: false,
      },
      PortRead:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Port Number/Read Length",
         readonly: false,
      },
      PortWrite:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Port Number/Write Length",
         readonly: false,
      },
      TxRxMap:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Tx/Rx Map",
         readonly: false,
      },
      EarlyExit:
      {
         datatype: "radio",
         options: ["Yes", "No"],
         value: "",
         label: "Allow Early Exit",
         readonly: false,
      },
      PowerSave:
      {
         datatype: "radio",
         options: ["Yes", "No"],
         value: "",
         label: "Enable PowerSave (Disable DRM)",
         readonly: false,
      },
      LBT:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Enable LBT",
         readonly: true,
      },
      SJC:
      {
         datatype: "radio",
         options: ["Yes", "No"],
         value: "",
         label: "Enable SJC",
         readonly: false,
      },
      ExtendedEPC:
      {
         datatype: "radio",
         options: ["Yes", "No"],
         value: "",
         label: "Extended EPC",
         readonly: false,
      },
      HighestRSSI:
      {
         datatype: "radio",
         options: ["Yes", "No"],
         value: "",
         label: "Report Highest RSSI",
         readonly: false,
      },
      RSSIdBm:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Report RSSI in DBM",
         readonly: true,
      },
      UniqueAntenna:
      {
         datatype: "radio",
         options: ["Yes", "No"],
         value: "",
         label: "Report Unique Tag Reads By Antenna",
         readonly: false,
      },
      UniqueData:
      {
         datatype: "radio",
         options: ["Yes", "No"],
         value: "",
         label: "Report Unique Tag Reads By Data",
         readonly: false,
      },
      PowerMode:
      {
         datatype: "picklist",
         options: ["Full", "MinSave", "MedSave", "MaxSave", "Sleep"],
         value: "",
         label: "Power Mode",
         readonly: false,
      },
      UserMode:
      {
         datatype: "picklist",
         options: ["Unspecified", "Printer", "Conveyor", "Portal", "Handheld"],
         value: "",
         label: "User Mode",
         readonly: false,
      },
      ReportAntenna:
      {
         datatype: "radio",
         options: ["Yes", "No"],
         value: "",
         label: "Report Antennas",
         readonly: false,
      },
      ReportFrequency:
      {
         datatype: "radio",
         options: ["Yes", "No"],
         value: "",
         label: "Report Frequency",
         readonly: false,
      },
      ReportTemperature:
      {
         datatype: "radio",
         options: ["Yes", "No"],
         value: "",
         label: "Report Temperature",
         readonly: false,
      },
      GEN2BLF:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "GEN2 Backscatter Link Frequency",
         readonly: true,
      },
      GEN2WriteReplyTimeout:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "GEN2 Write Reply Timeout",
         readonly: false,
      },
      GEN2WriteMode:
      {
         datatype: "picklist",
         options: ["Word Only", "Block Only", "Block Fallback"],
         value: "",
         label: "GEN2 Write Mode",
         readonly: false,
      },
      GEN2AccessPassword:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "GEN2 Access Password",
         readonly: false,
      },
      GEN2TagEncoding:
      {
         datatype: "picklist",
         options: ["FM0", "M2", "M4", "M8"],
         value: "",
         label: "GEN2 Tag Encoding",
         readonly: false,
      },
      GEN2Session:
      {
         datatype: "picklist",
         options: ["S0", "S1", "S2", "S3"],
         value: "",
         label: "GEN2 Session",
         readonly: false,
      },
      GEN2Target:
      {
         datatype: "picklist",
         options: ["A", "B", "AB", "BA"],
         value: "",
         label: "GEN2 Target Algorythm",
         readonly: false,
      },
      GEN2Q:
      {
         datatype: "radio",
         options: ["Dynamic", "Static"],
         value: "",
         label: "Q Algorythm",
         readonly: false,
      },
      Tari:
      {
         datatype: "picklist",
         options: ["6.25 us", "12.5 us", "25 us"],
         value: "",
         label: "Tari",
         readonly: false,
      },
      SupportedProtocols:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Supported Protocols",
         readonly: true,
      },
      CurrentProtocol:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Current Protocol",
         readonly: true,
      },
      ReadPlan:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Read Plan",
         readonly: false,
      },
      ISOBLF:
      {
         datatype: "radio",
         options: ["40 kHz", "160 kHz"],
         value: "",
         label: "ISO180006B Backscatter Link Frequency",
         readonly: false,
      },
      ISOModulationDepth:
      {
         datatype: "radio",
         options: ["99%", "11%"],
         value: "",
         label: "ISO180006B Modulation Depth",
         readonly: false,
      },
      ISODelimiter:
      {
         datatype: "radio",
         options: ["Delimiter1", "Delimiter4"],
         value: "",
         label: "ISO180006B Delimiter",
         readonly: false,
      },
      SupportedRegions:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Supported Regions",
         readonly: true,
      },
      CurrentRegion:
      {
         datatype: "custom-picklist",
         options: "",
         value: "",
         label: "Current Region",
         readonly: false,
      },
      FrequencyHopTime:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Frequency Hop Time",
         readonly: false,
      },
      FrequencyHopTable:
      {
         datatype: "string",
         options: "",
         value: "",
         label: "Frequency Hop Table",
         readonly: false,
      },
   },
   formButtons: 
   {

   },

   tmrRender: function(input, output)
   {  
      console.log("Incoming request.");
      output.writeHead(200, {"Content-Type": "text/HTML"});
      output.write("<!DOCTYPE HTML><HTML><HEAD></HEAD><BODY>\n");
      output.write("<script>\n");
      output.write("function loadFile()\n{\n");
      output.write("   if (window.XMLHttpRequest)\n      var readFile = new XMLHttpRequest();\n");
      output.write("   readFile.open('GET', 'readerdump', true);\n   readFile.setRequestHeader('If-Modified-Since', 'Sat, 1 Jan 2005 00:00:00 GMT');\n");
      output.write("   readFile.onreadystatechange = function()\n   {\n");
      output.write("      if (readFile.readyState == 4 && readFile.status == 200)\n      {\n");
      output.write("         console.log(readFile.responseText)\n");
      output.write('         var textFile = readFile.responseText.split("=");\n         var regionList = textFile[121].split(", ");\n');
      output.write('         var baudrateMenu = "";\n         var readFilterMenu = "";\n         var checkAntennaMenu = "";\n         var earlyExitMenu = "";\n');
      output.write('         var powerSaveMenu = "";\n         var SJCMenu = "";\n         var extendedEPCMenu = "";\n         var highestRSSIMenu = "";\n');
      output.write('         var uniqueAntennaMenu = "";\n         var uniqueDataMenu = "";\n         var powerModeMenu = "";\n         var userModeMenu = "";\n');
      output.write('         var reportAntennaMenu = "";\n         var reportFrequencyMenu = "";\n         var reportTemperatureMenu = "";\n         var GEN2WriteMenu = "";\n');
      output.write('         var GEN2TagEncodingMenu = "";\n         var GEN2SessionMenu = "";\n         var GEN2TargetMenu = "";\n         var GEN2QMenu = "";\n');
      output.write('         var TariMenu = "";\n         var ISOBLFMenu = "";\n         var modulationMenu = "";\n         var delimiterMenu = "";\n         var regionMenu = "";\n');
      output.write('         document.getElementById("URI").innerHTML = textFile[1];\n         document.getElementById("HardwareVersion").innerHTML = textFile[3];\n');
      output.write('         document.getElementById("ProductGroup").innerHTML = textFile[5];\n         document.getElementById("Model").innerHTML = textFile[7];\n');
      output.write('         document.getElementById("SerialNumber").innerHTML = textFile[9];\n         document.getElementById("ReaderDescription").value = textFile[11];\n');
      output.write('         document.getElementById("SoftwareVersion").innerHTML = textFile[13];\n         document.getElementById("Temperature").innerHTML = textFile[15] + "&degC";\n');
      output.write('         document.getElementById("ReaderTime").value = textFile[17];\n         document.getElementById("CurrentAntenna").value = textFile[19];\n');
      output.write('         document.getElementById("CommandTimeout").value = textFile[23];\n         document.getElementById("TransportTimeout").value = textFile[25];\n');
      output.write('         document.getElementById("ReadFilterTimeout").value = textFile[29];\n         document.getElementById("ASyncOffTime").value = textFile[31];\n');
      output.write('         document.getElementById("ASyncOnTime").value = textFile[33];\n         document.getElementById("MaxPower").innerHTML = textFile[35];\n');
      output.write('         document.getElementById("MinPower").innerHTML = textFile[37];\n         document.getElementById("ReadPower").value = textFile[39];\n');
      output.write('         document.getElementById("WritePower").value = textFile [41];\n         document.getElementById("SuccessfulTagOp").innerHTML = textFile[43];\n');
      output.write('         document.getElementById("FailedTagOp").innerHTML = textFile[45];\n         document.getElementById("ConnectedAntenna").innerHTML = textFile[49];\n');
      output.write('         document.getElementById("AvailableAntenna").innerHTML = textFile[51];\n         document.getElementById("PortSwitchPins").value = textFile[53];\n');
      output.write('         document.getElementById("InputPins").value = textFile[55];\n         document.getElementById("OutputPins").value = textFile[57];\n');
      output.write('         document.getElementById("SettlingTime").value = textFile[59];\n         document.getElementById("PortRead").value = textFile[61];\n');
      output.write('         document.getElementById("PortWrite").value = textFile[63];\n         document.getElementById("TxRxMap").value = textFile[65];\n');
      output.write('         document.getElementById("GEN2BLF").innerHTML = textFile[91];\n         document.getElementById("GEN2WriteReplyTimeout").value = textFile[93];\n');
      output.write('         document.getElementById("GEN2AccessPassword").value = textFile[97];\n         document.getElementById("SupportedProtocols").innerHTML = textFile[109];\n');
      output.write('         document.getElementById("CurrentProtocol").innerHTML = textFile[111];\n         document.getElementById("ReadPlan").value = textFile[113];\n');
      output.write('         document.getElementById("SupportedRegions").innerHTML = textFile[121];\n         document.getElementById("FrequencyHopTime").value = textFile[125];\n');
      output.write('         document.getElementById("FrequencyHopTable").value = textFile[127];\n         document.getElementById("RSSIdBm").innerHTML = (textFile[129])? "Yes": "No";\n');
      output.write('         document.getElementById("LBT").innerHTML = (textFile[131])? "Yes": "No";\n');
//         baudrateMenu += '<option value="9600"' + ((textFile[21] === "9600")? ' selected>9600</option>':'>9600</option>') + 
//                       '<option value="115200"' + ((textFile[21] === "115200")? ' selected>115200</option>':'>115200</option>') +
//                       '<option value="921600"' + ((textFile[21] === "921600")? ' selected>921600</option>':'>921600</option>');
//       $("#BaudRate").html(baudrateMenu);
//       readFilterMenu += '<input type="radio" name="EnableReadFilter" id="EnableReadFilter" value="1"' + ((textFile[27] === "1")? ' checked>Yes&nbsp;&nbsp;&nbsp;':'>Yes&nbsp;&nbsp;&nbsp;') + 
//                      '<input type="radio" name="EnableReadFilter" id="EnableReadFilter" value="0"' + ((textFile[27] === "0")? ' checked>No':'>No');
//       $("#EnableReadFilter_").html(readFilterMenu);
//       checkAntennaMenu += '<input type="radio" name="CheckAntenna" id="CheckAntenna" value="1"' + ((textFile[47] === "1")? ' checked>Yes&nbsp;&nbsp;&nbsp;':'>Yes&nbsp;&nbsp;&nbsp;') + 
//                       '<input type="radio" name="CheckAntenna" id="CheckAntenna" value="0"' + ((textFile[47] === "0")? ' checked>No':'>No');
//       $("#CheckAntenna_").html(checkAntennaMenu);
//         earlyExitMenu += '<input type="radio" name="EarlyExit" id="EarlyExit" value="1"' + ((textFile[67] === "1")? ' checked>Yes&nbsp;&nbsp;&nbsp;':'>Yes&nbsp;&nbsp;&nbsp;') + 
//                         '<input type="radio" name="EarlyExit" id="EarlyExit" value="0"' + ((textFile[67] === "0")? ' checked>No':'>No');
//         $("#EarlyExit_").html(earlyExitMenu);
//         powerSaveMenu += '<input type="radio" name="PowerSave" id="PowerSave" value="1"' + ((textFile[69] === "1")? ' checked>Yes&nbsp;&nbsp;&nbsp;':'>Yes&nbsp;&nbsp;&nbsp;') + 
//                         '<input type="radio" name="PowerSave" id="PowerSave" value="0"' + ((textFile[69] === "0")? ' checked>No':'>No');
//         $("#PowerSave_").html(powerSaveMenu);
//         SJCMenu += '<input type="radio" name="SJC" id="SJC" value="1"' + ((textFile[71] === "1")? ' checked>Yes&nbsp;&nbsp;&nbsp;':'>Yes&nbsp;&nbsp;&nbsp;') + 
//                         '<input type="radio" name="SJC" id="SJC" value="0"' + ((textFile[71] === "0")? ' checked>No':'>No');
//         $("#SJC_").html(SJCMenu);
//         extendedEPCMenu += '<input type="radio" name="ExtendedEPC" id="ExtendedEPC" value="1"' + ((textFile[73] === "1")? ' checked>Yes&nbsp;&nbsp;&nbsp;':'>Yes&nbsp;&nbsp;&nbsp;') + 
//                         '<input type="radio" name="ExtendedEPC" id="ExtendedEPC" value="0"' + ((textFile[73] === "0")? ' checked>No':'>No');
//        $("#ExtendedEPC_").html(extendedEPCMenu);
//         highestRSSIMenu += '<input type="radio" name="HighestRSSI" id="HighestRSSI" value="1"' + ((textFile[75] === "1")? ' checked>Yes&nbsp;&nbsp;&nbsp;':'>Yes&nbsp;&nbsp;&nbsp;') + 
//                         '<input type="radio" name="HighestRSSI" id="HighestRSSI" value="0"' + ((textFile[75] === "0")? ' checked>No':'>No');
//         $("#HighestRSSI_").html(highestRSSIMenu);
//         uniqueAntennaMenu += '<input type="radio" name="UniqueAntenna" id="UniqueAntenna" value="1"' + ((textFile[77] === "1")? ' checked>Yes&nbsp;&nbsp;&nbsp;':'>Yes&nbsp;&nbsp;&nbsp;') + 
//                         '<input type="radio" name="UniqueAntenna" id="UniqueAntenna" value="0"' + ((textFile[77] === "0")? ' checked>No':'>No');
//         $("#UniqueAntenna_").html(uniqueAntennaMenu);
//         uniqueDataMenu += '<input type="radio" name="UniqueData" id="UniqueData" value="1"' + ((textFile[79] === "1")? ' checked>Yes&nbsp;&nbsp;&nbsp;':'>Yes&nbsp;&nbsp;&nbsp;') + 
//                         '<input type="radio" name="UniqueData" id="UniqueData" value="0"' + ((textFile[79] === "0")? ' checked>No':'>No');
//         $("#UniqueData_").html(uniqueDataMenu);
//         powerModeMenu += '<option value="Full"' + ((textFile[81] === "Full")? ' selected>Full</option>':'>Full</option>') + 
//                         '<option value="Minsave"' + ((textFile[81] === "MinSave")? ' selected>MinSave</option>':'>MinSave</option>') +
//                         '<option value="MedSave"' + ((textFile[81] === "MedSave")? ' selected>MedSave</option>':'>MedSave</option>') +
//                         '<option value="MaxSave"' + ((textFile[81] === "MaxSave")? ' selected>MaxSave</option>':'>MaxSave</option>') +
//                        '<option value="Sleep"' + ((textFile[81] === "Sleep")? ' selected>Sleep</option>':'>Sleep</option>');
//         $("#PowerMode").html(powerModeMenu);
//         userModeMenu += '<option value="Unspecified"' + ((textFile[83] === "Unspecified")? ' selected>Unspecified</option>':'>Unspecified</option>') + 
//                         '<option value="Printer"' + ((textFile[83] === "Printer")? ' selected>Printer</option>':'>Printer</option>') +
//                         '<option value="Conveyor"' + ((textFile[83] === "Conveyor")? ' selected>Conveyor</option>':'>Conveyor</option>') +
//                         '<option value="Portal"' + ((textFile[83] === "Portal")? ' selected>Portal</option>':'>Portal</option>') +
//                         '<option value="Handheld"' + ((textFile[83] === "Handheld")? ' selected>Handheld</option>':'>Handheld</option>');
//         $("#UserMode").html(userModeMenu);
//         reportAntennaMenu += '<input type="radio" name="ReportAntenna" id="ReportAntenna" value="1"' + ((textFile[85] === "1")? ' checked>Yes&nbsp;&nbsp;&nbsp;':'>Yes&nbsp;&nbsp;&nbsp;') + 
//                         '<input type="radio" name="ReportAntenna" id="ReportAntenna" value="0"' + ((textFile[85] === "0")? ' checked>No':'>No');
//         $("#ReportAntenna_").html(reportAntennaMenu);
//         reportFrequencyMenu += '<input type="radio" name="ReportFrequency" id="ReportFrequency" value="1"' + ((textFile[87] === "1")? ' checked>Yes&nbsp;&nbsp;&nbsp;':'>Yes&nbsp;&nbsp;&nbsp;') + 
//                         '<input type="radio" name="ReportFrequency" id="ReportFrequency" value="0"' + ((textFile[87] === "0")? ' checked>No':'>No');
//         $("#ReportFrequency_").html(reportFrequencyMenu);
//         reportTemperatureMenu +=
//                         '<input type="radio" name="ReportTemperature" id="Reporttemperature" value="1"' + ((textFile[89] === "1")? ' checked>Yes&nbsp;&nbsp;&nbsp;':'>Yes&nbsp;&nbsp;&nbsp;') + 
//                         '<input type="radio" name="ReportTemperature" id="ReportTemperature" value="0"' + ((textFile[89] === "0")? ' checked>No':'>No');
//         $("#ReportTemperature_").html(reportTemperatureMenu);
//         GEN2WriteMenu += '<option value="Word Only"' + ((textFile[95] === "Word Only")? ' selected>Word Only</option>':'>Word Only</option>') + 
//                       '<option value="Block Only"' + ((textFile[95] === "Block Only")? ' selected>Portal</option>':'>Block Only</option>') +
//                       '<option value="Block Fallback"' + ((textFile[95] === "Block Fallback")? ' selected>Block Fallback</option>':'>Block Fallback</option>'); 
//         $("#GEN2WriteMode").html(GEN2WriteMenu);
//         GEN2TagEncodingMenu += '<option value="FM0"' + ((textFile[99] === "FM0")? ' selected>FM0</option>':'>FM0</option>') + 
//                       '<option value="M2"' + ((textFile[99] === "M2")? ' selected>M2</option>':'>M2</option>') +
//                       '<option value="M4"' + ((textFile[99] === "M4")? ' selected>M4</option>':'>M4</option>') +
//                       '<option value="M8"' + ((textFile[99] === "M8")? ' selected>M8</option>':'>M8</option>');
//         $("#GEN2TagEncoding").html(GEN2TagEncodingMenu);
//         GEN2SessionMenu += '<option value="S0"' + ((textFile[101] === "S0")? ' selected>S0</option>':'>S0</option>') + 
//                         '<option value="S1"' + ((textFile[101] === "S1")? ' selected>S1</option>':'>S1</option>') +
//                         '<option value="S2"' + ((textFile[101] === "S2")? ' selected>S2</option>':'>S2</option>') +
//                         '<option value="S3"' + ((textFile[101] === "S3")? ' selected>S3</option>':'>S3</option>');
//         $("#GEN2Session").html(GEN2SessionMenu);
//         GEN2TargetMenu += '<option value="A"' + ((textFile[103] === "A")? ' selected>A</option>':'>A</option>') + 
//                        '<option value="B"' + ((textFile[103] === "B")? ' selected>B</option>':'>B</option>') +
//                        '<option value="AB"' + ((textFile[103] === "AB")? ' selected>AB</option>':'>AB</option>') +
//                        '<option value="BA"' + ((textFile[103] === "BA")? ' selected>BA</option>':'>BA</option>');
//         $("#GEN2Target").html(GEN2TargetMenu);
//         GEN2QMenu += '<input type="radio" name="GEN2Q" id="GEN2Q" value="Dynamic"' + ((textFile[105] === "Dynamic")? ' checked>Dynamic&nbsp;&nbsp;&nbsp;':'>Dynamic&nbsp;&nbsp;&nbsp;') + 
//                   '<input type="radio" name="GEN2Q" id="GEN2Q" value="Static"' + ((textFile[105] === "Static")? ' checked>Static':'>Static');
//         $("#GEN2Q_").html(GEN2QMenu);
//         TariMenu += '<option value="6.25us"' + ((textFile[107] === "6.25us")? ' selected>6.25 us</option>':'>6.25 us</option>') + 
//                  '<option value="12.5us"' + ((textFile[107] === "12.5us")? ' selected>12.5 us</option>':'>12.5 us</option>') +
//                  '<option value="25us"' + ((textFile[107] === "25us")? ' selected>25 us</option>':'>25 us</option>');
//         $("#Tari").html(TariMenu);
//         ISOBLFMenu += '<input type="radio" name="ISOBLF" id="ISOBLF" value="40"' + ((textFile[115] === "40")? ' checked>40 kHz&nbsp;&nbsp;&nbsp;':'>40 kHz&nbsp;&nbsp;&nbsp;') + 
//                    '<input type="radio" name="ISOBLF" id="ISOBLF" value="160"' + ((textFile[115] === "160")? ' checked>160 kHz':'>160 kHz');
//         $("#ISOBLF_").html(ISOBLFMenu);
//         modulationMenu +=
//                        '<input type="radio" name="ISOModulationDepth" id="ISOModulationDepth" value="99"' + ((textFile[117] === "99")? ' checked>99 %&nbsp;&nbsp;&nbsp;':'>99 %&nbsp;&nbsp;&nbsp;') + 
//                        '<input type="radio" name="ISOModulationDepth" id="ISOModulationDepth" value="11"' + ((textFile[117] === "11")? ' checked>11 %':'>11 %');
//         $("#ISOModulationDepth_").html(modulationMenu);
//         delimiterMenu += '<input type="radio" name="ISODelimiter" id="ISODelimiter" value="Delimiter1"' 
//                       + ((textFile[119] === "Delimiter1")? ' checked>Delimiter 1&nbsp;&nbsp;&nbsp;':'>Delimiter 1&nbsp;&nbsp;&nbsp;') + 
//                       '<input type="radio" name="ISODelimiter" id="ISODelimiter" value="Delimiter4"' + ((textFile[119] === "Delimiter4")? ' checked>Delimiter 4':'>Delimiter 4');
//         $("#ISODelimiter_").html(delimiterMenu);
//         for (var i = 0; i < regionList.length; i++)
//             {
//                if (regionList[i] === textFile[123])
//                   {
//                      regionMenu += '<option value="' + regionList[i] + '" selected>' + regionList[i] + '</option>';
//                   }
//                   else regionMenu += '<option value="' + regionList[i] + '">' + regionList[i] + '</option>';
//             }
//             $("#CurrentRegion").html(regionMenu)
      output.write('      }\n   }\n');
      output.write('   readFile.send();\n}\n');
      output.write("</script>\n");
      output.write('<table border="1">\n');
      for (var x in TMR.fields)
      {  
         output.write("<tr><td>" + TMR.fields[x].label + "</td>");
         if (TMR.fields[x].datatype === "string" && !TMR.fields[x].readonly)
            output.write('<td><input type="text" id="' + x + '"></td></tr>\n');
            else if (TMR.fields[x].datatype === "radio" && !TMR.fields[x].readonly)
                    output.write('<td><input type="radio" name="' + x + 'value="' + TMR.fields[x].options[0] + '">' + TMR.fields[x].options[0]
                    + '<input type="radio" name="' + x + 'value="' + TMR.fields[x].options[1] + '">' + TMR.fields[x].options[1] + '</td></tr>\n');
                    else if (TMR.fields[x].datatype === "picklist" && !TMR.fields[x].readonly)
                            {  
                               var html = '<td><select name="' + x + '">';
                               for (var i = 0; i < TMR.fields[x].options.length; i++)
                               {  
                                  html += '<option value="' + TMR.fields[x].options[i] + '">' + TMR.fields[x].options[i] + '</option>';
                               }
                               html += '</select></td></tr>\n';
                               output.write(html);
                            }
                            else output.write('<td><p id="' + x + '"></td></tr>\n');
      }
      output.write('<tr><td><input type="button" onClick="loadFile()" value="Get Config From Reader"></td>');
      output.write('<td><input type="button" onClick="writeFile()" value="Send Config To Reader"></td></tr>\n');
      output.write("</table>\n");
      output.write("</BODY></HTML>\n");
      output.end();
   }

};
exports.TMR = TMR;
