export default function health(object) {
  if (object.health > 50) {
    return "healthy"
  }
  else if ((50 > object.health) && (object.health > 15))  {
    return "wounded"
  }
  else if (15 > object.health) {
    return "critical"
  }
}
