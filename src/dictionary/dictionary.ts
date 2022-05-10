import { ApiProperty } from '@nestjs/swagger';

export class Dictionary {
  @ApiProperty({ required: false })
  id: number;
  @ApiProperty({ required: false, title: '字典组' })
  group: string;
  @ApiProperty()
  code: string;
  @ApiProperty()
  caption: string;
  @ApiProperty()
  orderNumber: number;
  @ApiProperty()
  system: string;
}
