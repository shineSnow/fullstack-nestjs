import { AuthLoggingInterceptor } from './auth-logging.interceptor';

describe('AuthLoggingInterceptor', () => {
  it('should be defined', () => {
    expect(new AuthLoggingInterceptor()).toBeDefined();
  });
});
