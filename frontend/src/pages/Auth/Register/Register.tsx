import { AuthForm, AuthMessageLink, Title, AuthContainer } from '@/components';
import { AuthForm as AuthFormType } from '@/types';
import { AuthForm as AuthFormEnum, authMessageLinkProps } from '@/enums';
export const Register = () => {
  const handleSubmit = (data: AuthFormType) => {
    console.log(data);
  };
  return (
    <AuthContainer>
      <Title title={AuthFormEnum.REGISTER} />
      <AuthForm formType={AuthFormEnum.REGISTER} buttonText={AuthFormEnum.REGISTER} onSubmit={handleSubmit} />
      <AuthMessageLink
        to={authMessageLinkProps.LOGIN_LINK}
        linkText={authMessageLinkProps.LOGIN_TITLE}
        message={authMessageLinkProps.LOGIN_MESSAGE}
      />
    </AuthContainer>
  );
};
