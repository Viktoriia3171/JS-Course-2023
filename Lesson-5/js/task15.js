// Користувач поступово вводить показники температури протягом року. Знайти середню температуру.
let yearTemperature = 0

for (let month = 1; month <= 12; month++) {
   let userTemperature = parseFloat(prompt(`Введіть показник середньої температури місяця №${month} в градусах Цельсія.`))
   yearTemperature += userTemperature
}
let middleYearTemperature = yearTemperature / 12
document.write(`Середня температура цьогоріч була ${middleYearTemperature} градусів Цельсія.`)
