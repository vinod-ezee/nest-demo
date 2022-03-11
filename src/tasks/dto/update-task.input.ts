import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateTaskInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  description: string;
}
