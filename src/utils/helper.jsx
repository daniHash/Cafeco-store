import { Notyf } from 'notyf'
import Swal from 'sweetalert2'

const notyf = new Notyf({
  duration: 3000,
  position: { x: 'center', y: 'bottom' },
  dismissible: true,
  ripple: true,
})
export function formatCurrency(value) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}
export const notify = (type, message) => {
  type === 'error' ? notyf.error(message) : notyf.success(message)
}
export const swal = (icon, title, text) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    confirmButtonText: 'OK',
    // color: "#8d6e63",
    background: '#f4e8d8',
    color: '#321e18',
  })
}

export const features = [
  {
    icon: '☕',
    titr: 'Fresh ingredients',
    description:
      'Brewed with the freshest ingredients for a rich and natural taste.',
  },
  {
    icon: '🧑‍💻',
    titr: 'Easy ordering',
    description:
      'Easy and very flexible ordering with just a few simple clicks.',
  },
  {
    icon: '💲',
    titr: 'Affordable price',
    description: 'Enjoy premium coffee without breaking the bank.',
  },
  {
    icon: '🚛',
    titr: 'Fast shipping ',
    description:
      'Get your order delivered lightning-fast, right to your doorstep!',
  },
  {
    icon: '💳',
    titr: 'Easy payment',
    description: 'Pay easily and securely with flexible options!',
  },
  {
    icon: '☁️',
    titr: 'Responsible',
    description: 'Committed to doing the right thing, always.',
  },
]
export const secondStep = [
  {
    id: 'phone',
    label: 'Phone',
    type: 'tel',
    name: 'number',
    placeholder: 'Phone...',
    pattern: '.{11,18}',
    title: 'Please input real phone',
    regexErr:
      'Please enter a valid phone number (8-15 digits, optional + for country code).',
  },
  {
    id: 'Email',
    label: 'Email',
    type: 'email',
    name: 'email',
    placeholder: 'example@gmail.com',
    pattern: '.{5,}',
    title: 'Please input real email',
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    regexErr: 'Please enter a valid email.',
  },
  {
    id: 'pass',
    label: 'Password',
    type: 'password',
    name: 'password',
    placeholder: 'example123456',
    pattern: '.{6,}',
    title: 'Please input 6 digits at least',
    regex: /^(?=.*[A-Za-z])[A-Za-z0-9]{6,9}$/,
    regexErr:
      'Password must be 6-9 characters and include at least one letter.',
  },
  {
    id: 'confrim',
    label: 'Confrim Password',
    type: 'password',
    name: 'confrimpassword',
    pattern: '.{6,}',
    title: 'Please input 6 digits at least',
    placeholder: 'Re-enter password',
    regex: /^(?=.*[A-Za-z])[A-Za-z0-9]{6,9}$/,
  },
]
export const firstStep = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    name: 'firstname',
    placeholder: 'Name...',
    pattern: '.{2,}',
    title: 'Please input real name',
  },
  {
    id: 'lastname',
    label: 'Lastname',
    type: 'text',
    name: 'familyname',
    placeholder: 'Name...',
    pattern: '.{2,}',
    title: 'Please input real name',
  },
]
export const inputs = [
  {
    id: 'phone',
    label: 'Phone',
    type: 'tel',
    name: 'number',
    placeholder: 'Phone...',
    pattern: '^[0-9]{8,15}$',
    title: 'Please input real phone',
    regex: /^(?:\+)?(?!0+$)(?!([0-9])\1+$)[0-9]{8,15}$/,
    regexErr:
      'Please enter a valid phone number (8-15 digits, optional + for country code).',
  },
  {
    id: 'pass',
    label: 'Password',
    type: 'password',
    name: 'password',
    placeholder: 'example123456',
    pattern: '.{6,}',
    title: 'Please input 6 digits at least',
    regex: /^(?=.*[A-Za-z])[A-Za-z0-9]{6,9}$/,
    regexErr:
      'Password must be 6-9 characters and include at least one letter.',
  },
]
export const frontend = {
  id: 1,
  title: 'Front-End developer & Designer',
  fullname: 'Danial HHK',
  description:
    'Dani entered the world of web development at age 12. Passionate and growing in skills.',
  skills: ['TailwindCss', 'Bootstrap', 'Git & Github', 'React js', 'Figma'],
  githubname: 'daniHash',
}
export const backend = {
  id: 2,
  title: 'Backend developer',
  fullname: 'Arya Veysi',
  description:
    'Arya entered programming at age 11.Strong in backend logic and server management.',
  skills: ['Nodejs', 'Expressjs', 'MongoDB', 'Git & Github'],
  githubname: 'Arya-veysi',
}
export const categories = {
  drinks: ['Hot', 'Cold', 'Milks'],
  cakesweety: ['Wet', 'Dry'],
  biscuitscookies: [],
  coffees: [],
  icecreams: [],
}
