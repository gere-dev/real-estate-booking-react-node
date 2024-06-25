import { AuthForm, AuthMessageLink, Title, AuthContainer } from '@/components';
import { AuthForm as AuthFormEnum, authMessageLinkProps } from '@/enums';
import { AuthForm as AuthFormType } from '@/types';

export const Login = () => {
  const handleSubmit = (data: AuthFormType) => {
    console.log(data);
  };
  return (
    <AuthContainer>
      <Title title={AuthFormEnum.LOGIN} />
      <AuthForm formType={AuthFormEnum.LOGIN} buttonText={AuthFormEnum.LOGIN} onSubmit={handleSubmit} />
      <AuthMessageLink
        to={authMessageLinkProps.REGISTER_LINK}
        linkText={authMessageLinkProps.REGISTER_LINK}
        message={authMessageLinkProps.REGISTER_MESSAGE}
      />
    </AuthContainer>
  );
};
