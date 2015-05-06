// See https://github.com/meteor-useraccounts/core/blob/master/Guide.md

AccountsTemplates.configure({

  // Behaviour
  confirmPassword: false,
  enablePasswordChange: true,
  forbidClientAccountCreation: false,
  overrideLoginErrors: true,
  sendVerificationEmail: true,
  lowercaseUsername: false,

  // Appearance
  showAddRemoveServices: true,
  showForgotPasswordLink: true,
  showLabels: true,
  showPlaceholders: true,
  showResendVerificationEmailLink: false,

  // Client-side Validation
  continuousValidation: false,
  negativeFeedback: false,
  negativeValidation: true,
  positiveValidation: false,
  positiveFeedback: true,
  showValidating: true,

  // Privacy Policy and Terms of Use
  privacyUrl: Config.privacyUrl || null,
  termsUrl: Config.termsUrl || null,

  // Redirects
  homeRoutePath: Config.dashboardRoute || null,

  // Hooks
  onLogoutHook: function() {
    return console.log('logout');
  },
  
  onSubmitHook: function() {
    return console.log('submitting form');
  }
});

AccountsTemplates.configureRoute('signIn');

AccountsTemplates.configureRoute('signUp');

AccountsTemplates.configureRoute('forgotPwd');