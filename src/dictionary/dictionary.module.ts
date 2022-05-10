import { Module } from '@nestjs/common';
import { DictionaryRest } from './dictionary.rest';
import { DictionaryManager } from './dictionary.manager';

/**
 * 字典模块
 */
@Module({
  imports: [],
  controllers: [DictionaryRest],
  providers: [DictionaryManager],
})
export class DictionaryModule {}
