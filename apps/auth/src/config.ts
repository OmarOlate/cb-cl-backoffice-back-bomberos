import { SwaggerService } from 'libs/common/utils/swagger/src';
import { AppModule } from './app/app.module';

export const APP_CONFIG: SwaggerService = {
  module: AppModule,
  project: 'auth',
  openApiOptions: {
    title: 'Auth API',
    description: 'Auth API definition.',
  },
};
