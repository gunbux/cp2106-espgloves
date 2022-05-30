#include <stdbool.h>
//for IMU
#include "I2Cdev.h"
#include "MPU6050_6Axis_MotionApps20.h"

#define p0 A0
#define flex A1
#define led1 5
#define led2 6
#define switchPin 4  


int p0val;
int p0Range[] = {255, 0};
int flexval;
int flexRange[] = {255, 0};
bool mode = 0;

//IMU
MPU6050 mpu;
#define OUTPUT_READABLE_YAWPITCHROLL
#define INTERRUPT_PIN 2 
#define LED_PIN 13
bool blinkState = false;
bool dmpReady = false;  // set true if DMP init was successful
uint8_t mpuIntStatus;   // holds actual interrupt status byte from MPU
uint8_t devStatus;      // return status after each device operation (0 = success, !0 = error)
uint16_t packetSize;    // expected DMP packet size (default is 42 bytes)
uint16_t fifoCount;     // count of all bytes currently in FIFO
uint8_t fifoBuffer[64]; // FIFO storage buffer

Quaternion q;           // [w, x, y, z]         quaternion container
VectorInt16 aa;         // [x, y, z]            accel sensor measurements
VectorInt16 aaReal;     // [x, y, z]            gravity-free accel sensor measurements
VectorInt16 aaWorld;    // [x, y, z]            world-frame accel sensor measurements
VectorFloat gravity;    // [x, y, z]            gravity vector
float euler[3];         // [psi, theta, phi]    Euler angle container
float ypr[3];           // [yaw, pitch, roll]   yaw/pitch/roll container and gravity vector

volatile bool mpuInterrupt = false;     // indicates whether MPU interrupt pin has gone high
void dmpDataReady() {
    mpuInterrupt = true;
}

void setup()
{
  Serial.begin(9600);
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(switchPin, INPUT);

  #if I2CDEV_IMPLEMENTATION == I2CDEV_ARDUINO_WIRE
        Wire.begin();
        Wire.setClock(400000); // 400kHz I2C clock. Comment this line if having compilation difficulties
    #elif I2CDEV_IMPLEMENTATION == I2CDEV_BUILTIN_FASTWIRE
        Fastwire::setup(400, true);
    #endif

       while (!Serial);
   Serial.println(F("Initializing I2C devices..."));
    mpu.initialize();
    pinMode(INTERRUPT_PIN, INPUT);

    // verify connection
    Serial.println(F("Testing device connections..."));
    Serial.println(mpu.testConnection() ? F("MPU6050 connection successful") : F("MPU6050 connection failed"));

    // wait for ready
    Serial.println(F("\nSend any character to begin DMP programming and demo: "));
    while (Serial.available() && Serial.read()); // empty buffer
    while (!Serial.available());                 // wait for data
    while (Serial.available() && Serial.read()); // empty buffer again

    // load and configure the DMP
    Serial.println(F("Initializing DMP..."));
    devStatus = mpu.dmpInitialize();

    // supply your own gyro offsets here, scaled for min sensitivity
    mpu.setXGyroOffset(220);
    mpu.setYGyroOffset(76);
    mpu.setZGyroOffset(-85);
    mpu.setZAccelOffset(1788); // 1688 factory default for my test chip

    // make sure it worked (returns 0 if so)
    if (devStatus == 0) {
        // Calibration Time: generate offsets and calibrate our MPU6050
        mpu.CalibrateAccel(6);
        mpu.CalibrateGyro(6);
        mpu.PrintActiveOffsets();
        // turn on the DMP, now that it's ready
        Serial.println(F("Enabling DMP..."));
        mpu.setDMPEnabled(true);

        // enable Arduino interrupt detection
        Serial.print(F("Enabling interrupt detection (Arduino external interrupt "));
        Serial.print(digitalPinToInterrupt(INTERRUPT_PIN));
        Serial.println(F(")..."));
        attachInterrupt(digitalPinToInterrupt(INTERRUPT_PIN), dmpDataReady, RISING);
        mpuIntStatus = mpu.getIntStatus();

        // set our DMP Ready flag so the main loop() function knows it's okay to use it
        Serial.println(F("DMP ready! Waiting for first interrupt..."));
        dmpReady = true;

        // get expected DMP packet size for later comparison
        packetSize = mpu.dmpGetFIFOPacketSize();
    } else {
        // ERROR!
        // 1 = initial memory load failed
        // 2 = DMP configuration updates failed
        // (if it's going to break, usually the code will be 1)
        Serial.print(F("DMP Initialization failed (code "));
        Serial.print(devStatus);
        Serial.println(F(")"));
    }

    // configure LED for output
    pinMode(LED_PIN, OUTPUT);


}
void loop()
{
  mode = digitalRead(switchPin);
  Serial.print("mode: ");
Serial.print(mode);
Serial.print(" pval : ");
Serial.print(p0val);
Serial.print(" flexval: ");
Serial.println(flexval);


  readSensors();
  if(mode == 0){
    calibrate();
  }

  if(mode == 1){
  //
 feedback();
    
    }
  if (!dmpReady) return;
   if (mpu.dmpGetCurrentFIFOPacket(fifoBuffer)) {
    
    #ifdef OUTPUT_READABLE_YAWPITCHROLL
            // display Euler angles in degrees
            mpu.dmpGetQuaternion(&q, fifoBuffer);
            mpu.dmpGetGravity(&gravity, &q);
            mpu.dmpGetYawPitchRoll(ypr, &q, &gravity);
            Serial.print("ypr\t");
            Serial.print(ypr[0] * 180/M_PI);
            Serial.print("\t");
            Serial.print(ypr[1] * 180/M_PI);
            Serial.print("\t");
            Serial.println(ypr[2] * 180/M_PI);
        #endif
     blinkState = !blinkState;
        digitalWrite(LED_PIN, blinkState);
    
    }
    
}

void calibrate() {
  //calibrate bounds of each sensor

  digitalWrite(led1, HIGH);
  digitalWrite(led2, HIGH);
  
  if (p0val <= p0Range[0]) {
    p0Range[0] = p0val;
  }
  if (p0val >= p0Range[1]) {
    p0Range[1] = p0val;
  }

  if (flexval <= flexRange[0]) {
    flexRange[0] = flexval;
  }
  if (flexval >= flexRange[1]) {
    flexRange[1] = flexval;
  }
}

void feedback() {
  int p0data = map(p0val, p0Range[0], p0Range[1], 0, 244);
  int flexdata = map(flexval, flexRange[0], flexRange[1], 0, 244);
  //Serial.println(p0data);
  analogWrite(led1, p0data);
  
  
  analogWrite(led2, flexdata);

  Serial.print("p0data: ");
Serial.print(p0data);
Serial.print("flexdata: ");
Serial.println(flexdata);
}

void readSensors() {
  p0val = analogRead(p0);
  flexval = analogRead(flex);

}
