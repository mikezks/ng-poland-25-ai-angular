import { Module } from '@nestjs/common';
import { OpenAiModule } from './openai/openai.module';
import { NaviationAiModule } from './nav-config/nav.module';

@Module({
  imports: [
    NaviationAiModule,
    OpenAiModule,
  ],
})
export class AppModule {}
