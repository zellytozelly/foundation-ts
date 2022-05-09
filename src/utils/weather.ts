import { CloudIcon, RainIcon, ClearIcon, AtmosphereIcon, SnowIcon, DrizzleIcon, ThunderstormIcon } from 'assets/svgs/weather'

export const getWeatherIcon = (desc: string) => {
  let weatherIconName = RainIcon
  switch (desc) {
    case 'Clouds':
      weatherIconName = CloudIcon
      break
    case 'Clear':
      weatherIconName = ClearIcon
      break
    case 'Atmosphere':
      weatherIconName = AtmosphereIcon
      break
    case 'Snow':
      weatherIconName = SnowIcon
      break
    case 'Drizzle':
      weatherIconName = DrizzleIcon
      break
    case 'Thunderstorm':
      weatherIconName = ThunderstormIcon
      break
    default:
      break
  }

  return weatherIconName
}
