import weatherIcons from '../assets/weatherIcons.json';

export default function findIconByCode(code) {
  const prefix = 'wi wi-';
  let { icon } = weatherIcons[code];

  if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
    icon = `day-${icon}`;
  }

  return `${prefix}${icon}`;
}
