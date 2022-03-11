import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { TasksModule } from './tasks/tasks.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // autoSchemaFile: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
      },
    }),
    // TasksModule,
    StudentModule,
  ],
})
export class AppModule {}
