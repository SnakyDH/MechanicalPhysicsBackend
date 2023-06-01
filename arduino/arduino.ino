const int Trigger = 2;
const int Echo = 3;
int tiempo;
int distancia;

void setup()
{
  Serial.begin(9600);
  pinMode(Trigger, OUTPUT);
  pinMode(Echo, INPUT);
  digitalWrite(Trigger, LOW);
}

void loop()
{
  digitalWrite(Trigger, HIGH);
  delayMicroseconds(10);
  digitalWrite(Trigger, LOW);
  tiempo = pulseIn(Echo, HIGH, 10000);
  distancia = tiempo / 59;
  // Serial.print("Distancia: ");
  Serial.print(distancia);
  // Serial.println(" cm");
  delay(100);
}