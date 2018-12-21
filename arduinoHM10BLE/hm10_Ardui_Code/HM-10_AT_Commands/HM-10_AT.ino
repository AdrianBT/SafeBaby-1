#include <SoftwareSerial.h>

SoftwareSerial BTSerial(11,10); // CONNECT BLE RX PIN TO ARDUINO 10 PIN | CONNECT BLE TX PIN TO ARDUINO 11 PIN  

void setup(){
  Serial.begin(9600);
  Serial.println("AT commands: ");
  BTSerial.begin(9600); // HM-10 baud rate

  
  }

  void loop () {
    //read from the HM-10, send and print to the Arduino Serial Monitor
    if(BTSerial.available())
      Serial.write(BTSerial.read());

    //Keep reading from the Arduino Serial and print to the HM-10
    if(Serial.available())
      BTSerial.write(Serial.read());
  }
