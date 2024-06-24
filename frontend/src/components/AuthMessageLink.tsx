import { Link } from 'react-router-dom';

interface Props {
  message: string;
  to: string;
  linkText: string;
}

export const AuthMessageLink = ({ message, linkText, to }: Props) => {
  return (
    <small className='text-center'>
      {message}{' '}
      <Link className='font-semibold capitalize border-b-2 pt-2 border-primary underline-red-200' to={'/' + to}>
        {linkText}
      </Link>
    </small>
  );
};
