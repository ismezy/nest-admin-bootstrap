import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Dictionary } from './Dictionary';
import { DictionaryManager } from './dictionary.manager';
import { LocalAuthGuard } from '../auth/local.guard';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('数据字典管理')
@Controller('/dictionary')
@UseGuards(AuthGuard('jwt'))
export class DictionaryRest {
  constructor(private directionManager: DictionaryManager) {}
  @Post()
  async add(@Body() model: Dictionary): Promise<Dictionary> {
    return await this.directionManager.add(model);
  }

  @Get()
  async all(): Promise<Dictionary[]> {
    return await this.directionManager.findAll();
  }
}
