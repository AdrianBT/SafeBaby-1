	In this folder you will find:  

		--> The Arduino Uno to HM-10 bluetooth breadboard circuit schematic
			-- This was completed via the free Fritzing schematic software0
			-- HM-10 Module was added manually to the Fritzing software core parts 
				
			--HM-10 BLE Module component for Fritzing software was downloaded from Github:
				Credit given to user: RafaGS 
					URL address: https://github.com/RafaGS/Fritzing/blob/master/Bluetooth%20HM-10.fzpz
		--> .ino code to access AT or modem commands in HM-10 BLE module device
			--> AT commands include:
				AT => Output => Test Commands => OK
				AT+NAME? => Output => Name of device
				AT+VERSION? => Output => Firmware version
				AT+ORGL =>Output => Restore default => OK
				AT+ADDR?=>Output=> Get ble module address
				AT+NAME=[NAME] =>Change ble module name
				AT+ROLE? => Output => Check module name
				AT+ROLE=[Param] => Output => Set module name
				AT+CLASS? =>Output => Check device class
				AT+CLASS=[PARAM] => Output => Set device class
				AT => Output => Test Commands => OK
				AT+NAME? => Output => Name of device
				AT+VERSION? => Output => Firmware version
				AT+ORGL =>Output => Restore default => OK
				AT+ADDR?=>Output=> Get ble module address
				AT+NAME=[NAME] =>Change ble module name
				AT+ROLE? => Output => Check module name
				AT+ROLE=[Param] => Output => Set module name
				AT+CLASS? =>Output => Check device class
				AT+CLASS=[PARAM] => Output => Set device class

		


