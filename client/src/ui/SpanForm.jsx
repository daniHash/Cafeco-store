import { Link } from 'react-router-dom'

const SpanForm = ({ status }) => {
  return (
    <span className="font-titr text-[12px] text-textform">
      {status === 'register'
        ? 'You havent an account? '
        : 'You have an account? '}
      <Link to={`/${status}`} className="text-sky-700">
        {status === 'register' ? 'Register' : 'Sign in'}
      </Link>
    </span>
  )
}

export default SpanForm
