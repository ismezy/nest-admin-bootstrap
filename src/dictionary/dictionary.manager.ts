import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Dictionary } from './dictionary';

@Injectable()
export class DictionaryManager {
  constructor(private prisma: PrismaService) {}

  async add(model: Dictionary): Promise<Dictionary> {
    return await this.prisma.dictionary.create({
      data: model,
    });
  }

  async findAll() {
    return await this.prisma.dictionary.findMany();
  }
}
